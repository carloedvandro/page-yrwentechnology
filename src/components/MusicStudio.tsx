import { ArrowRight, ArrowUpRight, Youtube } from 'lucide-react';

export default function MusicStudio() {
  return <section id="music" className="container music-section">
    <div className="music-shell">
      <div className="music-copy">
        <p className="future-kicker">YRWEN / MÚSICA E VÍDEO COM IA</p>
        <h2>Tecnologia que conecta.<br /><span>Histórias que ganham som e imagem.</span></h2>
        <p>Criamos músicas personalizadas com inteligência artificial e vídeos para acompanhar cada composição. A pessoa pode receber uma música feita para ela e aparecer no videoclipe com seu próprio rosto. Conheça nossa expressão artística no canal Nexo Origin.</p>
        <div className="future-actions">
          <a href="https://www.youtube.com/@nexoorigin" target="_blank" rel="noopener noreferrer" className="future-button"><Youtube size={18} aria-hidden="true" /> Conhecer o Nexo Origin <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a href="#contact" className="future-text-link" onClick={()=>window.dispatchEvent(new CustomEvent('yrwen:brief',{detail:'Gostaria de conversar sobre uma música personalizada com IA e um videoclipe com meu rosto.'}))}>Criar minha música e vídeo <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="music-showcase">
        <div className="music-video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/g5j8Qow6VpI?rel=0"
            title="Fallin’ in Love | NEXØ — exemplo de videoclipe"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="music-video-title">Fallin’ in Love <span> NEXØ / Nexo Origin</span></p>
        <a href="https://youtube.com/shorts/g5j8Qow6VpI" target="_blank" rel="noopener noreferrer" className="future-text-link">Assistir no YouTube <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </div>
  </section>;
}
