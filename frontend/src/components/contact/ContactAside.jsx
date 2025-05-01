import React from "react";
import { Link } from "react-router-dom";

const ContactAside = () => {
  return (
    <aside className="space-y-6 text-sm">
      <div className="space-y-2">
        <p className="font-semibold">Besoin d’une réparation rapide ?</p>
        <p>Découvrez nos kits disponibles.</p>
        <Link
          to="/kits"
          className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Voir les kits
        </Link>
      </div>

      <div>
        <p>
          <strong>Adresse email :</strong> support@durancy.fr
        </p>
        <p>
          <strong>Numéro de téléphone :</strong> 09.08.07.06.05
        </p>
      </div>
    </aside>
  );
};

export default ContactAside;
