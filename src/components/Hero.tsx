import { useState } from 'react';
import { ArrowRight, ArrowDown, Pause, Play, Orbit } from 'lucide-react';
import IntelligenceSphere from './fx/IntelligenceSphere';

const modes = [
  { name: 'Inteligência', detail: 'Agentes que conectam contexto, atendimento e ferramentas.' },
  { name: 'Software', detail: 'Sistemas desenhados para o jeito que sua empresa trabalha.' },
  { name: 'Conexões', detail: 'Dados e processos integrados em uma operação mais simples.' },
];
export default function Hero() {
  const [mode,setMode]=useState(0), [paused,setPaused]=useState(false);
  return (
    <section id="hero" className="future-hero">
      <div className="future-grid" aria-hidden="true" />
      <div className="container relative">
        <div className="future-kicker"><span /> SOFTWARE · INTELIGÊNCIA ARTIFICIAL · AUTOMAÇÃO</div>
        <div className="future-hero-layout">
          <div className="future-copy">
            <h1>O próximo passo<br />do seu negócio.<br /><span>Construído hoje.</span></h1>
            <p>Transformamos desafios reais em software, agentes de IA e processos conectados. Tecnologia feita para sair da ideia e entrar na sua operação.</p>
            <div className="future-actions">
              <a href="#lab" className="future-button">Explore o que é possível <ArrowRight size={18} /></a>
              <a href="#advisor" className="future-text-link">Desenhe seu projeto <ArrowRight size={16} /></a>
            </div>
            <div className="future-signature"><span>YRWEN TECHNOLOGY</span><span>Engenharia com propósito.</span></div>
          </div>
          <div className="sphere-stage">
            <div className="sphere-heading"><span><Orbit size={15} /> NÚCLEO YRWEN</span><button onClick={()=>setPaused(!paused)} aria-label={paused?'Retomar animação':'Pausar animação'}>{paused?<Play size={15}/>:<Pause size={15}/>}</button></div>
            <IntelligenceSphere mode={mode} paused={paused} />
            <div className="sphere-center" aria-hidden="true">Y<span>TECNOLOGIA EM MOVIMENTO</span></div>
            <div className="sphere-foot"><span>Explore as camadas</span><span>Visualização interativa</span></div>
            <div className="sphere-controls" role="group" aria-label="Camadas da tecnologia">
              {modes.map((item,i)=><button key={item.name} onClick={()=>setMode(i)} aria-pressed={mode===i}><span>0{i+1}</span>{item.name}</button>)}
            </div>
            <p className="sphere-description" aria-live="polite">{modes[mode].detail}</p>
          </div>
        </div>
        <div className="future-hero-bottom"><span>DA IDEIA À OPERAÇÃO</span><a href="#lab">Experimente a tecnologia <ArrowDown size={15}/></a><span>GUARULHOS · BRASIL</span></div>
      </div>
    </section>
  );
}
