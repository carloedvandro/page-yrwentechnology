
import React from 'react';
import { Cloud, Globe, Database, Cpu, MessageSquare, ServerCog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Cloud size={36} />,
      title: "SaaS",
      description: "Desenvolvimento de Softwares como Serviço personalizados para atender às necessidades específicas do seu negócio."
    },
    {
      icon: <Globe size={36} />,
      title: "Sites e Landing Pages",
      description: "Criação de sites e landing pages profissionais, otimizadas para conversão e com experiência de usuário excepcional."
    },
    {
      icon: <Database size={36} />,
      title: "CRMs Personalizados",
      description: "Desenvolvimento e integração de CRMs adaptados ao seu fluxo de trabalho, facilitando a gestão de clientes e vendas."
    },
    {
      icon: <Cpu size={36} />,
      title: "Automação de Processos",
      description: "Automatize processos internos e externos, eliminando tarefas repetitivas e aumentando a produtividade da sua equipe."
    },
    {
      icon: <MessageSquare size={36} />,
      title: "Chatbots com IA",
      description: "Criação de chatbots inteligentes para WhatsApp e Telegram, proporcionando atendimento 24/7 aos seus clientes."
    },
    {
      icon: <ServerCog size={36} />,
      title: "Servidores MCP",
      description: "Desenvolvimento de servidores Model Context Protocol para processamento avançado de dados e integração de sistemas."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-yrwen-dark-charcoal/70" id="services">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yrwen-dark-charcoal/50 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-lg text-gray-300">
            Oferecemos um conjunto completo de soluções tecnológicas para transformar 
            e impulsionar seu negócio com inovação e eficiência.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl space-y-4 hover:scale-[1.02] transition-transform"
            >
              <div className="p-4 inline-flex rounded-xl bg-gradient-to-br from-yrwen-purple to-yrwen-blue text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
