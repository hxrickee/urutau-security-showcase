
import React from 'react';
import { User, Github, Linkedin, Mail } from 'lucide-react';

const AuthorSection = () => {
  const authors = [
    {
      name: "Pedro Henrique",
      title: "Desenvolvedor & Especialista em Segurança",
    },
    {
      name: "Clara Rangel",
      title: "Engenheira de Segurança",
    },
    {
      name: "Miller",
      title: "Arquiteto de Soluções",
    },
    {
      name: "Maria Gabrielly",
      title: "Analista de DevSecOps",
    },
    {
      name: "Larissa Gomes",
      title: "Especialista em IA & Automação",
    }
  ];

  return (
    <section id="author" className="container-section">
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <h2 className="section-title text-center">Equipe de Desenvolvedores</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {authors.map((author, index) => (
            <div key={index} className="flex flex-col items-center p-6 card-gradient rounded-lg">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <User size={32} className="text-secondary" />
              </div>
              
              <h3 className="font-poppins font-bold text-xl text-white mb-1">{author.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 text-center">{author.title}</p>
              
              <div className="flex gap-3 mt-2">
                <a href="#" className="p-2 rounded-full bg-muted hover:bg-muted/80 text-white">
                  <Github size={16} />
                </a>
                <a href="#" className="p-2 rounded-full bg-muted hover:bg-muted/80 text-white">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="p-2 rounded-full bg-muted hover:bg-muted/80 text-white">
                  <Mail size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
