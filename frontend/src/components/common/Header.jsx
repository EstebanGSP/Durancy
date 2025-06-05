import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled ? "" : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {!isScrolled && (
          <div className="flex items-center absolute tl-5">
            <Link to="/">
              <img
                src="/images/logo-durancy.svg"
                alt="Logo Durancy"
                className="h-10"
              />
            </Link>
          </div>
        )}

        {/* NAV Desktop (≥1024px) */}
        <nav
          className={`hidden lg:flex space-x-8 px-8 py-2 mx-auto transition-all duration-300 ${
            isScrolled ? "bg-white/30 backdrop-blur-md rounded-full shadow-lg" : ""
          }`}
        >
          <Link to="/home" className="text-black font-semibold hover:text-purple-600">
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
          <Link
            to={user?.role === "admin" ? "/admin" : user ? "/compte" : "/connexion"}
            className="text-black font-semibold hover:text-purple-600"
          >
            Compte
          </Link>
        </nav>

        {/* Icône Panier (visible seulement desktop) */}
        <Link to="/panier" className="opacity-0 lg:opacity-100 text-black hover:text-purple-600 relative ml-4">
          <ShoppingCart size={24} />
        </Link>

        {/* Bouton Menu Burger (mobile <1024px) */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleMenu} className="text-black">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant (<1024px) */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 w-full bg-white/70 backdrop-blur-md shadow-md px-6 py-4 flex flex-col gap-4 z-[9998]">
          <Link to="/home" className="text-black font-semibold hover:text-purple-600">
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
          <Link
            to={user?.role === "admin" ? "/admin" : user ? "/compte" : "/connexion"}
            className="text-black font-semibold hover:text-purple-600"
          >
            Compte
          </Link>
          <Link to="/panier" className="text-black hover:text-purple-600 flex items-center gap-2">
            <ShoppingCart size={20} />
            Panier
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
