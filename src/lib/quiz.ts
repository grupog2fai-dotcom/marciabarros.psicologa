// Roteiro de primeiro contato. Não é uma avaliação clínica.
// Fonte única das perguntas, rotas e mensagens. Sem rede, armazenamento ou IA.

export interface QuizFocusOption {
  id: string;
  label: string;
  message: string;
}

export interface QuizTopic {
  id: string;
  label: string;
  messageLabel: string;
  question: string;
  options: QuizFocusOption[];
  result: string;
}

export interface QuizIntent {
  id: string;
  label: string;
  message: string;
}

export interface QuizState {
  step: number;
  topicId: string | null;
  focusId: string | null;
  intentId: string | null;
}

export type QuizAction =
  | { type: 'restart' }
  | { type: 'select-topic'; id: string }
  | { type: 'select-focus'; id: string }
  | { type: 'select-intent'; id: string }
  | { type: 'next' }
  | { type: 'back' };

export const quizConfig = {
  phone: '5521995324120',
  title: 'Vamos encontrar um ponto de partida para a sua conversa?',
  intro:
    'Se não souber bem por onde começar, responda a três perguntas rápidas. No final, monto uma mensagem pronta para você revisar e decidir se quer me enviar pelo WhatsApp.',
  purpose:
    'Suas respostas servem apenas para facilitar esse primeiro contato. Toda a escuta da sua história acontece nas nossas sessões.',
  privacy:
    'Nada é enviado automaticamente. Você revisa a mensagem antes de continuar.',
  question1: 'O que fez você buscar este espaço hoje?',
  question3: 'Como você prefere dar o próximo passo?',
  resultTitle: 'Seu primeiro passo pode ser uma conversa.',
  resultNote:
    'A mensagem abaixo é um ponto de partida. Você pode editá-la no WhatsApp antes de enviar.',
  topics: [
    {
      id: 'relacionamentos',
      label: 'Meus relacionamentos',
      messageLabel: 'meus relacionamentos',
      question: 'O que tem sido mais difícil nas suas relações?',
      options: [
        {
          id: 'f1',
          label: 'Colocar limites sem culpa.',
          message: 'Gostaria de conversar sobre colocar limites sem culpa.',
        },
        {
          id: 'f2',
          label: 'Lidar com insegurança e ciúmes.',
          message: 'Gostaria de conversar sobre insegurança e ciúmes.',
        },
        {
          id: 'f3',
          label: 'Perceber que me deixo de lado.',
          message:
            'Tenho percebido que me deixo de lado nas minhas relações.',
        },
        {
          id: 'f4',
          label: 'Atravessar um término ou uma mudança.',
          message: 'Gostaria de conversar sobre um término ou uma mudança.',
        },
        {
          id: 'f5',
          label: 'Prefiro conversar sobre isso diretamente.',
          message: 'Prefiro explicar os detalhes diretamente na conversa.',
        },
      ],
      result:
        'Você pode começar contando o que tem sido difícil nas suas relações. Minha proposta é compreender a sua história e ajudar você a reconhecer o espaço que suas necessidades merecem ter.',
    },
    {
      id: 'autoestima',
      label: 'Minha autoestima e meus limites',
      messageLabel: 'minha autoestima e meus limites',
      question: 'O que você gostaria de olhar com mais cuidado?',
      options: [
        {
          id: 'f1',
          label: 'Expressar o que preciso.',
          message: 'Gostaria de conversar sobre como expressar o que preciso.',
        },
        {
          id: 'f2',
          label: 'Dizer não sem me culpar.',
          message:
            'Gostaria de conversar sobre a dificuldade de dizer não sem me culpar.',
        },
        {
          id: 'f3',
          label: 'Reconhecer meu próprio valor.',
          message:
            'Gostaria de olhar com mais cuidado para a forma como reconheço meu próprio valor.',
        },
        {
          id: 'f4',
          label: 'Fazer escolhas com mais confiança.',
          message:
            'Gostaria de conversar sobre minhas escolhas e minha confiança para decidir.',
        },
        {
          id: 'f5',
          label: 'Prefiro conversar sobre isso diretamente.',
          message: 'Prefiro explicar os detalhes diretamente na conversa.',
        },
      ],
      result:
        'Pode ser importante ter um espaço para falar sobre suas necessidades, seus limites e a maneira como você se vê.',
    },
    {
      id: 'ansiedade',
      label: 'Ansiedade e sobrecarga',
      messageLabel: 'ansiedade e sobrecarga',
      question: 'Como isso aparece no seu dia a dia?',
      options: [
        {
          id: 'f1',
          label: 'Pensamentos que não desaceleram.',
          message: 'Tenho sentido dificuldade para desacelerar os pensamentos.',
        },
        {
          id: 'f2',
          label: 'Dificuldade para lidar com preocupações.',
          message:
            'Gostaria de conversar sobre preocupações que têm sido difíceis de administrar.',
        },
        {
          id: 'f3',
          label: 'Sensação de sobrecarga.',
          message:
            'Tenho sentido sobrecarga e gostaria de conversar sobre isso.',
        },
        {
          id: 'f4',
          label: 'Dificuldade para descansar.',
          message:
            'Gostaria de conversar sobre minha dificuldade para descansar.',
        },
        {
          id: 'f5',
          label: 'Prefiro conversar sobre isso diretamente.',
          message: 'Prefiro explicar os detalhes diretamente na conversa.',
        },
      ],
      result:
        'Você não precisa organizar tudo em palavras antes do primeiro contato. É possível começar contando como o seu dia a dia tem sido.',
    },
    {
      id: 'tristeza',
      label: 'Tristeza ou desânimo',
      messageLabel: 'tristeza ou desânimo',
      question: 'Que tipo de apoio você gostaria de buscar?',
      options: [
        {
          id: 'f1',
          label: 'Um espaço para falar do que sinto.',
          message: 'Gostaria de ter um espaço para falar do que sinto.',
        },
        {
          id: 'f2',
          label: 'Compreender um período difícil.',
          message: 'Gostaria de conversar sobre um período difícil.',
        },
        {
          id: 'f3',
          label: 'Voltar a olhar com cuidado para mim.',
          message: 'Gostaria de voltar a olhar com cuidado para mim.',
        },
        {
          id: 'f4',
          label: 'Ainda não sei explicar.',
          message:
            'Ainda não sei explicar os detalhes do que estou sentindo.',
        },
        {
          id: 'f5',
          label: 'Prefiro conversar sobre isso diretamente.',
          message: 'Prefiro explicar os detalhes diretamente na conversa.',
        },
      ],
      result:
        'Há momentos que são difíceis de nomear. Você pode começar pelo que consegue dizer hoje, respeitando o seu tempo.',
    },
    {
      id: 'autoconhecimento',
      label: 'Quero me conhecer melhor',
      messageLabel: 'autoconhecimento',
      question: 'O que você gostaria de compreender melhor?',
      options: [
        {
          id: 'f1',
          label: 'Minhas emoções e reações.',
          message: 'Gostaria de compreender melhor minhas emoções e reações.',
        },
        {
          id: 'f2',
          label: 'Padrões que se repetem.',
          message: 'Gostaria de olhar para padrões que percebo se repetir.',
        },
        {
          id: 'f3',
          label: 'Minhas escolhas e prioridades.',
          message:
            'Gostaria de conversar sobre minhas escolhas e prioridades.',
        },
        {
          id: 'f4',
          label: 'Como me relaciono comigo e com outras pessoas.',
          message:
            'Gostaria de compreender melhor como me relaciono comigo e com outras pessoas.',
        },
        {
          id: 'f5',
          label: 'Prefiro conversar sobre isso diretamente.',
          message: 'Prefiro explicar os detalhes diretamente na conversa.',
        },
      ],
      result:
        'A conversa pode começar pelas perguntas que você tem sobre si e pelos padrões que gostaria de compreender.',
    },
    {
      id: 'nao-sei',
      label: 'Ainda não sei explicar',
      messageLabel: 'ainda não sei explicar exatamente o que estou vivendo',
      question: 'O que faria mais sentido para você agora?',
      options: [
        {
          id: 'f1',
          label: 'Ter um espaço para falar.',
          message: 'Gostaria de ter um espaço para falar.',
        },
        {
          id: 'f2',
          label: 'Entender como a terapia funciona.',
          message: 'Gostaria de entender melhor como a terapia funciona.',
        },
        {
          id: 'f3',
          label: 'Saber como é a primeira sessão.',
          message: 'Gostaria de saber como é a primeira sessão.',
        },
        {
          id: 'f4',
          label: 'Prefiro conversar diretamente.',
          message: 'Prefiro conversar diretamente com você.',
        },
        {
          id: 'f5',
          label: 'Ainda não sei.',
          message: 'Ainda não sei bem como começar a explicar.',
        },
      ],
      result:
        'Você não precisa ter tudo claro antes de me procurar. Nossa primeira conversa serve justamente para te ajudar a entender por onde começar.',
    },
  ] as QuizTopic[],
  intents: [
    {
      id: 'entender',
      label: 'Quero entender como funciona.',
      message:
        'Neste momento, gostaria de entender melhor como funciona o atendimento.',
    },
    {
      id: 'agendar',
      label: 'Quero consultar disponibilidade para agendar.',
      message:
        'Neste momento, gostaria de consultar sua disponibilidade para agendar uma primeira sessão.',
    },
    {
      id: 'duvida',
      label: 'Quero tirar uma dúvida antes.',
      message:
        'Neste momento, gostaria de tirar uma dúvida antes de agendar.',
    },
  ] as QuizIntent[],
};

export const directMessages = Object.freeze({
  hero: 'Olá, Márcia! Conheci seu trabalho pelo site e gostaria de saber mais sobre a psicoterapia online para adultos. Como funciona o primeiro atendimento?',
  online:
    'Olá, Márcia! Conheci seu trabalho pelo site e gostaria de saber como funcionam as sessões online e consultar sua disponibilidade.',
  faq: 'Olá, Márcia! Conheci seu trabalho pelo site e tenho uma dúvida sobre o atendimento online. Podemos conversar?',
  final:
    'Olá, Márcia! Conheci seu trabalho pelo site e gostaria de consultar sua disponibilidade para uma primeira sessão online.',
});

export function initialQuizState(): QuizState {
  return { step: 0, topicId: null, focusId: null, intentId: null };
}

export function getTopic(topicId: string | null | undefined): QuizTopic | undefined {
  return quizConfig.topics.find((topic) => topic.id === topicId);
}

export function getFocusOptions(topicId: string | null | undefined): QuizFocusOption[] {
  return getTopic(topicId)?.options ?? [];
}

export function isComplete(answers: Partial<QuizState> | null | undefined): boolean {
  const topic = getTopic(answers?.topicId);
  return Boolean(
    topic &&
      topic.options.some((option) => option.id === answers?.focusId) &&
      quizConfig.intents.some((intent) => intent.id === answers?.intentId)
  );
}

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'restart':
      return initialQuizState();
    case 'select-topic': {
      if (state.step !== 0 || !getTopic(action.id)) return state;
      if (state.topicId === action.id) return state;
      return { ...state, topicId: action.id, focusId: null, intentId: null };
    }
    case 'select-focus': {
      if (
        state.step !== 1 ||
        !getFocusOptions(state.topicId).some((option) => option.id === action.id)
      )
        return state;
      return { ...state, focusId: action.id };
    }
    case 'select-intent': {
      if (
        state.step !== 2 ||
        !quizConfig.intents.some((intent) => intent.id === action.id)
      )
        return state;
      return { ...state, intentId: action.id };
    }
    case 'next':
      if (state.step === 0 && getTopic(state.topicId))
        return { ...state, step: 1 };
      if (
        state.step === 1 &&
        getFocusOptions(state.topicId).some(
          (option) => option.id === state.focusId
        )
      )
        return { ...state, step: 2 };
      if (state.step === 2 && isComplete(state))
        return { ...state, step: 3 };
      return state;
    case 'back':
      return { ...state, step: Math.max(0, state.step - 1) };
    default:
      return state;
  }
}

export function buildWhatsAppMessage(
  answers: QuizState,
  { includeAnswers = true }: { includeAnswers?: boolean } = {}
): string {
  if (!isComplete(answers))
    throw new Error('Responda às três perguntas antes de montar a mensagem.');
  const topic = getTopic(answers.topicId)!;
  const focus = topic.options.find((option) => option.id === answers.focusId)!;
  const intent = quizConfig.intents.find(
    (item) => item.id === answers.intentId
  )!;
  const opening =
    'Olá, Márcia! Conheci seu trabalho pelo site e gostaria de conversar sobre a psicoterapia online para adultos.';
  const parts = [opening];
  if (includeAnswers) {
    parts.push(
      'Meu ponto de partida: ' + topic.messageLabel + '.\n' + focus.message
    );
  }
  parts.push(intent.message + '\nComo podemos seguir?');
  return parts.join('\n\n');
}

export function buildWhatsAppUrl(message: string): string {
  if (typeof message !== 'string' || !message.trim())
    throw new Error('A mensagem precisa conter texto.');
  return (
    'https://wa.me/' + quizConfig.phone + '?text=' + encodeURIComponent(message)
  );
}

export function getQuizResult(answers: QuizState) {
  if (!isComplete(answers))
    throw new Error('O roteiro ainda não foi concluído.');
  return {
    title: quizConfig.resultTitle,
    body: getTopic(answers.topicId)!.result,
    note: quizConfig.resultNote,
    message: buildWhatsAppMessage(answers),
    url: buildWhatsAppUrl(buildWhatsAppMessage(answers)),
    privateMessage: buildWhatsAppMessage(answers, { includeAnswers: false }),
    privateUrl: buildWhatsAppUrl(
      buildWhatsAppMessage(answers, { includeAnswers: false })
    ),
  };
}
