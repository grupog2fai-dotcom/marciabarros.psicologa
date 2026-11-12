import React, { useReducer, useRef, useEffect, useState } from 'react';
import {
  quizConfig,
  initialQuizState,
  quizReducer,
  getTopic,
  getFocusOptions,
  getQuizResult,
} from '../lib/quiz';
import { siteConfig } from '../config/site';

class QuizErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="quiz-card" role="alert">
          <p className="body-text" style={{ marginBottom: '20px' }}>
            Não foi possível carregar esta parte da página. Você ainda pode
            falar com a Márcia pelo WhatsApp.
          </p>
          <a
            href={siteConfig.whatsappUrls.hero}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Conversar com a Márcia
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

const QuizInteractiveCard: React.FC = () => {
  const [state, dispatch] = useReducer(quizReducer, undefined, initialQuizState);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>(
    'idle'
  );
  const stepFocusRef = useRef<HTMLElement | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setCopyStatus('idle');
    stepFocusRef.current?.focus({ preventScroll: true });
  }, [state.step]);

  const currentTopic = getTopic(state.topicId);
  const focusOptions = getFocusOptions(state.topicId);

  const canContinue =
    (state.step === 0 && Boolean(currentTopic)) ||
    (state.step === 1 &&
      focusOptions.some((option) => option.id === state.focusId)) ||
    (state.step === 2 &&
      quizConfig.intents.some((intent) => intent.id === state.intentId));

  const handleCopy = async (text: string) => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API indisponível');
      }
      await navigator.clipboard.writeText(text);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
  };

  if (state.step === 3) {
    const result = getQuizResult(state);
    return (
      <div className="quiz-card">
        <h3
          ref={(el) => {
            stepFocusRef.current = el;
          }}
          tabIndex={-1}
          className="quiz-legend"
          style={{ outline: 'none' }}
        >
          {result.title}
        </h3>

        <p className="body-text">{result.body}</p>

        <div style={{ marginTop: '18px' }}>
          <label
            htmlFor="previa-mensagem-roteiro"
            style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--ink)',
              marginBottom: '6px',
            }}
          >
            Prévia da sua mensagem
          </label>
          <textarea
            id="previa-mensagem-roteiro"
            readOnly
            value={result.message}
            className="quiz-preview-textarea"
            style={{ marginTop: 0 }}
            onFocus={(e) => e.currentTarget.select()}
          />
        </div>

        <p className="microtext" style={{ marginTop: '10px' }}>
          {result.note}
        </p>

        {copyStatus === 'copied' && (
          <p
            role="status"
            style={{
              marginTop: '12px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--green)',
            }}
          >
            Mensagem copiada.
          </p>
        )}

        {copyStatus === 'error' && (
          <p
            role="alert"
            style={{
              marginTop: '12px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--ink)',
            }}
          >
            Não foi possível copiar automaticamente. Selecione o texto da
            mensagem para copiar.
          </p>
        )}

        <div className="quiz-result-actions">
          <a
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Continuar no WhatsApp
          </a>

          <a
            href={result.privateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Conversar sem incluir respostas
          </a>

          <div className="quiz-secondary-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => handleCopy(result.message)}
            >
              Copiar mensagem
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => dispatch({ type: 'back' })}
            >
              Voltar
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => dispatch({ type: 'restart' })}
            >
              Refazer o roteiro
            </button>
          </div>
        </div>
      </div>
    );
  }

  const questionTitle =
    state.step === 0
      ? quizConfig.question1
      : state.step === 1
      ? currentTopic?.question ?? ''
      : quizConfig.question3;

  const options =
    state.step === 0
      ? quizConfig.topics.map((t) => ({ id: t.id, label: t.label }))
      : state.step === 1
      ? focusOptions.map((o) => ({ id: o.id, label: o.label }))
      : quizConfig.intents.map((i) => ({ id: i.id, label: i.label }));

  const selectedValue =
    state.step === 0
      ? state.topicId
      : state.step === 1
      ? state.focusId
      : state.intentId;

  const handleSelect = (id: string) => {
    if (state.step === 0) {
      dispatch({ type: 'select-topic', id });
    } else if (state.step === 1) {
      dispatch({ type: 'select-focus', id });
    } else if (state.step === 2) {
      dispatch({ type: 'select-intent', id });
    }
  };

  return (
    <div className="quiz-card">
      <div className="quiz-progress-header">
        <span className="quiz-step-label" aria-live="polite">
          Pergunta {state.step + 1} de 3
        </span>
        <div className="quiz-progress-dots" aria-hidden="true">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`quiz-progress-dot${
                index <= state.step ? ' is-active' : ''
              }`}
            />
          ))}
        </div>
      </div>

      <fieldset className="quiz-fieldset">
        <legend
          ref={(el) => {
            stepFocusRef.current = el;
          }}
          tabIndex={-1}
          className="quiz-legend"
          style={{ outline: 'none' }}
        >
          {questionTitle}
        </legend>

        <div className="quiz-options-grid">
          {options.map((option) => {
            const isSelected = selectedValue === option.id;
            const inputId = `roteiro-etapa-${state.step}-opcao-${option.id}`;
            return (
              <label
                key={option.id}
                htmlFor={inputId}
                className={`quiz-option-label${
                  isSelected ? ' is-selected' : ''
                }`}
              >
                <input
                  id={inputId}
                  type="radio"
                  name={`roteiro-pergunta-${state.step}`}
                  value={option.id}
                  checked={isSelected}
                  onChange={() => handleSelect(option.id)}
                  className="quiz-radio-input"
                />
                <span>{option.label}</span>
                {isSelected && (
                  <span className="quiz-check-badge" aria-hidden="true">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                )}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="quiz-footer-bar">
        <div>
          {!canContinue && (
            <p className="microtext">Escolha uma opção para continuar.</p>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {state.step > 0 && (
            <button
              type="button"
              className="btn-secondary"
              onClick={() => dispatch({ type: 'back' })}
            >
              Voltar
            </button>
          )}

          <button
            type="button"
            className="btn-primary"
            disabled={!canContinue}
            onClick={() => dispatch({ type: 'next' })}
          >
            {state.step === 2 ? 'Ver minha mensagem' : 'Continuar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export const FirstContactQuiz: React.FC = () => {
  return (
    <section id="primeiro-passo" className="section-pad bg-quiz">
      <div className="container-quiz quiz-layout">
        <div>
          <p className="eyebrow">UM COMEÇO NO SEU TEMPO</p>
          <h2 className="heading-h2">{quizConfig.title}</h2>
          <p className="body-text">{quizConfig.intro}</p>
          <p className="body-text">{quizConfig.purpose}</p>

          <div className="quiz-badge-list">
            <p
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              3 perguntas. No seu ritmo.
            </p>
            <p className="microtext">{quizConfig.privacy}</p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <a
              href={siteConfig.whatsappUrls.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="section-link"
            >
              <span>Prefiro conversar diretamente</span>
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

        <QuizErrorBoundary>
          <QuizInteractiveCard />
        </QuizErrorBoundary>
      </div>
    </section>
  );
};
