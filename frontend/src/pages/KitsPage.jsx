import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import KitsFilters from "../components/kits/KitsFilters";
import KitsGrid from "../components/kits/KitsGrid";
import Pagination from "../components/kits/Pagination";

const KitsPage = () => {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-2xl font-bold mb-6">Tous nos kits</h1>

        <KitsFilters />
        <KitsGrid />
        <Pagination />
      </main>

      <Footer />
    </>
  );
};

export default KitsPage;
