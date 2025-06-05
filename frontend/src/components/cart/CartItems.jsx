import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { getCart, removeFromCart } from "../../api";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        console.log("DEBUG PANIER (CartItems):", JSON.stringify(data, null, 2));

        const kits = data.Kits || [];
        const itemsWithQuantity = kits.map((kit) => ({
          ...kit,
          quantity: kit.CartKit?.quantity || 1,
          kit_id: kit.id,
        }));
        setCartItems(itemsWithQuantity);
      } catch (err) {
        console.error("Erreur lors du chargement du panier :", err);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleRemove = async (kitId) => {
    try {
      await removeFromCart(kitId);
      setCartItems((prev) => prev.filter((item) => item.kit_id !== kitId));
    } catch (err) {
      console.error("Erreur suppression :", err);
    }
  };

  if (loading) return <p>Chargement du panier...</p>;
  if (!Array.isArray(cartItems)) return <p>Erreur : contenu du panier invalide</p>;

  return (
    <div className="bg-[#9B59B6] text-white p-6 rounded-2xl space-y-6">
      <h2 className="text-2xl font-semibold">Mon panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.kit_id} className="flex items-center justify-between gap-4 border-b border-white pb-4">
            <img src={`${process.env.REACT_APP_API_URL}/${item.image}`}
                 alt={item.name} 
                 className="w-14 h-14 object-contain" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{item.name}</h3>
              <p className="text-xs text-purple-200">Qté : {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-white">
                €{parseFloat(item.price || 0).toFixed(2)}
              </p>
            </div>
            <button onClick={() => handleRemove(item.kit_id)} className="text-white hover:text-red-300">
              <FaTrashAlt />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItems;
