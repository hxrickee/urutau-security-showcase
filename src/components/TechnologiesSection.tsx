
import React from 'react';
import { Code, Database, Server, Shield, Bot, Activity } from 'lucide-react';

const TechnologiesSection = () => {
  const technologies = [
    { 
      name: "Python", 
      icon: <Code className="h-10 w-10 text-secondary mb-4" />,
      description: "Linguagem base para o desenvolvimento da ferramenta"
    },
    { 
      name: "Docker", 
      icon: <Server className="h-10 w-10 text-secondary mb-4" />,
      description: "Containerização para ambientes isolados"
    },
    { 
      name: "API da OpenAI", 
      icon: <Bot className="h-10 w-10 text-secondary mb-4" />,
      description: "Motor de IA para tomada de decisões"
    },
    { 
      name: "LinPEAS / BeRoot", 
      icon: <Shield className="h-10 w-10 text-secondary mb-4" />,
      description: "Ferramentas para escalada de privilégios"
    },
    { 
      name: "PwnTools", 
      icon: <Database className="h-10 w-10 text-secondary mb-4" />,
      description: "Framework para exploração"
    }
  ];

  return (
    <section id="technologies" className="container-section bg-muted/30">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute top-1/2 right-1/4 -z-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <h2 className="section-title">Tecnologias Utilizadas</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              {tech.icon}
              <h3 className="font-poppins font-medium text-xl text-white mb-2">{tech.name}</h3>
              <p className="text-center text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
