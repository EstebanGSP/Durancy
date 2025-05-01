import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import LoginForm from "../components/account/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 pt-32 pb-16">
        <div className="bg-gray-100 rounded-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Formulaire */}
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Se connecter</h1>
            <LoginForm />
          </div>

          {/* Bloc de droite */}
          <div className="hidden md:flex items-center justify-center bg-white">
            <h2 className="text-xl font-semibold text-center text-gray-600">
              Bienvenue chez <span className="font-bold text-gray-800">Durancy</span>
            </h2>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LoginPage;
