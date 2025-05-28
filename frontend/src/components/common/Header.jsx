// ✅ Header.jsx modifié avec l'icône de panier
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent shadow-none" : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {!isScrolled && (
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/images/logo-durancy.png"
                alt="Logo Durancy"
                className="h-10"
              />
            </Link>
          </div>
        )}

        <nav
          className={`flex space-x-8 px-8 py-2 mx-auto ${
            isScrolled ? "bg-white/30 backdrop-blur-md rounded-full shadow-lg" : ""
          } transition-all duration-300`}
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

        {/* Icône panier à droite */}
        <Link to="/panier" className="text-black hover:text-purple-600 relative">
          <ShoppingCart size={24} />
          {/* Badge du nombre d’articles si nécessaire */}
        </Link>
      </div>
    </header>
  );
};

export default Header;
