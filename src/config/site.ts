import { directMessages, buildWhatsAppUrl } from '../lib/quiz';

export const siteConfig = {
  name: 'Márcia Barros',
  role: 'Psicóloga Clínica',
  crp: 'CRP 05/75399',
  credentialsLine: 'Psicóloga Clínica | CRP 05/75399',
  signature: 'Ciência • Escuta • Transformação',
  serviceSummary: 'Atendimento individual online para adultos.',
  phoneDisplay: '(21) 99532-4120',
  phoneInternational: '5521995324120',
  instagramHandle: '@marciabarrospsicologa_',
  instagramUrl: 'https://www.instagram.com/marciabarrospsicologa_/',
  siteUrl: '',
  heroVideoSrc: '',
  assets: {
    heroDesktop: '/assets/hero-marcia-desktop.webp',
    heroMobile: '/assets/hero-marcia-mobile.jpg',
    aboutCutout: '/assets/marcia-sobre-transparente.webp',
    aboutFallback: '/assets/marcia-fechamento-mobile.jpg',
    onlineCare: '/assets/marcia-atendimento-online.jpg',
    closingDesktop: '/assets/marcia-fechamento-desktop.webp',
    closingMobile: '/assets/marcia-fechamento-mobile.jpg',
    logoOriginal: '/assets/logo-marcia-original.jpg',
  },
  alts: {
    hero: 'Márcia Barros, psicóloga clínica, em seu ambiente de trabalho.',
    about: 'Retrato de Márcia Barros, psicóloga clínica.',
    online: 'Márcia Barros utilizando um notebook em seu ambiente de trabalho.',
    closing: 'Márcia Barros, psicóloga clínica, em seu ambiente de trabalho.',
    logo: 'Logo de Márcia Barros, Psicóloga Clínica, CRP 05/75399.',
  },
  whatsappUrls: {
    hero: buildWhatsAppUrl(directMessages.hero),
    online: buildWhatsAppUrl(directMessages.online),
    faq: buildWhatsAppUrl(directMessages.faq),
    final: buildWhatsAppUrl(directMessages.final),
  },
} as const;
