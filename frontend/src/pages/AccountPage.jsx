import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AccountSidebar from "../components/account/AccountSidebar";
import AccountOverview from "../components/account/AccountOverview";
import AccountOrders from "../components/account/AccountOrders";
import AccountRepairs from "../components/account/AccountRepairs";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("infos");

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Barre latérale */}
          <div className="lg:col-span-1">
            <AccountSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Contenu dynamique */}
          <div className="lg:col-span-3 space-y-6">
            {activeTab === "infos" && <AccountOverview />}
            {activeTab === "commandes" && <AccountOrders />}
            {activeTab === "reparations" && <AccountRepairs />}
            {activeTab === "tutos" && (
              <div className="text-gray-400 italic">Aucun tutoriel suivi.</div>
            )}
            {activeTab === "messages" && (
              <div className="text-gray-400 italic">Aucun message.</div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AccountPage;
