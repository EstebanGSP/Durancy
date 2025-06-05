import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Extrait l'ID de la vidéo YouTube pour générer une miniature
const getYoutubeThumbnail = (url) => {
  const match = url.match(/(?:v=|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
};

export default function RecentTutorials() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await axios.get("https://api.durancy.fr/tutorials");
        const sorted = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setTutorials(sorted.slice(0, 4));
      } catch (error) {
        console.error("Erreur lors de la récupération des tutoriels :", error);
      }
    };

    fetchTutorials();
  }, []);

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-10">Tutoriels récents</h2>

        {/* Grid des cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.id}
              to={`/tutoriels/${tutorial.id}`}
              className="bg-white shadow rounded-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
            >
              {getYoutubeThumbnail(tutorial.video_url) ? (
                <img
                  src={getYoutubeThumbnail(tutorial.video_url)}
                  alt={tutorial.title}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  Vidéo non disponible
                </div>
              )}
              <div className="p-4 text-sm font-medium text-black">
                {tutorial.title}
              </div>
            </Link>
          ))}
        </div>

        {/* Bouton vers /tutoriels */}
        <div className="flex justify-end mt-10">
          <Link
            to="/tutoriels"
            className="bg-[#9B59B6] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
          >
            Voir tous les tutoriels
          </Link>
        </div>
      </div>
    </section>
  );
}
