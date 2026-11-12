import React from 'react';
import { siteConfig } from '../config/site';

const qualifications = [
  'Graduação em Psicologia pela Universidade Estácio de Sá.',
  'Pós-graduações em Terapia Cognitivo-Comportamental e em Neurociência, Psicopatologia e Comportamento.',
  'Formações em Psicopatologia, TCC, ACT e DBT pelo Grupo PBE, da professora Fernanda Landeiro.',
  'Formação em Relacionamentos.',
];

export const AboutMarcia: React.FC = () => {
  return (
    <section id="sobre" className="section-pad bg-surface">
      <div className="container-main about-grid">
        {/* Coluna 1: Apresentação e formação */}
        <div>
          <p className="eyebrow">QUEM VAI RECEBER A SUA HISTÓRIA</p>
          <h2 className="heading-h2">Olá, eu sou a Márcia.</h2>
          <p className="about-credentials">{siteConfig.credentialsLine}</p>

          <p className="body-text">
            Meu trabalho começa pela escuta: compreender o que você está
            vivendo, como isso aparece na sua rotina e o que faz sentido cuidar
            neste momento.
          </p>
          <p className="body-text">
            Atendo adultos em psicoterapia online, com atenção especial aos
            relacionamentos, à autoestima e à autonomia emocional. Acredito que
            existe espaço para olhar para o que dói sem reduzir sua história a
            um rótulo.
          </p>
          <p className="body-text">
            Meu compromisso é construir com você um processo acolhedor e
            fundamentado, que respeite seu tempo e ajude a ampliar a
            compreensão sobre suas emoções, seus padrões e suas escolhas.
          </p>

          <ul className="qualifications-list" aria-label="Formação acadêmica e clínica">
            {qualifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div style={{ marginTop: '24px' }}>
            <a href="#abordagem" className="section-link">
              <span>Entenda minha forma de trabalhar</span>
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

        {/* Coluna 2: Retrato com transparência real integrado ao fundo */}
        <div className="about-portrait-col">
          <div className="about-portrait-frame">
            <picture>
              <source
                srcSet={siteConfig.assets.aboutCutout}
                type="image/webp"
                width={1122}
                height={1402}
              />
              <img
                src={siteConfig.assets.aboutFallback}
                alt={siteConfig.alts.about}
                width={1122}
                height={1402}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>

        {/* Coluna 3: Frase editorial em serifada */}
        <div className="about-quote-col">
          <div className="about-quote-box">
            <p className="about-editorial-phrase">
              Sua história pode ser contada no seu tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
