import axios from "axios";

// 🔁 Utilise la variable d'environnement (injectée depuis .env.local)
const API_BASE_URL = process.env.REACT_APP_API_URL;
console.log("✅ API_BASE_URL =", API_BASE_URL); // debug affiché dans la console

// 🔐 Récupère le token depuis localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

// 👉 Enregistrement utilisateur
export const registerUser = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/users/register`, formData);
  return response.data;
};

// 👉 Connexion utilisateur
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/users/login`, credentials);
  return response.data;
};

// 🛒 Ajouter un kit au panier
export const addToCart = async (kitId, quantity = 1) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/panier/ajouter`,
    { kit_id: kitId, quantity },
    { headers: getAuthHeaders() }
  );
  return response.data;
};

// 🧾 Voir le contenu du panier
export const getCart = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/panier`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// 🔄 Modifier la quantité d’un kit
export const updateCartItem = async (kitId, quantity) => {
  const response = await axios.put(
    `${API_BASE_URL}/api/panier/modifier`,
    { kit_id: kitId, quantity },
    { headers: getAuthHeaders() }
  );
  return response.data;
};

// 🗑 Supprimer un kit du panier
export const removeFromCart = async (kitId) => {
  const response = await axios.delete(
    `${API_BASE_URL}/api/panier/supprimer`,
    {
      data: { kit_id: kitId },
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};

// ❌ Vider complètement le panier
export const clearCart = async () => {
  const response = await axios.delete(`${API_BASE_URL}/api/panier/vider`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// ✅ Valider le panier
export const validateCart = async () => {
  const response = await axios.post(
    `${API_BASE_URL}/api/panier/valider`,
    {},
    { headers: getAuthHeaders() }
  );
  return response.data;
};
