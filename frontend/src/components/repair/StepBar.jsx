import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const StepBar = ({ activeStep = 1 }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-32 bg-gray-100 py-6 px-4 md:px-12 flex items-center justify-between flex-wrap">
      <div className="flex gap-8 w-full md:w-auto justify-center">
        {[1, 2, 3].map((step) => {
          const isActive = step === activeStep;
          const stepText =
            step === 1
              ? "Infos personnelles"
              : step === 2
              ? "Confirmation RDV"
              : "Récapitulatif";

          return (
            <div key={step} className="text-center">
              <div
                className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center font-medium ${
                  isActive ? "bg-purple-600 text-white" : "bg-purple-200 text-white"
                }`}
              >
                {step}
              </div>
              <p
                className={`text-sm mt-1 ${
                  isActive ? "text-black font-semibold" : "text-gray-400"
                }`}
              >
                {stepText}
              </p>
              <div
                className={`mt-1 h-[2px] ${
                  isActive ? "bg-purple-600" : "bg-purple-200"
                }`}
              />
            </div>
          );
        })}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-4 md:mt-0 flex items-center gap-2 border border-purple-500 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-100 transition"
      >
        <ArrowLeft size={16} />
        Retour
      </button>
    </div>
  );
};

export default StepBar;
