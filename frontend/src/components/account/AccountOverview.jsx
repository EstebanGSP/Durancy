import React from "react";
import AccountLastAppointment from "./AccountLastAppointment";
import AccountOrders from "./AccountOrders";
import AccountRepairs from "./AccountRepairs";

const AccountOverview = () => {
  return (
    <div className="space-y-6">

      {/* Profil utilisateur */}
      <section className="border border-black rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-6">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profil"
          className="w-28 h-28 rounded-full object-cover border"
        />
        <div className="flex-1 space-y-1">
          <h2 className="text-2xl font-bold">Dubois Francis</h2>
          <p className="text-gray-700">d.francis@gmail.com</p>
          <p className="text-gray-700">01.02.03.04.05</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-200 transition">
            Modifier le profil
          </button>
          <button className="border border-purple-400 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-100 transition">
            Changer le mot de passe
          </button>
        </div>
      </section>

      {/* Dernier rendez-vous */}
      <AccountLastAppointment />

      {/* Historique commandes */}
      <AccountOrders />

      {/* Historique réparations */}
      <AccountRepairs />

    </div>
  );
};

export default AccountOverview;
