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

const correlationLogs = [
  "09:14:02 - LOGIN_FAILED - user=admin - ip=192.168.1.10",
  "09:14:05 - LOGIN_FAILED - user=admin - ip=192.168.1.10",
  "09:14:08 - LOGIN_FAILED - user=admin - ip=192.168.1.10",
  "09:14:11 - LOGIN_FAILED - user=admin - ip=192.168.1.10",
  "09:14:14 - LOGIN_FAILED - user=admin - ip=192.168.1.10",
  "09:14:20 - LOGIN_FAILED - user=admin - ip=192.168.1.10",
  "09:14:25 - LOGIN_FAILED - user=admin - ip=192.168.1.10",
  "09:15:32 - LOGIN_SUCCESS - user=yuki - ip=192.168.1.20",
  "09:16:10 - LOGIN_SUCCESS - user=ana - ip=192.168.1.30",
  "09:17:44 - LOGIN_FAILED - user=carlos - ip=192.168.1.40",
  "09:18:02 - LOGIN_SUCCESS - user=admin - ip=192.168.1.10",
];

const correlationOptions = [
  {
    id: "a",
    text: "O IP 192.168.1.10 merece investigação porque apresentou várias falhas e posteriormente conseguiu autenticar o usuário admin.",
  },
  {
    id: "b",
    text: "O IP 192.168.1.10 deve ser considerado seguro porque conseguiu realizar um login.",
  },
  {
    id: "c",
    text: "Os eventos não possuem relação porque aconteceram em horários diferentes.",
  },
  {
    id: "d",
    text: "O login bem-sucedido elimina qualquer possibilidade de comportamento suspeito.",
  },
];

const scenarioOptions = [
  {
    id: "a",
    text: "Uma possível tentativa automatizada de autenticação que merece investigação.",
  },
  {
    id: "b",
    text: "Uma atividade normal de um usuário digitando a senha uma única vez.",
  },
  {
    id: "c",
    text: "Um problema exclusivamente relacionado ao DNS.",
  },
  {
    id: "d",
    text: "Um evento sem relevância porque todos os logs são de usuários conhecidos.",
  },
];

const actionOptions = [
  {
    id: "a",
    text: "Ignorar o alerta e apagar os logs.",
  },
  {
    id: "b",
    text: "Coletar mais evidências, correlacionar outros eventos e registrar a ocorrência para investigação.",
  },
  {
    id: "c",
    text: "Desligar todos os computadores da rede imediatamente.",
  },
  {
    id: "d",
    text: "Considerar o incidente resolvido sem realizar nenhuma análise adicional.",
  },
];

export default function LabActivity() {
  const [step, setStep] = useState(1);

  const [ipAnswer, setIpAnswer] = useState("");
  const [ipSubmitted, setIpSubmitted] = useState(false);

  const [investigationAnswer, setInvestigationAnswer] = useState("");
  const [investigationSubmitted, setInvestigationSubmitted] = useState(false);

  const [correlationAnswer, setCorrelationAnswer] = useState("");
  const [correlationSubmitted, setCorrelationSubmitted] = useState(false);

  const [scenarioAnswer, setScenarioAnswer] = useState("");
  const [scenarioSubmitted, setScenarioSubmitted] = useState(false);

  const [actionAnswer, setActionAnswer] = useState("");
  const [actionSubmitted, setActionSubmitted] = useState(false);

  const correctIp = "192.168.1.10";
  const correctInvestigation = "b";
  const correctCorrelation = "a";
  const correctScenario = "a";
  const correctAction = "b";

  const resetLab = () => {
    setStep(1);

    setIpAnswer("");
    setIpSubmitted(false);

    setInvestigationAnswer("");
    setInvestigationSubmitted(false);

    setCorrelationAnswer("");
    setCorrelationSubmitted(false);

    setScenarioAnswer("");
    setScenarioSubmitted(false);

    setActionAnswer("");
    setActionSubmitted(false);
  };

  const ipCorrect = ipAnswer === correctIp;
  const investigationCorrect =
    investigationAnswer === correctInvestigation;
  const correlationCorrect = correlationAnswer === correctCorrelation;
  const scenarioCorrect = scenarioAnswer === correctScenario;
  const actionCorrect = actionAnswer === correctAction;

  return (
    <div className="lab-activity">
      {step < 6 && (
        <div className="lab-progress">
          <strong>Progresso do Lab</strong>
          <span>Etapa {step} de 5</span>
        </div>
      )}

      {step === 1 && (
        <>
          <div className="lab-activity-header">
            <span>🧪</span>

            <div>
              <h2>Etapa 1 — Identificar o comportamento suspeito</h2>

              <p>
                Analise os registros de autenticação e identifique o endereço
                IP que apresenta o comportamento mais suspeito.
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

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setIpSubmitted(true);
            }}
          >
            <label htmlFor="ip-answer">
              Qual endereço IP apresenta o comportamento mais suspeito?
            </label>

            <input
              id="ip-answer"
              type="text"
              placeholder="Ex.: 192.168.1.10"
              value={ipAnswer}
              onChange={(event) => setIpAnswer(event.target.value)}
            />

            <button type="submit" className="card-button">
              Verificar resposta
            </button>
          </form>

          {ipSubmitted && (
            <div
              className={
                ipCorrect ? "lab-feedback success" : "lab-feedback error"
              }
            >
              {ipCorrect ? (
                <>
                  <strong>✅ Resposta correta!</strong>

                  <p>
                    O IP <strong>192.168.1.10</strong> apresentou várias
                    tentativas consecutivas de login malsucedido em poucos
                    segundos.
                  </p>

                  <button
                    type="button"
                    className="card-button"
                    onClick={() => setStep(2)}
                  >
                    Próxima etapa →
                  </button>
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
        </>
      )}

      {step === 2 && (
        <>
          <div className="lab-activity-header">
            <span>🔎</span>

            <div>
              <h2>Etapa 2 — Decisão de investigação</h2>

              <p>
                Você identificou um comportamento suspeito. Agora escolha uma
                ação adequada para continuar a investigação.
              </p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setInvestigationSubmitted(true);
            }}
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
              Verificar resposta
            </button>
          </form>

          {investigationSubmitted && (
            <div
              className={
                investigationCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {investigationCorrect ? (
                <>
                  <strong>✅ Etapa concluída!</strong>

                  <p>
                    O próximo passo é correlacionar os eventos e buscar mais
                    evidências.
                  </p>

                  <button
                    type="button"
                    className="card-button"
                    onClick={() => setStep(3)}
                  >
                    Próxima etapa →
                  </button>
                </>
              ) : (
                <>
                  <strong>❌ Revise sua escolha.</strong>

                  <p>
                    Em uma investigação, é importante preservar os registros e
                    buscar mais evidências antes de tomar uma decisão.
                  </p>
                </>
              )}
            </div>
          )}
        </>
      )}

      {step === 3 && (
        <>
          <div className="lab-activity-header">
            <span>📊</span>

            <div>
              <h2>Etapa 3 — Correlação de eventos</h2>

              <p>
                Agora você recebeu mais registros. Analise o conjunto completo
                e identifique o que merece maior atenção.
              </p>
            </div>
          </div>

          <div className="log-viewer">
            {correlationLogs.map((log, index) => (
              <div key={index} className="log-line">
                {log}
              </div>
            ))}
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setCorrelationSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual interpretação melhor representa os eventos?
              </legend>

              {correlationOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="correlation"
                    value={option.id}
                    checked={correlationAnswer === option.id}
                    onChange={(event) =>
                      setCorrelationAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!correlationAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {correlationSubmitted && (
            <div
              className={
                correlationCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {correlationCorrect ? (
                <>
                  <strong>✅ Boa análise!</strong>

                  <p>
                    A combinação de várias falhas seguida de um login bem-sucedido
                    merece atenção e investigação adicional.
                  </p>

                  <button
                    type="button"
                    className="card-button"
                    onClick={() => setStep(4)}
                  >
                    Próxima etapa →
                  </button>
                </>
              ) : (
                <>
                  <strong>❌ Revise os eventos.</strong>

                  <p>
                    Não analise apenas o login bem-sucedido. Observe o padrão
                    completo dos acontecimentos.
                  </p>
                </>
              )}
            </div>
          )}
        </>
      )}

      {step === 4 && (
        <>
          <div className="lab-activity-header">
            <span>🧠</span>

            <div>
              <h2>Etapa 4 — Identificar o cenário</h2>

              <p>
                Com base nos eventos analisados, escolha a hipótese que melhor
                explica o comportamento observado.
              </p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setScenarioSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual cenário é mais compatível com os eventos?
              </legend>

              {scenarioOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="scenario"
                    value={option.id}
                    checked={scenarioAnswer === option.id}
                    onChange={(event) =>
                      setScenarioAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!scenarioAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {scenarioSubmitted && (
            <div
              className={
                scenarioCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {scenarioCorrect ? (
                <>
                  <strong>✅ Hipótese identificada!</strong>

                  <p>
                    A sequência de tentativas em um curto intervalo é
                    compatível com uma possível tentativa automatizada de
                    autenticação e deve ser investigada.
                  </p>

                  <button
                    type="button"
                    className="card-button"
                    onClick={() => setStep(5)}
                  >
                    Última etapa →
                  </button>
                </>
              ) : (
                <>
                  <strong>❌ Analise novamente.</strong>

                  <p>
                    Observe a quantidade de tentativas e o intervalo entre os
                    eventos.
                  </p>
                </>
              )}
            </div>
          )}
        </>
      )}

      {step === 5 && (
        <>
          <div className="lab-activity-header">
            <span>🛡️</span>

            <div>
              <h2>Etapa 5 — Decisão do analista</h2>

              <p>
                Você identificou um possível comportamento suspeito. Qual deve
                ser a próxima ação dentro de uma investigação?
              </p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setActionSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual ação é mais adequada neste momento?
              </legend>

              {actionOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="action"
                    value={option.id}
                    checked={actionAnswer === option.id}
                    onChange={(event) =>
                      setActionAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!actionAnswer}
            >
              Finalizar Lab
            </button>
          </form>

          {actionSubmitted && (
            <div
              className={
                actionCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {actionCorrect ? (
                <>
                  <strong>✅ Decisão correta!</strong>

                  <p>
                    Uma investigação deve preservar evidências, buscar
                    informações adicionais, correlacionar eventos e registrar
                    a ocorrência.
                  </p>

                  <button
                    type="button"
                    className="card-button"
                    onClick={() => setStep(6)}
                  >
                    Concluir Lab 🏁
                  </button>
                </>
              ) : (
                <>
                  <strong>❌ Revise sua decisão.</strong>

                  <p>
                    Evite descartar evidências. O próximo passo deve ser
                    continuar a investigação com base nos registros disponíveis.
                  </p>
                </>
              )}
            </div>
          )}
        </>
      )}

      {step === 6 && (
        <div className="lab-completed">
          <div className="lab-completed-icon">🏁</div>

          <h2>Lab concluído!</h2>

          <p>
            Você completou uma mini investigação de autenticação, analisando
            logs, identificando padrões suspeitos, correlacionando eventos e
            tomando decisões de investigação.
          </p>

          <div className="lab-completed-summary">
            <strong>O que você praticou:</strong>

            <ul>
              <li>Identificação de tentativas de login malsucedidas.</li>
              <li>Análise de frequência e sequência de eventos.</li>
              <li>Correlação entre diferentes registros.</li>
              <li>Identificação de possíveis padrões suspeitos.</li>
              <li>Tomada de decisão durante uma investigação.</li>
            </ul>
          </div>

          <button
            type="button"
            className="card-button"
            onClick={resetLab}
          >
            Refazer Lab ↻
          </button>
        </div>
      )}
    </div>
  );
}
