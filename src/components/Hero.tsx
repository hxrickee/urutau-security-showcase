
import React from 'react';
import { Shield, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern bg-[length:20px_20px] opacity-10"></div>
      
      {/* Animated blobs */}
      <div className="hero-blob w-96 h-96 bg-primary/30 top-1/4 -left-20 animate-pulse-glow"></div>
      <div className="hero-blob w-80 h-80 bg-secondary/30 bottom-1/4 -right-10 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      {/* Main Hero Content */}
      <div className="text-center z-10 max-w-3xl">
        <div className="flex justify-center mb-6">
          <Shield className="h-20 w-20 text-secondary animate-float" />
        </div>
        <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
          <span className="text-secondary">Urutau</span> Security
        </h1>
        <p className="font-roboto text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Segurança ofensiva automatizada com inteligência artificial para simulações em ambientes controlados
        </p>
        <button 
          onClick={scrollToAbout}
          className="btn btn-primary flex items-center mx-auto"
        >
          Descubra mais
          <ArrowDown className="ml-2 h-4 w-4" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
