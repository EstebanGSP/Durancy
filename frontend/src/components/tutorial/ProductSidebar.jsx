import React from "react";

const ProductSidebar = () => {
  return (
    <aside className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Produits associés</h2>
      <div className="space-y-4">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="border rounded p-4 bg-white shadow-sm hover:shadow transition"
          >
            <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
            <h3 className="text-sm font-bold">Titre de l'article/kit</h3>
            <p className="text-sm text-gray-600">
              Description de l'article Lorem ipsum dolor sit amet...
            </p>
            <div className="mt-2 font-semibold">19,90 €</div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2 text-sm">
        <button className="w-full border p-2 rounded hover:bg-gray-200 transition">
          Besoin d’aide ? Contactez notre équipe
        </button>
        <button className="w-full border p-2 rounded hover:bg-gray-200 transition">
          Pas le bon tuto ? Retournez à la liste des tutoriels
        </button>
      </div>
    </aside>
  );
};

export default ProductSidebar;
