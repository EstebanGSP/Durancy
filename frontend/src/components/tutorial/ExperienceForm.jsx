import React, { useState } from "react";
import axios from "axios";

const ExperienceForm = ({ tutorialId }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!text || rating === 0) return;

    try {
      await axios.post("https://api.durancy.fr/reviews", {
        tutorial_id: tutorialId,
        content: text,
        rating: rating,
      });

      setSubmitted(true);
      setText("");
      setRating(0);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'avis :", error);
    }
  };

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Raconte ton expérience</h2>

      {submitted ? (
        <div className="text-green-600">Merci pour ton retour ! ✅</div>
      ) : (
        <>
          <div className="mb-2 text-sm text-gray-700 flex items-center gap-2">
            <label htmlFor="rating">Note le tutoriel :</label>
            <div className="flex text-yellow-500 text-xl cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => setRating(star)}>
                  {star <= rating ? "★" : "☆"}
                </span>
              ))}
            </div>
          </div>

          <textarea
            className="w-full h-32 border rounded p-3 mb-4"
            placeholder="Partage ton avis ici..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Envoyer
          </button>
        </>
      )}
    </section>
  );
};

export default ExperienceForm;
