
import React from 'react';
import { Target, Brain, ShieldCheck } from 'lucide-react';

const ObjectiveSection = () => {
  return (
    <section id="objective" className="container-section">
      <div className="relative">
        <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="section-title text-left">Objetivo do Projeto</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O Urutau Security foi concebido para demonstrar como a inteligência artificial 
              pode ser aplicada ao campo da segurança ofensiva, criando um sistema capaz de:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 flex justify-center items-center w-10 h-10 rounded-full bg-primary/20 text-secondary mr-4 mt-1">
                  <Brain size={20} />
                </div>
                <p className="text-muted-foreground">
                  Automatizar testes de segurança de forma inteligente e adaptativa
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex justify-center items-center w-10 h-10 rounded-full bg-primary/20 text-secondary mr-4 mt-1">
                  <Target size={20} />
                </div>
                <p className="text-muted-foreground">
                  Facilitar o aprendizado sobre vulnerabilidades em ambientes controlados
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex justify-center items-center w-10 h-10 rounded-full bg-primary/20 text-secondary mr-4 mt-1">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-muted-foreground">
                  Servir como ferramenta de pesquisa e desenvolvimento para métodos avançados de detecção de falhas
                </p>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <ShieldCheck size={80} className="mx-auto text-secondary mb-6" />
                  <h3 className="font-poppins font-medium text-2xl text-white mb-4">
                    Segurança através do conhecimento
                  </h3>
                  <p className="text-muted-foreground">
                    Transformando pesquisa em proteção através de simulações seguras e controladas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
