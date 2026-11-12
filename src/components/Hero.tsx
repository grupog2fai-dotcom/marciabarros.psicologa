import React from 'react';
import { siteConfig } from '../config/site';
import { HeroMedia } from './HeroMedia';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="container-main hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">PSICOTERAPIA ONLINE PARA ADULTOS</p>

          <h1 className="heading-h1">
            Você merece relações em que também exista{' '}
            <em>espaço para você.</em>
          </h1>

          <p className="body-text">
            Um espaço de escuta para compreender suas emoções, cuidar da
            autoestima e olhar com mais clareza para os seus relacionamentos.
            Com acolhimento, base científica e respeito à sua história.
          </p>

          <div className="hero-credentials">
            <span className="hero-credentials-name">{siteConfig.name}</span>
            <span className="hero-credentials-crp">
              {siteConfig.credentialsLine}
            </span>
          </div>

          <div className="hero-actions">
            <a
              href={siteConfig.whatsappUrls.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quero conversar com a Márcia
            </a>
            <a href="#como-funciona" className="btn-secondary">
              Entender como funciona
            </a>
          </div>

          <p className="microtext" style={{ marginTop: '14px' }}>
            Você pode começar com uma dúvida. O primeiro contato é pelo
            WhatsApp.
          </p>

          <div className="hero-info-line" aria-label="Informações do atendimento">
            <span>Atendimento individual</span>
            <span className="hero-dot" aria-hidden="true" />
            <span>Somente online</span>
            <span className="hero-dot" aria-hidden="true" />
            <span>Para adultos</span>
          </div>
        </div>

        <HeroMedia
          posterDesktop={siteConfig.assets.heroDesktop}
          posterMobile={siteConfig.assets.heroMobile}
          alt={siteConfig.alts.hero}
          videoSrc={siteConfig.heroVideoSrc}
        />
      </div>
    </section>
  );
};
