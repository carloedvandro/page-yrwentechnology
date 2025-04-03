import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const ContactForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
        variant: "default"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        message: ''
      });

      // Reset success state after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };
  return <section className="py-24 relative overflow-hidden" id="contact">
      {/* Tech pattern background */}
      <div className="tech-grid absolute inset-0 z-0 opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fale <span className="text-gradient">Conosco</span>
          </h2>
          <p className="text-lg text-gray-300">
            Estamos prontos para transformar suas ideias em soluções tecnológicas 
            de alta performance. Entre em contato e comece sua jornada de inovação.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="animated-border-card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white font-medium block">
                    Nome
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded-lg bg-white/5 border border-yrwen-purple/30 focus:border-yrwen-purple text-white outline-none transition-colors" placeholder="Seu nome" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white font-medium block">
                    E-mail
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded-lg bg-white/5 border border-yrwen-purple/30 focus:border-yrwen-purple text-white outline-none transition-colors" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="whatsapp" className="text-white font-medium block">
                  WhatsApp
                </label>
                <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required className="w-full p-3 rounded-lg bg-white/5 border border-yrwen-purple/30 focus:border-yrwen-purple text-white outline-none transition-colors" placeholder="(00) 00000-0000" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-white font-medium block">Por favor deixe sua mensagem, 
logo retornaremos o contato.</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full p-3 rounded-lg bg-white/5 border border-yrwen-purple/30 focus:border-yrwen-purple text-white outline-none transition-colors resize-none" placeholder="Conte-nos sobre seu projeto..."></textarea>
              </div>
              
              <button type="submit" disabled={loading || success} className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-white font-medium transition-all ${success ? 'bg-green-600 hover:bg-green-700' : 'bg-gradient-to-r from-yrwen-purple to-yrwen-blue hover:opacity-90'}`}>
                {loading ? <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </> : success ? <>
                    <Check size={20} />
                    <span>Enviado com sucesso!</span>
                  </> : <>
                    <Send size={20} />
                    <span>Enviar mensagem</span>
                  </>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;