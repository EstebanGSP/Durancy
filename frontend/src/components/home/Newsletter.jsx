export default function Newsletter() {
  return (
    <section className="w-full bg-white">
      {/* Titre au-dessus */}
      <div className="text-center md:text-left px-4 md:px-20 pt-16">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-10">
          Restez informés sur notre évolution
        </h2>
      </div>

      {/* Grille contenu principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* Colonne gauche avec image */}
        <div className="w-full h-full">
          <img
            src="/images/newsletterhomepage.png"
            alt="Newsletter"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Colonne droite avec le formulaire */}
        <div className="flex flex-col justify-center px-4 sm:px-8 lg:pl-36 py-16">
          <div className="w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="w-full border-2 border-black px-6 py-3 rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none text-sm mb-4 placeholder:font-bold placeholder:text-black text-black focus:outline-none"
            />

            <p className="text-sm mb-4">
              <span className="font-bold">Pas de SPAM !</span> Nous vous enverrons un mail uniquement
              quand des nouveaux services apparaissent pour vous accompagner dans cette démarche
              <span className="whitespace-nowrap"> éco-responsable.</span>
            </p>

            <div className="flex justify-center md:justify-end">
              <button className="bg-white border border-black px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                Je souscris
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
