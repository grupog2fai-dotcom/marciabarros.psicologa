import React, { useState, useRef } from 'react';
import { Brand } from './Brand';
import { siteConfig } from '../config/site';
import { QuizPrivacyDialog } from './QuizPrivacyDialog';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const privacyBtnRef = useRef<HTMLButtonElement | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer id="rodape" className="site-footer">
      <div className="container-main">
        <div className="footer-grid">
          <Brand variant="footer" />

          <div>
            <h2 className="footer-heading">Navegação</h2>
            <ul className="footer-list">
              <li>
                <a href="#sobre" className="footer-link">
                  Sobre mim
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="footer-link">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#primeiro-passo" className="footer-link">
                  Seu primeiro passo
                </a>
              </li>
              <li>
                <a href="#duvidas" className="footer-link">
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Contatos</h2>
            <ul className="footer-list">
              <li>
                <a
                  href={siteConfig.whatsappUrls.hero}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  WhatsApp: {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Instagram: {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>

            <button
              ref={privacyBtnRef}
              type="button"
              className="footer-privacy-btn"
              onClick={() => setPrivacyOpen(true)}
            >
              Privacidade do roteiro
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ margin: 0 }}>
            © {currentYear} Márcia Barros. Todos os direitos reservados.
          </p>
          <p style={{ margin: 0 }}>
            {siteConfig.name} • {siteConfig.credentialsLine}
          </p>
        </div>
      </div>

      <QuizPrivacyDialog
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        triggerRef={privacyBtnRef}
      />
    </footer>
  );
};
