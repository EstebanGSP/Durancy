// src/context/AuthContext.jsx

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { token, role, id, firstname, lastname, email }

  const fetchUserProfile = async (token) => {
    try {
      const res = await fetch("https://api.durancy.fr/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Erreur lors de la récupération du profil :", err);
      return null;
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (storedToken && storedRole) {
      fetchUserProfile(storedToken).then((profile) => {
        if (profile) {
          setUser({ ...profile, token: storedToken, role: storedRole });
        } else {
          logout();
        }
      });
    }
  }, []);

  const login = async ({ token, role }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    const profile = await fetchUserProfile(token);
    if (profile) {
      setUser({ ...profile, token, role });
    } else {
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser(null);
  };

  const isAdmin = () => {
    return user && user.role === "admin";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
