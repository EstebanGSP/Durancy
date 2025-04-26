import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroSection from "../components/home/HeroSection";
import PopularKits from "../components/home/PopularKits";
import RepairService from "../components/home/RepairService";
import RecentTutorials from "../components/home/RecentTutorials";
import Commitment from "../components/home/Commitment";
import Newsletter from "../components/home/Newsletter";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PopularKits />
        <RepairService />
        <RecentTutorials />
        <Commitment />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
