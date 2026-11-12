import React from 'react';
import { siteConfig } from '../config/site';

interface BrandProps {
  variant?: 'header' | 'footer';
}

export const Brand: React.FC<BrandProps> = ({ variant = 'header' }) => {
  if (variant === 'footer') {
    return (
      <div>
        <div className="footer-logo-frame">
          <img
            src={siteConfig.assets.logoOriginal}
            alt={siteConfig.alts.logo}
            width={1254}
            height={1254}
            loading="lazy"
          />
        </div>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '24px',
            fontWeight: 600,
            color: 'var(--ink)',
            margin: '0 0 4px 0',
          }}
        >
          {siteConfig.name}
        </p>
        <p
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--green)',
            margin: '0 0 6px 0',
          }}
        >
          {siteConfig.credentialsLine}
        </p>
        <p className="microtext" style={{ marginBottom: '6px' }}>
          {siteConfig.serviceSummary}
        </p>
        <p
          style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--olive)',
            margin: 0,
          }}
        >
          {siteConfig.signature}
        </p>
      </div>
    );
  }

  return (
    <a href="#inicio" className="brand-link">
      {/* Enquadramento técnico do monograma original MB sem redesenhar as letras (x=220, y=225, w=800, h=480) */}
      <span className="brand-monogram" aria-hidden="true">
        <svg
          viewBox="220 225 800 480"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          role="img"
        >
          <image
            href={siteConfig.assets.logoOriginal}
            width="1254"
            height="1254"
          />
        </svg>
      </span>
      <span className="brand-text">
        <span className="brand-name">{siteConfig.name}</span>
        <span className="brand-crp">{siteConfig.credentialsLine}</span>
      </span>
    </a>
  );
};
