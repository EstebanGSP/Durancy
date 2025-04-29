export default function Commitment() {
  const cards = [
    {
      title: "Mission",
      image: "/images/mission.png",
      text: `Chez Durancy, nous rendons la réparation accessible à tous avec nos kits DIY, nos tutoriels et notre réparateur mobile à Paris.
Notre objectif est de simplifier la réparation, la rendre éducative et durable. Nous voulons permettre à chacun de prolonger la vie de ses appareils tout en agissant pour la planète.`,
    },
    {
      title: "Vision",
      image: "/images/vision.png",
      text: `Nous imaginons un monde où la réparation est un réflexe naturel, pas une exception.
Grâce à nos outils, chaque utilisateur peut devenir autonome et choisir une consommation plus responsable.
Réparer, c’est préserver nos ressources et construire ensemble un futur plus vert.`,
    },
    {
      title: "Engagement",
      image: "/images/engagement.png",
      text: `Notre engagement repose sur trois piliers : autonomie, écologie et éducation.
Des solutions concrètes pour réparer et sensibiliser à la réduction des déchets électroniques. Avec notre vélo cargo, nous rapprochons la réparation des utilisateurs pour en faire un acte simple et engagé.`,
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 px-2">Notre engagement</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl rounded-none overflow-hidden flex flex-col"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-100 object-cover"
              />
              <div className="p-6 text-sm text-gray-800 leading-relaxed">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p style={{ whiteSpace: "pre-line" }}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bande d'éclairs sous les cartes */}
      <div
        className="w-full py-36 -mt-8"
        style={{
          backgroundImage: "url('/images/minieclairs.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
}
