import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function RdvInfosPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    deviceType: "",
    model: "",
    consent: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // tu pourras remplacer par ton envoi réel
    console.log(form);
    navigate("/rdv/confirmation"); // étape suivante
  };

  return (
    <>
      <Header />

      {/* Barre d’étape */}
      <div className="bg-gray-100 py-6 mt-32">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[#9B59B6] text-white flex items-center justify-center text-sm">
                1
              </div>
              <span className="font-semibold">Infos personnelles</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="h-6 w-6 rounded-full border border-gray-400 flex items-center justify-center text-sm">
                2
              </div>
              <span>Confirmation RDV</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="h-6 w-6 rounded-full border border-gray-400 flex items-center justify-center text-sm">
                3
              </div>
              <span>Récapitulatif</span>
            </div>
          </div>
          <Link
            to="/reparer"
            className="text-[#9B59B6] border border-[#9B59B6] rounded px-4 py-2 hover:bg-purple-50 transition"
          >
            &lt; Retour
          </Link>
        </div>
      </div>

      {/* Formulaire */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            type="text"
            placeholder="Nom & Prénom *"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border-2 border-[#9B59B6] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none px-4 py-3"
          />
          <input
            name="email"
            type="email"
            placeholder="Email *"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border-2 border-[#9B59B6] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none px-4 py-3"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Numéro de téléphone (optionnel)"
            value={form.phone}
            onChange={handleChange}
            className="w-full border-2 border-[#9B59B6] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none px-4 py-3"
          />
          <textarea
            name="product"
            placeholder="Description du produit"
            value={form.product}
            onChange={handleChange}
            rows={4}
            className="w-full border-2 border-[#9B59B6] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none px-4 py-3"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <select
              name="deviceType"
              value={form.deviceType}
              onChange={handleChange}
              required
              className="w-full border-2 border-[#9B59B6] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none px-4 py-3"
            >
              <option value="">Type d’appareil</option>
              <option value="smartphone">Smartphone</option>
              <option value="ordinateur">Ordinateur</option>
              <option value="tablette">Tablette</option>
            </select>
            <select
              name="model"
              value={form.model}
              onChange={handleChange}
              required
              className="w-full border-2 border-[#9B59B6] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none px-4 py-3"
            >
              <option value="">Modèle</option>
              <option value="iphone">iPhone</option>
              <option value="galaxy">Galaxy</option>
              <option value="macbook">MacBook</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={handleChange}
              className="h-4 w-4 border-2 border-purple-600 text-purple-600"
            />
            <label htmlFor="consent" className="text-sm text-gray-600">
              J’accepte que mes informations personnelles soient utilisées par Durancy …
            </label>
          </div>

          <button
            type="submit"
            className="ml-auto bg-[#9B59B6] text-white px-8 py-3 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Suivant
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}
