import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    alert("Inscription simulée !");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-md mx-auto w-full">
      <input
        type="text"
        name="firstName"
        placeholder="Prénom"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="w-full bg-white text-gray-800 p-3 rounded shadow placeholder-[#161616]"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Nom de famille"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="w-full bg-white text-gray-800 p-3 rounded shadow placeholder-[#161616]" 
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full bg-white text-gray-800 p-3 rounded shadow placeholder-[#161616] mb-2"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirmer le mot de passe"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        className="w-full bg-white text-gray-800 p-3 rounded shadow placeholder-[#161616] mb-2"
      />

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
