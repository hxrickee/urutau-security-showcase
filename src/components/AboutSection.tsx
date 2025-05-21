
import React from 'react';
import { Ai, Database, Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="container-section">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/4 -z-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      
        <h2 className="section-title">Sobre o Projeto</h2>
        
        <div className="card-gradient rounded-lg p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 flex justify-center items-center w-16 h-16 rounded-full bg-primary/20 text-secondary">
              <Ai size={32} />
            </div>
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                O <span className="text-secondary font-medium">Urutau Security</span> é uma ferramenta de segurança ofensiva baseada em inteligência artificial. 
                Ela automatiza ataques controlados em ambientes de teste (como máquinas do VulnHub) para simular 
                como hackers podem escalar privilégios e obter acesso root.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="card-gradient rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-secondary mr-3" />
              <h3 className="font-poppins font-medium text-xl">Automatização Inteligente</h3>
            </div>
            <p className="text-muted-foreground">
              O sistema usa a API da OpenAI para analisar vulnerabilidades rapidamente e 
              tomar decisões em tempo real, eliminando o trabalho manual na fase de reconhecimento.
            </p>
          </div>
          
          <div className="card-gradient rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-secondary mr-3" />
              <h3 className="font-poppins font-medium text-xl">Segurança Controlada</h3>
            </div>
            <p className="text-muted-foreground">
              Projetado exclusivamente para ambientes de teste, o Urutau integra ferramentas 
              como LinPEAS e BeRoot para identificar e explorar vulnerabilidades em segundos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
