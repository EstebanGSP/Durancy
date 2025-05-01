import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 mt-10 text-sm">
      {[1, 2, 3, 4, 5, 6].map((page) => (
        <button
          key={page}
          className="px-3 py-1 border rounded hover:bg-gray-100 transition"
        >
          {page}
        </button>
      ))}
      <span className="px-2">...</span>
      <button className="px-3 py-1 border rounded hover:bg-gray-100 transition">
        35
      </button>
    </div>
  );
};

export default Pagination;
