import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import yrwenLogo from '@/assets/yrwen-logo.png';

const columns = [
  {
    title: 'Soluções',
    links: [
      { label: 'Agentes & Chatbots com IA', href: '#services' },
      { label: 'SaaS sob medida', href: '#services' },
      { label: 'CRMs Personalizados', href: '#services' },
      { label: 'Automação de Processos', href: '#services' },
      { label: 'Servidores MCP', href: '#services' },
      { label: 'Músicas e videoclipes com IA', href: '#music' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '#about' },
      { label: 'Processo', href: '#process' },
      { label: 'Vantagens', href: '#benefits' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Ecossistema',
    links: [
      { label: 'Decorações', href: 'https://decoracoes.yrwentechnology.com.br', external: true },
      { label: 'Y-Tech Internet 5G', href: 'http://ytech.yrwentechnology.com.br/', external: true },
      { label: 'Nexo Origin · YouTube', href: 'https://www.youtube.com/@nexoorigin', external: true },
      { label: 'WhatsApp', href: 'https://wa.me/5511994869948', external: true },
    ],
  },
];

const Footer = () => (
  <footer className="relative mt-10 overflow-hidden border-t border-white/5 bg-yrwen-surface/40 pt-16 pb-8">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yrwen-cyan/50 to-transparent" />
    <div className="dot-bg absolute inset-0 -z-10 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

    <div className="container">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#hero" className="flex items-center gap-3">
            <img src={yrwenLogo} alt="Yrwen Technology" width={44} height={44} className="h-11 w-11 rounded-xl object-cover" decoding="async" />
            <span className="text-lg font-semibold tracking-tight text-white">
              Yrwen<span className="text-white/50"> Technology</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
            Engenharia de software movida a inteligência artificial. Soluções de alta performance para empresas que buscam inovação, eficiência e resultado.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] text-white/50">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yrwen-teal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yrwen-teal" />
            </span>
            Software · IA · Automação
          </div>
        </div>

        {columns.map(col => (
          <div key={col.title}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                    className="group inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {l.label}
                    {l.external && <ArrowUpRight size={13} className="text-white/30 transition-all group-hover:text-yrwen-cyan" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-7 text-xs text-white/40 md:flex-row">
        <p>© {new Date().getFullYear()} Yrwen Technology · CNPJ 30.266.458/0001-58 · Guarulhos, SP</p>
        <div className="flex items-center gap-6">
          <span className="font-mono">Desde 2018</span>
          <a href="#hero" aria-label="Voltar ao topo" className="glass grid h-9 w-9 place-items-center rounded-full text-white/60 transition-colors hover:text-yrwen-cyan">
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
