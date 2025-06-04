import React from "react";
import { ShoppingCart } from "lucide-react";
import { addToCart } from "../../api";
import { useNavigate } from "react-router-dom";

const KitCard = ({ kit }) => {
  const navigate = useNavigate();

  const handleAddToCart = async (e) => {
    e.stopPropagation(); // 🔒 empêche la redirection quand on clique sur le bouton
    try {
      await addToCart(kit.id, 1);
      alert("Ajouté au panier !");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout au panier.");
    }
  };

  const handleNavigate = () => {
    navigate(`/kits/${kit.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition"
    >
      <div className="relative mb-4">
        <div className="w-full h-40 bg-gray-200 rounded">
          {kit.image && (
            <img
              src={`${process.env.REACT_APP_API_URL}/${kit.image}`}
              alt={kit.name}
              className="w-full h-40 object-contain rounded"
            />
          )}
        </div>
        <button
          onClick={handleAddToCart}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
      <h3 className="font-bold text-sm mb-1">{kit.name}</h3>
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{kit.description}</p>
      <div className="flex justify-between items-center text-sm font-semibold">
        <div className="text-yellow-500">★★★★★</div>
        <div>{Number(kit.price).toFixed(2)} €</div>
      </div>
    </div>
  );
};

export default KitCard;
