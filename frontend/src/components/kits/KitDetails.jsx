import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { addToCart } from "../../api";

const KitDetails = () => {
  const { id } = useParams();
  const [kit, setKit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedMessage, setAddedMessage] = useState(false);

  useEffect(() => {
    const fetchKit = async () => {
      try {
        const res = await axios.get(`https://api.durancy.fr/kits/${id}`);
        setKit(res.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du kit :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchKit();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await addToCart(kit.id, 1);
      setAddedMessage(true);
      setTimeout(() => setAddedMessage(false), 3000);
    } catch (error) {
      console.error("Erreur panier :", error);
    }
  };

  if (loading) return <div className="text-center mt-10">Chargement...</div>;
  if (!kit) return <div className="text-center text-red-500">Kit introuvable.</div>;

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="flex justify-center items-start">
            <img
              src={`${process.env.REACT_APP_API_URL}/${kit.image}`}
              alt={kit.name}
              className="rounded-lg shadow-md max-h-[400px] object-contain"
            />
          </div>

          {/* Infos kit */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{kit.name}</h1>
            <p className="text-2xl text-[#9B59B6] font-semibold mb-2">
              {Number(kit.price).toFixed(2)} €
            </p>
            <p className="text-green-600 font-medium mb-4">
              {kit.stock > 0 ? `En stock (${kit.stock})` : "Rupture de stock"}
            </p>

            <button
              onClick={handleAddToCart}
              className="bg-[#9B59B6] hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              Ajouter au panier
            </button>

            {/* Message ajouté */}
            {addedMessage && (
              <p className="text-green-600 mt-3 animate-pulse font-medium">
                ✅ Ajouté au panier !
              </p>
            )}

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{kit.description}</p>
            </div>
          </div>
        </div>

        {/* FAQ statique */}
        <div className="mt-16 border-t pt-8">
          <h3 className="text-2xl font-bold mb-4">FAQ</h3>
          <div className="space-y-3">
            <details className="border rounded p-4">
              <summary className="cursor-pointer font-medium">
                Ce kit est-il adapté aux débutants ?
              </summary>
              <p className="mt-2">
                Oui, il est conçu pour les personnes n’ayant jamais ouvert un smartphone.
              </p>
            </details>
            <details className="border rounded p-4">
              <summary className="cursor-pointer font-medium">
                Peut-on réutiliser les outils ?
              </summary>
              <p className="mt-2">Oui, ils sont durables et utilisables plusieurs fois.</p>
            </details>
            <details className="border rounded p-4">
              <summary className="cursor-pointer font-medium">
                Puis-je retourner le kit ?
              </summary>
              <p className="mt-2">Oui, sous 14 jours si non utilisé.</p>
            </details>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default KitDetails;
