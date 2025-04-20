import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyRepairSection from './components/WhyRepairSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <WhyRepairSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
