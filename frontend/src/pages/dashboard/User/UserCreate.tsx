import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function UserCreate() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        foto: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/users`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const result = await response.json();

            if (response.ok) {
                navigate("/dashboard/user");
            } else {
                setError(result.message);
            }
        } catch (err) {
            console.error(err);
            setError("Gagal menyimpan data");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
                <Link to="/dashboard/user">
                    ← Kembali
                </Link>

                <h1 className="text-2xl font-bold">
                    Tambah User
                </h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow flex flex-col gap-4"
            >
                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded">
                        {error}
                    </div>
                )}

                <input
                    type="text"
                    name="name"
                    placeholder="Nama"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-3 rounded"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-3 rounded"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border p-3 rounded"
                />

                <input
                    type="text"
                    name="foto"
                    placeholder="URL Foto"
                    value={formData.foto}
                    onChange={handleChange}
                    className="border p-3 rounded"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-red-700 text-white p-3 rounded"
                >
                    {loading ? "Menyimpan..." : "Simpan"}
                </button>
            </form>
        </div>
    );
}