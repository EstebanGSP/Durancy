const WhyRepairSection = () => {
    return (
      <section
        className="bg-cover bg-center bg-no-repeat py-20 text-white"
        style={{ backgroundImage: "url('/images/bg-violet-wave.png')" }}
      >
        <div className="container mx-auto px-6 space-y-24">
  
          {/* Bloc 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                On vous apprend à faire des économies & gagner du temps
              </h2>
              <p className="text-white/90 leading-relaxed">
                Chaque réparation réalisée est un geste concret en faveur de notre planète !
                En choisissant Durancy, vous prolongez intelligemment la durée de vie de vos appareils
                tout en réduisant votre impact écologique.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/repair-phone.jpg"
                alt="Téléphone démonté"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
  
          {/* Bloc 2 inversé */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Nos kits de réparation & tutoriels vous accompagnent
              </h2>
              <p className="text-white/90 leading-relaxed">
                Recycler ses anciens équipements, c’est contribuer à une économie circulaire efficace,
                réduire la quantité de déchets électroniques et préserver les ressources naturelles.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/kits.jpg"
                alt="Kit de réparation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default WhyRepairSection;
  