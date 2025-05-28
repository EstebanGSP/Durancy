export default function RepairService() {
  return (
    <section className="relative bg-[#9B59B6] py-32 overflow-visible">

        {/* Texte et bouton */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center lg:justify-start px-6 relative z-10">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl w-full">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-8 leading-snug">
                <span className="block">Un réparateur vient à vous,</span>
                <span className="block mt-4 ml-12 mb-10">en vélo cargo sur Paris</span>
              </h2>
              <button className="bg-white text-black hover:bg-gray-100 px-20 py-3 shadow-[0_5px_10px_rgba(0,0,0,0.5)] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-lg shadow-md text-lg font-semibold transition-all duration-300">
                Voir les quartiers desservis
              </button>
            </div>
          </div>
        </div>

      {/* Réparateur tout à droite */}
      <div className="absolute right-0 bottom-0 w-[300px] md:w-[400px] lg:w-[600px]">
        <img 
          src="/images/reparateur.png" 
          alt="Réparateur Durancy" 
          className="w-full object-contain"
        />
      </div>

    </section>
  );
}
