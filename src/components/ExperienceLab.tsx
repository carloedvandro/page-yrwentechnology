import { useState } from 'react';
import { ArrowRight, Bot, Workflow, Database, RotateCcw, Check } from 'lucide-react';

const scenarios = [
  { name: 'Atendimento com IA', icon: Bot, title: 'Da primeira mensagem ao próximo passo.', description: 'Explore um exemplo de atendimento conectado ao contexto da empresa.', steps: [
    { name: 'Mensagem', title: 'Um cliente inicia a conversa', text: '“Quero conhecer as opções para automatizar o atendimento da minha empresa.”', detail: 'Entrada · WhatsApp ou canal integrado' },
    { name: 'Contexto', title: 'A informação encontra o contexto', text: 'O agente consulta as informações aprovadas sobre os serviços e identifica a necessidade do cliente.', detail: 'Conhecimento · Conteúdo da empresa' },
    { name: 'Ação', title: 'A conversa vira uma oportunidade', text: 'Os dados necessários são organizados no CRM e o atendimento é encaminhado para a equipe responsável.', detail: 'Integração · CRM e atendimento humano' },
    { name: 'Continuidade', title: 'Sua equipe assume com clareza', text: 'O histórico e a necessidade do cliente acompanham o contato, reduzindo perguntas repetidas.', detail: 'Resultado esperado · Atendimento conectado' },
  ] },
  { name: 'Automação de processos', icon: Workflow, title: 'Menos trabalho manual. Mais fluxo.', description: 'Acompanhe um exemplo de integração entre formulário, dados e equipe.', steps: [
    { name: 'Entrada', title: 'Uma solicitação chega', text: 'Um formulário recebe uma nova solicitação de orçamento com os dados do cliente.', detail: 'Origem · Formulário do site' },
    { name: 'Validação', title: 'Os dados são conferidos', text: 'O fluxo verifica os campos obrigatórios e identifica registros duplicados antes de continuar.', detail: 'Regras · Validação e consistência' },
    { name: 'Integração', title: 'As ferramentas se conectam', text: 'A solicitação é registrada no sistema de gestão e direcionada para o responsável.', detail: 'Ação · Sistemas e notificações' },
    { name: 'Acompanhamento', title: 'Cada solicitação tem um caminho', text: 'A equipe acompanha a situação do pedido e sabe qual é o próximo passo.', detail: 'Resultado esperado · Rastreabilidade' },
  ] },
  { name: 'Gestão sob medida', icon: Database, title: 'Uma visão mais clara da operação.', description: 'Veja como um CRM pode organizar o processo comercial da sua empresa.', steps: [
    { name: 'Contato', title: 'Cada oportunidade tem um lugar', text: 'O contato é registrado com suas necessidades, origem e responsável comercial.', detail: 'Organização · Cadastro centralizado' },
    { name: 'Pipeline', title: 'O processo fica visível', text: 'A oportunidade avança por etapas definidas para o fluxo de vendas da sua empresa.', detail: 'Gestão · Etapas comerciais' },
    { name: 'Rotina', title: 'O próximo passo fica claro', text: 'Tarefas e lembretes ajudam a equipe a manter o acompanhamento de cada cliente.', detail: 'Operação · Ações e responsáveis' },
    { name: 'Visão', title: 'Dados para decidir melhor', text: 'Painéis consolidam as informações registradas para apoiar a análise da operação.', detail: 'Resultado esperado · Visibilidade' },
  ] },
];
export default function ExperienceLab() {
  const [scenario,setScenario]=useState(0),[step,setStep]=useState(0);
  const current=scenarios[scenario], content=current.steps[step];
  return <section id="lab" className="experience-section container">
    <div className="experience-heading"><p className="future-kicker">01 / EXPERIMENTE</p><h2>Não imagine.<br /><span>Explore as possibilidades.</span></h2><p>Percorra os fluxos e descubra como tecnologia pode transformar uma tarefa em um processo conectado.</p></div>
    <div className="lab-shell">
      <div className="lab-selector" role="group" aria-label="Demonstrações de serviços">{scenarios.map((item,i)=><button key={item.name} aria-pressed={scenario===i} onClick={()=>{setScenario(i);setStep(0);}}><item.icon size={18}/>{item.name}<ArrowRight size={15}/></button>)}</div>
      <div className="lab-workspace">
        <div className="lab-topline"><span>EXPERIÊNCIA GUIADA</span><span>Exemplo ilustrativo · sem dados reais</span></div>
        <h3>{current.title}</h3><p className="lab-description">{current.description}</p>
        <div className="lab-steps" role="group" aria-label="Etapas da demonstração">{current.steps.map((item,i)=><button key={item.name} aria-pressed={step===i} onClick={()=>setStep(i)}><span>{i<step?<Check size={15}/>:String(i+1).padStart(2,'0')}</span>{item.name}</button>)}</div>
        <div className="lab-result" aria-live="polite"><span className="lab-result-number">0{step+1}</span><div><p className="future-kicker">{content.detail}</p><h4>{content.title}</h4><p>{content.text}</p></div></div>
        <div className="lab-navigation"><button onClick={()=>setStep(0)}><RotateCcw size={15}/>Reiniciar</button>{step<3?<button className="future-button" onClick={()=>setStep(step+1)}>Próxima etapa <ArrowRight size={16}/></button>:<a className="future-button" href="#advisor">Quero algo assim <ArrowRight size={16}/></a>}</div>
      </div>
    </div>
  </section>;
}
