import React, { useEffect, useState } from "react";
import AccountLastAppointment from "./AccountLastAppointment";
import AccountOrders from "./AccountOrders";
import AccountRepairs from "./AccountRepairs";

import { Link } from "react-router-dom";


const AccountOverview = () => {
  const [user, setUser] = useState(null);

useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) return;

  fetch("https://api.durancy.fr/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Réponse API : ", data);
      setUser(data.user); // ← 🔧 ici, on accède à l'objet user contenu dans la réponse
    })
    .catch((err) => console.error("Erreur récupération utilisateur :", err));
}, []);


  return (
    <div className="space-y-6">
      {/* Profil utilisateur */}
      <section className="border-2 border-black p-6 flex flex-col md:flex-row md:items-center gap-6">
        <img
          src="https://randomuser.me/api/portraits/lego/1.jpg"
          alt="Profil"
          className="w-28 h-28 rounded-full object-cover border"
        />
        <div className="flex-1 space-y-1">
          <h2 className="text-2xl font-bold">
            {user ? `${user.firstname} ${user.lastname}` : "Chargement..."}
          </h2>
          <p className="text-gray-700">{user?.email}</p>
          <p className="text-gray-700">01.02.03.04.05</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <Link
            to="/compte/modifier"
            className="bg-purple-100 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-200 transition inline-block text-center"
          >
            Modifier le profil
          </Link>
          <button className="border border-purple-400 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-100 transition">
            Changer le mot de passe
          </button>
        </div>
      </section>

      <AccountLastAppointment />
      <AccountOrders />
      <AccountRepairs />
    </div>
  );
};

export default AccountOverview;
