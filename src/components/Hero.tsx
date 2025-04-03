import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap, Clock, Code, Bot, Database } from 'lucide-react';
const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reset particles when canvas is resized
      particles = [];
      for (let i = 0; i < 50; i++) {
        createParticle();
      }
    };
    const createParticle = () => {
      if (!canvas) return;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    };
    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap particles around the screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(155, 135, 245, ${particle.opacity})`;
        ctx.fill();

        // Connect nearby particles with lines
        for (let i = index + 1; i < particles.length; i++) {
          const dx = particles[i].x - particle.x;
          const dy = particles[i].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.strokeStyle = `rgba(155, 135, 245, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden" id="hero">
      {/* Particle animation background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Tech pattern overlay */}
      <div className="tech-grid absolute inset-0 z-0 opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Hero content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforme seu negócio com 
                <span className="block text-gradient"> tecnologia e IA</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                Soluções tecnológicas avançadas para empresas que buscam inovação e automação. 
                Entregamos projetos em tempo recorde com um custo-benefício imbatível.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-6 py-3 rounded-lg bg-gradient-to-r from-yrwen-purple to-yrwen-blue text-white hover:opacity-90 transition-opacity flex items-center justify-center sm:justify-start gap-2 group">
                Iniciar um projeto
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
              </a>
              
              <a href="#services" className="px-6 py-3 rounded-lg border border-yrwen-purple/50 hover:bg-yrwen-purple/10 transition-colors text-white flex items-center justify-center sm:justify-start gap-2">
                Conheça nossos serviços
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-yrwen-purple" />
                <span className="text-sm text-gray-300">Alta Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-yrwen-purple" />
                <span className="text-sm text-gray-300">Tempo Recorde</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot size={20} className="text-yrwen-purple" />
                <span className="text-sm text-gray-300">IA Avançada</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={20} className="text-yrwen-purple" />
                <span className="text-sm text-gray-300">Código Premium</span>
              </div>
            </div>
          </div>
          
          {/* Hero image/visual */}
          <div className="flex-1 flex justify-center">
            <div className="animated-border-card p-8 max-w-md w-full relative px-[24px]">
              <div className="absolute -top-3 -right-3 bg-yrwen-purple p-2 rounded-full">
                <Database size={20} className="text-white" />
              </div>
              <div className="space-y-4">
                <div className="h-40 rounded-lg bg-yrwen-purple/20 flex items-center justify-center animate-pulse-slow px-[40px]">
                  <div className="text-center">
                    <span className="block text-2xl text-white font-extrabold">YRWEN</span>
                    <span className="text-gray-300 text-base">Technology</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="h-3 bg-white/10 rounded-full w-full animate-pulse"></div>
                  <div className="h-3 bg-white/10 rounded-full w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-white/10 rounded-full w-1/2 animate-pulse"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-lg bg-yrwen-blue/20 animate-float"></div>
                  <div className="h-8 w-8 rounded-lg bg-yrwen-purple/20 animate-float" style={{
                  animationDelay: '0.2s'
                }}></div>
                  <div className="h-8 w-8 rounded-lg bg-yrwen-light-purple/20 animate-float" style={{
                  animationDelay: '0.4s'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;