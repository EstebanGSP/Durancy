// src/pages/MentionsLegales.jsx
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-24 px-6 bg-white text-gray-800">
        <h1 className="text-3xl font-bold text-[#9B59B6] mb-6">Mentions légales</h1>
        <p className="mb-4">
          Le site Durancy est édité par la société Durancy, domiciliée à Paris, France.
        </p>
        <p className="mb-4">
          Directeur de publication : Esteban Gaspar. Hébergeur : OVH, 2 rue Kellermann, 59100 Roubaix.
        </p>
        <p className="mb-4">
          Ce site est soumis au droit français. Pour toute question, vous pouvez nous contacter via la page <a href="/contact" className="text-[#9B59B6] underline">Contact</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
