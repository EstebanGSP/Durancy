import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RecentTutorials() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await axios.get("https://api.durancy.fr/tutorials");
        setTutorials(response.data);
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
          {tutorials.slice(0, 4).map((tutorial) => (
            <a
              key={tutorial.id}
              href={tutorial.video_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow rounded-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <img
                  src="/images/youtubered.png"
                  alt="Youtube preview"
                  className="h-12 w-16"
                />
              </div>
              <div className="p-4 text-sm font-medium text-black">
                {tutorial.title}
              </div>
            </a>
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
