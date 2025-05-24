import React from "react";

const AdminDashboard = () => {
  return (
    <div className="space-y-8">

      {/* Statistiques hautes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-sm rounded-xl p-4">
          <p className="text-gray-600 text-sm">Total Utilisateurs</p>
          <h2 className="text-2xl font-bold text-purple-600">30</h2>
          <p className="text-green-500 text-sm">+8.5% En hausse</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-4">
          <p className="text-gray-600 text-sm">Total Achats</p>
          <h2 className="text-2xl font-bold text-yellow-500">102</h2>
          <p className="text-green-500 text-sm">+1.3% En hausse</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-4">
          <p className="text-gray-600 text-sm">Total Ventes</p>
          <h2 className="text-2xl font-bold text-pink-600">420,90 €</h2>
          <p className="text-red-500 text-sm">-4.3% En baisse</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-4">
          <p className="text-gray-600 text-sm">Total bénéfice</p>
          <h2 className="text-2xl font-bold text-orange-500">calcul...</h2>
          <p className="text-green-500 text-sm">+1.8% En hausse</p>
        </div>
      </div>

      {/* Graphe des ventes */}
      <div className="bg-white shadow-sm rounded-xl p-6">
        <img src="images/salesadmin.png" alt="graph ventes" className="w-full rounded-lg" />
      </div>

      {/* Utilisateurs & analyse ventes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-sm rounded-xl p-6">
          <img src="images/analysesadmin.png" alt="analyse ventes" className="w-full rounded-lg" />
        </div>
      </div>

      {/* Revenu */}
      <div className="bg-white shadow-sm rounded-xl p-6">
        <img src="images/revenusadmin.png" alt="revenus mensuels" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default AdminDashboard;
