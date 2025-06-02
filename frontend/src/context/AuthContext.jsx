// src/context/AuthContext.jsx

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { token, role }

  useEffect(() => {
    // Au démarrage, on récupère le token et le rôle dans le localStorage (s’ils existent)
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    if (storedToken && storedRole) {
      setUser({ token: storedToken, role: storedRole });
    }
  }, []);

  const login = ({ token, role }) => {
    // Lors du login, on stocke token + rôle
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setUser({ token, role });
  };

  const logout = () => {
    // Lors du logout, on supprime tout
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser(null);
  };

  // Helper : retourne true si user.role === "admin"
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
