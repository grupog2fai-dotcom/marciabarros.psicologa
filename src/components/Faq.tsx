import React from 'react';
import { siteConfig } from '../config/site';

const faqItems = [
  {
    question: 'Preciso saber exatamente o que dizer?',
    answer:
      'Não. Você pode começar pelo que consegue contar hoje. O atendimento oferece espaço para compreender sua história e organizar, em conjunto, aquilo que faz sentido cuidar.',
  },
  {
    question: 'A terapia é apenas para quem está em crise?',
    answer:
      'A psicoterapia também pode ser procurada por quem deseja compreender emoções, fortalecer o autoconhecimento e olhar com mais cuidado para suas relações e escolhas.',
  },
  {
    question: 'Que questões de relacionamento posso levar para a terapia?',
    answer:
      'Você pode conversar sobre dependência emocional, insegurança, ciúmes, traição, relações abusivas e superação de términos. O atendimento considera sua história e o que faz sentido cuidar no seu processo.',
  },
  {
    question: 'O atendimento é online ou presencial?',
    answer:
      'A Márcia realiza atendimento psicológico individual somente online, para adultos.',
  },
  {
    question: 'Como funciona a Terapia Cognitivo-Comportamental?',
    answer:
      'A TCC considera a relação entre pensamentos, emoções e comportamentos. No processo, profissional e paciente trabalham em conjunto para compreender padrões e desenvolver formas de lidar com as dificuldades apresentadas.',
  },
  {
    question: 'Quanto custa e quanto dura cada sessão?',
    answer:
      'Esses detalhes são informados diretamente pela Márcia. Você pode consultar valores, duração e disponibilidade no primeiro contato pelo WhatsApp.',
  },
  {
    question: 'Com que frequência acontecem as sessões?',
    answer:
      'A frequência é conversada com a Márcia, considerando as necessidades do atendimento. Você pode tirar essa dúvida no contato inicial.',
  },
  {
    question: 'Preciso responder ao roteiro para entrar em contato?',
    answer:
      'Não. O roteiro é opcional e serve apenas para ajudar você a organizar o que gostaria de conversar. Você pode chamar a Márcia diretamente pelo WhatsApp.',
  },
];

export const Faq: React.FC = () => {
  return (
    <section id="duvidas" className="section-pad bg-paper">
      <div className="container-main faq-layout">
        <div>
          <p className="eyebrow">ANTES DE COMEÇAR</p>
          <h2 className="heading-h2">
            Algumas dúvidas podem aparecer antes do primeiro contato.
          </h2>
          <p className="body-text">
            Você pode entender o básico por aqui e conversar com a Márcia sobre
            o que ainda precisar.
          </p>

          <div style={{ marginTop: '28px' }}>
            <a
              href={siteConfig.whatsappUrls.faq}
              target="_blank"
              rel="noopener noreferrer"
              className="section-link"
            >
              <span>Tenho outra dúvida e quero conversar</span>
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

        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question} className="faq-item">
              <summary className="faq-summary">
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div className="faq-answer">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
