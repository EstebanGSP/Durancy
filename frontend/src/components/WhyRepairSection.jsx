const WhyRepairSection = () => {
  return (
    <section
      className="bg-[url('../public/images/bg-violet-wave.png')] bg-top bg-no-repeat bg-cover pt-36 pb-32 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-24">

        {/* Bloc 1 */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Titre + Texte */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-2xl font-bold mb-4 leading-snug">
              On vous apprend à faire des économies & gagner du temps
            </h2>
            <p className="text-white/90 leading-relaxed">
              Chaque réparation réalisée est un geste concret en faveur de notre planète ! En choisissant Durancy, vous prolongez intelligemment la durée de vie de vos appareils tout en réduisant votre impact écologique. Opter pour la réparation, c’est économiser de l’argent, lutter contre l’obsolescence programmée et adopter une démarche véritablement durable.
            </p>
          </div>
          {/* Image */}
          <div className="order-1 md:order-2">
            <img src="/images/repair-phone.png" alt="Téléphone démonté" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>

          {/* Bloc 2 */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
            {/* Titre + Texte */}
            <div className="order-2">
              <h2 className="text-2xl md:text-2xl font-bold mb-4 leading-snug">
                Nos kits de réparation & tutoriels vous accompagnent
              </h2>
              <p className="text-white/90 leading-relaxed">
                Chaque appareil usagé renferme des ressources précieuses qu’il est essentiel de valoriser. Recycler ses anciens équipements, c’est contribuer à une économie circulaire efficace, réduire la quantité de déchets électroniques et préserver les ressources naturelles.
              </p>
            </div>
            {/* Image */}
            <div className="order-1">
              <img src="/images/kits.png" alt="Kit de réparation" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>

      </div>
    </section>
  );
};

export default WhyRepairSection;
