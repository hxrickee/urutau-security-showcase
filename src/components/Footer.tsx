
import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-secondary" />
            <span className="ml-2 text-white font-poppins font-bold text-xl">Urutau Security</span>
          </div>
          
          <p className="text-muted-foreground text-center mb-6">
            Segurança ofensiva com inteligência artificial
          </p>
          
          <div className="w-24 h-px bg-border mb-6"></div>
          
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} Urutau Security. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
