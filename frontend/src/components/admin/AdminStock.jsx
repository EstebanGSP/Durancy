import React from "react";

const stockItems = [
  {
    id: 1,
    image: "/images/logo-lg.png",
    name: "Kit réparation écran iPhone 13",
    quantity: "50 p",
    sold: 12,
    ht: "5,00 €",
    ttc: "6,00 €",
    price: "12,00 €",
  },
  {
    id: 2,
    image: "/images/logo-asus.png",
    name: "Kit réparation écran iPhone 13",
    quantity: "20 p",
    sold: 2,
    ht: "5,00 €",
    ttc: "6,00 €",
    price: "12,00 €",
  },
  {
    id: 3,
    image: "/images/logo-pioneer.png",
    name: "Kit réparation écran iPhone 13",
    quantity: "10 p",
    sold: 1,
    ht: "5,00 €",
    ttc: "6,00 €",
    price: "12,00 €",
  },
];

const AdminStock = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Stock</h2>
        <button className="text-green-600 hover:text-green-700 flex items-center gap-1">
          <span className="text-xl">➕</span> Ajouter un produit
        </button>
      </div>

      <div className="overflow-auto rounded-xl bg-white shadow-sm">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 font-semibold">
            <tr>
              <th className="px-6 py-4">Produit</th>
              <th className="px-6 py-4">Quantité</th>
              <th className="px-6 py-4">Déjà vendus</th>
              <th className="px-6 py-4">Prix HT</th>
              <th className="px-6 py-4">Prix TTC</th>
              <th className="px-6 py-4">Prix vente</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {stockItems.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={item.image} alt="product" className="w-8 h-8 rounded-full object-contain" />
                  <span>{item.name}</span>
                </td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">{item.sold}</td>
                <td className="px-6 py-4">{item.ht}</td>
                <td className="px-6 py-4">{item.ttc}</td>
                <td className="px-6 py-4 font-semibold">{item.price}</td>
                <td className="px-6 py-4 space-x-2">
                  <button className="px-3 py-1 border rounded-md text-sm text-gray-700 hover:bg-gray-100">
                    Modifier
                  </button>
                  <button className="px-3 py-1 bg-red-100 text-red-600 rounded-md text-sm hover:bg-red-200">
                    Supprimer
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

export default AdminStock;
