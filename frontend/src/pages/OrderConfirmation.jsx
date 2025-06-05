import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  // Champs carte
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("lastCartItems");

    if (!stored) {
      navigate("/panier");
      return;
    }

    const items = JSON.parse(stored);
    setCartItems(items);

    const calculatedTotal = items.reduce((acc, item) => {
      const price = parseFloat(item.price || 0);
      return acc + price * item.quantity;
    }, 0);
    setTotal(calculatedTotal);
  }, [navigate]);

  const allFieldsFilled = cardName && cardNumber && cardExpiry && cardCVV;

  const handleSubmit = () => {
    if (allFieldsFilled) {
      // On marque la commande comme validée
      localStorage.setItem("confirmationDone", "true");

      // Redirige vers la page de succès
      navigate("/panier/valide");
    }
  };

  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 pt-32 pb-16">
        {/* Étapes visuelles */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-purple-600 font-semibold">
              <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center">1</div>
              Panier
            </div>
            <div className="border-t w-10 border-purple-300" />
            <div className="flex items-center gap-2 text-purple-600 font-semibold">
              <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center">2</div>
              Détails de la commande
            </div>
            <div className="border-t w-10 border-purple-300" />
            <div className="flex items-center gap-2 text-gray-400 font-semibold">
              <div className="w-6 h-6 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center">3</div>
              Commande terminée
            </div>
          </div>
        </div>

        {/* Grille à 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colonne gauche : articles */}
          <div className="bg-white border p-6 rounded-2xl space-y-6">
            <h2 className="text-2xl font-bold text-purple-700">Votre commande</h2>
            {cartItems.length === 0 ? (
              <p>Aucun article dans la commande.</p>
            ) : (
              cartItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between gap-4 border-b pb-4">
                  <img src={`${process.env.REACT_APP_API_URL}/${item.image}`} alt={item.name} className="w-14 h-14 object-contain" />
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

          {/* Colonne droite : récap et carte */}
          <div className="bg-[#9B59B6] text-white p-6 rounded-2xl space-y-6">
            <h2 className="text-xl font-bold">Détails de la carte</h2>

            {/* Logos interactifs */}
            <div className="flex gap-4">
              {["mastercard", "visa", "applepay"].map((logo, i) => (
                <a key={i} href="#" className="hover:opacity-80 transition cursor-pointer">
                  <img src={`/images/${logo}.png`} alt={logo} className="h-8" />
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nom sur la carte"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="p-3 rounded bg-white text-black"
              />
              <input
                type="text"
                placeholder="Numéro de carte"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="p-3 rounded bg-white text-black"
              />
              <input
                type="text"
                placeholder="mm/aa"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                className="p-3 rounded bg-white text-black"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cardCVV}
                onChange={(e) => setCardCVV(e.target.value)}
                className="p-3 rounded bg-white text-black"
              />
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Livraison</span>
                <span>€0.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total (Taxe incl.)</span>
                <span>€{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!allFieldsFilled}
              className={`w-full py-3 rounded-full font-semibold transition ${
                allFieldsFilled
                  ? "bg-white text-purple-700 hover:opacity-90"
                  : "bg-white text-purple-700 opacity-50 cursor-not-allowed"
              }`}
            >
              Valider la commande
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default OrderConfirmation;
