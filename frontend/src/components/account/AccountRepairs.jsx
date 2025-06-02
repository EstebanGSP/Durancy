import React from "react";

const AccountRepairs = () => {
  return (
    <section className="space-y-2">
      <h2 className="font-semibold text-lg">Historique des réparations</h2>
      <div className="border-2 border-black p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p className="font-medium">Appareil Réparé</p>
          <p className="text-sm text-gray-600">20/05/2025 à 15h</p>
        </div>
        <div className="flex gap-2">
          <button className="border border-red-400 text-red-500 px-4 py-1 rounded-md hover:bg-red-50">
            Annuler
          </button>
          <button className="bg-purple-600 text-white px-4 py-1 rounded-md hover:bg-purple-700">
            Modifier
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccountRepairs;
