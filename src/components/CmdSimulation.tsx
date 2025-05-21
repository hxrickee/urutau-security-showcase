
import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

const CmdSimulation = () => {
  const [text, setText] = useState<string>('');
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Texto para simulação do terminal
  const fullText = `
> python urutau_security.py --target 192.168.1.10
[*] Urutau Security - Inicializando...
[*] Conectando à API da OpenAI...
[+] Conexão estabelecida!
[*] Escaneando o alvo 192.168.1.10...
[+] Portas abertas: 22, 80, 3306
[*] Analisando informações do sistema...
[+] Sistema identificado: Linux 5.4.0
[*] Detectando vulnerabilidades conhecidas...
[+] Vulnerabilidade encontrada: CVE-2021-4034
[*] Executando exploração...
[+] Acesso com privilégios elevados obtido!
[*] Buscando escalação de privilégios...
[+] root@192.168.1.10:~# id
uid=0(root) gid=0(root) groups=0(root)
[*] Missão completa. Todos os objetivos alcançados.
`;

  // Efeito para simular digitação
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        clearInterval(timer);
      }
      
      // Scroll para baixo automaticamente
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 60);
    
    return () => clearInterval(timer);
  }, []);
  
  // Efeito para o cursor piscante
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(blinkTimer);
  }, []);

  return (
    <section id="cmd-simulation" className="container-section bg-black py-16">
      <div className="relative max-w-4xl mx-auto">
        {/* Decoração de fundo */}
        <div className="absolute -top-5 -left-5 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-secondary/10 rounded-full blur-xl"></div>
        
        <h2 className="section-title mb-8 flex items-center justify-center gap-3">
          <Terminal className="h-8 w-8 text-secondary" />
          Simulação de Terminal
        </h2>
        
        <div className="card-gradient border-secondary/30 rounded-lg overflow-hidden">
          {/* Barra do Terminal */}
          <div className="bg-muted px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-center flex-1">Urutau Security Terminal</div>
          </div>
          
          {/* Corpo do Terminal */}
          <div 
            ref={terminalRef}
            className="bg-black font-mono text-sm sm:text-base p-4 h-80 overflow-y-auto"
          >
            <div className="text-green-500">
              {text}
              {cursorVisible && <span className="animate-pulse">_</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CmdSimulation;
