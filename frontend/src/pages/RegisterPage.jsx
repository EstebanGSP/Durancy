import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RegisterForm from "../components/account/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-purple-300">
          {/* Partie gauche : formulaire sur fond violet */}
          <div className="bg-[#9B59B6] text-white p-10 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-6 text-center">S’inscrire</h1>
            <RegisterForm />
            <p className="text-xs text-center mt-6">
              En cliquant sur le bouton S’inscrire, vous acceptez nos{" "}
              <a href="#" className="underline">
                conditions d’utilisation
              </a>{" "}
              et notre{" "}
              <a href="#" className="underline">
                politique de confidentialité
              </a>
            </p>
          </div>

          {/* Partie droite : illustration */}
          <div className="hidden md:flex justify-center bg-white relative">
            {/* Éclair décoratif centré au-dessus */}
            <img
              src="/images/minieclairs.png"
              alt="Éclair décoratif"
              className="absolute -top-6 left-1/2 -translate-x-1/2 pointer-events-none"
            />

            {/* Personnage */}
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

export default RegisterPage;
