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
        Chez Durancy, réparer devient simple, économique et responsable. Grâce à nos kits DIY, nos tutoriels détaillés et notre vélo cargo itinérant à Paris, nous redonnons à chacun le pouvoir de prolonger la vie de ses appareils électroniques, tout en réduisant son impact écologique.
        Pourquoi nous choisir ? Parce qu’on vous rend la réparation accessible, où que vous soyez.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {[
            {
              front: "Un vélo cargo",
              title: "Un Stand Mobile au coeur de Paris",
              desc: "Des tutos simples, illustrés et adaptés à tous les niveaux.",
              back: "Prenez en main votre réparation 🛠️"
            },
            {
              front: "Les tutoriels vidéo",
              title: "Des tutos clairs et gratuits",
              desc: "Prolongez la durée de vie de vos appareils sans prise de tête.",
              back: "Prolongez leur vie ♻️"
            },
            {
              front: "Les kits DIY Durancy",
              title: "Tout ce qu'il vous faut en un seul kit",
              desc: "Réparer coûte bien moins cher que remplacer. Et c’est durable.",
              back: "C’est bon pour votre budget 💰"
            }
          ].map((card, index) => (
            <div
              key={index}
              className="group [perspective:1000px] w-full h-64"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* Face avant */}
                  <div className="border border-[#9B59B6] absolute w-full h-full bg-white border-2 
                    rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none 
                    shadow-lg [backface-visibility:hidden] flex items-center justify-center">
                    <p className="text-xl font-bold text-[#000000] text-center px-4">{card.front}</p>
                  </div>

                  {/* Face arrière */}
                  <div className="absolute w-full h-full bg-white 
                    rounded-tr-none rounded-br-lg rounded-bl-lg rounded-tl-lg
                    shadow-lg border-2 border-purple-500 
                    [backface-visibility:hidden] [transform:rotateY(180deg)] 
                    p-6 flex items-center justify-center text-center">
                    <h3 className="text-lg text-[#000000]">{card.title}</h3>
                  </div>

              </div>
            </div>
          ))}
        </div>



        {/* Notre vision */}
        <div className="w-full px-6 mb-20 text-[#9B59B6] text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#9B59B6] mb-6">Notre vision</h3>
          <p className="text-[#9B59B6] mb-12 max-w-7xl mx-auto px-8">
          On pense que tout le monde devrait pouvoir réparer ses objets du quotidien, sans stress et sans compétences techniques.
          Pourquoi jeter quand on peut réparer facilement, à moindre coût, et faire un vrai geste pour la planète ?
          </p>
          <p className="text-[#9B59B6] mb-12 max-w-7xl mx-auto px-8">
          Notre vision, c’est celle d’un monde où la réparation devient une habitude simple, 
          comme recycler ou trier ses déchets. Grâce à nos kits DIY, nos tutos accessibles à tous et notre vélo cargo présent dans Paris, on donne à chacun les moyens d’agir concrètement contre le gaspillage.
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
            Parce que chaque appareil peut tomber en panne, et que chaque panne a sa solution, nous avons conçu des tutoriels clairs, étape par étape, accessibles à tous.
            Sur notre site et notre chaîne YouTube, vous trouverez une vidéo dédiée pour chaque type de réparation : du grille-pain au smartphone, en passant par le frigo.
            Pas besoin d’être technicien, on vous montre tout, simplement. Vous suivez, vous réparez, vous économisez.
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
            Durancy, c’est bien plus qu’une simple solution de réparation.
            C’est une communauté naissante de personnes qui partagent la même envie : réparer plutôt que jeter, apprendre plutôt que consommer, agir plutôt que subir.
            À travers nos vidéos, nos kits, et nos rendez-vous terrain à Paris, on crée du lien, on échange, on apprend les uns des autres.
            Ce n’est que le début, mais une chose est sûre : ensemble, on peut faire bouger les choses.
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
