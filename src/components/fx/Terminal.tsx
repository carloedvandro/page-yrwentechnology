import React, { useEffect, useState } from 'react';
import { Activity, Cpu, ShieldCheck, Zap } from 'lucide-react';

type Line = { type: 'cmd' | 'out' | 'ok' | 'ai'; text: string };

const SCRIPT: Line[] = [
  { type: 'cmd', text: 'yrwen deploy --project "crm-inteligente" --ai' },
  { type: 'out', text: 'Analisando requisitos do cliente…' },
  { type: 'ai', text: 'IA gerou 42 módulos · 1.284 testes · 0 falhas' },
  { type: 'out', text: 'Provisionando infraestrutura edge (São Paulo)' },
  { type: 'ok', text: 'Build concluído em 38s' },
  { type: 'ok', text: 'Deploy global ✓  latência 41ms' },
  { type: 'cmd', text: 'yrwen agent start --channel whatsapp' },
  { type: 'ai', text: 'Agente online · atendendo 24/7' },
];

const Terminal = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState('');

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    const run = async () => {
      while (!cancelled) {
        setLines([]);
        for (const line of SCRIPT) {
          if (cancelled) return;
          if (line.type === 'cmd') {
            for (let i = 1; i <= line.text.length; i++) {
              if (cancelled) return;
              setTyping(line.text.slice(0, i));
              await sleep(22 + Math.random() * 30);
            }
            await sleep(250);
            setTyping('');
          } else {
            await sleep(420);
          }
          setLines(prev => [...prev, line]);
        }
        await sleep(3800);
      }
    };
    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="glow-border glass-strong relative w-full overflow-hidden rounded-2xl font-mono text-[12.5px] leading-relaxed md:text-[13px]">
      <div className="scanline" />
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[11px] tracking-wider text-white/40">yrwen-cli — zsh</span>
        <span className="flex items-center gap-1.5 text-[11px] text-yrwen-teal">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yrwen-teal opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yrwen-teal" />
          </span>
          live
        </span>
      </div>

      <div className="h-[280px] space-y-1.5 overflow-hidden px-4 py-4 md:h-[300px]">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-2 animate-fade-in-up">
            {l.type === 'cmd' && <span className="text-yrwen-cyan">❯</span>}
            {l.type === 'ok' && <span className="text-yrwen-teal">✓</span>}
            {l.type === 'ai' && <span className="text-yrwen-violet">◆</span>}
            {l.type === 'out' && <span className="text-white/30">·</span>}
            <span className={
              l.type === 'cmd' ? 'text-white' :
              l.type === 'ok' ? 'text-yrwen-teal' :
              l.type === 'ai' ? 'text-yrwen-light-purple' : 'text-white/55'
            }>{l.text}</span>
          </div>
        ))}
        <div className="flex gap-2">
          <span className="text-yrwen-cyan">❯</span>
          <span className="text-white">{typing}</span>
          <span className="inline-block h-[1.1em] w-[7px] translate-y-[2px] animate-blink bg-yrwen-cyan" />
        </div>
      </div>

      <div className="grid grid-cols-4 divide-x divide-white/5 border-t border-white/5 bg-black/20">
        {[
          { icon: Zap, label: 'Latência', value: '41ms' },
          { icon: Cpu, label: 'Uptime', value: '99.99%' },
          { icon: Activity, label: 'Req/s', value: '12.4k' },
          { icon: ShieldCheck, label: 'Security', value: 'A+' },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex flex-col items-center gap-0.5 px-2 py-2.5">
            <Icon size={13} className="text-yrwen-cyan/80" />
            <span className="text-[13px] font-medium text-white">{value}</span>
            <span className="text-[9.5px] uppercase tracking-wider text-white/35">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
