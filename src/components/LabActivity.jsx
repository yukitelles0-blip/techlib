import React, { useState } from "react";

const logEvents = [
  "09:14:02 - LOGIN_FAILED - user=admin - ip=192.168.1.10",
  "09:14:05 - LOGIN_FAILED - user=admin - ip=192.168.1.10",
  "09:14:08 - LOGIN_FAILED - user=admin - ip=192.168.1.10",
  "09:14:11 - LOGIN_FAILED - user=admin - ip=192.168.1.10",
  "09:14:14 - LOGIN_FAILED - user=admin - ip=192.168.1.10",
  "09:15:32 - LOGIN_SUCCESS - user=yuki - ip=192.168.1.20",
  "09:16:10 - LOGIN_SUCCESS - user=ana - ip=192.168.1.30",
  "09:17:44 - LOGIN_FAILED - user=carlos - ip=192.168.1.40",
];

const investigationOptions = [
  {
    id: "a",
    text: "Ignorar os eventos, pois não houve login bem-sucedido.",
  },
  {
    id: "b",
    text: "Investigar o IP, verificar outros eventos relacionados e avaliar possíveis tentativas de acesso indevido.",
  },
  {
    id: "c",
    text: "Apagar os registros para evitar que o sistema fique cheio.",
  },
  {
    id: "d",
    text: "Considerar automaticamente o endereço como seguro.",
  },
];

export default function LabActivity() {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [investigationAnswer, setInvestigationAnswer] = useState("");
  const [investigationSubmitted, setInvestigationSubmitted] = useState(false);

  const correctAnswer = "192.168.1.10";
  const correctInvestigationAnswer = "b";

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleInvestigationSubmit(event) {
    event.preventDefault();
    setInvestigationSubmitted(true);
  }

  const isCorrect = answer === correctAnswer;
  const isInvestigationCorrect =
    investigationAnswer === correctInvestigationAnswer;

  return (
    <div className="lab-activity">
      <div className="lab-activity-header">
        <span>🧪</span>

        <div>
          <h2>Etapa 1 — Análise dos Logs</h2>

          <p>
            Analise os eventos abaixo e identifique o endereço IP que apresenta
            um comportamento suspeito.
          </p>
        </div>
      </div>

      <div className="log-viewer">
        {logEvents.map((log, index) => (
          <div key={index} className="log-line">
            {log}
          </div>
        ))}
      </div>

      <form className="lab-question" onSubmit={handleSubmit}>
        <label htmlFor="ip-answer">
          Qual endereço IP apresenta o comportamento mais suspeito?
        </label>

        <input
          id="ip-answer"
          type="text"
          placeholder="Ex.: 192.168.1.10"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />

        <button type="submit" className="card-button">
          Verificar resposta
        </button>
      </form>

      {submitted && (
        <div
          className={
            isCorrect ? "lab-feedback success" : "lab-feedback error"
          }
        >
          {isCorrect ? (
            <>
              <strong>✅ Resposta correta!</strong>

              <p>
                O endereço <strong>192.168.1.10</strong> apresenta cinco
                tentativas consecutivas de login malsucedido em poucos
                segundos, o que merece investigação.
              </p>
            </>
          ) : (
            <>
              <strong>❌ Ainda não.</strong>

              <p>
                Observe principalmente a quantidade e a frequência das
                tentativas de login malsucedido.
              </p>
            </>
          )}
        </div>
      )}

      {isCorrect && (
        <div className="lab-step">
          <div className="lab-activity-header">
            <span>🔎</span>

            <div>
              <h2>Etapa 2 — Investigação</h2>

              <p>
                Você identificou um possível comportamento suspeito. Agora
                escolha qual seria uma ação adequada para continuar a
                investigação.
              </p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={handleInvestigationSubmit}
          >
            <fieldset>
              <legend>
                Qual seria a ação mais adequada neste momento?
              </legend>

              {investigationOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="investigation"
                    value={option.id}
                    checked={investigationAnswer === option.id}
                    onChange={(event) =>
                      setInvestigationAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!investigationAnswer}
            >
              Verificar etapa 2
            </button>
          </form>

          {investigationSubmitted && (
            <div
              className={
                isInvestigationCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {isInvestigationCorrect ? (
                <>
                  <strong>✅ Etapa concluída!</strong>

                  <p>
                    A investigação deve continuar com a análise de outros
                    eventos e informações relacionadas ao endereço suspeito.
                  </p>
                </>
              ) : (
                <>
                  <strong>❌ Revise sua escolha.</strong>

                  <p>
                    O objetivo é continuar investigando o comportamento
                    identificado, preservando os registros e buscando mais
                    evidências.
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
