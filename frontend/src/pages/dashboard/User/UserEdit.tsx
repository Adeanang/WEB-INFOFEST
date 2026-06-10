import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function UserEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        foto: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/users/${id}`
                );

                const result = await response.json();

                if (response.ok) {
                    setFormData({
                        name: result.data.name,
                        email: result.data.email,
                        foto: result.data.foto || ""
                    });
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/users/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            if (response.ok) {
                navigate("/dashboard/user");
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return <div className="p-6">Loading...</div>;
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
                <Link to="/dashboard/user">
                    ← Kembali
                </Link>

                <h1 className="text-2xl font-bold">
                    Edit User
                </h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow flex flex-col gap-4"
            >
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-3 rounded"
                />

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-3 rounded"
                />

                <input
                    type="text"
                    name="foto"
                    value={formData.foto}
                    onChange={handleChange}
                    className="border p-3 rounded"
                />

                <button
                    type="submit"
                    className="bg-yellow-500 text-white p-3 rounded"
                >
                    Update
                </button>
            </form>
        </div>
    );
}