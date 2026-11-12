import React from 'react';

const identificationCards = [
  {
    title: 'Você se deixa por último',
    text: 'Suas necessidades vão ficando para depois, enquanto o esforço para manter a relação ocupa cada vez mais espaço.',
  },
  {
    title: 'Colocar limites traz culpa',
    text: 'Dizer o que você precisa ou discordar pode vir acompanhado do medo de decepcionar ou perder alguém.',
  },
  {
    title: 'Os mesmos conflitos voltam',
    text: 'Insegurança, ciúmes e discussões podem se repetir, mesmo quando você gostaria de agir de outro jeito.',
  },
  {
    title: 'Um término ainda dói',
    text: 'O fim de uma relação pode trazer saudade, dúvidas e dificuldade para reconhecer como seguir.',
  },
  {
    title: 'Os pensamentos não desaceleram',
    text: 'Preocupações, antecipações e autocobrança podem tomar um espaço difícil de administrar no dia a dia.',
  },
  {
    title: 'Há dias em que falta ânimo',
    text: 'Tristeza, cansaço emocional ou perda de interesse merecem atenção e uma escuta cuidadosa.',
  },
];

export const Identification: React.FC = () => {
  return (
    <section id="identificacao" className="section-pad bg-paper">
      <div className="container-main">
        <div className="section-header-centered">
          <p className="eyebrow">TALVEZ ALGO DISSO FAÇA SENTIDO PARA VOCÊ</p>
          <h2 className="heading-h2">
            Nem sempre o que pesa aparece para quem está de fora.
          </h2>
          <p className="body-text">
            Talvez você esteja seguindo com a rotina, tentando manter tudo em
            ordem, enquanto algumas relações, pensamentos ou sentimentos pedem
            mais atenção.
          </p>
        </div>

        <div className="identification-grid">
          {identificationCards.map((card) => (
            <article key={card.title} className="editorial-card">
              <div className="editorial-card-Accent" aria-hidden="true" />
              <h3 className="card-title">{card.title}</h3>
              <p className="body-text">{card.text}</p>
            </article>
          ))}
        </div>

        <div className="identification-footer">
          <p className="body-text">
            Você não precisa se reconhecer em tudo isso para procurar apoio. A
            terapia começa pela sua história.
          </p>
          <a href="#primeiro-passo" className="section-link">
            <span>Quero encontrar um ponto de partida</span>
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
