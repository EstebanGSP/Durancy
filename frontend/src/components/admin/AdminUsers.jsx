import React from "react";
import { Pencil, Trash } from "lucide-react";

const users = [
  {
    name: "Jerome Bell",
    email: "emailtest@test.fr",
    since: "04/02/2025",
    avatar: "/assets/user1.jpg",
  },
  {
    name: "Albert Flores",
    email: "emailtest@test.fr",
    since: "04/02/2025",
    avatar: "/assets/user2.jpg",
  },
  {
    name: "Darlene Robertson",
    email: "emailtest@test.fr",
    since: "04/02/2025",
    avatar: "/assets/user3.jpg",
  },
  {
    name: "Cody Fisher",
    email: "emailtest@test.fr",
    since: "04/02/2025",
    avatar: "/assets/user4.jpg",
  },
  {
    name: "Theresa Webb",
    email: "emailtest@test.fr",
    since: "04/02/2025",
    avatar: "/assets/user5.jpg",
  },
];

const AdminUsers = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Utilisateurs</h2>

      <input
        type="text"
        placeholder="🔍 Recherche utilisateur"
        className="w-full max-w-sm px-4 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-purple-400"
      />

      <div className="overflow-auto bg-white shadow-sm rounded-xl">
        <table className="min-w-full table-auto text-sm text-left border-collapse">
          <thead className="bg-gray-50 text-gray-700 font-medium">
            <tr>
              <th className="px-6 py-4">Photo</th>
              <th className="px-6 py-4">Nom</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Membre depuis</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="px-6 py-3">
                  <img
                    src={u.avatar}
                    alt={u.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-3 font-medium">{u.name}</td>
                <td className="px-6 py-3">{u.email}</td>
                <td className="px-6 py-3">{u.since}</td>
                <td className="px-6 py-3 flex justify-end gap-2">
                  <button className="bg-gray-100 text-gray-600 p-2 rounded-md hover:bg-gray-200">
                    <Pencil size={16} />
                  </button>
                  <button className="bg-red-100 text-red-500 p-2 rounded-md hover:bg-red-200">
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
