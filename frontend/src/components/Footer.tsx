import { NavBarLink } from "./ui/NavBarLink";
import { Home, Mic, Users, Trophy, Laptop, CirclePlay } from "lucide-react";

export const Footer: React.FC = () => {
    const currentPath = "#";

    const menuItems = [
        {label: "Beranda", href:"#", icon: <Home size={18} />},
        {label: "Competition", href:"#competition", icon: <Trophy size={18} />},
        {label: "Seminar", href:"#seminar", icon: <Users size={18} />},
        {label: "Workshop", href:"#workshop", icon: <Laptop size={18} />},
        {label: "Talkshow", href:"#Talkshow", icon: <Mic size={18} />},
    ];

    const mediaItems = [
        {label: "Instagram", href: "#", icon: <CirclePlay size={18} />},
        {label: "Youtube", href: "#", icon: <CirclePlay size={18} />},
    ];

    return(
        // Background menggunakan warna marun sangat muda (red-50) 
        // dengan garis atas (border-t) marun tua
        <footer className="bg-white border-t-4 border-red-900 shadow-sm px-6 py-12 mt-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-3 w-full">
            
                    {/* Logo */}
                    <div className="flex items-start">
                        <img 
                            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" 
                            alt="logo" 
                            className="h-16 object-contain grayscale hover:grayscale-0 transition-all"
                        />
                    </div>
                    
                    {/* Menu Navigasi */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-red-900 uppercase tracking-widest text-xs border-b-2 border-red-900 pb-1 w-max">
                            Menu Navigasi
                        </h3>
                        <div className="flex flex-col gap-3">
                            {menuItems.map((item) => (                        
                                <NavBarLink
                                    key={item.label}
                                    label={item.label}
                                    href={item.href}
                                    icon={item.icon}
                                    isActive={item.href === currentPath}
                                />
                            ))}
                        </div>
                    </div>
                    
                    {/* Media sosial */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-red-900 uppercase tracking-widest text-xs border-b-2 border-red-900 pb-1 w-max">
                            Media sosial
                        </h3>
                        <div className="flex flex-col gap-3">
                            {mediaItems.map((item) => (
                                <NavBarLink
                                    key={item.label}
                                    label={item.label}
                                    href={item.href}
                                    icon={item.icon}
                                    isActive={item.href === currentPath}
                                />
                            ))}
                        </div>
                    </div>
                    
                    {/* Alamat */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-red-900 uppercase tracking-widest text-xs border-b-2 border-red-900 pb-1 w-max">
                            Alamat
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Jakarta Convention Center (JCC), <br/> Jakarta, Indonesia.
                        </p>
                    </div>

                </div>
                
                {/* Footer Bottom */}
                <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-400 px-3 flex justify-between items-center">
                    <p className="font-medium">© 2026 INVOFEST. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;