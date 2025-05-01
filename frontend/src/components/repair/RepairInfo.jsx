import React from "react";

const RepairInfo = () => {
  return (
    <div className="bg-gray-100 p-4 text-sm text-gray-800 mb-8">
      <p className="mb-1 font-semibold">
        Mise à jour automatique toutes les 2 semaines
      </p>
      <p className="mb-1">
        Prochaine actualisation des points : <span className="italic">[date]</span>
      </p>
      <p>
        Option pour programmer un rappel automatique (mail ou notification interne)
      </p>
    </div>
  );
};

export default RepairInfo;
