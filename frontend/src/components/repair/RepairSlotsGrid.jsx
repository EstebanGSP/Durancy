import React from "react";
import RepairSlotCard from "./RepairSlotCard";

const RepairSlotsGrid = () => {
  const slots = [
    { address: "1 rue de la Paix, 75005 Paris", datetime: "25/05/2025 de 14h à 20h" },
    { address: "1 rue de la Paix, 75005 Paris", datetime: "26/05/2025 de 10h30 à 20h" },
    { address: "1 rue de la Paix, 75005 Paris", datetime: "27/05/2025 de 17h30 à 20h" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 p-6 rounded-lg">
      {slots.map((slot, index) => (
        <RepairSlotCard
          key={index}
          address={slot.address}
          datetime={slot.datetime}
        />
      ))}
    </div>
  );
};

export default RepairSlotsGrid;
