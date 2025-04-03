
import React from 'react';
import { Clock, MapPin, Phone, Building } from 'lucide-react';

const MapLocation = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="location">
      {/* Tech pattern background */}
      <div className="tech-grid absolute inset-0 z-0 opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nossa <span className="text-gradient">Localização</span>
          </h2>
          <p className="text-lg text-gray-300">
            Estamos no mercado desde abril de 2018, fornecendo soluções tecnológicas de alta qualidade para empresas de todos os portes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animated-border-card p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <MapPin className="text-yrwen-purple mr-2" size={20} />
                  Endereço
                </h3>
                <p className="text-gray-300">
                  Rua Imperial 183, Pimentas, Guarulhos - São Paulo, 07243-340, Brazil
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Clock className="text-yrwen-purple mr-2" size={20} />
                  Horário de Funcionamento
                </h3>
                <div className="grid grid-cols-2 gap-2 text-gray-300">
                  <div>
                    <p>Segunda-feira:</p>
                    <p>Terça-feira:</p>
                    <p>Quarta-feira:</p>
                    <p>Quinta-feira:</p>
                    <p>Sexta-feira:</p>
                    <p>Sábado:</p>
                    <p>Domingo:</p>
                  </div>
                  <div>
                    <p>09:00 - 17:00</p>
                    <p>09:00 - 17:00</p>
                    <p>09:00 - 17:00</p>
                    <p>09:00 - 17:00</p>
                    <p>09:00 - 17:00</p>
                    <p className="text-gray-400">Fechado</p>
                    <p className="text-gray-400">Fechado</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Phone className="text-yrwen-purple mr-2" size={20} />
                  Contato
                </h3>
                <p className="text-gray-300">
                  WhatsApp: +55 11 994869948<br />
                  Telefone: +55 11 97049 2228
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Building className="text-yrwen-purple mr-2" size={20} />
                  Informações da Empresa
                </h3>
                <p className="text-gray-300">
                  CNPJ: 30.266.458/0001-58<br />
                  No mercado desde abril de 2018
                </p>
              </div>
            </div>
          </div>
          
          <div className="animated-border-card p-2 h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.485338870237!2d-46.40853392375896!3d-23.47945005964804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce884b3979e4ed%3A0xef59b9b5b7a37c06!2sR.%20Imperial%2C%20183%20-%20Pimentas%2C%20Guarulhos%20-%20SP%2C%2007243-340%2C%20Brazil!5e0!3m2!1sen!2sus!4v1712153826319!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yrwen Technology Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
