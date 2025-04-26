import HeaderLanding from "../components/common/HeaderLanding";
import FooterLanding from "../components/common/FooterLanding";
import HeroSection from "../components/landing/HeroSection";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import WhyRepairSection from "../components/landing/WhyRepairSection";
import ContactSection from "../components/landing/ContactSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderLanding />
      <main className="flex-1">
        <HeroSection />
        <WhyRepairSection />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <FooterLanding />
    </div>
  );
}
