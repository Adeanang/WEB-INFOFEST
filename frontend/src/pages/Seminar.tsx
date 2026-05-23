import { Calendar, Clock1, MapPin, University } from "lucide-react";
import Button from "../components/ui/Button";
import { Collaps } from "../components/ui/Collaps";
import SpeakerCard from "../components/ui/SpeakerCard";

export default function Seminar() {

    const speakers = [
        {
            name: "Dery Agung Triyadi",
            role: "Aws Indonesia",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png"

        },
        {
            name: "Sowam Habibi",
            role: "Google Indonesia",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png"

        }, {
            name: "Lhuqita Fazry",
            role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png"

        },
    ];  

    return (
        <div className="min-h-screen">

            <section id="hero" className="py-20">
                
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10  items-center w-full">

                    <div className="w-full flex flex-col gap-6 md:w-2/1">
                        <h1 className="text-5xl text-[#802D43] font-semibold">IT Seminar</h1>
                        <h3 className='text-3xl text-[#802D43] font-semibold'>“Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”</h3>
                        <p>Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.Yang bertujuan mengubah paradigma dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang teknologi AI yang berpusat pada manusia.</p>
                        <div className="mt-4">
                            <Button label="Daftar sekarang" variant="primary"/>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section id="card">
                <div className="max-w-7xl mx-auto py-20">
                    <div className="py-6">
                        <h1 className="font-semibold text-3xl text-center text-[#802D43]">Temui Pembicara Khusus Kami</h1>
                    </div>

                    <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-10 p-3 w-full">
                        {speakers.map((speaker, index) =>(
                            <SpeakerCard
                            key={index}
                            name={speaker.name}
                            role={speaker.role}
                            imageUrl={speaker.imageUrl}
                            />
                        ))}
                    </div>
                </div>

            </section>

            <section id="jadwal">
                <div>
                    <div className="py-6">
                        <h1 className="font-semibold text-3xl text-center text-[#802D43]">Pelaksanaan IT Seminar</h1>
                    </div>
                    <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <Collaps
                        title="Kamis, 27 November 2025"
                        icon={Calendar}
                        />
                        <Collaps
                        title="08.00 WIB - 12.00 WIB"
                        icon={Clock1}
                        />
                        <Collaps
                        title="Kamis, 27 November 2025"
                        icon={MapPin}
                        />
                        <Collaps
                        title="Kamis, 27 November 2025"
                        icon={University}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}