import React from "react";

const ContactAside = () => {
  return (
    // margin-top only mobile to separate from form
    <aside className="flex flex-col items-center text-center mt-24 md:mt-0">
      {/* Image de téléphone */}
      <img
        src="/images/Purplephone.png"
        alt="Icône téléphone"
        className="w-34 h-34 mb-12"
      />

      <h3 className="text-3xl font-bold mb-3">Besoin d’une</h3>
      <h3 className="text-3xl font-bold mb-4">assistance rapide ?</h3>

      <p className="text-lg font-semibold mb-2">
        Adresse email : support@durancy.fr
      </p>
      <p className="text-lg font-semibold">
        Numéro de téléphone : 09.08.07.06.05
      </p>
    </aside>
  );
};

export default ContactAside;
