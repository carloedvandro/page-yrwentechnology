import { ArrowRight, ArrowUpRight, Music2, Youtube } from 'lucide-react';

export default function MusicStudio() {
  return <section id="music" className="container music-section">
    <div className="music-shell">
      <div className="music-copy">
        <p className="future-kicker">YRWEN / CRIAÇÃO MUSICAL</p>
        <h2>Tecnologia que conecta.<br /><span>Música que expressa.</span></h2>
        <p>A criatividade também faz parte da Yrwen. Compomos músicas e compartilhamos essa expressão artística no canal Nexo Origin.</p>
        <div className="future-actions">
          <a href="https://www.youtube.com/@nexoorigin" target="_blank" rel="noopener noreferrer" className="future-button"><Youtube size={18} aria-hidden="true" /> Conhecer o Nexo Origin <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a href="#contact" className="future-text-link" onClick={()=>window.dispatchEvent(new CustomEvent('yrwen:brief',{detail:'Gostaria de conversar sobre composição musical com a Yrwen Technology.'}))}>Conversar sobre uma composição <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="music-art" aria-hidden="true">
        <div className="music-disc"><div className="music-disc-label"><Music2 size={32}/><span>NEXO<br />ORIGIN</span></div></div>
        <div className="music-wave">{Array.from({length:31},(_,i)=><span key={i} style={{height:`${12+Math.sin(i*.7)**2*44}px`}} />)}</div>
        <div className="music-caption"><span>COMPOSIÇÃO · EXPRESSÃO · IDENTIDADE</span><span>@nexoorigin</span></div>
      </div>
    </div>
  </section>;
}
