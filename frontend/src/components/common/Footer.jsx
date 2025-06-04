const Footer = () => {
  return (
    <footer className="relative  text-black text-sm px-6 mt-20 pt-28">
      {/* ✅ Effet vague au-dessus */}
      <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none">
        <img
          src="/images/nuage.png"
          alt="wave top"
          className="w-full"
        />
      </div>


      {/* Haut : Logo + Nav */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
        <a href="/">
          <img
            src="/images/logo-durancy.png"
            alt="Durancy logo"
            className="h-10 mb-6 md:mb-0"
          />
        </a>
        <nav className="flex flex-wrap justify-center md:justify-end gap-6 font-semibold text-lg">
          <a href="#">Accueil</a>
          <a href="#">Tutoriels</a>
          <a href="#">Kits</a>
          <a href="#">Services</a>
          <a href="#">Boutique</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      {/* Ligne violette */}
      <div className="w-full mx-auto border-t border-purple-400 my-6" />

      {/* Corps : Infos + Réseaux */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
        <div className="text-center md:text-left space-y-5">
          <p>
            <strong>Adresse :</strong> 12 boulevard des Capucines 75012 Paris
          </p>
          <p>
            <strong>Mobile :</strong> 01.02.03.04.05
          </p>
          <p>
            <strong>Fixe :</strong> 09.08.07.06.05
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <p className="font-semibold">Nous suivre</p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/durancydiy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/Instagram.png"
                alt="Instagram"
                className="w-16 hover:scale-105 transition-transform"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/Youtube.png"
                alt="YouTube"
                className="w-16 hover:scale-105 transition-transform"
              />
            </a>
            <a
              href="https://www.tiktok.com/@durancy.officiel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/tiktok.png"
                alt="Tiktok"
                className="w-16 hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="text-center text-xs mt-12 pt-6 border-t border-gray-300 flex flex-col gap-2 md:flex-row md:justify-center md:space-x-4 mb-4">
        <span>© 2025 DURANCY. Tous droits réservés</span>
        <a href="#" className="hover:underline">Mention légales & CGU</a>
        <a href="#" className="hover:underline">Conditions générales de vente</a>
        <a href="#" className="hover:underline">Charte de protection des données</a>
      </div>
    </footer>
  );
};

export default Footer;
