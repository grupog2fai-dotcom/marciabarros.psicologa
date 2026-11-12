# Márcia Barros — Psicóloga Clínica | CRP 05/75399

Landing page oficial de **Márcia Barros** (Psicóloga Clínica, CRP 05/75399), voltada para atendimento psicológico individual somente online de adultos, fundamentado na Terapia Cognitivo-Comportamental (TCC).

## Estrutura implementada

- **12 seções completas**:
  1. Cabeçalho (`#topo`) com enquadramento técnico do monograma original `MB`, navegação responsiva e menu móvel acessível.
  2. Hero magnética (`#inicio`) com `<picture>` responsivo (`hero-marcia-desktop.webp` no desktop e `hero-marcia-mobile.jpg` no celular) e `HeroMedia` preparado para vídeo opcional futuro.
  3. Letreiro em movimento (`#principios`) com os 5 princípios, pausa persistente por teclado/clique e suporte a `prefers-reduced-motion`.
  4. Seção de identificação (`#identificacao`) com 6 cards editoriais informativos.
  5. Sobre a Márcia (`#sobre`) com retrato recortado em transparência real (`marcia-sobre-transparente.webp`), credenciais acadêmicas e frase editorial em serifada.
  6. Como a Márcia trabalha (`#abordagem`) apresentando a Terapia Cognitivo-Comportamental e 6 possibilidades do processo terapêutico.
  7. Como começar (`#como-funciona`) em 3 etapas claras (`01`, `02`, `03`).
  8. Atendimento online (`#atendimento`) com fotografia real da profissional no notebook (`marcia-atendimento-online.jpg`) e informações práticas.
  9. Roteiro interativo de primeiro contato (`#primeiro-passo`) com 3 perguntas, 6 temas, 5 recortes por tema e 3 intenções (90 combinações verificadas), prévia revisável, rota sem respostas e cópia com fallback.
  10. Perguntas frequentes (`#duvidas`) em acordeão nativo (`<details>`/`<summary>`) com 8 dúvidas reais respondidas.
  11. Convite final (`#contato`) em composição reversa (`marcia-fechamento-desktop.webp` à esquerda no desktop e `marcia-fechamento-mobile.jpg` no celular).
  12. Rodapé (`#rodape`) com logo oficial completa (`logo-marcia-original.jpg`), contatos verificados e modal acessível (`<dialog>`) de privacidade do roteiro.

## Scripts

```bash
npm install
npm test      # Valida as 90 combinações e transições do quiz-engine.mjs
npm run dev   # Servidor local de desenvolvimento
npm run build # Verificação de tipos TypeScript e build de produção Vite
```
