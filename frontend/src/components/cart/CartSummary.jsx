import React, { useEffect, useState } from "react";
import { getCart, validateCart } from "../../api";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shipping, setShipping] = useState("free");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        const kits = data.Kits || [];
        const itemsWithQuantity = kits.map((kit) => ({
          ...kit,
          quantity: kit.CartKit?.quantity || 1,
        }));
        setCartItems(itemsWithQuantity);
      } catch (err) {
        console.error("Erreur chargement panier :", err);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const calcSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price || 0);
      return total + price * item.quantity;
    }, 0);
  };

  const getShippingCost = () => {
    if (shipping === "flat") return 15;
    if (shipping === "pickup") return 40;
    return 0;
  };

  const total = calcSubtotal() + getShippingCost();

  const handleValidation = async () => {
    try {
      // Sauvegarde les articles avant validation
      localStorage.setItem("lastCartItems", JSON.stringify(cartItems));

      await validateCart();

      setTimeout(() => {
        navigate("/panier/confirmation");
      }, 10);
    } catch (err) {
      console.error("Erreur validation :", err);
      setMessage("Erreur lors de la validation du panier.");
    }
  };

  if (loading) return <p>Chargement du récapitulatif...</p>;

  return (
    <div className="border-2 border-purple-300 rounded-2xl p-6 space-y-6">
      <h2 className="text-xl font-bold text-purple-700">Total du panier</h2>

      <div className="flex justify-between border-b pb-2">
        <span className="text-sm text-gray-700">Sous-total</span>
        <span className="text-sm font-semibold">€{calcSubtotal().toFixed(2)}</span>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-800 mb-2">Livraison</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input type="radio" name="shipping" value="free" checked={shipping === "free"} onChange={() => setShipping("free")} />
            Livraison gratuite
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="shipping" value="flat" checked={shipping === "flat"} onChange={() => setShipping("flat")} />
            Tarif forfaitaire: €15.00
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="shipping" value="pickup" checked={shipping === "pickup"} onChange={() => setShipping("pickup")} />
            Retrait: €40.00
          </label>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Les frais de livraison seront appliqués à la commande.
        </p>
      </div>

      <div className="flex justify-between border-t pt-4 text-lg font-bold">
        <span>Total</span>
        <span>€{total.toFixed(2)}</span>
      </div>

      {message && <p className="text-sm text-center text-purple-700">{message}</p>}

      <button
        onClick={handleValidation}
        className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition"
      >
        Passer la commande
      </button>
    </div>
  );
};

export default CartSummary;
