import { useEffect, useRef } from 'react';

type Props = { mode: number; paused: boolean };

export default function IntelligenceSphere({ mode, paused }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    const pointer = { x: 0, y: 0 };
    let frame = 0, lastTime = 0, inView = true;
    const colors = ['34,211,238', '167,139,250', '45,212,191'];
    const count = 280;
    const points = Array.from({ length: count }, (_, i) => {
      const y = 1 - 2 * i / (count - 1), radius = Math.sqrt(1 - y * y), angle = i * Math.PI * (3 - Math.sqrt(5));
      return { x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius };
    });
    const draw = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight, scale = Math.min(w, h) * .34;
      context.clearRect(0, 0, w, h);
      const angle = rotationRef.current + pointer.x * .4, tilt = pointer.y * .3;
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
      for (let i = 0; i < 3; i++) {
        const orbitAngle = -.5 + i * .55;
        const phase = rotationRef.current * (2 + i * .35) + i * Math.PI * .7;
        const rx = scale * 1.45, ry = scale * (.24 + i * .07);
        const position = (t: number) => ({
          x: w/2 + rx * Math.cos(t) * Math.cos(orbitAngle) - ry * Math.sin(t) * Math.sin(orbitAngle),
          y: h/2 + rx * Math.cos(t) * Math.sin(orbitAngle) + ry * Math.sin(t) * Math.cos(orbitAngle),
        });
        for (let trail = 16; trail > 0; trail--) {
          const a = position(phase - trail * .015), b = position(phase - (trail - 1) * .015);
          context.strokeStyle = `rgba(${colors[mode]},${(1 - trail/17) * .65})`;
          context.lineWidth = 1.5;
          context.beginPath(); context.moveTo(a.x,a.y); context.lineTo(b.x,b.y); context.stroke();
        }
        const satellite = position(phase);
        context.save();
        context.translate(satellite.x, satellite.y);
        context.rotate(orbitAngle + phase + Math.PI/2);
        context.shadowColor = `rgba(${colors[mode]},.9)`;
        context.shadowBlur = 14;
        context.fillStyle = '#d9f8ff';
        context.fillRect(-2.5,-3,5,6);
        context.fillStyle = `rgb(${colors[mode]})`;
        context.fillRect(-9,-2,5,4); context.fillRect(4,-2,5,4);
        context.strokeStyle = '#d9f8ff'; context.lineWidth = 1;
        context.beginPath(); context.moveTo(0,-3);context.lineTo(0,-6);context.stroke();
        context.restore();
      }
      context.lineWidth = 1;

    };
    const animate = (time: number) => {
      frame = 0;
      if (document.hidden || !inView) { lastTime = 0; return; }
      if (!paused && lastTime) rotationRef.current += Math.min(time - lastTime, 50) * .00018;
      lastTime = time;
      draw();
      if (!paused) frame = requestAnimationFrame(animate);
    };
    const resume = () => { cancelAnimationFrame(frame); lastTime = 0; animate(performance.now()); };
    const resize = () => { const dpr = Math.min(devicePixelRatio || 1, 1.5); canvas.width=canvas.clientWidth*dpr; canvas.height=canvas.clientHeight*dpr; context.setTransform(dpr,0,0,dpr,0,0);resume(); };
    const move = (event: PointerEvent) => { if (paused) return; const bounds=canvas.getBoundingClientRect();pointer.x=(event.clientX-bounds.left)/bounds.width-.5;pointer.y=(event.clientY-bounds.top)/bounds.height-.5; };
    const observer=new ResizeObserver(resize);observer.observe(canvas);
    const visibility=new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;resume();});visibility.observe(canvas);
    canvas.addEventListener('pointermove',move); document.addEventListener('visibilitychange',resume);resize();
    return () => {cancelAnimationFrame(frame);observer.disconnect();visibility.disconnect();canvas.removeEventListener('pointermove',move);document.removeEventListener('visibilitychange',resume);};
  }, [mode, paused]);
  return <canvas ref={ref} className="intelligence-canvas" aria-hidden="true" />;
}
