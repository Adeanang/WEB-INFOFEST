import { Home, Mic, Users, Trophy, Laptop, CircleUser } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
    const menuItems = [
        { label: "Beranda", href: "/", icon: <Home size={18} /> },
        { label: "Competition", href: "/competition", icon: <Trophy size={18} /> },
        { label: "Seminar", href: "/seminar", icon: <Users size={18} /> },
        { label: "Workshop", href: "/workshop", icon: <Laptop size={18} /> },
        { label: "Talkshow", href: "/Talkshow", icon: <Mic size={18} /> },
    ];
    
    // Warna Marun yang lebih 'deep' untuk aksen aktif
    const activeStyle = "text-red-900 border-b-2 border-red-900"; 
    const defaultStyle = "text-slate-600 hover:text-red-800 border-b-2 border-transparent";

    return (
        // Menambahkan sticky top-0 dan z-50 agar tetap diam saat di-scroll
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm px-6 py-2 border-b border-gray-100">
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
                <div className="logo">
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
                        alt="logo"
                        className="h-14"
                    />
                </div>
                
                <nav className="nav flex gap-1">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.href}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${isActive ? activeStyle : defaultStyle}`
                            }>
                            {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                            <span>{item.label}</span>
                        </NavLink>
                    ))}

                    <NavLink
                        to="/Login"
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${isActive ? activeStyle : defaultStyle}`
                        }>
                        <span className="w-5 h-5">
                            <CircleUser size={18}/>
                        </span>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;