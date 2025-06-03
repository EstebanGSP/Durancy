import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";


const PopularKits = () => {
  const [kits, setKits] = useState([]);

  useEffect(() => {
    const fetchKits = async () => {
      try {
        const response = await axios.get("https://api.durancy.fr/kits");
        setKits(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des kits :", error);
      }
    };

    fetchKits();
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 mt-32">Kits populaires</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {kits.slice(0, 5).map((kit) => (
            <a
              key={kit.id}
              href={`/kits/${kit.id}`}
              className="bg-white rounded-xl shadow-2xl hover:shadow-[0px_0px_25px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={kit.image}
                alt={kit.name}
                className="h-40 w-full object-contain p-4"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2">{kit.name}</h3>
                <p className="text-sm text-gray-600 flex-grow">{kit.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-1 text-purple-500">
                    {Array(5).fill().map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p className="font-bold">{Number(kit.price).toFixed(2)} €</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-end mt-10">
        <Link
          to="/kits"
          className="bg-[#9B59B6] hover:bg-purple-700 text-white font-light py-3 px-7 rounded-lg transition-all duration-300"
        >
          Voir tous les articles
        </Link>
        </div>
      </div>

      <div 
        className="w-full py-20 mt-10"
        style={{
          backgroundImage: "url('/images/minieclairs.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
};

export default PopularKits;
