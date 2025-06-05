import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import VideoSection from "../components/tutorial/VideoSection";
import StepByStepGuide from "../components/tutorial/StepByStepGuide";
import ExperienceForm from "../components/tutorial/ExperienceForm";
import RecentReviews from "../components/tutorial/RecentReviews";
import SimilarTutorials from "../components/tutorial/SimilarTutorials";
import ProductSidebar from "../components/tutorial/ProductSidebar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Tutoriel = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const res = await axios.get(`https://api.durancy.fr/tutorials`);
        const found = res.data.find(t => t.id === parseInt(id));
        if (!found) throw new Error("Tutoriel introuvable");
        setTutorial(found);
      } catch (error) {
        console.error("Erreur lors du chargement du tutoriel :", error);
        setError(true);
      }
    };

    fetchTutorial();
  }, [id]);

  if (error) {
    return <div className="pt-32 text-center text-red-600">Tutoriel introuvable (404)</div>;
  }

  if (!tutorial) {
    return <div className="pt-32 text-center text-gray-600">Chargement...</div>;
  }

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <VideoSection tutorial={tutorial} />
          </div>
          <div className="lg:col-span-1">
            <ProductSidebar kitId={tutorial.kit_id} />
          </div>
        </div>

        <StepByStepGuide tutorial={tutorial} />
        <ExperienceForm tutorialId={tutorial.id} />
        <RecentReviews tutorialId={tutorial.id} />
        <SimilarTutorials currentId={tutorial.id} />
      </main>

      <Footer />
    </>
  );
};

export default Tutoriel;
