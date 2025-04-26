import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo Durancy */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/images/logo-durancy.png" alt="Logo Durancy" className="h-10" />
          </Link>
        </div>

        {/* Menu de navigation */}
        <nav className="flex space-x-8">
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
      </div>
    </header>
  );
};

export default Header;
