import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Reveal from './fx/Reveal';

const CtaSection = () => (
  <section className="relative py-10">
    <div className="container">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-3xl bg-yrwen-surface px-8 py-16 text-center md:px-16 md:py-20">
          <div className="absolute inset-0 -z-0 bg-gradient-to-br from-yrwen-cyan/10 via-transparent to-yrwen-violet/15" />
          <div className="grid-perspective opacity-50" />
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-yrwen-cyan to-transparent" />

          <div className="relative">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-yrwen-cyan">Pronto para o próximo nível?</span>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
              Transforme sua operação com <span className="shimmer-text">tecnologia e IA</span> hoje mesmo
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">
              Conte sua ideia para definirmos os próximos passos, o escopo e o investimento.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-yrwen-ink transition-transform hover:scale-[1.03]">
                Iniciar um projeto
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/5511994869948"
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium text-white transition-colors hover:border-yrwen-teal/40"
              >
                <MessageCircle size={18} className="text-yrwen-teal" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaSection;
