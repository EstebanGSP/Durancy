import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connecter à un backend
    alert("Message envoyé !");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xl">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="Texte ici"
          value={formData.firstName}
          onChange={handleChange}
          className="flex-1 border p-2 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Texte ici"
          value={formData.lastName}
          onChange={handleChange}
          className="flex-1 border p-2 rounded"
        />
      </div>

      <select
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Sujet</option>
        <option value="commande">Suivi de commande</option>
        <option value="devis">Demande de devis</option>
        <option value="compatibilité">Compatibilité appareil</option>
      </select>

      <textarea
        name="message"
        placeholder="Texte ici"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        className="w-full border p-2 rounded"
      />

      <div className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
        />
        <label htmlFor="consent">
          J’accepte que mes données soient utilisées pour traiter ma demande.
        </label>
      </div>

      <button
        type="submit"
        className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        Envoyer ma demande
      </button>
    </form>
  );
};

export default ContactForm;
