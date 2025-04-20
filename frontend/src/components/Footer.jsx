const Footer = () => {
    return (
      <footer className="bg-white text-black text-sm py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
  
          {/* Logo + infos */}
          <div className="space-y-4">
            <img src="/images/logo-durancy.png" alt="Durancy logo" className="h-10" />
            <div className="border-t border-purple-300 w-full"></div>
            <p><strong>Adresse :</strong> 12 boulevard des Capucines 75012 Paris</p>
            <p><strong>Mobile :</strong> 01.02.03.04.05</p>
            <p><strong>Fixe :</strong> 09.08.07.06.05</p>
          </div>
  
          {/* Menu + réseaux */}
          <div className="flex flex-col justify-between items-start md:items-end space-y-6">
            <nav className="flex gap-6 font-semibold">
              <a href="#">Accueil</a>
              <a href="#">Services</a>
              <a href="#">Boutique</a>
              <a href="#">Contact</a>
            </nav>
  
            <div className="text-right">
              <p className="font-semibold mb-2">Nous suivre</p>
              <div className="flex gap-4 justify-end">
                <img src="/images/Facebook.png" alt="Facebook" className="w-8" />
                <img src="/images/Instagram.png" alt="Instagram" className="w-8" />
                <img src="/images/Youtube.png" alt="YouTube" className="w-8" />
              </div>
            </div>
          </div>
        </div>
  
        {/* Bas de page */}
        <div className="text-center text-xs mt-12 pt-6 border-t border-gray-300 space-x-4">
          <span>© 2025 DURANCY. Tous droits réservés</span>
          <a href="#" className="hover:underline">Mention légales & CGU</a>
          <a href="#" className="hover:underline">Conditions générales de vente</a>
          <a href="#" className="hover:underline">Charte de protection des données</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  