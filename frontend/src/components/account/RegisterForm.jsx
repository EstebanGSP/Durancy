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
    // TODO: intégrer backend d'inscription
    alert("Inscription simulée !");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="firstName"
        placeholder="Prénom"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Nom de famille"
        value={formData.lastName}
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
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirmer le mot de passe"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />

      <p className="text-xs text-gray-600">
        En cliquant sur le bouton s’inscrire, vous acceptez nos{" "}
        <a href="#" className="underline">
          conditions d’utilisation
        </a>{" "}
        et notre{" "}
        <a href="#" className="underline">
          politique de confidentialité
        </a>.
      </p>

      <button
        type="submit"
        className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition"
      >
        S’inscrire
      </button>
    </form>
  );
};

export default RegisterForm;
