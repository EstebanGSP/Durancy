import React from "react";

const reviews = [
  { name: "Ralph Edwards", initials: "RE" },
  { name: "Devon Lane", initials: "DL" },
  { name: "Albert Flores", initials: "AF" },
  { name: "Arlene McCoy", initials: "AM" },
  { name: "Guy Hawkins", initials: "GH" },
  { name: "Wade Warren", initials: "WW" },
  { name: "Leslie Alexander", initials: "LA" },
  { name: "Ronald Richards", initials: "RR" },
  { name: "Cameron Williamson", initials: "CW" },
];

const AdminReviews = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Avis</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {reviews.map((user, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-400 text-white font-bold">
                {user.initials}
              </div>
              <h3 className="font-semibold">{user.name}</h3>
            </div>

            <p className="text-sm text-gray-600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected.
            </p>

            <div className="flex gap-2">
              <button className="bg-green-100 text-green-700 px-4 py-1 rounded-md text-sm hover:bg-green-200">
                Valider
              </button>
              <button className="bg-red-100 text-red-500 px-4 py-1 rounded-md text-sm hover:bg-red-200">
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReviews;
