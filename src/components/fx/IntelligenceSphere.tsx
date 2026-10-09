import { useEffect, useRef } from 'react';

type Props = { mode: number; paused: boolean };

export default function IntelligenceSphere({ mode, paused }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { x: 0, y: 0 };
    let frame = 0, rotation = 0, inView = true;
    const colors = ['34,211,238', '167,139,250', '45,212,191'];
    const count = 280;
    const points = Array.from({ length: count }, (_, i) => {
      const y = 1 - 2 * i / (count - 1), radius = Math.sqrt(1 - y * y), angle = i * Math.PI * (3 - Math.sqrt(5));
      return { x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius };
    });
    const draw = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight, scale = Math.min(w, h) * .34;
      context.clearRect(0, 0, w, h);
      const angle = rotation + pointer.x * .4, tilt = pointer.y * .3;
      const projected = points.map(p => {
        const x = p.x * Math.cos(angle) - p.z * Math.sin(angle), z = p.x * Math.sin(angle) + p.z * Math.cos(angle);
        const y = p.y * Math.cos(tilt) - z * Math.sin(tilt), depth = p.y * Math.sin(tilt) + z * Math.cos(tilt);
        const perspective = 3 / (3 - depth);
        return { x: w / 2 + x * scale * perspective, y: h / 2 + y * scale * perspective, depth };
      });
      const glow = context.createRadialGradient(w/2,h/2,0,w/2,h/2,scale*1.6);
      glow.addColorStop(0, `rgba(${colors[mode]},.12)`); glow.addColorStop(1, `rgba(${colors[mode]},0)`);
      context.fillStyle = glow; context.fillRect(0,0,w,h);
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        for (const offset of [1, 13, 21]) {
          const b = projected[i + offset]; if (!b) continue;
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance > scale * .28) continue;
          context.strokeStyle = `rgba(${colors[mode]},${(.05 + (a.depth+1)*.055) * (1-distance/(scale*.3))})`;
          context.beginPath(); context.moveTo(a.x,a.y); context.lineTo(b.x,b.y); context.stroke();
        }
        context.fillStyle = `rgba(${colors[mode]},${.2+(a.depth+1)*.35})`;
        context.beginPath(); context.arc(a.x,a.y,a.depth > .5 ? 2 : 1,0,Math.PI*2); context.fill();
      }
      context.strokeStyle = `rgba(${colors[mode]},.16)`;
      for (let i=0;i<3;i++) { context.beginPath(); context.ellipse(w/2,h/2,scale*1.45,scale*(.24+i*.07),-.5+i*.55,0,Math.PI*2);context.stroke(); }
    };
    const animate = () => { frame = 0; if (document.hidden || !inView) return; draw(); if (!paused && !reduced.matches) { rotation += .003; frame = requestAnimationFrame(animate); } };
    const resume = () => { cancelAnimationFrame(frame); animate(); };
    const resize = () => { const dpr = Math.min(devicePixelRatio || 1, 1.5); canvas.width=canvas.clientWidth*dpr; canvas.height=canvas.clientHeight*dpr; context.setTransform(dpr,0,0,dpr,0,0);resume(); };
    const move = (event: PointerEvent) => { const bounds=canvas.getBoundingClientRect();pointer.x=(event.clientX-bounds.left)/bounds.width-.5;pointer.y=(event.clientY-bounds.top)/bounds.height-.5;if(paused||reduced.matches)draw(); };
    const observer=new ResizeObserver(resize);observer.observe(canvas);
    const visibility=new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;resume();});visibility.observe(canvas);
    canvas.addEventListener('pointermove',move); document.addEventListener('visibilitychange',resume); reduced.addEventListener('change',resume);resize();
    return () => {cancelAnimationFrame(frame);observer.disconnect();visibility.disconnect();canvas.removeEventListener('pointermove',move);document.removeEventListener('visibilitychange',resume);reduced.removeEventListener('change',resume);};
  }, [mode, paused]);
  return <canvas ref={ref} className="intelligence-canvas" aria-hidden="true" />;
}
