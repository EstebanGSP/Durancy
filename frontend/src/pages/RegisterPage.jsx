import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RegisterForm from "../components/account/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 pt-32 pb-16">
        <div className="bg-gray-100 rounded-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Formulaire */}
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">S’inscrire</h1>
            <RegisterForm />
          </div>

          {/* Bloc visuel */}
          <div className="hidden md:flex items-center justify-center bg-white">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-600">Bienvenue chez</h2>
              <p className="text-2xl font-bold text-gray-800 mt-1">Durancy</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RegisterPage;
