import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/users/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Mot de passe temporaire envoyé !");
        setEmail("");
      } else {
        setError(data.error || "Erreur inattendue.");
      }
    } catch (err) {
      setError("Erreur de connexion au serveur.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label htmlFor="email" className="text-sm font-medium">
        Adresse e-mail
      </label>
      <input
        type="email"
        id="email"
        required
        className="p-3 rounded-md text-black"
        placeholder="exemple@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="bg-white text-[#9B59B6] font-bold py-2 rounded-md hover:bg-purple-100 transition"
      >
        Envoyer un mot de passe temporaire
      </button>

      {message && <p className="text-green-200 text-center">{message}</p>}
      {error && <p className="text-red-300 text-center">{error}</p>}
    </form>
  );
};

export default ForgotPasswordForm;
