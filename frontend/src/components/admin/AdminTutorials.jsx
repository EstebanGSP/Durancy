import React from "react";

const tutorials = new Array(8).fill({
  title: "Titre de la video",
  image: "/images/tutorial.jpg", // Assure-toi que ce fichier est dans /public/assets/
});

const AdminTutorials = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Tutoriels</h2>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="🔍 Recherche"
            className="w-full md:w-64 px-4 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-purple-400"
          />
          <button className="text-green-600 hover:text-green-700 flex items-center gap-1 whitespace-nowrap">
            <span className="text-xl">➕</span> Ajouter un tutoriel
          </button>
        </div>
      </div>

      {/* Grille tutoriels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tutorials.map((tuto, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img
              src={tuto.image}
              alt={tuto.title}
              className="w-full h-36 object-cover"
            />
            <div className="p-4 space-y-3">
              <h3 className="font-semibold text-sm">{tuto.title}</h3>
              <div className="flex gap-2">
                <button className="bg-purple-500 text-white text-sm px-3 py-1 rounded-md hover:bg-purple-600">
                  Modifier
                </button>
                <button className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-md hover:bg-gray-300">
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTutorials;
