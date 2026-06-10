import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface User {
    id: number;
    name: string;
    email: string;
    foto?: string;
}

export default function UserIndex() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/users`
            );

            const result = await response.json();

            if (response.ok) {
                setUsers(result.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        const confirmDelete = window.confirm(
            "Yakin ingin menghapus user ini?"
        );

        if (!confirmDelete) return;

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/users/${id}`,
                {
                    method: "DELETE"
                }
            );

            if (response.ok) {
                fetchUsers();
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div className="p-6">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">
                    Data User
                </h1>

                <Link
                    to="/dashboard/user/create"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    + Tambah User
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">No</th>
                            <th className="p-3 text-left">Foto</th>
                            <th className="p-3 text-left">Nama</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-center">Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="text-center p-5"
                                >
                                    Tidak ada data user
                                </td>
                            </tr>
                        ) : (
                            users.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className="border-t"
                                >
                                    <td className="p-3">
                                        {index + 1}
                                    </td>

                                    <td className="p-3">
                                        {user.foto ? (
                                            <img
                                                src={user.foto}
                                                alt={user.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                        ) : (
                                            "-"
                                        )}
                                    </td>

                                    <td className="p-3">
                                        {user.name}
                                    </td>

                                    <td className="p-3">
                                        {user.email}
                                    </td>

                                    <td className="p-3">
                                        <div className="flex justify-center gap-2">
                                            <Link
                                                to={`/dashboard/user/edit/${user.id}`}
                                                className="px-3 py-1 bg-yellow-500 text-white rounded"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                onClick={() =>
                                                    handleDelete(user.id)
                                                }
                                                className="px-3 py-1 bg-red-600 text-white rounded"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}