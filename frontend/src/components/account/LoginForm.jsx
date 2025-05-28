import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEnvelope, FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { loginUser } from "../../api"; // Utilise bien cette fonction
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { token, role } = await loginUser(formData);

      // Stocke dans localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role); // si besoin

      // Met à jour le contexte auth
      login({ token, role });

      login({ token, role }); // Stockage via AuthContext

      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/compte");
      }
    } catch (err) {
      console.error(err);
      setError("Email ou mot de passe incorrect.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10 max-w-sm mx-auto w-full">

      {/* Message d'erreur */}
      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded text-sm">
          {error}
        </div>
      )}

      {/* Email */}
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

      {/* Mot de passe */}
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

      {/* Réseaux sociaux */}
      <div className="flex flex-col items-center space-y-4 mt-2">
        <p className="text-center text-sm font-light text-white">
          Ou connectez-vous avec
        </p>
        <div className="flex justify-center gap-6">
          <button type="button" className="bg-white p-3 rounded-full shadow text-purple-700"><FaGoogle /></button>
          <button type="button" className="bg-white p-3 rounded-full shadow text-purple-700"><FaFacebookF /></button>
          <button type="button" className="bg-white p-3 rounded-full shadow text-purple-700"><FaLinkedinIn /></button>
        </div>
        <div className="text-center text-white text-sm pt-8">
          Vous n'avez pas encore de compte ?{" "}
          <a href="/inscription" className="font-semibold underline hover:text-gray-200 transition">
            Inscrivez-vous.
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
