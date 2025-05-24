import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import StepBar from "../components/repair/StepBar";
import RepairForm from "../components/repair/RepairForm";


const RepairRdvForm = () => {
  return (
    <>
      <Header />
      <StepBar />
      <RepairForm />
      <Footer />
    </>
  );
};

export default RepairRdvForm;
