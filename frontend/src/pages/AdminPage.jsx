import React, { useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminOrders from "../components/admin/AdminOrders";
import AdminCalendar from "../components/admin/AdminCalendar";
import AdminStock from "../components/admin/AdminStock";
import AdminTutorials from "../components/admin/AdminTutorials";
import AdminReviews from "../components/admin/AdminReviews";
import AdminRepairers from "../components/admin/AdminRepairers";
import AdminUsers from "../components/admin/AdminUsers";
import AdminNotifications from "../components/admin/AdminNotifications";
import AccountOverview from "../components/account/AccountOverview";



const AdminPage = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="flex min-h-screen">
      <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        {activeSection === "dashboard" && <AdminDashboard />}
        {activeSection === "commandes" && <AdminOrders />}
        {activeSection === "calendrier" && <AdminCalendar />}
        {activeSection === "stock" && <AdminStock />}
        {activeSection === "tutoriels" && <AdminTutorials />}
        {activeSection === "avis" && <AdminReviews />}
        {activeSection === "reparateur" && <AdminRepairers />}
        {activeSection === "utilisateurs" && <AdminUsers />}
        {activeSection === "notifications" && <AdminNotifications />}
        {activeSection === "compte" && <AccountOverview />}
      </main>
    </div>
  );
};

export default AdminPage;
