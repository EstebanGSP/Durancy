import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import AccountSidebar from "../components/account/AccountSidebar";
import AccountOverview from "../components/account/AccountOverview";
import AccountSections from "../components/account/AccountSections";

const AccountPage = () => {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AccountSidebar />
          </div>

          {/* Main content */}
          <div className="lg:col-span-3 space-y-6">
            <AccountOverview />
            <AccountSections />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AccountPage;
