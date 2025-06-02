// src/pages/admin/AddKitPage.jsx

import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const AddKitPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        category,
        image,
      };

      await axios.post(
        `${process.env.REACT_APP_API_URL}/kits`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setMessage("✅ Kit créé avec succès !");
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setCategory("");
      setImage("");
    } catch (err) {
      console.error("Erreur création de kit :", err);
      setMessage("❌ Erreur lors de la création du kit.");
    }
  };

  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Ajouter un nouveau kit</h1>

        {message && (
          <p
            className={`mb-4 font-medium ${
              message.includes("succès") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Nom du kit</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Prix (€)</label>
              <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1">Stock</label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">Catégorie</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">URL de l’image</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Créer le kit
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default AddKitPage;
