
import React from 'react';
import { Github, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yrwen-dark-charcoal pt-16 pb-8 relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="tech-grid absolute inset-0 z-0 opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Company info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gradient mb-2">
              Yrwen Technology
            </div>
            <p className="text-gray-400 max-w-xs">
              Soluções tecnológicas avançadas para empresas que buscam inovação, 
              eficiência e resultados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-yrwen-purple/20 text-gray-400 hover:text-white transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-yrwen-purple/20 text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-yrwen-purple/20 text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-yrwen-purple transition-colors">Desenvolvimento de SaaS</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yrwen-purple transition-colors">Sites e Landing Pages</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yrwen-purple transition-colors">CRMs Personalizados</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yrwen-purple transition-colors">Automação de Processos</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yrwen-purple transition-colors">Chatbots com IA</a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-yrwen-purple transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-yrwen-purple transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-yrwen-purple transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-yrwen-purple transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-yrwen-purple transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-yrwen-purple mt-0.5" />
                <span className="text-gray-400">São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-yrwen-purple mt-0.5" />
                <span className="text-gray-400">contato@yrwen.tech</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-yrwen-purple mt-0.5" />
                <span className="text-gray-400">+55 (11) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Yrwen Technology. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
