import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentReviews = ({ tutorialId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`https://api.durancy.fr/tutorials/${tutorialId}/reviews`);
        setReviews(res.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des avis :", error);
      }
    };

    fetchReviews();
  }, [tutorialId]);

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Avis récents</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[200px] flex-shrink-0 border rounded-lg p-4 shadow-sm bg-white"
            >
              <div className="w-12 h-12 bg-gray-300 rounded-full mb-2"></div>
              <h4 className="font-bold text-sm mb-1">{review.name || "Utilisateur anonyme"}</h4>
              <div className="text-yellow-500 mb-2">
                {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
              </div>
              <p className="text-sm text-gray-600">{review.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Aucun avis pour ce tutoriel.</p>
        )}
      </div>
    </section>
  );
};

export default RecentReviews;
