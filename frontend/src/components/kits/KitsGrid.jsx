import React, { useEffect, useState } from "react";
import KitCard from "./KitCard";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const KitsGrid = () => {
  const [kits, setKits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchKits = async () => {
      try {
        const res = await axios.get(`${API_URL}/kits`);
        setKits(res.data);
      } catch (err) {
        console.error("Erreur chargement kits :", err);
        setError("Erreur lors du chargement des kits.");
      } finally {
        setLoading(false);
      }
    };

    fetchKits();
  }, []);

  if (loading) return <p>Chargement des kits...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {kits.map((kit) => (
        <KitCard key={kit.id || kit._id} kit={kit} />
      ))}
    </div>
  );
};

export default KitsGrid;
