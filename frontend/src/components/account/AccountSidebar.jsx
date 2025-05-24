import React from "react";
import { LogOut, User, List, Wrench, BookOpen, MessageCircle } from "lucide-react";

const tabs = [
  { id: "infos", label: "Infos personnelles", icon: <User size={16} /> },
  { id: "commandes", label: "Historique des commandes", icon: <List size={16} /> },
  { id: "reparations", label: "Historique des réparations", icon: <Wrench size={16} /> },
  { id: "tutos", label: "Tutoriels suivis", icon: <BookOpen size={16} /> },
  { id: "messages", label: "Messages", icon: <MessageCircle size={16} /> },
];

const AccountSidebar = ({ activeTab, setActiveTab }) => {
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

      <div className="text-sm text-gray-500 px-4 py-2 flex items-center gap-2">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profil"
          className="w-6 h-6 rounded-full"
        />
        Déconnexion
        <LogOut size={16} className="ml-auto text-gray-400" />
      </div>
    </div>
  );
};

export default AccountSidebar;
