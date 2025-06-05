import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Fonction pour récupérer la miniature YouTube
const getYoutubeThumbnail = (url) => {
  const match = url.match(/(?:v=|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
};

const SimilarTutorials = ({ currentId }) => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const res = await axios.get("https://api.durancy.fr/tutorials");
        const filtered = res.data.filter(t => t.id !== currentId);
        setTutorials(filtered.slice(0, 3));
      } catch (error) {
        console.error("Erreur lors de la récupération des tutoriels :", error);
      }
    };

    fetchTutorials();
  }, [currentId]);

  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Tutoriels similaires</h2>

      {tutorials.length === 0 ? (
        <p className="text-gray-600">Aucun tutoriel à afficher.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.id}
              to={`/tutoriels/${tutorial.id}`}
              className="cursor-pointer border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
            >
              {getYoutubeThumbnail(tutorial.video_url) ? (
                <img
                  src={getYoutubeThumbnail(tutorial.video_url)}
                  alt={tutorial.title}
                  className="w-full h-32 object-cover rounded mb-2"
                />
              ) : (
                <div className="w-full h-32 bg-gray-200 rounded mb-2" />
              )}
              <h3 className="font-bold mb-1">{tutorial.title}</h3>
              <p className="text-sm text-gray-600">
                {tutorial.description?.slice(0, 80)}...
              </p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default SimilarTutorials;
