import React from 'react';

const possibilities = [
  {
    title: 'Compreender suas emoções',
    text: 'Perceber o que você sente e como reage às situações da sua vida.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
        <path d="M12 8v4l2.5 2.5" />
      </svg>
    ),
  },
  {
    title: 'Reconhecer padrões',
    text: 'Olhar para pensamentos e comportamentos que se repetem nas relações.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="12" r="5" />
        <circle cx="15" cy="12" r="5" />
      </svg>
    ),
  },
  {
    title: 'Fortalecer sua autoestima',
    text: 'Construir uma relação consigo que considere suas necessidades, seus valores e seus limites.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v18" />
        <path d="M5 10c2.5-2 4.5-3 7-3s4.5 1 7 3" />
      </svg>
    ),
  },
  {
    title: 'Comunicar o que precisa',
    text: 'Encontrar maneiras mais claras de expressar sentimentos e necessidades.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Fazer escolhas conscientes',
    text: 'Refletir sobre decisões e sobre a vida que você deseja construir.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Ampliar recursos para o dia a dia',
    text: 'Desenvolver possibilidades de lidar com dificuldades, respeitando o seu contexto.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
      </svg>
    ),
  },
];

export const Approach: React.FC = () => {
  return (
    <section id="abordagem" className="section-pad bg-paper">
      <div className="container-main approach-layout">
        <div>
          <p className="eyebrow">TERAPIA COGNITIVO-COMPORTAMENTAL</p>
          <h2 className="heading-h2">
            Acolhimento para falar. Clareza para compreender.
          </h2>
          <p className="body-text">
            Na Terapia Cognitivo-Comportamental, olhamos para a relação entre
            pensamentos, emoções e atitudes. Esse olhar ajuda a compreender
            padrões e a construir, em conjunto, formas de lidar com o que você
            está vivendo.
          </p>
          <p className="body-text">
            A escuta e as estratégias utilizadas no processo consideram sua
            história, seus valores e as necessidades que aparecem ao longo dos
            encontros.
          </p>

          <div style={{ marginTop: '28px' }}>
            <a href="#como-funciona" className="section-link">
              <span>Veja como o atendimento começa</span>
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

        <div>
          <p className="approach-right-intro">
            No processo terapêutico, podemos trabalhar para:
          </p>
          <div className="approach-grid">
            {possibilities.map((item) => (
              <article key={item.title} className="approach-card">
                <div className="approach-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="body-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
