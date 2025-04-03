
import React from 'react';
import { Rocket, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Tech pattern background */}
      <div className="tech-grid absolute inset-0 z-0 opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Sobre</span> a Yrwen Technology
          </h2>
          <p className="text-lg text-gray-300">
            Somos uma empresa especializada no desenvolvimento de soluções tecnológicas 
            de alta performance, utilizando inteligência artificial para transformar e 
            otimizar processos empresariais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center space-y-4 group hover:scale-[1.02] transition-transform">
            <div className="p-4 rounded-full bg-yrwen-purple/20 text-yrwen-purple mb-2 group-hover:bg-yrwen-purple group-hover:text-white transition-colors">
              <Rocket size={32} />
            </div>
            <h3 className="text-xl font-bold">Missão</h3>
            <p className="text-gray-300">
              Impulsionar a transformação digital de negócios através de soluções tecnológicas 
              inovadoras, acessíveis e eficientes que gerem resultados mensuráveis.
            </p>
          </div>
          
          {/* Vision */}
          <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center space-y-4 group hover:scale-[1.02] transition-transform">
            <div className="p-4 rounded-full bg-yrwen-blue/20 text-yrwen-blue mb-2 group-hover:bg-yrwen-blue group-hover:text-white transition-colors">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold">Visão</h3>
            <p className="text-gray-300">
              Ser referência em soluções tecnológicas avançadas, democratizando o acesso à 
              tecnologia de ponta para empresas de todos os portes.
            </p>
          </div>
          
          {/* Differential */}
          <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center space-y-4 group hover:scale-[1.02] transition-transform">
            <div className="p-4 rounded-full bg-yrwen-light-purple/20 text-yrwen-light-purple mb-2 group-hover:bg-yrwen-light-purple group-hover:text-white transition-colors">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-xl font-bold">Diferencial</h3>
            <p className="text-gray-300">
              Utilizamos inteligência artificial avançada para desenvolver soluções personalizadas 
              com rapidez excepcional e preços competitivos, garantindo máxima eficiência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
