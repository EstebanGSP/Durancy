import React from "react";

const KitsFilters = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-between p-4 bg-white shadow rounded mb-8">
      <select className="border p-2 rounded">
        <option>Trier par</option>
      </select>
      <select className="border p-2 rounded">
        <option>Type d'appareil</option>
      </select>
      <select className="border p-2 rounded">
        <option>Disponibilité</option>
      </select>
      <select className="border p-2 rounded">
        <option>Difficulté</option>
      </select>
      <select className="border p-2 rounded">
        <option>Prix</option>
      </select>
      <input
        type="text"
        placeholder="Recherche"
        className="border p-2 rounded w-48"
      />
    </div>
  );
};

export default KitsFilters;
