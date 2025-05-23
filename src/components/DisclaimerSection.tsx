
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const DisclaimerSection = () => {
  return (
    <section id="disclaimer" className="container-section bg-muted/30">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -z-10 w-full h-full bg-red-500/5 rounded-lg blur-3xl"></div>
        
        <h2 className="section-title text-center">Aviso Legal</h2>
        
        <div className="card-gradient border-red-500/30 rounded-lg p-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-red-500/20 mb-6">
              <AlertTriangle size={40} className="text-red-500" />
            </div>
            
            <h3 className="font-poppins font-medium text-2xl text-white mb-4">
              Uso Responsável
            </h3>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Esta ferramenta deve ser usada <span className="text-white font-medium">somente em ambientes controlados</span> e com 
              <span className="text-white font-medium"> permissão explícita</span>. Nunca utilize em sistemas reais sem autorização. 
              O uso indevido é crime e pode gerar consequências legais.
            </p>
            
            <div className="mt-4 p-4 bg-muted rounded-lg border border-border mb-4">
              <p className="text-muted-foreground italic">
                "O Urutau Security foi desenvolvido exclusivamente para fins educacionais, de pesquisa 
                e para uso por profissionais de segurança em ambientes autorizados."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Conformidade Legal</h4>
                <p className="text-sm text-muted-foreground">
                  O uso desta ferramenta deve observar as leis de segurança cibernética
                  e proteção de dados aplicáveis, incluindo LGPD e GDPR quando relevante.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Escopo de Uso</h4>
                <p className="text-sm text-muted-foreground">
                  Todas as atividades de teste devem ser limitadas ao escopo contratado
                  e documentadas formalmente antes da execução.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
