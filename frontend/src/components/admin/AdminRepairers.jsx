import React from "react";

const repairs = [
  {
    id: "00001",
    name: "Daniel LADRON",
    address: "6391 Elgin St. Celina, Delaware 10299",
    date: "18/06/2023",
    hours: "5 heures",
    status: "Complet",
  },
  {
    id: "00002",
    name: "Kevin CLYDE",
    address: "979 Immanuel Ferry Suite 526",
    date: "18/06/2023",
    hours: "5 heures",
    status: "En cours",
  },
  {
    id: "00003",
    name: "Daniel LADRON",
    address: "8587 Frida Ports",
    date: "18/06/2023",
    hours: "5 heures",
    status: "Non accompli",
  },
  {
    id: "00004",
    name: "Daniel LADRON",
    address: "768 Destiny Lake Suite 600",
    date: "18/06/2023",
    hours: "5 heures",
    status: "Complet",
  },
  {
    id: "00005",
    name: "Kevin CLYDE",
    address: "042 Mylene Throughway",
    date: "18/06/2023",
    hours: "5 heures",
    status: "En cours",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Complet":
      return "bg-green-100 text-green-600";
    case "En cours":
      return "bg-purple-100 text-purple-600";
    case "Non accompli":
      return "bg-red-100 text-red-500";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const AdminRepairers = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Réparateur</h2>

      {/* Filtres (UI seulement) */}
      <div className="bg-white shadow-sm rounded-xl p-4 flex flex-wrap gap-4 items-center">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md">
          🧰 Filtrer par
        </button>
        <select className="px-3 py-2 border rounded-md">
          <option>Date</option>
        </select>
        <select className="px-3 py-2 border rounded-md">
          <option>NOM</option>
        </select>
        <select className="px-3 py-2 border rounded-md">
          <option>Status</option>
        </select>
        <button className="text-red-500 ml-auto hover:underline">🔄 Reset Filtre</button>
      </div>

      {/* Tableau */}
      <div className="overflow-auto bg-white shadow-sm rounded-xl">
        <table className="min-w-full table-auto text-sm text-left border-collapse">
          <thead className="bg-gray-50 text-gray-700 font-medium">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">NOM</th>
              <th className="px-6 py-4">ADRESSE</th>
              <th className="px-6 py-4">DATE</th>
              <th className="px-6 py-4">HEURES</th>
              <th className="px-6 py-4">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {repairs.map((repair) => (
              <tr key={repair.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-3">{repair.id}</td>
                <td className="px-6 py-3">{repair.name}</td>
                <td className="px-6 py-3">{repair.address}</td>
                <td className="px-6 py-3">{repair.date}</td>
                <td className="px-6 py-3">{repair.hours}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(repair.status)}`}
                  >
                    {repair.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRepairers;
