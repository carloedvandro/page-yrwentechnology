import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import SectionHeading from './fx/SectionHeading';
import Reveal from './fx/Reveal';

const steps = [
  { n: '01', icon: Search, title: 'Descoberta', time: 'Alinhamento', text: 'Mapeamos processos, gargalos e objetivos. Saímos com escopo claro e métricas de sucesso.' },
  { n: '02', icon: PenTool, title: 'Arquitetura & Design', time: 'Planejamento', text: 'Desenhamos a solução, a experiência e a infraestrutura. Protótipos navegáveis antes de codar.' },
  { n: '03', icon: Code2, title: 'Desenvolvimento com IA', time: 'Por etapas', text: 'Sprints curtos, código revisado e testado. Nossa IA acelera a entrega sem abrir mão da qualidade.' },
  { n: '04', icon: Rocket, title: 'Deploy & Evolução', time: 'contínuo', text: 'Lançamento monitorado, suporte especializado e melhorias contínuas baseadas em dados reais.' },
];

const Process = () => (
  <section id="process" className="relative overflow-hidden py-28">
    <div className="grid-bg absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

    <div className="container">
      <SectionHeading
        eyebrow="Como trabalhamos"
        title={<>Da ideia à entrega, <span className="text-gradient">com clareza em cada etapa</span></>}
        description="Um processo enxuto, transparente e orientado a resultado. Você acompanha cada etapa em tempo real."
      />

      <div className="relative mt-20">
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-yrwen-cyan/40 to-transparent lg:left-0 lg:top-[52px] lg:h-px lg:w-full lg:bg-gradient-to-r" />

        <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="relative pl-16 lg:pl-0 lg:pt-24">
              <div className="absolute left-0 top-0 lg:left-0 lg:top-[32px]">
                <div className="relative grid h-12 w-12 place-items-center rounded-full border border-yrwen-cyan/40 bg-yrwen-ink text-yrwen-cyan shadow-glow-cyan">
                  <s.icon size={20} />
                  <span className="absolute inset-0 animate-pulse-ring rounded-full border border-yrwen-cyan/40" style={{ animationDelay: `${i * 0.5}s` }} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-yrwen-cyan/70">{s.n}</span>
                <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/45">{s.time}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
