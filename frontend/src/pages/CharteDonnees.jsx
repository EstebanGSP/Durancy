// src/pages/CharteDonnees.jsx
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function CharteDonnees() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-24 px-6 bg-white text-gray-800">
        <h1 className="text-3xl font-bold text-[#9B59B6] mb-6">Charte de protection des données</h1>
        <p className="mb-4">
          Nous nous engageons à protéger vos données personnelles. Les informations collectées sont utilisées uniquement dans le cadre du service Durancy.
        </p>
        <p className="mb-4">
          Conformément au RGPD, vous pouvez demander à consulter, modifier ou supprimer vos données à tout moment.
        </p>
        <p className="mb-4">
          Pour toute demande, contactez-nous via la page <a href="/contact" className="text-[#9B59B6] underline">Contact</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
