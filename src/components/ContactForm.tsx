import React, { useEffect, useState } from 'react';
import { Send, Check, MapPin, Clock, Building2, Mail, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import SectionHeading from './fx/SectionHeading';
import Reveal from './fx/Reveal';

const WHATSAPP_NUMBER = '5511994869948';

const inputClass =
  'peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 pt-5 pb-2 text-white outline-none transition-all placeholder-transparent focus:border-yrwen-cyan/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]';
const labelClass =
  'pointer-events-none absolute left-4 top-3.5 text-sm text-white/45 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-yrwen-cyan peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState('');

  useEffect(() => {
    const receiveBrief = (event: Event) => {
      const brief = (event as CustomEvent<unknown>).detail;
      if (typeof brief !== 'string') return;
      setFormData(previous => ({ ...previous, message: brief.slice(0, 5000) }));
      document.getElementById('message')?.focus({ preventScroll: true });
    };
    window.addEventListener('yrwen:brief', receiveBrief);
    return () => window.removeEventListener('yrwen:brief', receiveBrief);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setFallbackUrl('');
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('handle-contact-form', {
        body: {
          nome_fale_conosco: formData.name,
          email_fale_conosco: formData.email,
          whatsapp_fale_conosco: formData.whatsapp,
          mensagem_fale_conosco: formData.message,
        },
      });
      if (error || data?.success !== true) throw new Error('Não foi possível confirmar o envio.');

      setSuccess(true);
      toast({ title: 'Mensagem enviada com sucesso!', description: 'Entraremos em contato em breve.' });
      setFormData({ name: '', email: '', whatsapp: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      // Offer an explicit retry link so browsers do not block an automatic popup.

      // Fallback: open WhatsApp with the message pre-filled so the lead is never lost
      const whatsappText = encodeURIComponent(
        `Olá! Meu nome é ${formData.name}.\n` +
        `E-mail: ${formData.email}\n` +
        `WhatsApp: ${formData.whatsapp}\n\n` +
        `${formData.message || 'Gostaria de falar sobre um projeto.'}`
      );
      setFallbackUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`);

      toast({
        title: 'Não foi possível enviar pelo site',
        description: 'Use o botão abaixo para continuar pelo WhatsApp.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="absolute left-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-yrwen-cyan/10 blur-[180px]" />

      <div className="container">
        <SectionHeading
          eyebrow="Contato"
          title={<>Vamos construir algo <span className="text-gradient">extraordinário</span></>}
          description="Conte sobre o seu desafio para conversarmos sobre o escopo e os próximos passos."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="flex flex-col gap-4">
            <div className="glass flex-1 rounded-2xl p-7">
              <h3 className="font-semibold text-white">Informações</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-yrwen-cyan" />
                  <span className="text-white/60">Rua Imperial, 183 — Pimentas<br />Guarulhos, SP · 07243-340</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-yrwen-cyan" />
                  <a href="mailto:contato@ychat-ia.com.br" className="text-white/60 transition-colors hover:text-white">contato@ychat-ia.com.br</a>
                </li>
                <li className="flex gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-yrwen-cyan" />
                  <span className="text-white/60">Segunda a sexta · 09:00 – 17:00</span>
                </li>
                <li className="flex gap-3">
                  <Building2 size={18} className="mt-0.5 shrink-0 text-yrwen-cyan" />
                  <span className="text-white/60">CNPJ 30.266.458/0001-58 · desde 2018</span>
                </li>
              </ul>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-2 rounded-xl border border-yrwen-teal/30 bg-yrwen-teal/10 py-3 text-sm font-medium text-yrwen-teal transition-colors hover:bg-yrwen-teal/20"
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
              </a>
              <p className="mt-2 text-center text-[11px] text-white/35">WhatsApp exclusivo para fechamento de contratos.</p>
            </div>

            <div className="glass h-56 overflow-hidden rounded-2xl p-1.5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.485338870237!2d-46.40853392375896!3d-23.47945005964804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce884b3979e4ed%3A0xef59b9b5b7a37c06!2sR.%20Imperial%2C%20183%20-%20Pimentas%2C%20Guarulhos%20-%20SP%2C%2007243-340%2C%20Brazil!5e0!3m2!1spt-BR!2sbr!4v1712153826319!5m2!1spt-BR!2sbr"
                className="h-full w-full rounded-xl grayscale invert-[0.9] hue-rotate-180 contrast-[0.9] opacity-80 transition-opacity hover:opacity-100"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Yrwen Technology"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="glow-border glass-strong relative rounded-2xl p-7 md:p-9">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="relative">
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" maxLength={120} placeholder="Nome" className={inputClass} />
                  <label htmlFor="name" className={labelClass}>Nome</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" maxLength={254} placeholder="E-mail" className={inputClass} />
                  <label htmlFor="email" className={labelClass}>E-mail</label>
                </div>
              </div>

              <div className="relative mt-4">
                <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required autoComplete="tel" maxLength={30} placeholder="WhatsApp" className={inputClass} />
                <label htmlFor="whatsapp" className={labelClass}>WhatsApp</label>
              </div>

              <div className="relative mt-4">
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} maxLength={5000} placeholder="Mensagem" className={`${inputClass} resize-none`} />
                <label htmlFor="message" className={labelClass}>Conte sobre o seu projeto</label>
              </div>

              <button
                type="submit"
                disabled={loading || success}
                className={`group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl py-3.5 font-medium transition-all disabled:cursor-not-allowed ${
                  success ? 'bg-yrwen-teal text-yrwen-ink' : 'bg-white text-yrwen-ink hover:scale-[1.01]'
                }`}
              >
                {!success && <span className="absolute inset-0 bg-gradient-to-r from-yrwen-cyan via-yrwen-blue to-yrwen-violet opacity-0 transition-opacity duration-500 group-hover:opacity-100" />}
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? (
                    <><span className="h-4 w-4 animate-spin rounded-full border-2 border-yrwen-ink border-t-transparent" /> Enviando…</>
                  ) : success ? (
                    <><Check size={18} /> Enviado com sucesso!</>
                  ) : (
                    <><Send size={18} /> Enviar mensagem</>
                  )}
                </span>
              </button>
              {fallbackUrl && <div role="status" className="mt-4 rounded-xl border border-yrwen-cyan/30 p-4 text-sm text-white/80">
                <p>Sua mensagem não foi enviada pelo site. Você pode continuar pelo WhatsApp.</p>
                <a href={fallbackUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-yrwen-cyan"><MessageCircle size={16} /> Continuar pelo WhatsApp</a>
              </div>}
              <p className="mt-4 text-center text-[11px] text-white/35">
                Seus dados são protegidos e usados apenas para retornar o contato.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
