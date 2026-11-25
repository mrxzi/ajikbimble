import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramSection from './components/ProgramSection';
import PillarsSection from './components/PillarsSection';
import Calculator from './components/PhysicalEligibilityCalculator';
import FacilitiesSection from './components/FacilitiesSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="min-h-screen bg-warm-50 font-sans">
      <Navbar onOpenModal={() => setModal(true)} />
      <main>
        <Hero />
        <ProgramSection />
        <PillarsSection />
        <Calculator />
        <FacilitiesSection />
        <PricingSection onOpenModal={() => setModal(true)} />
        <TestimonialsSection />
        <FaqSection />
        <CtaBanner onOpenModal={() => setModal(true)} />
      </main>
      <Footer />
      <RegistrationModal isOpen={modal} onClose={() => setModal(false)} />
      <FloatingWhatsApp />
    </div>
  );
}
