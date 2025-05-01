import React, { useState } from "react";

const ExperienceForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Raconte ton expérience</h2>

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
        placeholder="Texte ici"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Envoyer
      </button>
    </section>
  );
};

export default ExperienceForm;
