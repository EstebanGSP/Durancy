import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RepairInfo from "../components/repair/RepairInfo";
import RepairMap from "../components/repair/RepairMap";
import RepairSlotsGrid from "../components/repair/RepairSlotsGrid";

const RepairPage = () => {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-2xl font-bold mb-6">Réparer près de chez moi</h1>

        <RepairInfo />
        <RepairMap />
        <RepairSlotsGrid />
      </main>

      <Footer />
    </>
  );
};

export default RepairPage;
