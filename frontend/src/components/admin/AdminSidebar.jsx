import React from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Calendar,
  Boxes,
  BookOpen,
  Star,
  Wrench,
  Users,
  Bell,
  User,
} from "lucide-react";
import { Link } from "react-router-dom"; // tout en haut

const navItems = [
  { id: "dashboard", label: "Tableau de bord", icon: <LayoutDashboard size={18} /> },
  { id: "commandes", label: "Commandes", icon: <ShoppingCart size={18} /> },
  { id: "calendrier", label: "Calendrier RDV", icon: <Calendar size={18} /> },
  { id: "stock", label: "Stock", icon: <Boxes size={18} /> },
  { id: "tutoriels", label: "Tutoriels", icon: <BookOpen size={18} /> },
  { id: "avis", label: "Avis", icon: <Star size={18} /> },
  { id: "reparateur", label: "Réparateur", icon: <Wrench size={18} /> },
  { id: "utilisateurs", label: "Utilisateurs", icon: <Users size={18} /> },
  { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
  { id: "compte", label: "Compte", icon: <User size={18} /> },
];

const AdminSidebar = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="w-64 bg-white border-r h-screen sticky top-0">
      <Link to="/" className="p-6 block">
        <img
          src="images/logo-durancy.png" // remplace par le bon chemin vers ton logo
          alt="Durancy logo"
          className="h-6"
        />
      </Link>
      <nav className="flex flex-col space-y-1 px-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-left transition w-full ${
              activeSection === item.id
                ? "bg-purple-100 text-purple-600 font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 text-sm text-gray-500 flex items-center gap-2">
        <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="admin" className="w-6 h-6 rounded-full" />
        Administrateur <span className="font-medium">Esteban</span>
      </div>
    </aside>
  );
};

export default AdminSidebar;
