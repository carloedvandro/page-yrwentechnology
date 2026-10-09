import React from 'react';
import { Cloud, Globe, Database, Workflow, Bot, Network, Music2, ArrowUpRight } from 'lucide-react';
import SectionHeading from './fx/SectionHeading';
import SpotlightCard from './fx/SpotlightCard';
import Reveal from './fx/Reveal';

const services = [
  {
    icon: Music2,
    title: 'Músicas e videoclipes com IA',
    description: 'Músicas personalizadas criadas com IA e vídeos que podem incluir o rosto da pessoa. Conheça nossas criações no canal Nexo Origin.',
    tags: ['Música personalizada', 'Videoclipes', 'IA'],
    span: 'lg:col-span-3',
    accent: 'from-yrwen-violet/20 to-yrwen-magenta/10',
  },
  {
    icon: Bot,
    title: 'Agentes & Chatbots com IA',
    description: 'Atendimento autônomo 24/7 no WhatsApp e Telegram, com memória, integração ao seu CRM e escalonamento humano inteligente.',
    tags: ['WhatsApp', 'Telegram', 'LLM'],
    span: 'lg:col-span-2',
    accent: 'from-yrwen-violet/30 to-yrwen-magenta/10',
  },
  {
    icon: Cloud,
    title: 'SaaS sob medida',
    description: 'Produtos multi-tenant escaláveis, com billing, autenticação e analytics prontos para crescer.',
    tags: ['Multi-tenant', 'Stripe'],
    span: '',
    accent: 'from-yrwen-cyan/30 to-yrwen-blue/10',
  },
  {
    icon: Database,
    title: 'CRMs Personalizados',
    description: 'Pipelines, automações e dashboards adaptados ao seu fluxo real de vendas.',
    tags: ['Pipeline', 'Dashboards'],
    span: '',
    accent: 'from-yrwen-blue/30 to-yrwen-cyan/10',
  },
  {
    icon: Network,
    title: 'Servidores MCP',
    description: 'Model Context Protocol para conectar seus dados e ferramentas a modelos de IA com segurança e governança.',
    tags: ['MCP', 'Tools', 'RAG'],
    span: 'lg:col-span-2',
    accent: 'from-yrwen-violet/30 to-yrwen-blue/10',
  },
  {
    icon: Workflow,
    title: 'Automação de Processos',
    description: 'Elimine tarefas repetitivas integrando sistemas, planilhas, e-mails e APIs em fluxos inteligentes.',
    tags: ['n8n', 'APIs', 'RPA'],
    span: '',
    accent: 'from-yrwen-teal/30 to-yrwen-cyan/10',
  },
  {
    icon: Globe,
    title: 'Sites & Landing Pages',
    description: 'Experiências rápidas, acessíveis e otimizadas para conversão e SEO, com atenção ao desempenho em computadores e celulares.',
    tags: ['SEO', 'Core Web Vitals'],
    span: 'lg:col-span-2',
    accent: 'from-yrwen-cyan/20 to-yrwen-violet/20',
  },
];

const Services = () => (
  <section id="services" className="relative overflow-hidden py-28">
    <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-yrwen-blue/10 blur-[160px]" />

    <div className="container">
      <SectionHeading
        eyebrow="Soluções"
        title={<>Um ecossistema completo para <span className="text-gradient">escalar seu negócio</span></>}
        description="Do produto à operação: construímos, integramos e automatizamos com IA para que sua empresa funcione em outro nível."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 90} className={s.span}>
            <SpotlightCard className="group relative flex h-full flex-col overflow-hidden p-7">
              <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${s.accent} blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60`} />
              <div className="relative flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-yrwen-cyan transition-all duration-500 group-hover:border-yrwen-cyan/40 group-hover:shadow-glow-cyan">
                  <s.icon size={22} />
                </div>
                <ArrowUpRight aria-hidden="true" size={18} className="text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-yrwen-cyan" />
              </div>
              <h3 className="relative mt-6 text-xl font-semibold text-white">{s.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/55">{s.description}</p>
              <a href="#contact" className="relative mt-5 inline-flex items-center gap-2 text-sm font-medium text-yrwen-cyan" aria-label={`Conversar sobre ${s.title}`}>Conversar sobre esta solução <ArrowUpRight size={16} aria-hidden="true" /></a>
              <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                {s.tags.map(t => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10.5px] text-white/50">
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
