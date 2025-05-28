import { useEffect, useState } from "react";
import axios from "axios";

const TutorialList = ({ CardComponent }) => {
  const [tutorials, setTutorials] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/tutorials`)
      .then((res) => setTutorials(res.data))
      .catch((err) => {
        console.error("Erreur chargement tutoriels :", err);
        setError("Impossible de charger les tutoriels.");
      });
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {tutorials.map((tutorial) => (
        <CardComponent key={tutorial.id} tutorial={tutorial} />
      ))}
    </div>
  );
};

export default TutorialList;
