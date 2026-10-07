import React from 'react';

const STACK = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Next.js', 'PostgreSQL', 'Supabase',
  'OpenAI', 'Anthropic', 'LangChain', 'MCP', 'Docker', 'AWS', 'Vercel', 'n8n',
  'WhatsApp API', 'Telegram', 'Stripe', 'Tailwind', 'Redis',
];

const TechMarquee = () => (
  <section aria-label="Tecnologias" className="relative border-y border-white/5 bg-yrwen-surface/40 py-6">
    <div className="container mb-4 flex items-center justify-center gap-3 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
      <span className="h-px w-8 bg-white/10" />
      Stack de alto desempenho
      <span className="h-px w-8 bg-white/10" />
    </div>
    <div className="mask-fade-x overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {[...STACK, ...STACK].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-white/45 transition-colors hover:text-yrwen-cyan"
          >
            <span className="h-1 w-1 rounded-full bg-yrwen-cyan/60" />
            {t}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TechMarquee;
