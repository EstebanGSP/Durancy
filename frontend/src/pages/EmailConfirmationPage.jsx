import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import EmailConfirmation from "../components/account/EmailConfirmation";

const EmailConfirmationPage = () => {
  return (
    <>
      <Header />

      <main className="pt-32 px-4 pb-16">
        <EmailConfirmation />
      </main>

      <Footer />
    </>
  );
};

export default EmailConfirmationPage;
