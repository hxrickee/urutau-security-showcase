
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import ObjectiveSection from '@/components/ObjectiveSection';
import DisclaimerSection from '@/components/DisclaimerSection';
import AuthorSection from '@/components/AuthorSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Urutau Security | IA para Segurança Ofensiva";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <AboutSection />
      <TechnologiesSection />
      <ObjectiveSection />
      <DisclaimerSection />
      <AuthorSection />
      <Footer />
    </div>
  );
};

export default Index;
