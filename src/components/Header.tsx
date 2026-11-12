import React, { useState, useEffect, useRef } from 'react';
import { Brand } from './Brand';
import { siteConfig } from '../config/site';

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Primeiro passo', href: '#primeiro-passo' },
];

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <a href="#conteudo-principal" className="skip-link">
        Ir para o conteúdo
      </a>
      <header id="topo" className="site-header">
        <div className="container-main header-inner">
          <Brand variant="header" />

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-cta">
            <a
              href={siteConfig.whatsappUrls.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Conversar com a Márcia
            </a>
          </div>

          <button
            ref={toggleBtnRef}
            type="button"
            className="mobile-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="menu-navegacao-movel"
            aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="mobile-menu-label">{menuOpen ? 'Fechar' : 'Menu'}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav
            id="menu-navegacao-movel"
            className="mobile-nav-panel"
            aria-label="Navegação móvel"
          >
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
