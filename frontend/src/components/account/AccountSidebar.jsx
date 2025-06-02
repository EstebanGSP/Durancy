import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  User,
  List,
  Wrench,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext"; // 👈 à ajouter

const tabs = [
  { id: "infos", label: "Infos personnelles", icon: <User size={16} /> },
  { id: "commandes", label: "Historique des commandes", icon: <List size={16} /> },
  { id: "reparations", label: "Historique des réparations", icon: <Wrench size={16} /> },
  { id: "tutos", label: "Tutoriels suivis", icon: <BookOpen size={16} /> },
  { id: "messages", label: "Messages", icon: <MessageCircle size={16} /> },
];

const AccountSidebar = ({ activeTab, setActiveTab }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();            // vide le contexte + localStorage
    navigate("/");       // redirection vers la page d'accueil
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg text-left transition
            ${
              activeTab === tab.id
                ? "bg-purple-100 text-purple-600 font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}

      <hr className="my-4" />

      <button
        onClick={handleLogout}
        className="text-sm text-gray-500 px-4 py-2 flex items-center gap-2 hover:bg-gray-100 w-full rounded-lg transition"
      >
        <img
          src="https://randomuser.me/api/portraits/lego/1.jpg"
          alt="profil"
          className="w-6 h-6 rounded-full"
        />
        Déconnexion
        <LogOut size={16} className="ml-auto text-gray-400" />
      </button>
    </div>
  );
};

export default AccountSidebar;
