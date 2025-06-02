import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactAside from "../components/contact/ContactAside";

const ContactPage = () => {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-10">
            <ContactForm />
          </div>

          {/* Colonne latérale */}
          <div className="lg:col-span-1">
            <ContactAside />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
