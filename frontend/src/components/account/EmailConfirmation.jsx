import React from "react";

const EmailConfirmation = () => {
  return (
    <div className="text-center py-16 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Salut Esteban Gaspar 👋</h1>
      <p className="text-gray-700 mb-4">
        Merci pour ton inscription. Tu peux maintenant accéder à ton espace
        personnel, suivre tes commandes et gérer tes informations.
      </p>
      <a
        href="/compte"
        className="inline-block mt-6 bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        Accéder à mon compte
      </a>
    </div>
  );
};

export default EmailConfirmation;
