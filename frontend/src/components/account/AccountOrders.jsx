import React from "react";

const AccountOrders = () => {
  return (
    <section className="border border-black rounded-lg p-4">
      <h2 className="font-semibold text-lg mb-2">Historique des commandes</h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">Commande nr. 12345</p>
          <p className="text-sm text-gray-600">20/05/2025 à 15h</p>
        </div>
        <button className="bg-purple-600 text-white px-4 py-1 rounded-md hover:bg-purple-700">
          Voir tout
        </button>
      </div>
    </section>
  );
};

export default AccountOrders;
