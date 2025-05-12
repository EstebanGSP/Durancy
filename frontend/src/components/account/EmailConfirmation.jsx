import React from "react";

const EmailConfirmation = () => {
  // Ce username serait injecté côté serveur ou via props plus tard
  const username = "<%= username %>"; // EJS-style (à remplacer par le moteur)

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-white">
      
      {/* Logo Durancy */}
      <img
        src="/images/logodurancy.png"
        alt="Durancy Logo"
        className="w-14 h-14 mb-16"
      />

      {/* Icône Email */}
      <img
        src="/images/email.png"
        alt="Email envoyé"
        className="w-36 h-24 mb-10"
      />

      {/* Texte de confirmation */}
      <h1 className="text-xl font-semibold mb-4">Confirmez votre E-Mail</h1>
      <h1 className="text-xl font-semibold mb-4">
        Hi <span className="font-bold text-purple-700">{username}</span> !
      </h1>
      <p className="text-gray-700 mb-4">
        Merci de vous être inscrit(e) chez Durancy !
      </p>
      <p className="text-gray-700 mb-4">
        Veuillez confirmer votre adresse e-mail
      </p>
      <p className="text-gray-700 mb-6">en cliquant sur le lien ci-dessous.</p>

      <a
        href="/compte"
        className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
      >
        Accéder à mon compte
      </a>
    </div>
  );
};

export default EmailConfirmation;
