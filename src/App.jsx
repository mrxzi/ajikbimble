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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleOpenModal = (pkgName = '') => {
    setSelectedPackage(pkgName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <Navbar onOpenModal={handleOpenModal} />
      <main>
        <Hero />
        <ProgramSection />
        <PillarsSection />
        <Calculator />
        <FacilitiesSection />
        <PricingSection onSelectPackage={handleOpenModal} />
        <TestimonialsSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPackage={selectedPackage}
      />
      <FloatingWhatsApp />
    </div>
  );
}
