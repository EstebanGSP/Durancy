const WhyChooseUs = () => {
  return (
    <section className="relative py-20 bg-white text-center px-6 overflow-hidden">
      
      {/* ⚡ Fond éclair centré & responsive */}
      <div
        className="absolute top-0 left-1/4 -translate-x-1/2 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/electric.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain", // Ajuste bien
          width: "1000px",
          height: "1000px",
        }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#9B59B6] mb-2">
          Découvrez notre moyen ludique de réparation
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-[#9B59B6] mb-6">
          Pourquoi nous choisir nous ?
        </h3>
        <p className="text-[#9B59B6] mb-12 max-w-7xl mx-auto px-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
        </p>


        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {[
            {
              img: "/images/icon1.png",
              title: "Réparez vous-même",
              desc: "Des tutos simples, illustrés et adaptés à tous les niveaux."
            },
            {
              img: "/images/icon2.png",
              title: "Évitez l’obsolescence",
              desc: "Prolongez la durée de vie de vos appareils sans prise de tête."
            },
            {
              img: "/images/icon3.png",
              title: "Faites des économies",
              desc: "Réparer coûte bien moins cher que remplacer. Et c’est durable."
            }
          ].map((card, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-8 shadow hover:shadow-md transition">
              <img src={card.img} alt={card.title} className="mx-auto mb-4 w-12 h-12" />
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
              <p className="text-sm text-[#9B59B6] mt-2">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Notre vision */}
        <div className="w-full px-6 mb-20 text-[#9B59B6] text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#9B59B6] mb-6">Notre vision</h3>
          <p className="text-[#9B59B6] mb-12 max-w-7xl mx-auto px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-[#9B59B6] mb-12 max-w-7xl mx-auto px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Chiffres clés */}
        <div className="max-w-6xl mx-auto mb-20 px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#9B59B6] mb-20 text-center">Sensibilisation environnementale</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <p className="text-7xl font-bold text-purple-700 mb-4">77%</p>
            <p className="text-[#9B59B6] text-sl max-w-xs mx-auto">Des Européens préfèreraient réparer leurs appareils plutôt que d’en acheter des nouveaux en 2022</p>
          </div>
          <div className="text-center">
            <p className="text-7xl font-bold text-purple-700 mb-4">40%</p>
            <p className="text-[#9B59B6] text-sl max-w-xs mx-auto">Des Français qui n’ont jamais acquis de produits électroniques de seconde main se disent intéressés à franchir le pas, motivés d’abord par des prix bas.</p>
          </div>
        </div>
      </div>


        {/* Tutoriel */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 mb-16 text-left items-center">
          {/* Texte d'abord sur mobile */}
          <div className="order-1 md:order-2 md:w-1/2">
            <h3 className="text-2xl font-bold text-[#9B59B6] mb-6 text-center md:text-left">
              Un tutoriel pour chaque problème
            </h3>
            <p className="text-[#9B59B6] text-sm mb-4">
              Lorem ipsum dolorde sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
            <p className="text-[#9B59B6] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="order-2 md:order-1 md:w-1/2">
            <img src="/images/Checker.png" alt="Tutoriel" className="w-full rounded-lg shadow" />
          </div>
        </div>

        {/* Communauté */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 text-left items-center">
          {/* Texte d'abord sur mobile */}
          <div className="order-1 md:order-1 md:w-1/2">
            <h3 className="text-2xl font-bold text-[#9B59B6] mb-6 text-center md:text-left">
              Une communauté en expansion
            </h3>
            <p className="text-[#9B59B6] text-sm mb-4">
              Nos abonnements vous permettent de sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-[#9B59B6] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="order-2 md:order-2 md:w-1/2">
            <img src="/images/Checker.png" alt="Communauté" className="w-full rounded-lg shadow" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
