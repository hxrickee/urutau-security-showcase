
import React from 'react';
import { Code, Database, Server, Shield, Bot, Activity } from 'lucide-react';

const TechnologiesSection = () => {
  const technologies = [
    { 
      name: "Backend", 
      icon: <Code className="h-10 w-10 text-secondary mb-4" />,
      description: "Python, Django REST Framework, Docker, Lambda"
    },
    { 
      name: "Infraestrutura", 
      icon: <Server className="h-10 w-10 text-secondary mb-4" />,
      description: "AWS (ECS, Fargate, S3, RDS), Terraform"
    },
    { 
      name: "Inteligência Artificial", 
      icon: <Bot className="h-10 w-10 text-secondary mb-4" />,
      description: "API da OpenAI (GPT-4), Classificação de Vulnerabilidades"
    },
    { 
      name: "Ferramentas de Segurança", 
      icon: <Shield className="h-10 w-10 text-secondary mb-4" />,
      description: "LinPEAS, BeRoot, Sherlock, Scripts customizados"
    },
    { 
      name: "Frontend", 
      icon: <Database className="h-10 w-10 text-secondary mb-4" />,
      description: "React.js, Tailwind CSS, Dashboards interativos"
    },
    { 
      name: "Monitoramento", 
      icon: <Activity className="h-10 w-10 text-secondary mb-4" />,
      description: "CloudWatch, OpenSearch, Redis Cache"
    }
  ];

  return (
    <section id="technologies" className="container-section bg-muted/30">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute top-1/2 right-1/4 -z-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <h2 className="section-title">Stack Tecnológico</h2>
        
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
