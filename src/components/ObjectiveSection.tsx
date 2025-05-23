
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
              O Urutau Security foi concebido para revolucionar a forma como as equipes lidam com vulnerabilidades,
              combinando automação inteligente e análise contextual para:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 flex justify-center items-center w-10 h-10 rounded-full bg-primary/20 text-secondary mr-4 mt-1">
                  <Brain size={20} />
                </div>
                <p className="text-muted-foreground">
                  Executar automaticamente scripts de segurança (LinPEAS, BeRoot) em ambientes isolados e seguros
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex justify-center items-center w-10 h-10 rounded-full bg-primary/20 text-secondary mr-4 mt-1">
                  <Target size={20} />
                </div>
                <p className="text-muted-foreground">
                  Classificar vulnerabilidades com IA e gerar scripts de remediação automatizados
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex justify-center items-center w-10 h-10 rounded-full bg-primary/20 text-secondary mr-4 mt-1">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-muted-foreground">
                  Fornecer dashboards avançados com heatmaps e tendências para gestão eficiente de riscos
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
                    MVP Planejado
                  </h3>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>• Execução on-demand de scripts em container Docker</li>
                    <li>• Dashboard com lista de vulnerabilidades classificadas por IA</li>
                    <li>• Exportação de relatórios detalhados</li>
                    <li>• Integração com pipelines de desenvolvimento</li>
                  </ul>
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
