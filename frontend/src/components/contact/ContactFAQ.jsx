import React, { useState } from "react";

const faqItems = [
  {
    question: "Où puis-je suivre ma commande ?",
    answer: "Vous pouvez suivre votre commande depuis votre compte dans la rubrique « Mes commandes ».",
  },
  {
    question: "Comment obtenir un devis réparation ?",
    answer: "Rendez-vous sur la page Réparer, sélectionnez un créneau et nous vous proposerons un devis.",
  },
  {
    question: "Comment savoir si mon appareil est compatible ?",
    answer: "Chaque fiche produit mentionne la liste des modèles compatibles dans la description.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div key={index} className="border rounded p-4 bg-white shadow-sm">
          <button
            className="w-full text-left font-semibold"
            onClick={() => toggle(index)}
          >
            {item.question}
          </button>
          {openIndex === index && (
            <p className="mt-2 text-sm text-gray-700">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactFAQ;
