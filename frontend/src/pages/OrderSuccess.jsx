import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
      <Header />
      <main className="min-h-[80vh] flex items-center justify-center pt-32 pb-16 px-4">
        <div className="max-w-lg w-full bg-white text-center border-2 border-[#9B59B6] rounded-2xl p-10 shadow-lg">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#9B59B6] text-white flex items-center justify-center text-5xl shadow-xl">
              ✓
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Paiement réussi</h1>
          <p className="text-gray-600 mb-2">
            Merci pour votre commande ! Nous avons bien reçu votre paiement.
          </p>
          <p className="text-sm text-black font-semibold mb-6">
            Votre commande sera expédiée dans un délai de 2 à 3 jours ouvrables.
          </p>
          <p className="text-sm text-[#9B59B6] font-medium mb-6">- L'équipe Durancy</p>

          <button
            onClick={() => navigate("/home")}
            className="bg-[#9B59B6] hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition"
          >
            Retour à l'accueil
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderSuccess;
