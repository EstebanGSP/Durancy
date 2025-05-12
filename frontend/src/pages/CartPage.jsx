import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CartItems from "../components/cart/CartItems";
import CartSummary from "../components/cart/CartSummary";

const CartPage = () => {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">

        {/* Étapes */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-8 w-full max-w-xl mx-auto">
            <Step label="Panier" active />
            <Step label="Détails de la commande" />
            <Step label="Commande terminée" />
          </div>
          <a href="/kits" className="text-sm text-purple-600 hover:underline">
            ← Continuer vos achats
          </a>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne de gauche (2/3) */}
          <div className="md:col-span-2">
            <CartItems />
          </div>

          {/* Colonne de droite (1/3) */}
          <div>
            <CartSummary />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CartPage;

// Étape (indicateur haut)
const Step = ({ label, active }) => (
  <div className="flex flex-col items-center flex-1 text-center">
    <div
      className={`w-6 h-6 rounded-full border-2 ${
        active ? "bg-purple-600 border-purple-600" : "border-gray-300"
      }`}
    />
    <p
      className={`text-sm mt-2 ${
        active ? "text-purple-600 font-semibold" : "text-gray-400"
      }`}
    >
      {label}
    </p>
  </div>
);
