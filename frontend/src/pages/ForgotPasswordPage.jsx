import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ForgotPasswordForm from "../components/account/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-purple-300">
          {/* Partie gauche : formulaire sur fond violet */}
          <div className="bg-[#9B59B6] text-white p-10 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-6 text-center">Mot de passe oublié ?</h1>
            <ForgotPasswordForm />
            <p className="text-xs text-center mt-6">
              Vous recevrez un mot de passe temporaire si votre adresse est reconnue.
            </p>
          </div>

          {/* Partie droite : illustration */}
          <div className="hidden md:flex justify-center bg-white relative">
            <img
              src="/images/minieclairs.png"
              alt="Éclair décoratif"
              className="absolute -top-6 left-1/2 -translate-x-1/2 pointer-events-none"
            />
            <img
              src="/images/worker.png"
              alt="Réparateur Durancy"
              className="max-w-xs object-contain mx-auto self-end mr-16"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ForgotPasswordPage;
