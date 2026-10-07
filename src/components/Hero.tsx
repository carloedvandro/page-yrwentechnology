import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import NeuralCanvas from './fx/NeuralCanvas';
import Terminal from './fx/Terminal';
import TiltCard from './fx/TiltCard';
import yrwenLogo from '@/assets/yrwen-logo.png';

const WORDS = ['Inteligência Artificial', 'Automação', 'SaaS sob medida', 'Agentes de IA', 'Alta Performance'];

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="noise relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-yrwen-ink" />
        <div className="absolute -left-1/4 top-0 h-[70vh] w-[70vw] animate-aurora rounded-full bg-yrwen-violet/20 blur-[140px]" />
        <div className="absolute -right-1/4 top-1/4 h-[60vh] w-[60vw] animate-aurora rounded-full bg-yrwen-cyan/15 blur-[140px] [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[40vh] w-[40vw] animate-aurora rounded-full bg-yrwen-blue/15 blur-[120px] [animation-delay:-12s]" />
        <div className="grid-perspective" />
        <NeuralCanvas className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-yrwen-ink to-transparent" />
      </div>

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-4 backdrop-blur-md">
              <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-yrwen-cyan to-yrwen-violet px-2.5 py-0.5 text-[11px] font-semibold text-yrwen-ink">
                <Sparkles size={11} /> NOVO
              </span>
              <span className="text-xs text-white/70">Agentes de IA para WhatsApp e Telegram</span>
            </div>

            <h1 className="mt-7 text-[2.25rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.4rem] animate-fade-in-up [animation-delay:100ms]">
              Engenharia de software movida a{' '}
              <span className="relative block h-[1.15em] overflow-hidden text-[0.8em] sm:text-[1em]">
                {WORDS.map((w, i) => (
                  <span
                    key={w}
                    className={`text-gradient absolute left-0 top-0 whitespace-nowrap ${i === idx ? 'animate-word-in' : 'opacity-0'}`}
                    aria-hidden={i !== idx}
                  >
                    {w}
                  </span>
                ))}
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/60 animate-fade-in-up [animation-delay:200ms]">
              Construímos SaaS, CRMs, automações e agentes inteligentes que operam 24/7.
              Entregas em tempo recorde, código premium e resultado mensurável desde o primeiro sprint.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-in-up [animation-delay:300ms]">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 font-medium text-yrwen-ink transition-transform hover:scale-[1.03]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yrwen-cyan via-yrwen-blue to-yrwen-violet opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2">
                  Iniciar um projeto
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="#services"
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium text-white transition-colors hover:border-yrwen-cyan/40 hover:bg-white/[0.06]"
              >
                Explorar soluções
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 animate-fade-in-up [animation-delay:400ms]">
              {[
                { v: '7+', l: 'anos de mercado' },
                { v: '10x', l: 'mais rápido com IA' },
                { v: '24/7', l: 'operação autônoma' },
              ].map(s => (
                <div key={s.l}>
                  <div className="text-2xl font-semibold text-white md:text-3xl">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/40">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up [animation-delay:250ms]">
            <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-yrwen-cyan/20 to-yrwen-violet/20 blur-3xl" />
            <TiltCard max={7}>
              <Terminal />
            </TiltCard>

            <div className="glass absolute -bottom-12 -left-8 hidden items-center gap-3 rounded-2xl px-4 py-3 animate-float md:flex">
              <img src={yrwenLogo} alt="" width={36} height={36} className="h-9 w-9 rounded-lg object-cover" decoding="async" />
              <div>
                <div className="text-xs text-white/50">Yrwen Technology</div>
                <div className="text-sm font-medium text-white">Guarulhos · SP</div>
              </div>
            </div>

            <div className="glass absolute -right-6 -top-12 hidden rounded-2xl px-4 py-3 animate-float [animation-delay:-3s] md:block">
              <div className="text-xs text-white/50">Agentes ativos</div>
              <div className="mt-0.5 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yrwen-teal opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-yrwen-teal" />
                </span>
                <span className="font-mono text-sm text-white">128 online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Rolar para baixo"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/30 transition-colors hover:text-white/70 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
