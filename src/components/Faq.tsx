import React from 'react';
import { siteConfig } from '../config/site';

const faqItems = [
  {
    question: 'Preciso saber exatamente o que dizer?',
    answer:
      'Não. Você pode começar pelo que consegue colocar em palavras hoje. Meu papel é te ouvir com calma e te ajudar a organizar, juntos, o que faz sentido cuidar.',
  },
  {
    question: 'A terapia é apenas para quem está em crise?',
    answer:
      'Não. Muitas pessoas me procuram justamente quando desejam compreender melhor suas emoções, fortalecer o autoconhecimento e cuidar com mais carinho das próprias relações e escolhas.',
  },
  {
    question: 'Que questões de relacionamento posso levar para a terapia?',
    answer:
      'Você pode trazer temas como dependência emocional, insegurança, ciúmes, traição, relações abusivas ou superação de términos. Eu acolho a sua história sem julgamentos e respeitando o seu momento.',
  },
  {
    question: 'O atendimento é online ou presencial?',
    answer:
      'Meus atendimentos são individuais e exclusivamente online, voltados para adultos.',
  },
  {
    question: 'Como funciona a Terapia Cognitivo-Comportamental?',
    answer:
      'Na TCC, olhamos juntos para a conexão entre o que você pensa, sente e faz. Trabalhamos em parceria para entender padrões que se repetem e construir caminhos mais saudáveis para lidar com as suas dificuldades.',
  },
  {
    question: 'Quanto custa e quanto dura cada sessão?',
    answer:
      'Eu passo todas essas informações diretamente para você. É só me chamar no WhatsApp para consultar valores, duração das sessões e horários disponíveis.',
  },
  {
    question: 'Com que frequência acontecem as sessões?',
    answer:
      'Combinamos a frequência juntos, considerando a sua rotina e o que faz sentido para o seu momento. Podemos alinhar isso já na nossa primeira conversa.',
  },
  {
    question: 'Preciso responder ao roteiro para entrar em contato?',
    answer:
      'Não. O roteiro é totalmente opcional e serve apenas como apoio se você não souber por onde começar. Se preferir, pode me chamar direto no WhatsApp.',
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
            Você pode tirar as principais dúvidas por aqui e conversar
            diretamente comigo sobre o que ainda precisar.
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
