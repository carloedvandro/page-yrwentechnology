
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechSolutions Inc.",
      content: "A Yrwen Technology superou todas as nossas expectativas. Eles entregaram um sistema de automação que reduziu nossos custos operacionais em 40% e aumentou a produtividade da equipe."
    },
    {
      name: "Ana Ferreira",
      company: "E-commerce Express",
      content: "Implementamos o chatbot desenvolvido pela Yrwen e vimos um aumento de 60% na taxa de conversão. O atendimento 24/7 transformou completamente nossa experiência com o cliente."
    },
    {
      name: "Pedro Almeida",
      company: "Consultoria Digital",
      content: "O CRM personalizado que a Yrwen desenvolveu para nós revolucionou nossa gestão de clientes. A interface intuitiva e as funcionalidades personalizadas tornaram nossos processos muito mais eficientes."
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-yrwen-dark-charcoal to-yrwen-dark-charcoal/95" id="testimonials">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-lg text-gray-300">
            A satisfação de nossos clientes é o melhor testemunho da qualidade do nosso trabalho 
            e do impacto positivo que nossas soluções trazem para os negócios.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-yrwen-dark-purple/10 to-yrwen-dark-charcoal p-8 md:p-12 rounded-2xl">
            <Quote className="absolute top-6 left-6 text-yrwen-purple/20" size={48} />
            
            <div className="relative z-10">
              <div className="min-h-[180px] flex items-center">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl italic text-gray-200">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  
                  <div className="pt-4 border-t border-yrwen-purple/20">
                    <p className="font-semibold text-white">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-8">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial 
                          ? 'bg-yrwen-purple' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                      aria-label={`Depoimento ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-yrwen-dark-charcoal hover:bg-yrwen-purple/20 transition-colors"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-yrwen-dark-charcoal hover:bg-yrwen-purple/20 transition-colors"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
