import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

type TiltCardProps = React.HTMLAttributes<HTMLDivElement> & { max?: number };

const TiltCard = ({ children, className, max = 10, ...rest }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1200px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateZ(0)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn('preserve-3d transition-transform duration-300 ease-out will-change-transform', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TiltCard;
