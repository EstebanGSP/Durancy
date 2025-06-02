export default function RepairService() {
  return (
    <section className="relative bg-[#9B59B6] overflow-visible">

      {/* ── MOBILE ONLY ── */}
      <div className="md:hidden pt-20 pb-10 flex flex-col items-center text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-snug mb-6">
          Un réparateur vient à vous, <br /> en vélo cargo sur Paris
        </h2>
        <button className="bg-white text-black hover:bg-gray-100 px-8 sm:px-12 py-3 rounded-lg shadow-lg text-lg font-semibold transition-shadow duration-300">
          Voir les quartiers desservis
        </button>
        <div className="mt-8 w-full">
          <img
            src="/images/reparateur.png"
            alt="Réparateur Durancy"
            className="w-full object-contain"
          />
        </div>
      </div>

      {/* ── DESKTOP ONLY (md+) ── */}
      <div className="hidden md:block py-32 overflow-visible">
        {/* TEXTE + BOUTON inchangés */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center lg:justify-start px-6 relative z-10">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl w-full">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-8 leading-snug">
                <span className="block">Un réparateur vient à vous,</span>
                <span className="block mt-4 mb-10">en vélo cargo sur Paris</span>
              </h2>
              <button className="bg-white text-black hover:bg-gray-100 px-20 py-3 shadow-[0_5px_10px_rgba(0,0,0,0.5)] rounded-lg shadow-md text-lg font-semibold transition-all duration-300">
                Voir les quartiers desservis
              </button>
            </div>
          </div>
        </div>

        {/* IMAGE inchangée */}
        <div className="absolute right-0 bottom-0 w-[300px] md:w-[400px] lg:w-[600px]">
          <img
            src="/images/reparateur.png"
            alt="Réparateur Durancy"
            className="w-full object-contain"
          />
        </div>
      </div>

    </section>
  );
}
