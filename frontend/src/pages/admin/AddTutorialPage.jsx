// src/pages/admin/AddTutorialPage.jsx

import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const AddTutorialPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: title,
        description: content,
        category,
        videoUrl,
        image,
      };

      await axios.post(
        `${process.env.REACT_APP_API_URL}/tutorials`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setMessage("✅ Tutoriel créé avec succès !");
      setTitle("");
      setContent("");
      setCategory("");
      setVideoUrl("");
      setImage("");
    } catch (err) {
      console.error("Erreur création tutoriel :", err);
      setMessage("❌ Erreur lors de la création du tutoriel.");
    }
  };

  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Ajouter un nouveau tutoriel</h1>

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
            <label className="block mb-1">Titre du tutoriel</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Contenu / Description</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={6}
              className="w-full border p-2 rounded"
            />
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
            <label className="block mb-1">URL de la vidéo (optionnel)</label>
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">URL de l’image (optionnel)</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Créer le tutoriel
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default AddTutorialPage;
