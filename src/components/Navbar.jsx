import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll"; // Importam Link din react-scroll

const navItems = [
    { name: "Home", target: "hero" },    // Atentie: fara "#", doar ID-ul
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between px-4 mx-auto">
                {/* Logo - Folosim tot react-scroll pentru a merge sus smooth */}
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-xl font-bold text-primary flex items-center cursor-pointer"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Denis Dumitriu </span> Portfolio
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <Link
                            key={key}
                            to={item.target}
                            spy={true}       // Urmareste scroll-ul
                            smooth={true}    // Scroll animat
                            offset={-70}     // Compenseaza inaltimea navbar-ului
                            duration={500}   // Durata animatiei (ms)
                            activeClass="text-primary font-bold" // Clasa cand sectiunea e activa
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50 focus:outline-none"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl text-center">
                        {navItems.map((item, key) => (
                            <Link
                                key={key}
                                to={item.target}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="text-primary font-bold"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
                                onClick={() => setIsMenuOpen(false)} // Inchide meniul dupa click
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};