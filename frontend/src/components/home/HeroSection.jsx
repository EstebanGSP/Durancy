import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const mots = ["confiance", "simplicité", "autonomie", "rapidité", "sérénité"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % mots.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#9B59B6CC] pt-16 w-full px-4 sm:px-8 flex flex-row">
      <div className="w-full pt-32 pb-20 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Texte à gauche */}
        <div className="text-center md:text-left w-full md:w-1/1 px-2 sm:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-black flex flex-wrap justify-center md:justify-start gap-2">
            <span className="italic">Réparez en</span>
            <span className="italic">toute</span>
            <div className="relative inline-flex h-[3.2rem] align-baseline overflow-hidden mb-10 pr-2">
              <div
                className="flex flex-col justify-start transition-transform duration-500 ease-in-out gap-y-2"
                style={{
                  transform: `translateY(-${index * 3.5}rem)`,
                }}
              >
                {mots.map((mot, i) => (
                  <span
                    key={i}
                    className="h-[3.2rem] text-white italic font-bold text-3xl sm:text-4xl md:text-5xl leading-[3.2rem]"
                  >
                    {mot}
                  </span>
                ))}
              </div>
            </div>
          </h1>

          {/* Barre de recherche */}
          <div className="flex flex-col sm:flex-row items-center bg-white w-full rounded-tl-none rounded-[40px] overflow-hidden shadow-lg py-8 px-4 sm:px-8 gap-4">
            <input
              type="text"
              placeholder="Choisissez votre appareil (ex : iPhone 15)"
              className="w-full sm:flex-grow px-4 sm:px-6 py-3 text-gray-700 focus:outline-none text-base sm:text-xl"
            />
            <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#9B59B6] to-[#442750] hover:opacity-90 text-white font-semibold px-6 sm:px-20 py-3 sm:py-4 rounded-[40px] text-base sm:text-lg transition-all duration-300">
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
      </div>
    {/* ✅ Image à droite, alignée en bas */}
  <div className="hidden md:flex w-full md:w-1/2 justify-center md:justify-end items-end">
    <img
      src="/images/bonhommedurancy.png"
      alt="Durancy Hero"
      className="w-64 sm:w-80 md:w-[500px] object-contain self-end"
    />
  </div>
    </section>
  );
};

export default HeroSection;