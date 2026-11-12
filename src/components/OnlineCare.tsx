import React from 'react';
import { siteConfig } from '../config/site';

const practicalLines = [
  {
    term: 'Individual',
    desc: 'Um encontro dedicado à sua história e às suas necessidades.',
  },
  {
    term: 'Online',
    desc: 'Atendimento sem deslocamento até um consultório.',
  },
  {
    term: 'Privacidade',
    desc: 'Um ambiente reservado ajuda você a conversar com tranquilidade.',
  },
  {
    term: 'Orientações',
    desc: 'Dúvidas sobre horários, valores e funcionamento você tira diretamente comigo pelo WhatsApp.',
  },
];

export const OnlineCare: React.FC = () => {
  return (
    <section id="atendimento" className="section-pad bg-surface">
      <div className="container-main online-grid">
        {/* Bloco 1: Título e texto (no celular vem primeiro; no desktop fica no topo da coluna direita) */}
        <div className="online-intro">
          <p className="eyebrow">ATENDIMENTO INDIVIDUAL PARA ADULTOS</p>
          <h2 className="heading-h2">
            Atendimento online, com espaço para a sua história.
          </h2>
          <p className="body-text">
            Você pode cuidar da sua saúde emocional sem precisar enfrentar
            deslocamentos até um consultório. Meus atendimentos são individuais,
            somente online, para adultos.
          </p>
          <p className="body-text">
            Para participar, basta um dispositivo com acesso à internet e um
            lugar reservado onde você se sinta à vontade para falar com
            privacidade. Todos os detalhes de acesso são combinados diretamente
            comigo.
          </p>
        </div>

        {/* Bloco 2: Fotografia única (no celular aparece entre o texto e as informações práticas; no desktop ocupa a coluna esquerda) */}
        <div className="online-photo">
          <div className="online-photo-frame">
            <img
              src={siteConfig.assets.onlineCare}
              alt={siteConfig.alts.online}
              width={1086}
              height={1448}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Bloco 3: Informações práticas e CTA */}
        <div className="online-details">
          <dl className="practical-list">
            {practicalLines.map((item) => (
              <div key={item.term} className="practical-item">
                <dt className="practical-term">{item.term}</dt>
                <dd className="practical-desc" style={{ margin: 0 }}>
                  {item.desc}
                </dd>
              </div>
            ))}
          </dl>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '10px',
            }}
          >
            <a
              href={siteConfig.whatsappUrls.online}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quero saber sobre o atendimento online
            </a>
            <p className="microtext">
              Consulte minha disponibilidade diretamente comigo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
