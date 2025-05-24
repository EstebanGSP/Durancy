import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Tutoriel from "./pages/Tutorial.jsx";
import KitsPage from "./pages/KitsPage.jsx";
import RepairPage from "./pages/RepairPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import EmailConfirmationPage from "./pages/EmailConfirmationPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import CartPage from "./pages/CartPage";
import RepairRdvForm from "./pages/RepairRdvForm";
import RepairConfirmation from "./pages/RepairConfirmation";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tutoriels" element={<Tutoriel />} />
          <Route path="/kits" element={<KitsPage />} />
          <Route path="/reparer" element={<RepairPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/inscription" element={<RegisterPage />} />
          <Route path="/confirmation" element={<EmailConfirmationPage />} />
          <Route path="/compte" element={<AccountPage />} />
          <Route path="/panier" element={<CartPage />} />
          <Route path="/rdv" element={<RepairRdvForm />} />
          <Route path="/rdv/confirmation" element={<RepairConfirmation />} />
          <Route path="/admin" element={<AdminPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
