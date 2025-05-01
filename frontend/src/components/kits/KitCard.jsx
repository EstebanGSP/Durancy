import React from "react";
import { ShoppingCart } from "lucide-react"; // facultatif, icône panier

const KitCard = () => {
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition">
      <div className="relative mb-4">
        <div className="w-full h-40 bg-gray-200 rounded"></div>
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow">
          <ShoppingCart size={18} />
        </button>
      </div>
      <h3 className="font-bold text-sm mb-1">Titre de l’article/kit</h3>
      <p className="text-sm text-gray-600 mb-2">
        Description de l'article Lorem ipsum dolor sit amet...
      </p>
      <div className="flex justify-between items-center text-sm font-semibold">
        <div className="text-yellow-500">★★★★★</div>
        <div>19,90 €</div>
      </div>
    </div>
  );
};

export default KitCard;
