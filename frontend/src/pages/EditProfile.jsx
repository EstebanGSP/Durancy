// src/pages/EditProfile.jsx

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.token) {
      setMessage("❌ Utilisateur non connecté.");
      return;
    }

    try {
      console.log("🔁 Données envoyées :", formData);

      await axios.put(
        "https://api.durancy.fr/users/me", // ✅ on utilise /me
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setMessage("✅ Profil mis à jour avec succès !");
      setTimeout(() => {
        navigate("/compte");
      }, 1500);
    } catch (error) {
      if (error.response) {
        console.error("Erreur API :", error.response.status, error.response.data);
      } else {
        console.error("Erreur inconnue :", error);
      }
      setMessage("❌ Une erreur est survenue lors de la mise à jour.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-20 px-4">
      <h2 className="text-2xl font-bold mb-6">Modifier mon profil</h2>

      {message && (
        <p className="mb-4 text-sm text-center font-medium text-purple-700">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Prénom</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Nom</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
}
