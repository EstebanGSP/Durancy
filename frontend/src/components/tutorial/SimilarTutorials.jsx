import React from "react";

const SimilarTutorials = () => {
  const tutorials = [
    { title: "Nom du tutoriel", level: "Débutant", duration: "20 min" },
    { title: "Nom du tutoriel", level: "Intermédiaire", duration: "35 min" },
    { title: "Nom du tutoriel", level: "Avancé", duration: "45 min" },
  ];

  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Tutoriels similaires</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
            <h3 className="font-bold mb-1">{tutorial.title}</h3>
            <p className="text-sm text-gray-600">
              Niveau : {tutorial.level} <br />
              Durée : {tutorial.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarTutorials;
