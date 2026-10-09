import { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
const goals = [
 { title: 'Criar uma música e um vídeo', solution: 'Música e videoclipe personalizados com IA', text: 'Um ponto de partida é definir a história, a mensagem e o estilo da música, além de conversar sobre o vídeo e a inclusão do seu rosto no videoclipe.' },
 { title: 'Melhorar o atendimento', solution: 'Agentes de IA e atendimento integrado', text: 'Um ponto de partida é conectar os canais de atendimento ao conhecimento da sua empresa, com encaminhamento para a equipe quando necessário.' },
 { title: 'Automatizar tarefas', solution: 'Automação e integração de processos', text: 'Um ponto de partida é mapear tarefas repetitivas e conectar suas ferramentas em fluxos com regras e acompanhamento.' },
 { title: 'Organizar a gestão', solution: 'CRM ou sistema de gestão sob medida', text: 'Um ponto de partida é centralizar dados, organizar etapas e criar uma visão clara do processo que sua equipe precisa acompanhar.' },
 { title: 'Criar um produto digital', solution: 'Software e SaaS sob medida', text: 'Um ponto de partida é definir o público, a necessidade principal e as funcionalidades essenciais para a primeira versão do produto.' },
];
export default function ProjectAdvisor() {
 const [goal,setGoal]=useState<number|null>(null),[stage,setStage]=useState(''),[result,setResult]=useState(false);
 const selected=goal===null?null:goals[goal];
 const brief=selected?`Gostaria de conversar sobre ${selected.solution.toLowerCase()}. Meu objetivo é ${selected.title.toLowerCase()}. Situação atual: ${stage}.`:'';
 return <section id="advisor" className="container advisor-section">
  <div className="experience-heading"><p className="future-kicker">02 / SEU PRÓXIMO PASSO</p><h2>Uma ideia.<br/><span>Um caminho para construir.</span></h2><p>Conte onde você quer chegar. Vamos sugerir um ponto de partida para a nossa conversa.</p></div>
  <div className="advisor-shell">
   <div className="advisor-intro"><Sparkles size={30}/><h3>Qual é o desafio<br/>da sua empresa?</h3><p>Um roteiro rápido para conectar a sua necessidade aos serviços da Yrwen.</p><span>Orientação por escolhas · sem envio de dados</span></div>
   <div className="advisor-content">
    <form onSubmit={e=>{e.preventDefault();setResult(true);}}>
     <fieldset><legend>01. O que você quer transformar?</legend><div className="advisor-options">{goals.map((item,i)=><label key={item.title} className={goal===i?'selected':''}><input type="radio" name="goal" value={i} checked={goal===i} required onChange={()=>{setGoal(i);setStage('');setResult(false);}}/>{item.title}{goal===i&&<Check size={16}/>}</label>)}</div></fieldset>
     <label className="advisor-stage" htmlFor="project-stage">02. Em que momento você está?</label><select id="project-stage" value={stage} required onChange={e=>{setStage(e.target.value);setResult(false);}}><option value="">Selecione uma opção</option>{(selected?.solution === 'Música e videoclipe personalizados com IA' ? ['Tenho uma ideia para uma música', 'Quero uma música e um vídeo com meu rosto', 'Quero conversar sobre as possibilidades'] : ['Estou começando uma ideia', 'Quero melhorar uma operação existente', 'Preciso integrar ferramentas que já uso']).map(option=><option key={option}>{option}</option>)}</select>
     <button className="future-button mt-6" type="submit">Descobrir meu caminho <ArrowRight size={16}/></button>
    </form>
    {result&&selected&&<div className="advisor-result" role="status"><p className="future-kicker">SEU PONTO DE PARTIDA</p><h4>{selected.solution}</h4><p>{selected.text}</p><p className="advisor-note">O escopo, a viabilidade e o investimento serão definidos com a equipe.</p><a className="future-text-link" href="#contact" onClick={()=>window.dispatchEvent(new CustomEvent('yrwen:brief',{detail:brief}))}>Levar esta ideia para a Yrwen <ArrowRight size={16}/></a></div>}
   </div>
  </div>
 </section>;
}
