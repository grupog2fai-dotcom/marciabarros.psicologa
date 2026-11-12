import assert from "node:assert/strict";
import {quizConfig, directMessages, initialQuizState, getTopic, getFocusOptions, isComplete, quizReducer, buildWhatsAppMessage, buildWhatsAppUrl, getQuizResult} from "../quiz-engine.mjs";

let combinations = 0;
const uniqueMessages = new Set();
for (const topic of quizConfig.topics) {
  assert.equal(getFocusOptions(topic.id).length, 5);
  for (const focus of topic.options) {
    for (const intent of quizConfig.intents) {
      const answers = {topicId: topic.id, focusId: focus.id, intentId: intent.id};
      assert.equal(isComplete(answers), true);
      const result = getQuizResult(answers);
      assert.ok(result.message.includes(topic.messageLabel));
      assert.ok(result.message.includes(focus.message));
      assert.ok(result.message.includes(intent.message));
      assert.equal(result.body, topic.result);
      assert.ok(!/undefined|null|NaN|pontuação|diagnóstico/i.test(result.message));
      assert.equal(new URL(result.url).hostname, "wa.me");
      assert.equal(new URL(result.url).pathname, "/5521995324120");
      assert.equal(new URL(result.url).searchParams.get("text"), result.message);
      assert.ok(!result.privateMessage.includes("Meu ponto de partida:"));
      assert.ok(!result.privateMessage.includes(focus.message));
      assert.ok(result.privateMessage.includes(intent.message));
      uniqueMessages.add(result.message);
      combinations++;
    }
  }
}
assert.equal(combinations, 90);
assert.equal(uniqueMessages.size, 90);
assert.equal(isComplete({topicId:"missing",focusId:"f1",intentId:"agendar"}), false);
assert.equal(isComplete({topicId:"relacionamentos",focusId:"bad",intentId:"agendar"}), false);
assert.throws(() => buildWhatsAppMessage({topicId:"relacionamentos"}));
assert.throws(() => buildWhatsAppUrl(""));
const special = "Olá, Márcia! Ansiedade & relações?\nQuero conversar sobre você, eu e nós.";
assert.equal(new URL(buildWhatsAppUrl(special)).searchParams.get("text"), special);
for (const [source, message] of Object.entries(directMessages)) {
  assert.ok(message.includes("Márcia"), source);
  assert.equal(new URL(buildWhatsAppUrl(message)).pathname, "/5521995324120");
}
let state = initialQuizState();
assert.equal(quizReducer(state,{type:"next"}).step, 0);
state = quizReducer(state,{type:"select-topic",id:"relacionamentos"});
state = quizReducer(state,{type:"next"});
assert.equal(state.step,1);
state = quizReducer(state,{type:"select-focus",id:"f3"});
state = quizReducer(state,{type:"next"});
state = quizReducer(state,{type:"select-intent",id:"agendar"});
state = quizReducer(state,{type:"next"});
assert.equal(state.step,3);
state = quizReducer(state,{type:"back"});
assert.equal(state.intentId,"agendar");
state = quizReducer(quizReducer(state,{type:"back"}),{type:"back"});
state = quizReducer(state,{type:"select-topic",id:"autoestima"});
assert.equal(state.focusId,null);
assert.equal(state.intentId,null);
assert.equal(state.topicId,"autoestima");
assert.deepEqual(quizReducer(state,{type:"restart"}),initialQuizState());
const preview = getQuizResult({topicId:"relacionamentos",focusId:"f3",intentId:"agendar"});
console.log(JSON.stringify({combinations,unique_messages:uniqueMessages.size,encoding:"passed",private_route:"passed",state_transitions:"passed",invalid_answers:"blocked",preview_message:preview.message},null,2));

