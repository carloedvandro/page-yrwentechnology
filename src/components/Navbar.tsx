import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#process', label: 'Processo' },
  { href: '#benefits', label: 'Vantagens' },
  { href: '#testimonials', label: 'Clientes' },
];

const external = [
  { href: 'https://decoracoes.yrwentechnology.com.br', label: 'Decorações' },
  { href: 'http://ytech.yrwentechnology.com.br/', label: 'Y-Tech 5G' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(y > 24);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-yrwen-cyan via-yrwen-blue to-yrwen-violet shadow-[0_0_12px_#22d3ee]"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-5">
        <nav
          className={cn(
            'flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-5',
            isScrolled ? 'glass-strong' : 'border border-transparent bg-transparent'
          )}
        >
          <a href="#hero" className="group flex items-center gap-2.5">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-yrwen-cyan to-yrwen-violet font-bold text-yrwen-ink">
              Y
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-yrwen-cyan to-yrwen-violet opacity-0 blur-md transition-opacity group-hover:opacity-70" />
            </span>
            <span className="hidden font-semibold tracking-tight text-white sm:block">
              Yrwen<span className="text-white/50"> Technology</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  'relative rounded-full px-3.5 py-1.5 text-sm text-white/65 transition-colors hover:text-white',
                  active === l.href && 'text-white'
                )}
              >
                {active === l.href && <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]" />}
                {l.label}
              </a>
            ))}
            <span className="mx-2 h-4 w-px bg-white/10" />
            {external.map(l => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-white/55 transition-colors hover:text-yrwen-cyan"
              >
                {l.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group relative hidden overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-yrwen-ink transition-transform hover:scale-[1.03] md:inline-flex"
            >
              <span className="relative z-10">Fale conosco</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yrwen-cyan to-yrwen-violet opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <button
              className="grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
              onClick={() => setIsMenuOpen(v => !v)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col bg-yrwen-ink/95 px-6 pb-10 pt-28 backdrop-blur-2xl transition-all duration-500 lg:hidden',
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <div className="grid-bg absolute inset-0 -z-10 opacity-40" />
        <div className="flex flex-col gap-1">
          {[...links, ...external].map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'flex items-center justify-between border-b border-white/5 py-4 text-2xl font-medium text-white/85 transition-all',
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
              style={{ transitionDelay: `${isMenuOpen ? 80 + i * 50 : 0}ms` }}
            >
              {l.label}
              <ArrowUpRight size={20} className="text-yrwen-cyan" />
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="mt-auto rounded-full bg-gradient-to-r from-yrwen-cyan to-yrwen-violet py-4 text-center font-medium text-yrwen-ink"
        >
          Iniciar um projeto
        </a>
      </div>
    </>
  );
};

export default Navbar;
