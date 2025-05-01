import React from "react";

const StepByStepGuide = () => {
  const steps = [
    {
      title: "Étape 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Étape 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      list: ["List", "List", "List", "List"],
    },
    {
      title: "Étape 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      title: "Étape 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      title: "Étape 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <section className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Suivre les étapes</h2>
      {steps.map((step, index) => (
        <div key={index}>
          <h3 className="font-bold mb-1">{step.title} -</h3>
          <p className="text-gray-700 mb-2">{step.description}</p>
          {step.list && (
            <ul className="list-disc list-inside text-gray-600">
              {step.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className="text-sm text-blue-600 underline">Kit compatible</div>
    </section>
  );
};

export default StepByStepGuide;
