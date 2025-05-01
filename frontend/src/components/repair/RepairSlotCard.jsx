import React from "react";

const RepairSlotCard = ({ address, datetime }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 text-sm text-center space-y-2">
      <p>📍 {address}</p>
      <p>📅 {datetime}</p>
      <button className="mt-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
        Réserver un créneau
      </button>
    </div>
  );
};

export default RepairSlotCard;
