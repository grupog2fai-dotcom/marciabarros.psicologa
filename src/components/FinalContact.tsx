import React from 'react';
import { siteConfig } from '../config/site';

export const FinalContact: React.FC = () => {
  return (
    <section id="contato" className="final-section">
      <div className="container-main final-layout">
        <div className="final-copy">
          <p className="eyebrow">UM PRIMEIRO PASSO POSSÍVEL</p>

          <h2 className="heading-h2">
            Você não precisa chegar com <em>tudo resolvido.</em>
          </h2>

          <p className="body-text">
            Pode começar com uma dúvida, um incômodo ou com aquilo que hoje é
            difícil colocar em palavras.
          </p>
          <p className="body-text">
            Se fizer sentido para você, a Márcia pode apresentar como funciona o
            atendimento e conversar sobre o próximo passo.
          </p>

          <div className="hero-actions">
            <a
              href={siteConfig.whatsappUrls.final}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quero conversar com a Márcia
            </a>
            <a href="#como-funciona" className="btn-secondary">
              Rever como funciona
            </a>
          </div>

          <p className="microtext" style={{ marginTop: '14px' }}>
            Atendimento individual online para adultos.
          </p>
        </div>

        <div className="final-media-wrapper">
          <picture className="final-media-picture">
            <source
              media="(min-width: 1024px)"
              srcSet={siteConfig.assets.closingDesktop}
              type="image/webp"
              width={1774}
              height={887}
            />
            <img
              src={siteConfig.assets.closingMobile}
              alt={siteConfig.alts.closing}
              width={1086}
              height={1448}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
