import logo from "../assets/logo.png";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Accueil", href: "#accueil" },
        { name: "Nos Créations", href: "#nos-creations" },
        { name: "Notre Savoir-Faire", href: "#notre-savoir-faire" },
        { name: "À Propos", href: "#a-propos" },
        { name: "Contact", href: "#contact" }
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-yellow-500/30">
            <div className="container mx-auto px-5 lg:px-10 xl:px-10">
                <div className="flex items-center justify-between py-4">
                    {/* Logo et nom du site */}
                    <div className="flex items-center space-x-4">
                        <a 
                            href="#accueil" 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("#accueil");
                            }}
                            className="block cursor-pointer"
                        >
                            <img 
                                src={logo} 
                                width={35} 
                                height={9} 
                                alt="Lamsset L'awkhiyat" 
                            />
                        </a>
                        <span className="text-yellow-400 font-bold text-xl hidden sm:block tracking-wide"
                              style={{ fontFamily: 'Playfair Display, serif' }}>
                            Lamsset L'wkhiyet
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                
                                className={`transition-all duration-300 font-medium text-lg tracking-wide relative group ${
                                    item.name === "Contact" 
                                        ? "bg-gradient-to-r from-amber-700 to-yellow-600 text-white px-6 py-3 rounded-full hover:from-amber-600 hover:to-yellow-500 hover:scale-105 hover:shadow-lg" 
                                        : "text-gray-200 hover:text-yellow-400"
                                }`}
                                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                            >
                                {item.name}
                                {item.name !== "Contact" && (
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-yellow-500/30">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className={`transition-all duration-300 font-medium py-3 text-lg tracking-wide ${
                                        item.name === "Contact" 
                                            ? "bg-gradient-to-r from-amber-700 to-yellow-600 text-white px-6 py-3 rounded-full hover:from-amber-600 hover:to-yellow-500" 
                                            : "text-gray-200 hover:text-yellow-400"
                                    }`}
                                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;