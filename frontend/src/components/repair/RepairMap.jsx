import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 48.8566,
  lng: 2.3522,
};

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
    <div className="relative w-full py-12 bg-[#9B59B6] overflow-hidden">
      {/* Bande décorative éclairs visible */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/whiteeclairspattern.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain", // ou "600px auto" si taille fixe souhaitée
          backgroundPosition: "center center",
        }}
      ></div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-white text-3xl font-bold mb-6">
          Localisation des Points de Réparation
        </h2>

        <div className="mb-10 shadow-lg overflow-hidden rounded-lg">
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
              {locations.map((loc, index) => (
                <Marker
                  key={index}
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
                    <p className="text-sm mb-2">📅 {selected.date} de {selected.hours}</p>
                    <button className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-md mb-2">
                      Réserver un créneau
                    </button>
                    <p className="text-xs text-red-600">
                      🔴 {selected.slots} créneaux disponibles
                    </p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Infos supplémentaires */}
        <div className="text-white text-sm px-6 py-10 font-medium">
          <p className="mb-4">Mise à jour automatique toutes les 2 semaines</p>

          <div className="flex items-center mb-6 flex-wrap gap-2">
            <span className="mr-2 font-semibold">Prochaine actualisation des points :</span>
            <input
              type="date"
              defaultValue="2025-07-20"
              className="bg-white text-black px-3 py-2 rounded shadow font-bold rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none"
            />
          </div>

          <div className="flex items-center flex-wrap gap-2">
            <label htmlFor="email" className="mr-2 font-semibold">
              Programmez un rappel automatique par mail :
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="px-16 py-2 text-white placeholder:text-gray-400 bg-transparent border-2 border-white rounded-md focus:outline-none rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none"
            />
            <button className="bg-white text-black font-light px-4 py-2 rounded-r shadow hover:bg-gray-100 transition rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-lg">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairMap;
