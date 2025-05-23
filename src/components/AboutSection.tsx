
import React from 'react';
import { Bot, Database, Shield } from 'lucide-react';

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
              <Bot size={32} />
            </div>
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                O <span className="text-secondary font-medium">Urutau Security</span> é uma plataforma de automação de análise de vulnerabilidades e pentest baseada em nuvem,
                que permite a equipes de segurança e DevOps detectar, classificar e remediar falhas de forma contínua e escalável. Integrando IA com
                ferramentas de segurança tradicionais para transformar o processo de SecOps.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="card-gradient rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-secondary mr-3" />
              <h3 className="font-poppins font-medium text-xl">Problemas Solucionados</h3>
            </div>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5">
              <li>Redução do tempo gasto por equipes executando scripts manualmente</li>
              <li>Unificação entre varredura, análise contextual e remediação automatizada</li>
              <li>Integração de segurança ao pipeline de desenvolvimento ("shift-left")</li>
              <li>Feedback em tempo real e dashboards unificados para gestão de riscos</li>
            </ul>
          </div>
          
          <div className="card-gradient rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-secondary mr-3" />
              <h3 className="font-poppins font-medium text-xl">Público-Alvo</h3>
            </div>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5">
              <li>Equipes de SecOps / Red Team</li>
              <li>DevOps / Engenheiros de Confiabilidade (SRE)</li>
              <li>Gerentes de TI e CISOs</li>
              <li>Pesquisa e Desenvolvimento em Cibersegurança</li>
              <li>Auditoria e Compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
