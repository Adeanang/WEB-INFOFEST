
import Button from "../components/ui/Button.tsx";
import { CompetitionCard } from '../components/ui/CompetitionCard.tsx';

export default function Copetition() {

    const cardCompetition = [
        {
            name: "Poster Design Competition",
            description: "Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png"

        },
        {
            name: "UI/UX Design Competition",
            description: "UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png"

        },
        {
            name: "Web Design Competition",
            description: "Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.",
            imageUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png"

        },
    ];

    return (
        <div className='min-h-screen'>
            <section id='hero' className="py-20">
                <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 justify items-center w-full'>
                    
                    <div className='w-full md:w-2/3 flex flex-col gap-6'>
                        <h1 className='text-5xl text-[#802D43] font-semibold'>IT Competition</h1>
                        <h3 className='text-3xl text-[#802D43] font-semibold'>"From Creation to Innovation"</h3>
                        <p className='text-sm md:text-base lg:text-[1.35rem]'>
                            Kompetisi dalam INVOFEST ini mengusung tema <b>“From Creation to Innovation”</b> , Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
                        </p>
                        <div className='flex gap-3 mt-4'>
                            <Button label="Daftar IT Competition" variant="primary" />
                            <Button label="Hubungi Panitia" variant="secondary"/>
                        </div>
                    </div>
                   
                    <div className='w-full md:w-1/3 flex justify-center'>
                        <img
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
                            alt="Maskot Invofest"
                            className="w-2/3 md:w-full max-w-sm"
                        />
                    </div>
                </div>
            </section>

            <section id='card-kompetisi'>
                <div className='max-w-7xl mx-auto px-6 py-10 '>
                    <div className='flex flex-col justify-center items-center gap-6 max-w-5xl mx-auto px-6'>
                        <h3 className='text-5xl font-semibold text-[#802D43]'>DAFTAR KOMPETISI</h3>
                        <p className='text-xl'>Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.</p>
                    </div>
                    <div className='py-10 grid grid-cols-1 md:grid-cols-3 gap-5 items-start'>
                        {cardCompetition.map((item, index) => (
                            <CompetitionCard
                                key={index}
                                name={item.name}
                                description={item.description}
                                imageUrl={item.imageUrl}>  
                                <Button
                                    label='Info Selengkapnya'
                                    variant='primary'
                                    type='button'
                                />
                            </CompetitionCard>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}