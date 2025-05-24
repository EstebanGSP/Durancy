import React from "react";

const RepairForm = () => {
  return (
    <div className=" max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white p-6 rounded-xl shadow-md border border-purple-300">
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Nom & Prénom *"
            className="w-full border border-purple-400 rounded-md p-3 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email *"
            className="w-full border border-purple-400 rounded-md p-3 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Numéro de téléphone (optionnel)"
            className="w-full border border-purple-400 rounded-md p-3 focus:outline-none"
          />
          <textarea
            placeholder="Déscription du produit"
            rows="3"
            className="w-full border border-purple-400 rounded-md p-3 focus:outline-none resize-none"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="w-full border border-purple-400 rounded-md p-3 focus:outline-none">
              <option>Type d’appareil</option>
            </select>
            <select className="w-full border border-purple-400 rounded-md p-3 focus:outline-none">
              <option>Modèle</option>
            </select>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" id="accept" />
            <label htmlFor="accept" className="text-sm text-gray-700">
              J’accepte que mes informations personnelles soient utilisées par Durancy ...
            </label>
          </div>
          <div className="text-right">
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-2 rounded-md transition">
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairForm;
