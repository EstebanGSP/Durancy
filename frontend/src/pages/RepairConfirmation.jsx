import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import StepBar from "../components/repair/StepBar";
import ConfirmationCard from "../components/repair/ConfirmationCard";

const RepairConfirmation = () => {
  return (
    <>
      <Header />
      <StepBar activeStep={2} />
      <ConfirmationCard />
      <Footer />
    </>
  );
};

export default RepairConfirmation;
