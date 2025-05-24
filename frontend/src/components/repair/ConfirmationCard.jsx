import React from "react";

const ConfirmationCard = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border border-purple-500 rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="text-purple-600 text-4xl">📍</div>
          <div>
            <p className="font-semibold text-lg">1 Imp. de la Paix, 75005 Paris</p>
            <p className="text-sm text-gray-600">Mer 20/05/2025 à 15h</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-purple-500 rounded-md text-purple-600 hover:bg-purple-100 transition">
            Modifier
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
            Confirmez
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCard;
