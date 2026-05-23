import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 1. Definisikan Interface Tipe Data untuk TypeScript
interface DashboardData {
    stats: {
        totalEvent: number;
        totalPembicara: number;
        totalKategori: number;
    };
    upcomingEvents: {
        id: number;
        name: string;
        dateEvent: string;
        location: string;
        category: {
            name: string;
        };
    }[];
}

export default function DashboardIndex() {
    const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // 👇 INI SUDAH DIUBAH: Mengarah ke backend Railway
    const API_URL = "https://web-infofest-production.up.railway.app/dashboard";

    // 2. Fetch data dari Backend
    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await fetch(API_URL);
                const result = await response.json();

                if (response.ok && result.success) {
                    setDashboardData(result.data);
                } else {
                    setError(result.message || "Gagal memuat data dashboard");
                }
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
                setError("Terjadi kesalahan jaringan saat menghubungi server");
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    // 3. Fungsi Helper untuk memformat tanggal
    const formatIndonesianDate = (isoString: string) => {
        try {
            const date = new Date(isoString);
            return date.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }) + " WIB";
        } catch (e) {
            console.error("Error formatting date:", e);
            return isoString;
        }
    };

    // --- LOADING STATE ---
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                {/* Spinner Marun */}
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-800 mb-4"></div>
                <p className="text-gray-500 font-medium">Memuat dashboard...</p>
            </div>
        );
    }

    // --- ERROR STATE ---
    if (error) {
        return (
            <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm my-4">
                <p className="font-bold">Gagal Memuat Layanan</p>
                <p>{error}</p>
            </div>
        );
    }

    const statsData = dashboardData?.stats;

    // Data Statistik
    const stats = [
        { 
            title: "Total Event", 
            value: statsData?.totalEvent ?? 0, 
        },
        { 
            title: "Total Pembicara", 
            value: statsData?.totalPembicara ?? 0, 
        },
        { 
            title: "Kategori Event", 
            value: statsData?.totalKategori ?? 0, 
        }
    ];

    return (
        <div className="flex flex-col gap-6 pb-10">
            
            {/* --- HEADER --- */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500 text-sm mt-1">Ringkasan sistem manajemen event kamu.</p>
                </div>
                <Link 
                    to="/dashboard/event/create" 
                    // Tombol Marun
                    className="inline-flex items-center gap-2 bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-900 transition-colors"
                >
                    + Buat Event
                </Link>
            </div>

            {/* --- STATISTIK CARDS --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-gray-500 text-sm font-medium mb-2">{stat.title}</h3>
                        {/* Angka Marun */}
                        <p className="text-3xl font-bold text-red-800">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-base font-bold text-gray-900">Jadwal Event Terdekat</h2>
                        {/* Link Marun */}
                        <Link to="/dashboard/event" className="text-sm font-medium text-red-800 hover:text-red-900 hover:underline">
                            Lihat Semua
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-red-50/50 text-red-900 border-b border-gray-200">
                                    <th className="px-6 py-3 font-semibold">Event</th>
                                    <th className="px-6 py-3 font-semibold">Kategori</th>
                                    <th className="px-6 py-3 font-semibold">Tanggal</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {dashboardData && dashboardData.upcomingEvents.length > 0 ? (
                                    dashboardData.upcomingEvents.map((event) => (
                                        <tr key={event.id} className="hover:bg-red-50/30 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-800">{event.name}</td>
                                            <td className="px-6 py-4 text-gray-600">
                                                {/* Badge Kategori bernuansa marun muda */}
                                                <span className="bg-red-50 text-red-800 px-2 py-1 rounded text-xs font-medium border border-red-100">
                                                    {event.category?.name || "-"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                {formatIndonesianDate(event.dateEvent)}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                            Belum ada event yang dijadwalkan.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-base font-bold text-gray-900 mb-4">Aksi Cepat</h2>
                    <div className="flex flex-col gap-3">
                        <Link 
                            to="/dashboard/category/create" 
                            className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-colors group"
                        >
                            <span className="text-sm font-medium text-gray-700 group-hover:text-red-800">Tambah Kategori</span>
                            <span className="text-gray-400 group-hover:text-red-800">&rarr;</span>
                        </Link>
                        <Link 
                            to="/dashboard/pembicara/create" 
                            className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-colors group"
                        >
                            <span className="text-sm font-medium text-gray-700 group-hover:text-red-800">Tambah Pembicara</span>
                            <span className="text-gray-400 group-hover:text-red-800">&rarr;</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}