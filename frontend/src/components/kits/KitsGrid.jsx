import React from "react";
import KitCard from "./KitCard";

const KitsGrid = () => {
  const dummyKits = Array(20).fill(null); // 🔁 20 cartes pour le placeholder

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {dummyKits.map((_, index) => (
        <KitCard key={index} />
      ))}
    </div>
  );
};

export default KitsGrid;
