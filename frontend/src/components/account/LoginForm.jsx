import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO : intégrer authentification réelle
    alert("Connexion simulée !");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />

      <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
        Mot de passe oublié ?
      </div>

      <button
        type="submit"
        className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition"
      >
        Se connecter
      </button>

      {/* Réseaux sociaux */}
      <div className="flex justify-center gap-4 mt-4">
        <button type="button" className="text-gray-600 text-xl">G</button>
        <button type="button" className="text-gray-600 text-xl">f</button>
        <button type="button" className="text-gray-600 text-xl">in</button>
      </div>
    </form>
  );
};

export default LoginForm;
