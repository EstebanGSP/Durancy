import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import LoginForm from "../components/account/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px- pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-purple-500">
          
          {/* Partie gauche : fond violet + formulaire */}
          <div className="bg-[#9B59B6] text-[white] p-10 flex flex-col justify-center space-y-6">
            <h1 className="text-3xl mb-10 font-light text-center">Se connecter</h1>
            <LoginForm />
          </div>

          {/* Partie droite : illustration + message */}
          <div className="bg-white relative hidden md:flex items-center justify-center p-10">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Bienvenue chez Durancy
              </h2>
              <h3>Veuillez vous connecter en utilisant vos informations
              personnelles pour rester en contact avec nous.</h3>
              <img
                src="/images/bonhommedurancyyes.png"
                alt="Bonhomme Durancy"
                className="max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LoginPage;
