import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SectionHeading from './fx/SectionHeading';
import Reveal from './fx/Reveal';

const faqs = [
  { q: 'Quanto tempo leva para desenvolver um projeto?', a: 'O prazo depende do escopo, das integrações e das funcionalidades necessárias. Após entender seu projeto, definimos as etapas e o cronograma na proposta.' },
  { q: 'Vocês atendem empresas de qualquer porte?', a: 'Sim. Trabalhamos de startups a empresas consolidadas. Nossa missão é democratizar o acesso à tecnologia de ponta, com soluções e investimento proporcionais a cada estágio.' },
  { q: 'Como funciona o chatbot com IA no WhatsApp?', a: 'Integramos a API oficial do WhatsApp a modelos de linguagem treinados com o contexto do seu negócio. O agente responde, qualifica leads, agenda e escala para humanos quando necessário, 24/7.' },
  { q: 'O código fica com a minha empresa?', a: 'Sim. Você é dono de todo o código-fonte, dados e infraestrutura. Entregamos documentação completa e, se quiser, treinamos seu time.' },
  { q: 'Oferecem suporte após a entrega?', a: 'Oferecemos planos de suporte e evolução contínua, com monitoramento, correções e novas funcionalidades baseadas em dados de uso real.' },
];

const FaqSection = () => (
  <section id="faq" className="relative overflow-hidden py-28">
    <div className="container">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title={<>Perguntas <span className="text-gradient">frequentes</span></>}
          description="Não encontrou o que procurava? Fale com a gente — respondemos rápido."
        />
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="glass divide-y divide-white/5 rounded-2xl px-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none px-4">
                <AccordionTrigger className="py-5 text-left text-[15px] font-medium text-white hover:no-underline [&>svg]:text-yrwen-cyan">
                  <span className="flex gap-4">
                    <span className="font-mono text-xs text-yrwen-cyan/60">{String(i + 1).padStart(2, '0')}</span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-10 text-sm leading-relaxed text-white/55">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);

export default FaqSection;
