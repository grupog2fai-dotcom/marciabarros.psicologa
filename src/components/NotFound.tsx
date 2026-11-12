import React from 'react';
import { siteConfig } from '../config/site';

export const NotFound: React.FC = () => {
  return (
    <section className="section-pad bg-linen not-found-section" aria-labelledby="titulo-404">
      <div className="container-main">
        <div className="not-found-card">
          <p className="eyebrow">Página não encontrada • Erro 404</p>
          <h1 id="titulo-404" className="not-found-title">
            Este endereço não existe, mas você pode voltar ao início no <em>seu tempo</em>.
          </h1>
          <p className="body-text not-found-desc">
            O link que você tentou acessar não foi encontrado ou pode ter mudado de lugar.
            Você pode retornar à página principal para conhecer meu trabalho ou falar diretamente comigo pelo WhatsApp.
          </p>

          <div className="not-found-actions">
            <a href="/" className="btn-primary">
              Voltar para o início
            </a>
            <a
              href={siteConfig.whatsappUrls.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Conversar no WhatsApp
            </a>
          </div>

          <nav className="not-found-links" aria-label="Atalhos da página inicial">
            <a href="/#sobre">Sobre mim</a>
            <a href="/#abordagem">Como trabalho</a>
            <a href="/#atendimento">Atendimento online</a>
            <a href="/#primeiro-passo">Seu primeiro passo</a>
            <a href="/#duvidas">Perguntas frequentes</a>
          </nav>
        </div>
      </div>
    </section>
  );
};
