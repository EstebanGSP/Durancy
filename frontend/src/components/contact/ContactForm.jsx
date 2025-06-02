import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
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
    alert("Message envoyé !");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 w-full max-w-xl"
    >
      <input
        type="text"
        name="firstName"
        placeholder="Nom"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full border-2 border-black px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none"
      />

      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        className="w-full border-2 border-black px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none"
      />

      <select
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full border-2 border-black px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none text-lg"
      >
        <option value="">Sujet</option>
        <option value="commande">Suivi de commande</option>
        <option value="devis">Demande de devis</option>
        <option value="compatibilité">Compatibilité appareil</option>
      </select>

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        className="w-full border-2 border-black px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none"
      />

      <div className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
        />
        <label htmlFor="consent" className="text-[#BCBCBC]">
          J’accepte que mes données soient utilisées pour traiter ma demande.
        </label>
      </div>

      {/* bouton aligné à droite et margin-bottom only mobile */}
      <button
        type="submit"
        className="self-end bg-[#9B59B6] text-white px-6 py-3 rounded-[20px] hover:bg-purple-700 transition mb-5 md:mb-0"
      >
        Envoyer ma demande
      </button>
    </form>
  );
};

export default ContactForm;
