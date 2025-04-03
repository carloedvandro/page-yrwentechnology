
import React from 'react';
import { Zap, Clock, DollarSign, Brain, ShieldCheck, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock size={32} />,
      title: "Entrega Rápida",
      description: "Desenvolvemos e entregamos projetos em tempo recorde, sem comprometer a qualidade."
    },
    {
      icon: <DollarSign size={32} />,
      title: "Custo-Benefício",
      description: "Oferecemos soluções de alta qualidade a preços competitivos, garantindo o melhor retorno do investimento."
    },
    {
      icon: <Brain size={32} />,
      title: "Inteligência Artificial",
      description: "Utilizamos IA avançada para otimizar processos e criar soluções mais inteligentes e eficientes."
    },
    {
      icon: <Zap size={32} />,
      title: "Alta Performance",
      description: "Nossas soluções são otimizadas para oferecer o máximo desempenho, mesmo em condições desafiadoras."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Segurança Garantida",
      description: "Implementamos os mais altos padrões de segurança em todos os nossos desenvolvimentos."
    },
    {
      icon: <Award size={32} />,
      title: "Suporte Especializado",
      description: "Contamos com uma equipe de especialistas pronta para oferecer suporte contínuo e personalizado."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="benefits">
      {/* Tech pattern background */}
      <div className="tech-grid absolute inset-0 z-0 opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que escolher a <span className="text-gradient">Yrwen Technology</span>
          </h2>
          <p className="text-lg text-gray-300">
            Descubra as vantagens de trabalhar com uma empresa que combina tecnologia 
            de ponta, eficiência e excelência em cada projeto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-yrwen-dark-charcoal to-yrwen-dark-charcoal/80 border border-yrwen-purple/20 hover:border-yrwen-purple/50 transition-colors group"
            >
              <div className="p-3 h-fit rounded-lg bg-yrwen-purple/10 text-yrwen-purple group-hover:bg-yrwen-purple group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
