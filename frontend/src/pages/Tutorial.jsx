import React from "react";
import VideoSection from "../components/tutorial/VideoSection";
import StepByStepGuide from "../components/tutorial/StepByStepGuide";
import ExperienceForm from "../components/tutorial/ExperienceForm";
import RecentReviews from "../components/tutorial/RecentReviews";
import SimilarTutorials from "../components/tutorial/SimilarTutorials";
import ProductSidebar from "../components/tutorial/ProductSidebar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer"; // ✅ Footer ajouté

const Tutoriel = () => {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 pt-32">
        {/* Partie supérieure : vidéo + produits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <VideoSection />
          </div>
          <div className="lg:col-span-1">
            <ProductSidebar />
          </div>
        </div>

        {/* Étapes du tutoriel */}
        <StepByStepGuide />

        {/* Formulaire de feedback */}
        <ExperienceForm />

        {/* Avis récents */}
        <RecentReviews />

        {/* Tutoriels similaires */}
        <SimilarTutorials />
      </main>

      <Footer /> {/* ✅ Footer affiché en bas */}
    </>
  );
};

export default Tutoriel;
