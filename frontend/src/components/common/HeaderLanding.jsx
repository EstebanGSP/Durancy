import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between py-4 px-6">
        {/* Logo centré sur mobile, aligné à gauche sur desktop */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <a href="#">
            <img src="/images/logo-durancy.png" alt="Logo Durancy" className="h-10" />
          </a>
        </div>

        {/* Bouton Accéder au site */}
        <div className="mt-4 md:mt-0">
          <Link
            to="/home"
            className="inline-block bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition"
          >
            Voir l'avancement du site
          </Link>
        </div>
      </div>

      {/* Bande violette */}
      <div className="h-[20px] bg-violetEnd w-full"></div>
    </header>
  );
};

export default Navbar;
