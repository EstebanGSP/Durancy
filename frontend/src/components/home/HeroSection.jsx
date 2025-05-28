import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const mots = ["confiance", "simplicité", "autonomie", "rapidité", "sérénité"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % mots.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#9B59B6CC] py-20 w-full">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">

        {/* Texte à gauche */}
        <div className="text-center md:text-left pl-24 w-full md:w-1/1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black flex gap-2">
            <span className="italic">Réparez en</span>
            <span className="italic">toute</span>
            <div className="relative inline-flex h-[3.2rem] align-baseline overflow-hidden mb-10">
              <div
                className="flex flex-col justify-start transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateY(-${index * 3}rem)`,
                }}
              >
                {mots.map((mot, i) => (
                  <span
                    key={i}
                    className="h-[3.2rem] text-white italic font-bold text-4xl md:text-5xl leading-[3.2rem]"
                  >
                    {mot}
                  </span>
                ))}
              </div>
            </div>
          </h1>

          {/* Barre de recherche */}
          <div className="flex items-center bg-white w-full rounded-tl-none rounded-[40px] overflow-hidden shadow-lg py-10">
            <input
              type="text"
              placeholder="Choisissez votre appareil (ex : iPhone 15)"
              className="flex-grow px-16 py-6 text-gray-700 focus:outline-none text-xl"
            />
            <button className="group flex items-center gap-2 bg-gradient-to-r from-[#9B59B6] to-[#442750] hover:opacity-90 text-white font-semibold px-20 py-4 rounded-[40px] text-lg mr-10 transition-all duration-300">
              <span className="transform group-hover:-translate-x-1 transition-all duration-300">
                Recherche
              </span>
              <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                &gt;
              </span>
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Image à droite */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-end items-end">
          <img
            src="/images/bonhommedurancy.png"
            alt="Durancy Hero"
            className="w-[500px] md:w-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
