import React, { useState } from "react";

const CartSummary = () => {
  const [shipping, setShipping] = useState("free");

  return (
    <div className="border-2 border-purple-300 rounded-2xl p-6 space-y-6">
      <h2 className="text-xl font-bold text-purple-700">Total du panier</h2>

      {/* Sous-total */}
      <div className="flex justify-between border-b pb-2">
        <span className="text-sm text-gray-700">Sous-total</span>
        <span className="text-sm font-semibold">€80</span>
      </div>

      {/* Livraison */}
      <div>
        <h3 className="text-sm font-medium text-gray-800 mb-2">Shipping</h3>

        <div className="space-y-2 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="shipping"
              value="free"
              checked={shipping === "free"}
              onChange={() => setShipping("free")}
            />
            Livraison gratuite
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="shipping"
              value="flat"
              checked={shipping === "flat"}
              onChange={() => setShipping("flat")}
            />
            Tarif forfaitaire: €15.00
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="shipping"
              value="pickup"
              checked={shipping === "pickup"}
              onChange={() => setShipping("pickup")}
            />
            Retrait: €40.00
          </label>
        </div>

        <p className="text-xs text-gray-400 mt-2">
          Les options de shipping seront mises à jour lors du paiement.
        </p>
      </div>

      {/* Sélecteurs */}
      <div className="space-y-4 text-sm">
        <div>
          <label className="block text-gray-700 mb-1 font-medium">COULEUR</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Sélectionner un article"
              className="flex-1 border border-gray-300 rounded px-3 py-1"
            />
            <button className="text-xl text-purple-600 font-bold">×</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Pays"
            className="border border-gray-300 rounded px-3 py-1"
          />
          <input
            type="text"
            placeholder="Code postal"
            className="border border-gray-300 rounded px-3 py-1"
          />
        </div>
        <input
          type="text"
          placeholder="ZIP"
          className="w-full border border-gray-300 rounded px-3 py-1"
        />
      </div>

      {/* Total */}
      <div className="flex justify-between border-t pt-4 text-lg font-bold">
        <span>Total</span>
        <span>€80.00</span>
      </div>

      {/* Bouton */}
      <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition">
        Passer la commande
      </button>
    </div>
  );
};

export default CartSummary;
