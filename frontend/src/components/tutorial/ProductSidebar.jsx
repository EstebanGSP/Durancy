import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductSidebar = ({ kitId }) => {
  const [kit, setKit] = useState(null);

  useEffect(() => {
    const fetchKit = async () => {
      try {
        const res = await axios.get(`https://api.durancy.fr/kits/${kitId}`);
        setKit(res.data);
      } catch (error) {
        console.error("Erreur lors du chargement du kit :", error);
      }
    };

    if (kitId) {
      fetchKit();
    }
  }, [kitId]);

  return (
    <aside className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Produit associé</h2>

      {kit ? (
        <Link
          to={`/kits/${kit.id}`}
          className="block border rounded p-4 bg-white shadow-sm hover:shadow transition cursor-pointer"
        >
          {kit.image ? (
            <img
              src={`${process.env.REACT_APP_API_URL}/${kit.image}`}
              alt={kit.name}
              className="w-full h-32 object-cover rounded mb-2"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/default-kit.png";
              }}
            />
          ) : (
            <div className="w-full h-32 bg-gray-200 rounded mb-2" />
          )}

          <h3 className="text-sm font-bold">{kit.name}</h3>
          <p className="text-sm text-gray-600">
            {kit.description || "Description à venir."}
          </p>
          <div className="mt-2 font-semibold">
            {kit.price
              ? `${Number(kit.price).toFixed(2)} €`
              : "Prix indisponible"}
          </div>
        </Link>
      ) : (
        <div className="text-sm text-gray-500">Chargement du kit...</div>
      )}

    <div className="mt-6 space-y-2 text-sm">
      <Link
        to="/contact"
        className="block text-center w-full border p-2 rounded hover:bg-gray-200 transition"
      >
        Besoin d’aide ? Contactez notre équipe
      </Link>

      <Link
        to="/tutoriels"
        className="block text-center w-full border p-2 rounded hover:bg-gray-200 transition"
      >
        Pas le bon tuto ? Retour aux tutoriels
      </Link>
    </div>
    </aside>
  );
};

export default ProductSidebar;
