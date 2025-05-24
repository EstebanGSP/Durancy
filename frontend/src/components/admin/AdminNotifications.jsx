import React from "react";
import { Bell, Eye, Trash } from "lucide-react";

const notifications = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu",
];

const AdminNotifications = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Notifications</h2>

      <div className="overflow-auto bg-white shadow-sm rounded-xl">
        <table className="min-w-full table-auto text-sm border-collapse">
          <tbody>
            {notifications.map((notif, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 w-12 text-purple-600">
                  <Bell size={20} />
                </td>
                <td className="px-4 py-4 text-gray-700">{notif}</td>
                <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                  <button className="bg-gray-100 text-gray-700 p-2 rounded-md hover:bg-gray-200">
                    <Eye size={16} />
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

export default AdminNotifications;
