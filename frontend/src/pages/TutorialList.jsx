import { useEffect, useState } from "react";
import axios from "axios";
import TutorialCard from "../components/tutorial/TutorialCard";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const TutorialList = () => {
  const [tutorials, setTutorials] = useState([]);
  const [filteredTutorials, setFilteredTutorials] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/tutorials`)
      .then((res) => {
        setTutorials(res.data);
        setFilteredTutorials(res.data);
      })
      .catch((err) => {
        console.error("Erreur chargement tutoriels :", err);
        setError("Impossible de charger les tutoriels.");
      });
  }, []);

  // 🔍 Filtrage dynamique
  useEffect(() => {
    let filtered = tutorials;

    if (search) {
      filtered = filtered.filter((tut) =>
        tut.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (difficulty) {
      filtered = filtered.filter((tut) => tut.difficulty === difficulty);
    }

    if (deviceType) {
      filtered = filtered.filter((tut) => tut.deviceType === deviceType);
    }

    setFilteredTutorials(filtered);
  }, [search, difficulty, deviceType, tutorials]);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-32">
        <h1 className="text-3xl font-bold mb-8">Tous les tutoriels</h1>

        {/* 🔽 Barres de filtrage */}
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
          <select
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
            className="border px-3 py-2 rounded-md"
          >
            <option value="">Type d'appareil 🔽</option>
            <option value="iphone">iPhone</option>
            <option value="ipad">iPad</option>
            <option value="android">Android</option>
            <option value="pc">PC</option>
          </select>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="border px-3 py-2 rounded-md"
          >
            <option value="">Difficulté 🔽</option>
            <option value="Facile">Facile</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Difficile">Difficile</option>
          </select>

          <input
            type="text"
            placeholder="🔍 Recherche"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded-md w-full md:w-64"
          />
        </div>

        {/* 🔄 Liste des tutoriels */}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TutorialList;
