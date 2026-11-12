import React from 'react';

interface HeroMediaProps {
  posterDesktop: string;
  posterMobile: string;
  alt: string;
  videoSrc?: string;
}

export const HeroMedia: React.FC<HeroMediaProps> = ({
  posterDesktop,
  posterMobile,
  alt,
  videoSrc,
}) => {
  if (videoSrc && videoSrc.trim() !== '') {
    return (
      <div className="hero-media-wrapper">
        <video
          controls
          preload="metadata"
          poster={posterDesktop}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={videoSrc} />
        </video>
      </div>
    );
  }

  return (
    <div className="hero-media-wrapper">
      <picture className="hero-media-picture">
        <source
          media="(min-width: 1024px)"
          srcSet={posterDesktop}
          type="image/webp"
          width={1774}
          height={887}
        />
        <img
          src={posterMobile}
          alt={alt}
          width={1086}
          height={1448}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
    </div>
  );
};
