import { Bot, Database, Workflow, ArrowRight } from 'lucide-react';

const solutions = [
  { icon: Database, title: 'Gestão em um só lugar', text: 'CRMs e sistemas adaptados ao seu processo de trabalho.' },
  { icon: Bot, title: 'Atendimento com IA', text: 'Agentes conectados ao contexto e às ferramentas do seu negócio.' },
  { icon: Workflow, title: 'Processos conectados', text: 'Integrações para reduzir tarefas manuais entre sistemas.' },
];

const SolutionOverview = () => (
  <div className="glow-border glass-strong rounded-2xl p-6 sm:p-8">
    <p className="font-mono text-xs uppercase tracking-widest text-yrwen-cyan">O que podemos construir</p>
    <h2 className="mt-3 text-2xl font-semibold text-white">Tecnologia para a sua operação</h2>
    <div className="mt-7 space-y-6">
      {solutions.map(({ icon: Icon, title, text }) => (
        <div key={title} className="flex gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-yrwen-cyan/10 text-yrwen-cyan"><Icon size={22} aria-hidden="true" /></div>
          <div><h3 className="font-medium text-white">{title}</h3><p className="mt-1 text-sm leading-relaxed text-white/65">{text}</p></div>
        </div>
      ))}
    </div>
    <a href="#services" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-yrwen-cyan">Conhecer os serviços <ArrowRight size={16} aria-hidden="true" /></a>
  </div>
);

export default SolutionOverview;
