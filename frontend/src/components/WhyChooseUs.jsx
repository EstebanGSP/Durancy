const WhyChooseUs = () => {
    return (
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-2">
          Découvrez notre moyen ludique de réparation
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Chaque appareil contient des ressources précieuses. Réparer, c’est prolonger leur vie, éviter le gaspillage et préserver la planète. On vous accompagne à chaque étape pour le faire simplement.
        </p>
  
        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 rounded-lg p-8 shadow hover:shadow-md transition">
            <img src="/images/icon1.png" alt="Icon 1" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-lg font-semibold text-gray-800">Réparez vous-même</h3>
            <p className="text-sm text-gray-600 mt-2">Des tutos simples, illustrés et adaptés à tous les niveaux.</p>
          </div>
  
          <div className="bg-gray-100 rounded-lg p-8 shadow hover:shadow-md transition">
            <img src="/images/icon2.png" alt="Icon 2" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-lg font-semibold text-gray-800">Évitez l’obsolescence</h3>
            <p className="text-sm text-gray-600 mt-2">Prolongez la durée de vie de vos appareils sans prise de tête.</p>
          </div>
  
          <div className="bg-gray-100 rounded-lg p-8 shadow hover:shadow-md transition">
            <img src="/images/icon3.png" alt="Icon 3" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-lg font-semibold text-gray-800">Faites des économies</h3>
            <p className="text-sm text-gray-600 mt-2">Réparer coûte bien moins cher que remplacer. Et c’est durable.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  