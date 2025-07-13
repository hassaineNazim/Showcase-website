import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { name: "Accueil", href: "#accueil" },
        { name: "Nos Créations", href: "#nos-creations" },
        { name: "Notre Savoir-Faire", href: "#notre-savoir-faire" },
        { name: "Contact", href: "#contact" }
    ];

    // Gestion du scroll pour les effets de la navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
            isScrolled 
                ? 'bg-black/95 backdrop-blur-md border-b border-yellow-500/20 shadow-2xl shadow-black/20' 
                : 'bg-black/90 backdrop-blur-sm border-b border-yellow-500/30'
        }`}>
            {/* Texture de fond subtile */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-5 lg:px-10 xl:px-10 relative z-10">
                <div className={`flex items-center justify-between transition-all duration-500 ${
                    isScrolled ? 'py-3' : 'py-4'
                }`}>
                    {/* Logo et nom du site */}
                    <div className="flex items-center space-x-4 group">
                        <a 
                            href="#accueil" 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("#accueil");
                            }}
                            className="block cursor-pointer transition-transform duration-300 hover:scale-105"
                        >
                            <img 
                                src={logo} 
                                width={35} 
                                height={9} 
                                alt="Lamsset L'awkhiyat" 
                                className="filter drop-shadow-lg"
                            />
                        </a>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 font-bold text-xl hidden sm:block tracking-wide transition-all duration-300 group-hover:from-yellow-300 group-hover:to-amber-400"
                              style={{ fontFamily: 'Playfair Display, serif' }}>
                            Lamsset L'wkhiyet
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-12">
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
                                        ? "px-8 py-3 border-2 border-yellow-400/60 text-yellow-400 rounded-full hover:bg-yellow-400/10 hover:border-yellow-400 hover:text-yellow-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20" 
                                        : "text-gray-200 hover:text-yellow-400"
                                }`}
                                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                            >
                                {item.name}
                                {item.name !== "Contact" && (
                                    <>
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300 group-hover:w-full delay-75"></span>
                                    </>
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-gray-200 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                    >
                        <svg
                            className="w-7 h-7"
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
                    <div className="lg:hidden py-6 border-t border-yellow-500/20 bg-black/95 backdrop-blur-md">
                        <nav className="flex flex-col space-y-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className={`transition-all duration-300 font-medium py-3 text-lg tracking-wide relative group ${
                                        item.name === "Contact" 
                                            ? "px-8 py-4 border-2 border-yellow-400/60 text-yellow-400 rounded-full hover:bg-yellow-400/10 hover:border-yellow-400 hover:text-yellow-300 text-center" 
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
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;