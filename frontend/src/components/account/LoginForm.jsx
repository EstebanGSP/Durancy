import React, { useState } from "react";
import { FaEye, FaEnvelope, FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Connexion simulée !");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10 max-w-sm mx-auto w-full">
      
      {/* Champ E-mail avec icône */}
      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-white text-black p-3 pr-10 rounded shadow placeholder-[#161616]"
        />
        <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-700" />
      </div>

      {/* Champ Mot de passe avec œil */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full bg-white text-black p-3 pr-10 rounded shadow placeholder-[#161616]"
        />
        <FaEye
          className="absolute right-3 top-1/2 -translate-y-[145%] text-purple-700 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        />

        {/* Lien mot de passe oublié dans le même bloc */}
        <div className="text-left text-sm text-white cursor-pointer mt-3">
          Mot de passe oublié ?
        </div>
      </div>


      {/* Bouton de connexion */}
      <button
        type="submit"
        className="w-full bg-white text-[#161616] font-semibold py-4 rounded shadow hover:bg-gray-100 transition"
      >
        Se connecter
      </button>

      {/* Connexion sociale */}
      <div className="flex flex-col items-center space-y-4 mt-2">
        <p className="text-center text-sm font-light text-white">
          Ou connectez-vous avec
        </p>

        <div className="flex justify-center gap-6">
          <button type="button" className="bg-white p-3 rounded-full shadow text-purple-700">
            <FaGoogle />
          </button>
          <button type="button" className="bg-white p-3 rounded-full shadow text-purple-700">
            <FaFacebookF />
          </button>
          <button type="button" className="bg-white p-3 rounded-full shadow text-purple-700">
            <FaLinkedinIn />
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
