// src/pages/KitsPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import KitsFilters from "../components/kits/KitsFilters";
import KitsGrid from "../components/kits/KitsGrid";
import Pagination from "../components/kits/Pagination";
import { useAuth } from "../context/AuthContext";

const KitsPage = () => {
  const { isAdmin } = useAuth();

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Tous nos kits</h1>

          {isAdmin() && (
            <Link
              to="/admin/add-kit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              + Ajouter un kit
            </Link>
          )}
        </div>

        <KitsFilters />
        <KitsGrid />
        <Pagination />
      </main>

      <Footer />
    </>
  );
};

export default KitsPage;
