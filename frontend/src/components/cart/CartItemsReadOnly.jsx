import React, { useEffect, useState } from "react";
import { getCart } from "../../api";

const CartItemsReadOnly = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        console.log("DEBUG PANIER (CartItemsReadOnly):", JSON.stringify(data, null, 2));

        const kits = data.Kits || [];
        const itemsWithQuantity = kits.map((kit) => ({
          ...kit,
          quantity: kit.CartKit?.quantity || 1,
          kit_id: kit.id,
        }));
        setCartItems(itemsWithQuantity);
      } catch (err) {
        console.error("Erreur chargement panier (read-only) :", err);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) return <p>Chargement de la commande...</p>;
  if (!Array.isArray(cartItems)) return <p>Erreur : contenu de la commande invalide</p>;

  return (
    <div className="bg-white border p-6 rounded-2xl space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">Votre commande</h2>
      {cartItems.length === 0 ? (
        <p>Aucun article dans la commande.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.kit_id} className="flex items-center justify-between gap-4 border-b pb-4">
            <img src={item.image || "/images/placeholder.png"} alt={item.name} className="w-14 h-14 object-contain" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-black">{item.name}</h3>
              <p className="text-xs text-gray-500">Qté : {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-black">
                €{parseFloat(item.price || 0).toFixed(2)}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItemsReadOnly;
