import Button from "../components/ui/Button";
import SpeakerCard from "../components/ui/SpeakerCard";
import { Collaps } from "../components/ui/Collaps";
import { Calendar, Clock1, MapPin, University } from "lucide-react";

export default function Talkshow() {

    const speakers = [
        {
            name: "Moh. Ichsan Maulana",
            role: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png"

        },
        {
            name: "M. Zaim Zamzami",
            role: "Programmer, PT. Pertamina Drilling Service Indonesia",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png"

        }, 
        {
            name: "Daffa Zuhdan Muhtar",
            role: "Android Developer, PT. Astra Internasional",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png"

        },
        {
            name: "Bayu Adi Prasetiyo",
            role: "Software Engineer, KOMPAS.ID",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png"

        },
    ];

    

    return (
        <div className="min-h-screen">
            <section id="hero" className="py-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-center w-full">
                    <div className="w-full flex flex-col gap-6 md:w-2/1">
                        <h1 className="text-5xl text-[#802D43] font-semibold">IT Talkshow</h1>
                        <h3 className='text-3xl text-[#802D43] font-semibold'>“Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”</h3>
                        <p>Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai penggantinya.</p>
                        <div className="mt-4">
                            <Button label="Daftar sekarang" variant="primary" /> 
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
                            alt="logo" />
                    </div>
                </div>
            </section>

            <section id="speakers">
                <div className="max-w-7xl mx-auto py-20">
                    <div className="py-6">
                         <h2 className="font-semibold text-3xl text-center text-[#802D43]" >Temui Pembicara Khusus Kami</h2>
                    </div>
                    <div className=" py-20 grid grid-cols-1 md:grid-cols-4 gap-10 px-3 w-full">
                        {speakers.map((speaker, index) => (
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
                        title="Senin, 24 November 2025"
                        icon={Calendar}
                        />
                        <Collaps
                        title="08.00 WIB - 12.00 WIB"
                        icon={Clock1}
                        />
                        <Collaps
                        title="Aula Gedung C"
                        icon={MapPin}
                        />
                        <Collaps
                        title="Kampus 1 (mataram) Universitas Harkat Negeri"
                        icon={University}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}