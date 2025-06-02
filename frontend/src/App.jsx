// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth, AuthProvider } from "./context/AuthContext";

import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TutorialList from "./pages/TutorialList.jsx";
import Tutoriel from "./pages/Tutorial.jsx";
import KitsPage from "./pages/KitsPage.jsx";
import RepairPage from "./pages/RepairPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import EmailConfirmationPage from "./pages/EmailConfirmationPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import RepairRdvForm from "./pages/RepairRdvForm.jsx";
import RepairConfirmation from "./pages/RepairConfirmation.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import RdvInfosPage from "./pages/RdvInfosPage.jsx";
import KitProduct from "./pages/KitProduct.jsx";

// Pages Admin à ajouter
import AddKitPage from "./pages/admin/AddKitPage.jsx";
import AddTutorialPage from "./pages/admin/AddTutorialPage.jsx";

function AppRoutes() {
  const { isAdmin } = useAuth();

  return (
    <Routes>
      {/* Redirection automatique "/" → "/home" */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Routes publiques */}
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/tutoriels" element={<TutorialList />} />
      <Route path="/tutoriels/:id" element={<Tutoriel />} />
      <Route path="/kits" element={<KitsPage />} />
      <Route path="/kits/:id" element={<KitProduct />} />
      <Route path="/reparer" element={<RepairPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/connexion" element={<LoginPage />} />
      <Route path="/inscription" element={<RegisterPage />} />
      <Route path="/confirmation" element={<EmailConfirmationPage />} />
      <Route path="/compte" element={<AccountPage />} />
      <Route path="/panier" element={<CartPage />} />
      <Route path="/rdv" element={<RepairRdvForm />} />
      <Route path="/rdv/infos" element={<RdvInfosPage />} />
      <Route path="/rdv/confirmation" element={<RepairConfirmation />} />

      {/* Page principale Admin (dashboard) */}
      <Route
        path="/admin"
        element={isAdmin() ? <AdminPage /> : <Navigate to="/home" replace />}
      />

      {/* Routes protégées : seuls les admins peuvent y accéder */}
      <Route
        path="/admin/add-kit"
        element={isAdmin() ? <AddKitPage /> : <Navigate to="/home" replace />}
      />
      <Route
        path="/admin/add-tutorial"
        element={isAdmin() ? <AddTutorialPage /> : <Navigate to="/home" replace />}
      />

      {/* Route 404 : n’importe quelle URL inconnue */}
      <Route path="*" element={<p className="text-center mt-20">Page introuvable</p>} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="font-sans">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
