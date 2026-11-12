import React, { useEffect, useRef } from 'react';

interface QuizPrivacyDialogProps {
  open: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export const QuizPrivacyDialog: React.FC<QuizPrivacyDialogProps> = ({
  open,
  onClose,
  triggerRef,
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
      triggerRef.current?.focus();
    }
  }, [open, triggerRef]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
      triggerRef.current?.focus();
    };

    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose, triggerRef]);

  return (
    <dialog
      ref={dialogRef}
      className="privacy-dialog"
      aria-labelledby="titulo-privacidade-roteiro"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <h2
          id="titulo-privacidade-roteiro"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontWeight: 600,
            margin: 0,
            color: 'var(--ink)',
          }}
        >
          Como suas respostas são usadas
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar aviso de privacidade"
          className="btn-secondary"
          style={{ minHeight: '40px', padding: '6px 14px' }}
        >
          Fechar
        </button>
      </div>

      <p className="body-text">
        As escolhas feitas no roteiro servem para montar uma sugestão de
        mensagem durante a sua visita. Elas ficam apenas na memória desta
        página e não são salvas em banco de dados nem enviadas automaticamente.
      </p>
      <p className="body-text">
        Ao escolher continuar no WhatsApp, o texto exibido é compartilhado com
        o aplicativo. Você pode editar a mensagem e decide se deseja enviá-la.
        Também pode seguir sem incluir as respostas.
      </p>
      <p className="body-text">
        WhatsApp e Instagram são serviços externos e possuem suas próprias
        condições de uso e privacidade. Este aviso descreve o funcionamento do
        roteiro nesta página.
      </p>
      <p className="body-text">
        Para esclarecer dúvidas sobre o contato e o atendimento, fale
        diretamente com a Márcia pelo WhatsApp (21) 99532-4120.
      </p>

      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
        <button type="button" className="btn-primary" onClick={onClose}>
          Entendi
        </button>
      </div>
    </dialog>
  );
};
