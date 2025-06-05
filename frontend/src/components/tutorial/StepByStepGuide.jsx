import React from "react";

const StepByStepGuide = ({ tutorial }) => {
  return (
    <section className="p-6 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Détails du tutoriel</h2>

      <div>
        <p className="text-gray-700 whitespace-pre-line">{tutorial.description}</p>
      </div>

      <div className="text-sm text-blue-600 underline">
        Kit compatible : #{tutorial.kit_id}
      </div>
    </section>
  );
};

export default StepByStepGuide;
