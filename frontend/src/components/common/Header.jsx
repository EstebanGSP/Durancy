import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-transparent shadow-none" : "bg-white shadow-md"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 transition-all duration-300">
        
        {/* Logo (disparaît au scroll) */}
        {!isScrolled && (
          <div className="flex items-center">
            <Link to="/">
              <img src="/images/logo-durancy.png" alt="Logo Durancy" className="h-10" />
            </Link>
          </div>
        )}

        {/* Menu de navigation */}
        <nav
          className={`flex space-x-8 px-8 py-2 mx-auto ${
            isScrolled 
              ? "bg-white/30 backdrop-blur-md rounded-full shadow-lg"
              : ""
          } transition-all duration-300`}
        >
          <Link to="/" className="text-black font-semibold hover:text-purple-600">
            Accueil
          </Link>
          <Link to="/tutoriels" className="text-black font-semibold hover:text-purple-600">
            Tutoriels
          </Link>
          <Link to="/kits" className="text-black font-semibold hover:text-purple-600">
            Kits
          </Link>
          <Link to="/reparer" className="text-black font-semibold hover:text-purple-600">
            Réparer
          </Link>
          <Link to="/contact" className="text-black font-semibold hover:text-purple-600">
            Contact
          </Link>
          <Link to="/compte" className="text-black font-semibold hover:text-purple-600">
            Compte
          </Link>
        </nav>

        {/* Espace à droite pour équilibrer quand logo est là */}
        {!isScrolled && <div className="w-10" />}
      </div>
    </header>
  );
};

export default Header;
