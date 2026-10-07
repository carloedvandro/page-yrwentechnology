import React from 'react';
import Reveal from './Reveal';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
};

const SectionHeading = ({ eyebrow, title, description, align = 'center', className }: Props) => (
  <Reveal className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
    <span className="inline-flex items-center gap-2 rounded-full border border-yrwen-cyan/20 bg-yrwen-cyan/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-yrwen-cyan">
      <span className="h-1.5 w-1.5 rounded-full bg-yrwen-cyan shadow-[0_0_10px_#22d3ee]" />
      {eyebrow}
    </span>
    <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">{description}</p>
    )}
  </Reveal>
);

export default SectionHeading;
