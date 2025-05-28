import React, { useState } from "react";
import { registerUser } from "../../api";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: "client", // requis par l’API
      firstname: formData.firstname,
      lastname: formData.lastname,
    };

    try {
      await registerUser(payload);
      navigate("/connexion");
    } catch (err) {
      setError(err.response?.data?.error || "Erreur lors de l'inscription.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto w-full">

      <input
        type="text"
        name="username"
        placeholder="Nom d'utilisateur"
        value={formData.username}
        onChange={handleChange}
        required
        className="w-full p-3 rounded shadow text-black"
      />

      <input
        type="email"
        name="email"
        placeholder="Adresse e-mail"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 rounded shadow text-black"
      />

      <input
        type="text"
        name="firstname"
        placeholder="Prénom"
        value={formData.firstname}
        onChange={handleChange}
        required
        className="w-full p-3 rounded shadow text-black"
      />

      <input
        type="text"
        name="lastname"
        placeholder="Nom de famille"
        value={formData.lastname}
        onChange={handleChange}
        required
        className="w-full p-3 rounded shadow text-black"
      />

      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full p-3 rounded shadow text-black"
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirmer le mot de passe"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        className="w-full p-3 rounded shadow text-black"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full bg-white text-[#161616] font-bold py-4 rounded shadow hover:bg-gray-100 transition"
      >
        S’inscrire
      </button>
    </form>
  );
};

export default RegisterForm;
