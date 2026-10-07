import React from 'react';
import { Rocket, Target, Lightbulb, BrainCircuit } from 'lucide-react';
import SectionHeading from './fx/SectionHeading';
import SpotlightCard from './fx/SpotlightCard';
import Reveal from './fx/Reveal';
import { useCountUp } from '@/hooks/use-count-up';

const Stat = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { ref, value: v } = useCountUp(value);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <div className="text-gradient text-4xl font-semibold md:text-5xl">
        {v}{suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-wider text-white/45">{label}</div>
    </div>
  );
};

const About = () => (
  <section id="about" className="relative overflow-hidden py-28">
    <div className="dot-bg absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

    <div className="container">
      <SectionHeading
        eyebrow="Quem somos"
        title={<>Tecnologia de ponta, <span className="text-gradient">acessível a todos os portes</span></>}
        description="Desde 2018 desenvolvemos soluções de alta performance, combinando engenharia sólida com inteligência artificial para transformar processos e acelerar resultados."
      />

      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2" delay={0}>
          <SpotlightCard className="relative h-full overflow-hidden p-8 md:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yrwen-violet/20 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-yrwen-cyan/20 to-yrwen-violet/20 text-yrwen-cyan">
                <BrainCircuit size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white md:text-3xl">
                IA no centro de tudo o que construímos
              </h3>
              <p className="mt-4 max-w-2xl text-white/60">
                Não usamos IA como adereço. Ela está no nosso processo de desenvolvimento, nos produtos que
                entregamos e na operação que sustentamos — isso nos permite entregar em semanas o que o mercado
                leva meses, com qualidade de código premium e custo competitivo.
              </p>
              <div className="mt-auto grid grid-cols-3 gap-4 pt-10">
                <Stat value={7} suffix="+" label="anos" />
                <Stat value={120} suffix="+" label="projetos" />
                <Stat value={98} suffix="%" label="satisfação" />
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        <div className="grid gap-5">
          {[
            { icon: Rocket, title: 'Missão', text: 'Impulsionar a transformação digital com soluções inovadoras, acessíveis e que gerem resultados mensuráveis.', color: 'text-yrwen-cyan' },
            { icon: Target, title: 'Visão', text: 'Ser referência em tecnologia avançada, democratizando o acesso à inovação de ponta.', color: 'text-yrwen-blue' },
            { icon: Lightbulb, title: 'Diferencial', text: 'IA aplicada para desenvolver com rapidez excepcional, preços competitivos e máxima eficiência.', color: 'text-yrwen-violet' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={100 + i * 100}>
              <SpotlightCard className="flex gap-4 p-6">
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/5 ${item.color}`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">{item.text}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
