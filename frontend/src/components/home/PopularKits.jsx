import { FaStar } from "react-icons/fa";

const PopularKits = () => {
  const kits = [
    { id: 1, title: "Titre de l’article/kit", description: "Description de l’article Lorem ipsum dolor sit ametsectetur......", price: "49,99 €", image: "/images/kit1.png" },
    { id: 2, title: "Titre de l’article/kit", description: "Description de l’article Lorem ipsum dolor sit ametsectetur......", price: "19,90 €", image: "/images/kit2.png" },
    { id: 3, title: "Titre de l’article/kit", description: "Description de l’article Lorem ipsum dolor sit ametsectetur......", price: "25,99 €", image: "/images/kit3.png" },
    { id: 4, title: "Titre de l’article/kit", description: "Description de l’article Lorem ipsum dolor sit ametsectetur......", price: "29,99 €", image: "/images/kit4.png" },
    { id: 5, title: "Titre de l’article/kit", description: "Description de l’article Lorem ipsum dolor sit ametsectetur......", price: "19,90 €", image: "/images/kit5.png" },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 mt-32">Kits populaires</h2>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {kits.map((kit) => (
            <a
              key={kit.id}
              href="#"
              className="bg-white rounded-xl shadow-2xl hover:shadow-[0px_0px_25px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden flex flex-col"
            >
              <img src={kit.image} alt={kit.title} className="h-40 w-full object-contain p-4" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2">{kit.title}</h3>
                <p className="text-sm text-gray-600 flex-grow">{kit.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-1 text-purple-500">
                    {Array(5).fill().map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p className="font-bold">{kit.price}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bouton en bas */}
        <div className="flex justify-end mt-10">
          <button className="bg-[#9B59B6] hover:bg-purple-700 text-white font-light py-3 px-10 rounded-full transition-all duration-300">
            Voir tous les articles
          </button>
        </div>
      </div>

      {/* Séparation et éclairs */}
      <div 
        className="w-full py-20 mt-10"
        style={{
          backgroundImage: "url('/images/minieclairs.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {/* ici rien à l'intérieur → juste l'image d'arrière-plan */}
      </div>
    </section>
  );
};

export default PopularKits;
