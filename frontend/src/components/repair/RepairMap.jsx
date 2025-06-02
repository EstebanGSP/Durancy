// src/components/repair/RepairMap.jsx

import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { Link } from "react-router-dom";  

// Dimensions du conteneur de la carte
const containerStyle = {
  width: "100%",
  height: "500px",
};

// Centre par défaut (Paris)
const center = {
  lat: 48.8566,
  lng: 2.3522,
};

// Exemples de réparateurs (latitude, longitude, etc.)
const locations = [
  {
    lat: 48.8566,
    lng: 2.3522,
    label: "Réparateur A",
    address: "1 Imp. de la Paix, 75005 Paris",
    date: "27/05/2025",
    hours: "17h30 à 20h",
    slots: 0,
  },
  {
    lat: 48.861,
    lng: 2.34,
    label: "Réparateur B",
    address: "3 Rue Saint-Antoine, 75004 Paris",
    date: "29/05/2025",
    hours: "10h à 12h",
    slots: 3,
  },
  {
    lat: 48.85,
    lng: 2.36,
    label: "Réparateur C",
    address: "5 Rue Mouffetard, 75005 Paris",
    date: "30/05/2025",
    hours: "14h à 16h",
    slots: 1,
  },
];

const RepairMap = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative w-full pt-28 pb-56 bg-[#9B59B6] overflow-hidden -mb-36">
      {/* Bande décorative en background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/whiteeclairspattern.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      />

      {/* Contenu réel (titre + carte + infos) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Titre */}
        <h2 className="text-white text-3xl font-bold mb-6 text-center md:text-left">
          Localisation des Points de Réparation
        </h2>

        {/* Encadré blanc contenant la carte */}
        <div className="mb-10 shadow-lg overflow-hidden rounded-lg bg-white">
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            >
              {locations.map((loc, idx) => (
                <Marker
                  key={idx}
                  position={{ lat: loc.lat, lng: loc.lng }}
                  title={loc.label}
                  onClick={() => setSelected(loc)}
                />
              ))}

              {selected && (
                <InfoWindow
                  position={{ lat: selected.lat, lng: selected.lng }}
                  onCloseClick={() => setSelected(null)}
                >
                  <div className="p-2 max-w-[220px]">
                    <p className="font-semibold mb-1">📍 {selected.address}</p>
                    <p className="text-sm mb-2">
                      📅 {selected.date} de {selected.hours}
                    </p>

                    {/* Si vous voulez un bouton qui ouvre la page de réservation */}
                    <Link
                      to="/rdv/infos"
                      className="block text-center bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-md mb-2 hover:bg-purple-600 transition"
                    >
                      Réserver un créneau
                    </Link>

                    <p className="text-xs text-red-600">
                      🔴 {selected.slots} créneaux disponibles
                    </p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Section infos en bas */}
        <div className="text-white text-sm px-6 py-10 font-medium flex flex-col gap-6">
          <p className="mb-4 text-center md:text-left">
            Mise à jour automatique toutes les 2 semaines
          </p>

          {/* Sélecteur de date pour prochaines mises à jour */}
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6 gap-2">
            <span className="mr-2 font-semibold">Prochaine actualisation des points :</span>
            <input
              type="date"
              defaultValue="2025-07-20"
              className="bg-white text-black px-3 py-2 rounded shadow font-bold w-full md:w-auto"
            />
          </div>

          {/* Formulaire pour rappel par mail */}
          <div className="flex flex-col md:flex-row items-center md:items-start flex-wrap gap-2">
            <label htmlFor="email" className="mr-2 font-semibold text-center md:text-left">
              Programmez un rappel automatique par mail :
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="px-6 py-2 text-white placeholder:text-gray-400 bg-transparent border-2 border-white rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none focus:outline-none w-full max-w-xs md:w-auto"
            />
            <button className="bg-white text-black font-light px-4 py-2 rounded-r shadow hover:bg-gray-100 transition rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-lg mt-2 md:mt-0.5">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairMap;
