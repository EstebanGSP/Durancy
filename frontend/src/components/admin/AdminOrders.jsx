import React from "react";

const orders = [
  { id: "00001", name: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "04 Sep 2019", type: "Electric", status: "Completed" },
  { id: "00002", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "28 May 2019", type: "Book", status: "Processing" },
  { id: "00003", name: "Darrell Caldwell", address: "8587 Frida Ports", date: "23 Nov 2019", type: "Medicine", status: "Rejected" },
  { id: "00004", name: "Gilbert Johnston", address: "768 Destiny Lake Suite 600", date: "05 Feb 2019", type: "Mobile", status: "Completed" },
  { id: "00005", name: "Alan Cain", address: "042 Mylene Throughway", date: "29 Jul 2019", type: "Watch", status: "Processing" },
  { id: "00006", name: "Alfred Murray", address: "543 Weinmann Mountain", date: "15 Aug 2019", type: "Medicine", status: "Completed" },
  { id: "00007", name: "Maggie Sullivan", address: "New Scottieberg", date: "21 Dec 2019", type: "Watch", status: "Processing" },
  { id: "00008", name: "Rosie Todd", address: "New Jon", date: "30 Apr 2019", type: "Medicine", status: "On Hold" },
  { id: "00009", name: "Dollie Hines", address: "124 Lyla Forge Suite 975", date: "09 Jan 2019", type: "Book", status: "In Transit" },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-600";
    case "Processing":
      return "bg-purple-100 text-purple-600";
    case "Rejected":
      return "bg-red-100 text-red-500";
    case "On Hold":
      return "bg-orange-100 text-orange-500";
    case "In Transit":
      return "bg-blue-100 text-blue-500";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const AdminOrders = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Commandes</h2>

      {/* Filtres (UI uniquement) */}
      <div className="bg-white shadow-sm rounded-xl p-4 flex flex-wrap gap-4 items-center">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md">
          🧰 Filtrer par
        </button>
        <select className="px-3 py-2 border rounded-md">
          <option>Date</option>
        </select>
        <select className="px-3 py-2 border rounded-md">
          <option>Type</option>
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
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">NAME</th>
              <th className="px-6 py-3">ADDRESS</th>
              <th className="px-6 py-3">DATE</th>
              <th className="px-6 py-3">TYPE</th>
              <th className="px-6 py-3">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-3">{order.id}</td>
                <td className="px-6 py-3">{order.name}</td>
                <td className="px-6 py-3">{order.address}</td>
                <td className="px-6 py-3">{order.date}</td>
                <td className="px-6 py-3">{order.type}</td>
                <td className="px-6 py-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(order.status)}`}>
                    {order.status}
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

export default AdminOrders;
