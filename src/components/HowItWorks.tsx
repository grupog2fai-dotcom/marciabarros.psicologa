import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Primeiro contato',
    text: 'Você chama a Márcia no WhatsApp, tira dúvidas e consulta a disponibilidade para agendar.',
  },
  {
    number: '02',
    title: 'Primeira sessão',
    text: 'É o momento de conversar sobre o que trouxe você até aqui e começar a compreender sua história e suas necessidades.',
  },
  {
    number: '03',
    title: 'Continuidade do cuidado',
    text: 'A partir dos encontros, o processo vai sendo construído em conjunto. A frequência e os próximos passos são conversados com você.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="section-pad bg-paper how-section">
      <div className="container-main">
        <div className="how-header">
          <p className="eyebrow">DO PRIMEIRO CONTATO AO PROCESSO TERAPÊUTICO</p>
          <h2 className="heading-h2">
            Começar pode ser mais simples do que parece.
          </h2>
          <p className="body-text">
            O primeiro passo é uma conversa para entender o atendimento e
            combinar como seguir.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.number} className="step-card">
              <span className="step-number">{step.number}</span>
              <h3 className="card-title">{step.title}</h3>
              <p className="body-text">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="how-footer">
          <p className="microtext">
            Para saber valores, duração e disponibilidade, fale diretamente com
            a Márcia.
          </p>
          <a href="#primeiro-passo" className="section-link">
            <span>Encontre um ponto de partida para a conversa</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
