import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartItems = () => {
  const cartItems = [
    {
      id: "1",
      title: "Libération kit (iPhone)",
      subtitle: "Taille:40L-3Pcs",
      price: 25,
      originalPrice: 35,
      qty: 3,
      image: "/images/kit1.png",
    },
    {
      id: "2",
      title: "Kit nettoyage téléphone",
      subtitle: "Taille:40L-4Pcs",
      price: 5,
      originalPrice: 15,
      qty: 4,
      image: "/images/kit2.png",
    },
    {
      id: "3",
      title: "Batterie iPhone 15",
      subtitle: "Taille:40L-4Pcs",
      price: 50,
      originalPrice: 100,
      qty: 2,
      image: "/images/kit3.png",
    },
  ];

  return (
    <div className="bg-[#9B59B6] text-white p-6 rounded-2xl space-y-6">
      <h2 className="text-2xl font-semibold">Mon panier</h2>

      {/* Sélection & supprimer */}
      <div className="flex justify-between items-center bg-[#9B59B6] p-3 rounded border-2">
        <div>
          <input type="checkbox" className="mr-2" />
          <span>Tout sélectionner</span>
        </div>
        <button className="text-sm bg-white text-purple-700 px-4 py-1 rounded font-medium">
          Supprimer
        </button>
      </div>

      {/* Liste d’articles */}
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 border-b border-white pb-4"
          >
            <input type="checkbox" className="mr-2" />

            <img
              src={item.image}
              alt={item.title}
              className="w-14 h-14 object-contain"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-purple-200">{item.subtitle}</p>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="number"
                value={item.qty}
                className="w-14 h-8 text-sm text-black text-center rounded"
              />
              <div className="text-right">
                <p className="text-sm line-through text-purple-200">
                  €{item.originalPrice?.toFixed(2)}
                </p>
                <p className="text-lg font-semibold text-white">
                  €{item.price.toFixed(2)}
                </p>
              </div>
              <button className="text-white hover:text-red-300">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton mise à jour */}
      <div className="text-center mt-6">
        <button className="bg-white text-purple-700 px-6 py-2 rounded-full text-sm font-medium">
          Le panier a été mis à jour
        </button>
      </div>
    </div>
  );
};

export default CartItems;
