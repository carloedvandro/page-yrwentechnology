import React from 'react';
import { Zap, Clock, DollarSign, Brain, ShieldCheck, Headset } from 'lucide-react';
import SectionHeading from './fx/SectionHeading';
import Reveal from './fx/Reveal';

const benefits = [
  { icon: Clock, title: 'Entrega em tempo recorde', description: 'Sprints curtos e IA no processo: projetos entregues em semanas, não meses.' },
  { icon: DollarSign, title: 'Custo-benefício imbatível', description: 'Qualidade enterprise com investimento acessível e previsível.' },
  { icon: Brain, title: 'IA aplicada de verdade', description: 'Modelos de linguagem, agentes e automação integrados ao seu negócio.' },
  { icon: Zap, title: 'Alta performance', description: 'Arquitetura otimizada, edge computing e Core Web Vitals no verde.' },
  { icon: ShieldCheck, title: 'Segurança por padrão', description: 'Criptografia, controle de acesso e boas práticas em cada camada.' },
  { icon: Headset, title: 'Suporte especializado', description: 'Time técnico próximo, suporte contínuo e evolução constante.' },
];

const Benefits = () => (
  <section id="benefits" className="relative overflow-hidden py-28">
    <div className="absolute right-0 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-yrwen-violet/10 blur-[160px]" />

    <div className="container">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Por que a Yrwen"
            title={<>Construído para quem <span className="text-gradient">não aceita o comum</span></>}
            description="Combinamos engenharia sólida, inteligência artificial e obsessão por resultado. Cada projeto nasce para performar."
          />
          <Reveal delay={200} className="mt-10">
            <a href="#contact" className="group inline-flex items-center gap-2 text-yrwen-cyan">
              <span className="border-b border-yrwen-cyan/30 pb-0.5 transition-colors group-hover:border-yrwen-cyan">Vamos conversar sobre o seu projeto</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 70} className="group relative bg-yrwen-ink p-7 transition-colors hover:bg-yrwen-surface">
              <div className="absolute inset-0 bg-gradient-to-br from-yrwen-cyan/0 to-yrwen-violet/0 opacity-0 transition-opacity duration-500 group-hover:from-yrwen-cyan/5 group-hover:to-yrwen-violet/5 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-yrwen-cyan transition-all duration-300 group-hover:bg-yrwen-cyan group-hover:text-yrwen-ink group-hover:shadow-glow-cyan">
                  <b.icon size={19} />
                </div>
                <h3 className="font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{b.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Benefits;
