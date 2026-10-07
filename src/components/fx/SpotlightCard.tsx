import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement>;

const SpotlightCard = ({ children, className, ...rest }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn('spotlight glass rounded-2xl transition-all duration-500 hover:border-yrwen-cyan/30 hover:-translate-y-1', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
