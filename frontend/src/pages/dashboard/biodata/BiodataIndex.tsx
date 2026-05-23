export default function Biodata() {
    return (
        <div className="max-w-5xl mx-auto py-10 px-6 font-sans">
            
            {/* HEADER */}
            <div className="mb-10 border-b border-gray-200 pb-6">
                <p className="text-sm text-red-700 font-semibold tracking-widest uppercase">
                    Biodata
                </p>

                <h1 className="text-4xl font-bold text-gray-800 mt-2">
                    Ade Anang Kurniawan
                </h1>

                <p className="text-gray-500 mt-2 text-sm">
                    Web Developer • Creative Technologist • AI Enthusiast
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* SIDEBAR */}
                <div className="space-y-6">

                    {/* FOTO */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="aspect-square">
                            <img
                                src="/1.jpeg"
                                alt="Ade Anang Kurniawan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* INFO */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-sm font-bold text-red-700 uppercase mb-4">
                            Informasi
                        </h3>

                        <div className="space-y-3 text-sm text-gray-600">
                            <div>
                                <p className="font-semibold text-gray-800">
                                    Domisili
                                </p>
                                <p>Tegal, Jawa Tengah</p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800">
                                    Pendidikan
                                </p>
                                <p>D4 Teknik Informatika</p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800">
                                    Aktivitas
                                </p>
                                <p>Mahasiswa & Pengajar</p>
                            </div>
                        </div>
                    </div>

                    {/* TECH STACK */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="text-sm font-bold text-red-700 uppercase mb-4">
                            Tech Stack
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {[
                                "React",
                                "Node.js",
                                "Supabase",
                                "Python",
                                "Blender",
                                "Krita"
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium hover:bg-red-700 hover:text-white transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="md:col-span-2 space-y-8">

                    {/* TENTANG */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">
                            Tentang Saya
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed text-justify">
                            Halo! Saya Anang, mahasiswa semester 4 yang lagi sering
                            begadang buat ngoding web dan ngurus server kecil di rumah.
                            Selain kuliah, saya juga bantu mengajar di sekolah non-formal.
                            Saya suka eksplor otomasi sistem dan AI buat bantu pekerjaan
                            jadi lebih efisien. Kalau lagi jenuh sama coding, biasanya saya
                            pindah ke Blender buat bikin karakter 3D atau gambar digital
                            pakai Krita.
                        </p>
                    </div>

                    {/* PROYEK */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-5">
                            Proyek
                        </h2>

                        <div className="space-y-4">

                            {[
                                {
                                    title: "Syafitri Catering",
                                    desc: "Website e-commerce catering dengan sistem pemesanan online."
                                },
                                {
                                    title: "AbsensiKu",
                                    desc: "Sistem absensi berbasis kartu NFC untuk sekolah."
                                },
                                {
                                    title: "Tabungan Siswa AI",
                                    desc: "Digitalisasi buku tabungan fisik menggunakan AI Gemini."
                                }
                            ].map((project, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-lg p-4 hover:border-red-700 hover:shadow-sm transition"
                                >
                                    <h4 className="font-semibold text-gray-800">
                                        {project.title}
                                    </h4>

                                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}