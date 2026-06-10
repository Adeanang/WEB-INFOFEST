import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { InputText } from "../../../components/ui/InputText";
import { Select } from "../../../components/ui/Select";
import { TextArea } from "../../../components/ui/TextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";

const schema = z.object({
    name: z.string().min(1, "Nama event harus diisi"),
    categoryId: z.string().min(1, "Pilih kategori event"),
    pembicaraId: z.string().min(1, "Pilih pembicara"),
    location: z.string().min(1, "Lokasi harus diisi"),
    dateEvent: z.string().min(1, "Tanggal dan waktu harus diisi"),
    description: z.string().min(1, "Deskripsi event harus diisi"),
});

type FormData = z.infer<typeof schema>;
type DropdownItem = { id: number; name: string };

export default function EventCreate() {
    const navigate = useNavigate();
    const [apiError, setApiError] = useState<string | null>(null);

    const [categories, setCategories] = useState<DropdownItem[]>([]);
    const [pembicaras, setPembicaras] = useState<DropdownItem[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [resCat, resPem] = await Promise.all([
                    fetch("http://localhost:3000/categories"),
                    fetch("http://localhost:3000/pembicara"),
                ]);

                const catData = await resCat.json();
                const pemData = await resPem.json();

                if (resCat.ok) setCategories(catData.data);
                if (resPem.ok) setPembicaras(pemData.data);
            } catch (error) {
                console.error("Gagal menarik data master:", error);
            }
        };

        fetchData();
    }, []);

    const onSubmit = async (data: FormData) => {
        setApiError(null);

        try {
            const payload = {
                name: data.name,
                categoryId: parseInt(data.categoryId, 10),
                pembicaraId: parseInt(data.pembicaraId, 10),
                location: data.location,
                dateEvent: data.dateEvent,
                description: data.description,

                // sementara untuk testing
                userId: 1,
            };

            console.log("Payload:", payload);

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/events`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const result = await response.json();

            if (response.ok) {
                navigate("/dashboard/event");
            } else {
                console.error(result);
                setApiError(result.message || "Gagal menyimpan event");
            }
        } catch (error) {
            console.error("Error saat menyimpan event:", error);
            setApiError("Terjadi kesalahan jaringan saat menyimpan data");
        }
    };

    return (
        <div className="p-6 max-w-3xl mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Link
                    to="/dashboard/event"
                    className="p-2 text-gray-500 hover:text-red-700 hover:bg-red-50 rounded-lg"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                </Link>

                <h1 className="text-2xl font-bold text-gray-800">
                    Buat Event Baru
                </h1>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                >
                    {apiError && (
                        <div className="p-4 bg-red-50 border-l-4 border-red-600 text-red-700 rounded-md text-sm">
                            {apiError}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <InputText
                            label="Nama Event"
                            nama="name"
                            register={register}
                            error={errors.name?.message}
                        />

                        <Select
                            label="Kategori Event"
                            name="categoryId"
                            register={register}
                            error={errors.categoryId?.message}
                            options={categories.map((c) => ({
                                label: c.name,
                                value: c.id,
                            }))}
                            addNewPath="/dashboard/category/create"
                            addNewLabel="➕ Buat Kategori Baru"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Select
                            label="Pembicara / Narasumber"
                            name="pembicaraId"
                            register={register}
                            error={errors.pembicaraId?.message}
                            options={pembicaras.map((p) => ({
                                label: p.name,
                                value: p.id,
                            }))}
                            placeholder="-- Pilih Pembicara --"
                            addNewPath="/dashboard/pembicara/create"
                            addNewLabel="➕ Buat Pembicara Baru"
                        />

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Tanggal & Waktu Event
                            </label>

                            <input
                                type="datetime-local"
                                {...register("dateEvent")}
                                className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-all ${
                                    errors.dateEvent
                                        ? "border-red-500 focus:ring-4 focus:ring-red-100"
                                        : "border-gray-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                                }`}
                            />

                            {errors.dateEvent && (
                                <p className="text-red-500 text-xs mt-0.5">
                                    {errors.dateEvent.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <InputText
                        label="Lokasi Event"
                        nama="location"
                        register={register}
                        error={errors.location?.message}
                    />

                    <TextArea
                        label="Deskripsi Event"
                        name="description"
                        register={register}
                        error={errors.description?.message}
                    />

                    <div className="flex justify-end mt-4">
                        <Button
                            type="submit"
                            label={
                                isSubmitting
                                    ? "Menyimpan..."
                                    : "Simpan Event"
                            }
                            disabled={isSubmitting}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}