import React from "react";

const AccountSidebar = () => {
  const links = [
    "Mes commandes",
    "Mes informations",
    "Mes adresses",
    "Mot de passe",
    "Déconnexion",
  ];

  return (
    <aside className="bg-white shadow rounded-lg p-4 space-y-3 text-sm">
      {links.map((link, i) => (
        <button
          key={i}
          className="block w-full text-left hover:text-purple-600 transition"
        >
          {link}
        </button>
      ))}
    </aside>
  );
};

export default AccountSidebar;
