import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Primeiro contato',
    text: 'Você me chama no WhatsApp, tira suas dúvidas e consulta os horários disponíveis para agendar.',
  },
  {
    number: '02',
    title: 'Primeira sessão',
    text: 'É o momento de nos conhecermos: você me conta, no seu ritmo, o que trouxe você até aqui para começarmos a olhar para a sua história.',
  },
  {
    number: '03',
    title: 'Continuidade do cuidado',
    text: 'A partir dos encontros, vamos construindo o processo juntos, respeitando o seu momento e combinando a frequência ideal para você.',
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
            O primeiro passo é uma conversa tranquila para você entender como
            funciona e combinarmos como seguir.
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
            Para saber valores, duração e disponibilidade, fale diretamente
            comigo.
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
