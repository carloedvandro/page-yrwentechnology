import React from 'react';
import { Quote, Star } from 'lucide-react';
import SectionHeading from './fx/SectionHeading';
import SpotlightCard from './fx/SpotlightCard';
import Reveal from './fx/Reveal';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'COO · TechSolutions Inc.',
    metric: '-40%',
    metricLabel: 'custos operacionais',
    content: 'A Yrwen superou todas as expectativas. O sistema de automação reduziu nossos custos operacionais em 40% e liberou a equipe para o que realmente importa.',
  },
  {
    name: 'Ana Ferreira',
    role: 'Head de Growth · E-commerce Express',
    metric: '+60%',
    metricLabel: 'taxa de conversão',
    content: 'O chatbot com IA transformou nosso atendimento. Operação 24/7, respostas precisas e um salto de 60% na conversão em poucas semanas.',
  },
  {
    name: 'Pedro Almeida',
    role: 'Sócio · Consultoria Digital',
    metric: '3x',
    metricLabel: 'produtividade comercial',
    content: 'O CRM personalizado revolucionou nossa gestão. Interface intuitiva, automações certeiras e um time que entende de negócio, não só de código.',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="relative overflow-hidden py-28">
    <div className="container">
      <SectionHeading
        eyebrow="Resultados reais"
        title={<>O que dizem quem já <span className="text-gradient">escalou com a gente</span></>}
      />

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 110}>
            <SpotlightCard className="relative flex h-full flex-col p-7">
              <Quote className="absolute right-6 top-6 text-white/5" size={56} />
              <div className="flex items-end gap-2">
                <span className="text-gradient text-4xl font-semibold">{t.metric}</span>
                <span className="pb-1.5 text-xs uppercase tracking-wider text-white/40">{t.metricLabel}</span>
              </div>
              <div className="mt-4 flex gap-0.5 text-yrwen-cyan">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={13} fill="currentColor" />)}
              </div>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/70">“{t.content}”</p>
              <div className="mt-7 flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-yrwen-cyan/30 to-yrwen-violet/30 text-sm font-semibold text-white">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-white/45">{t.role}</div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
