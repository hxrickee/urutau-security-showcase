
import React from 'react';
import { User, Github, Linkedin, Mail } from 'lucide-react';

const AuthorSection = () => {
  return (
    <section id="author" className="container-section">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <h2 className="section-title text-center">Autor</h2>
        
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6">
            <User size={40} className="text-secondary" />
          </div>
          
          <h3 className="font-poppins font-bold text-2xl text-white mb-2">Pedro Henrique</h3>
          <p className="text-muted-foreground text-lg mb-6">Desenvolvedor & Especialista em Segurança</p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a href="#" className="btn bg-muted hover:bg-muted/80 text-white flex items-center gap-2">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href="#" className="btn bg-muted hover:bg-muted/80 text-white flex items-center gap-2">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="btn bg-muted hover:bg-muted/80 text-white flex items-center gap-2">
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
