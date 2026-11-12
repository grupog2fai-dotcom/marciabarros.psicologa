import React from 'react';

const principles = [
  'ESCUTA COM RESPEITO',
  'CIÊNCIA NO CUIDADO',
  'ESPAÇO PARA VOCÊ',
  'RELAÇÕES CONSCIENTES',
  'SEU TEMPO IMPORTA',
];

// Duplicado para garantir largura suficiente em telas ultra-wide
const tickerItems = [...principles, ...principles];

export const PrinciplesMarquee: React.FC = () => {
  return (
    <section
      id="principios"
      className="marquee-section"
      aria-label="Princípios do cuidado terapêutico"
    >
      <div className="marquee-viewport">
        <div className="marquee-track">
          <ul className="marquee-group">
            {tickerItems.map((item, index) => (
              <li key={`track-1-${index}`} className="marquee-item">
                <span>{item}</span>
                <span className="marquee-separator" aria-hidden="true" />
              </li>
            ))}
          </ul>

          {/* Segunda esteira idêntica para loop contínuo infinito e sem emendas */}
          <ul className="marquee-group" aria-hidden="true">
            {tickerItems.map((item, index) => (
              <li key={`track-2-${index}`} className="marquee-item">
                <span>{item}</span>
                <span className="marquee-separator" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
