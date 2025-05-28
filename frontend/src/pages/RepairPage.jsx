import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RepairMap from "../components/repair/RepairMap";

const RepairPage = () => {
  return (
    <>
      <Header />

      <main className="pt-32">
        {/* On laisse RepairMap gérer le fond lui-même */}
        <RepairMap />
      </main>

      <Footer />
    </>
  );
};

export default RepairPage;
