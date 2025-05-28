import React from "react";
import { ShoppingCart } from "lucide-react";
import { addToCart } from "../../api";

const KitCard = ({ kit }) => {
  const handleAddToCart = async () => {
    try {
      await addToCart(kit.id, 1);
      alert("Ajouté au panier !");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout au panier.");
    }
  };

  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition">
      <div className="relative mb-4">
        <div className="w-full h-40 bg-gray-200 rounded" />
        <button
          onClick={handleAddToCart}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
      <h3 className="font-bold text-sm mb-1">{kit.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{kit.description}</p>
      <div className="flex justify-between items-center text-sm font-semibold">
        <div className="text-yellow-500">★★★★★</div>
        <div>{kit.price} €</div>
      </div>
    </div>
  );
};

export default KitCard;
