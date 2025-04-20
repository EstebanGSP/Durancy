const HeroSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Texte à gauche */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Durancy arrive pour réparer <br /> vos équipements
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Durable, éthique et au moindre coût !
          </p>

          {/* Boutons */}
          <div className="flex gap-4 flex-wrap">
            {/* Bouton Tutoriels */}
            <button className="w-44 bg-gradient-to-r from-purple-900 to-purple-400 text-white font-medium 
              py-2 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] rounded-tl-none 
              shadow-md hover:opacity-90 transition-all">
              Tutoriels
            </button>

            {/* Bouton Réparation */}
            <button className="w-44 border-[2.5px] border-black text-black font-medium 
              py-2 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] rounded-tl-none 
              hover:bg-black hover:text-white transition-all">
              Réparation
            </button>
          </div>
        </div>

        {/* Illustration à droite */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/images/hero-illustration.png"
            alt="Illustration Durancy"
            className="max-w-[480px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
