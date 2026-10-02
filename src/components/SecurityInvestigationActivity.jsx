import React, { useState } from "react";

const eventOptions = [
  {
    id: "a",
    text: "Uma sequência de várias tentativas de login malsucedidas merece investigação.",
  },
  {
    id: "b",
    text: "Um único login bem-sucedido sempre representa um incidente.",
  },
  {
    id: "c",
    text: "Eventos de autenticação nunca precisam ser analisados.",
  },
  {
    id: "d",
    text: "Qualquer tentativa de login é automaticamente um ataque confirmado.",
  },
];

const correlationOptions = [
  {
    id: "a",
    text: "Relacionar horário, endereço IP, usuário e quantidade de tentativas.",
  },
  {
    id: "b",
    text: "Analisar somente o nome do usuário.",
  },
  {
    id: "c",
    text: "Ignorar os horários registrados.",
  },
  {
    id: "d",
    text: "Considerar apenas o último evento.",
  },
];

const classificationOptions = [
  {
    id: "a",
    text: "Possível tentativa de força bruta.",
  },
  {
    id: "b",
    text: "Atualização normal do sistema.",
  },
  {
    id: "c",
    text: "Falha de hardware confirmada.",
  },
  {
    id: "d",
    text: "Evento sem nenhuma relação com autenticação.",
  },
];

const responseOptions = [
  {
    id: "a",
    text: "Preservar os registros, investigar o contexto e seguir o procedimento de resposta definido.",
  },
  {
    id: "b",
    text: "Apagar imediatamente todos os registros.",
  },
  {
    id: "c",
    text: "Ignorar o evento sem realizar nenhuma análise.",
  },
  {
    id: "d",
    text: "Alterar todos os sistemas sem registrar o que foi feito.",
  },
];

const reportOptions = [
  {
    id: "a",
    text: "Registrar evidências, horário, origem, impacto observado e ações realizadas.",
  },
  {
    id: "b",
    text: "Registrar apenas uma opinião sobre o usuário.",
  },
  {
    id: "c",
    text: "Excluir os dados para evitar informações no relatório.",
  },
  {
    id: "d",
    text: "Registrar somente que houve um alerta, sem contexto.",
  },
];

export default function SecurityInvestigationActivity() {
  const [step, setStep] = useState(1);

  const [eventAnswer, setEventAnswer] = useState("");
  const [eventSubmitted, setEventSubmitted] = useState(false);

  const [correlationAnswer, setCorrelationAnswer] = useState("");
  const [correlationSubmitted, setCorrelationSubmitted] = useState(false);

  const [classificationAnswer, setClassificationAnswer] = useState("");
  const [classificationSubmitted, setClassificationSubmitted] =
    useState(false);

  const [responseAnswer, setResponseAnswer] = useState("");
  const [responseSubmitted, setResponseSubmitted] = useState(false);

  const [reportAnswer, setReportAnswer] = useState("");
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const correctEvent = "a";
  const correctCorrelation = "a";
  const correctClassification = "a";
  const correctResponse = "a";
  const correctReport = "a";

  const resetLab = () => {
    setStep(1);

    setEventAnswer("");
    setEventSubmitted(false);

    setCorrelationAnswer("");
    setCorrelationSubmitted(false);

    setClassificationAnswer("");
    setClassificationSubmitted(false);

    setResponseAnswer("");
    setResponseSubmitted(false);

    setReportAnswer("");
    setReportSubmitted(false);
  };

  const eventCorrect = eventAnswer === correctEvent;
  const correlationCorrect = correlationAnswer === correctCorrelation;
  const classificationCorrect =
    classificationAnswer === correctClassification;
  const responseCorrect = responseAnswer === correctResponse;
  const reportCorrect = reportAnswer === correctReport;

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
            <span>🔎</span>

            <div>
              <h2>Etapa 1 — Identificando o evento</h2>

              <p>
                Você faz parte de uma equipe de segurança e recebeu um alerta
                fictício relacionado a autenticação. Observe os registros e
                identifique o que merece investigação.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>auth.log — cenário simulado</span>
            </div>

            <div className="terminal-content">
              <p>14:20 — login failed — user: admin — IP: 192.168.1.50</p>
              <p>14:21 — login failed — user: admin — IP: 192.168.1.50</p>
              <p>14:22 — login failed — user: admin — IP: 192.168.1.50</p>
              <p>14:23 — login failed — user: admin — IP: 192.168.1.50</p>
              <p>14:24 — login failed — user: admin — IP: 192.168.1.50</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setEventSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                O que merece atenção nesse cenário?
              </legend>

              {eventOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="event"
                    value={option.id}
                    checked={eventAnswer === option.id}
                    onChange={(event) =>
                      setEventAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!eventAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {eventSubmitted && (
            <div
              className={
                eventCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {eventCorrect ? (
                <>
                  <strong>✅ Evento identificado!</strong>

                  <p>
                    Várias tentativas malsucedidas em sequência podem indicar
                    um comportamento que merece investigação.
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
                  <strong>❌ Observe o padrão.</strong>

                  <p>
                    Analise a quantidade de tentativas e o intervalo entre os
                    eventos.
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
            <span>🧩</span>

            <div>
              <h2>Etapa 2 — Correlacionando informações</h2>

              <p>
                Um analista não deve observar um evento isoladamente. Vamos
                reunir diferentes informações para entender melhor o cenário.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Eventos correlacionados</span>
            </div>

            <div className="terminal-content">
              <p>Usuário: admin</p>
              <p>IP de origem: 192.168.1.50</p>
              <p>Tentativas: 5</p>
              <p>Intervalo: 14:20 — 14:24</p>
              <p>Status: falhas consecutivas</p>
            </div>
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
                Quais informações ajudam a analisar o comportamento?
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
                  <strong>✅ Informações correlacionadas!</strong>

                  <p>
                    Horário, IP, usuário e quantidade de tentativas ajudam a
                    construir o contexto do evento.
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
                  <strong>❌ Faltou contexto.</strong>

                  <p>
                    Uma investigação precisa reunir diferentes informações do
                    evento.
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
            <span>🚨</span>

            <div>
              <h2>Etapa 3 — Classificando o possível incidente</h2>

              <p>
                Com os eventos correlacionados, você precisa indicar qual
                hipótese melhor representa o comportamento observado.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Alerta de segurança</span>
            </div>

            <div className="terminal-content">
              <p>5 tentativas de autenticação malsucedidas</p>
              <p>Mesmo usuário: admin</p>
              <p>Mesmo IP: 192.168.1.50</p>
              <p>Intervalo curto</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setClassificationSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual hipótese melhor descreve o comportamento?
              </legend>

              {classificationOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="classification"
                    value={option.id}
                    checked={classificationAnswer === option.id}
                    onChange={(event) =>
                      setClassificationAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!classificationAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {classificationSubmitted && (
            <div
              className={
                classificationCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {classificationCorrect ? (
                <>
                  <strong>✅ Hipótese identificada!</strong>

                  <p>
                    O padrão é compatível com uma possível tentativa de força
                    bruta. Isso ainda deve ser tratado como hipótese até que
                    outras evidências sejam analisadas.
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
                    Observe principalmente a repetição das falhas e o curto
                    intervalo entre as tentativas.
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
            <span>🛡️</span>

            <div>
              <h2>Etapa 4 — Escolhendo uma resposta</h2>

              <p>
                O evento foi identificado e classificado como uma hipótese de
                possível força bruta. Agora pense como um analista de
                segurança ao iniciar a resposta.
              </p>
            </div>
          </div>

          <div className="terminal-warning">
            <strong>Preserve as evidências</strong>

            <p>
              Antes de realizar alterações, é importante preservar registros e
              entender o contexto do evento. A resposta deve seguir os
              procedimentos definidos pela organização.
            </p>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setResponseSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual abordagem é mais adequada como ação inicial?
              </legend>

              {responseOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="response"
                    value={option.id}
                    checked={responseAnswer === option.id}
                    onChange={(event) =>
                      setResponseAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!responseAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {responseSubmitted && (
            <div
              className={
                responseCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {responseCorrect ? (
                <>
                  <strong>✅ Resposta adequada!</strong>

                  <p>
                    Preservar os registros e investigar o contexto ajuda a
                    evitar perda de evidências e decisões precipitadas.
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
                  <strong>❌ Pense como um analista.</strong>

                  <p>
                    Evite apagar evidências ou realizar alterações sem
                    compreender o contexto do incidente.
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
            <span>📋</span>

            <div>
              <h2>Etapa 5 — Registrando a investigação</h2>

              <p>
                Uma investigação também precisa ser documentada. O registro
                permite acompanhar evidências, decisões e ações realizadas.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Relatório do incidente</span>
            </div>

            <div className="terminal-content">
              <p>Evento: múltiplas falhas de autenticação</p>
              <p>Usuário: admin</p>
              <p>Origem: 192.168.1.50</p>
              <p>Período: 14:20 — 14:24</p>
              <p>Hipótese: possível força bruta</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setReportSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                O que deve fazer parte de um bom registro?
              </legend>

              {reportOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="report"
                    value={option.id}
                    checked={reportAnswer === option.id}
                    onChange={(event) =>
                      setReportAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!reportAnswer}
            >
              Finalizar Lab
            </button>
          </form>

          {reportSubmitted && (
            <div
              className={
                reportCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {reportCorrect ? (
                <>
                  <strong>✅ Investigação documentada!</strong>

                  <p>
                    Registrar evidências, contexto e ações realizadas é uma
                    parte importante do trabalho de análise e resposta.
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
                  <strong>❌ Revise o registro.</strong>

                  <p>
                    Um bom relatório deve permitir que outra pessoa entenda o
                    que aconteceu e quais ações foram tomadas.
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
            Você completou uma mini investigação de segurança, passando pela
            identificação de eventos, correlação de informações,
            classificação, resposta e documentação.
          </p>

          <div className="lab-completed-summary">
            <strong>O que você praticou:</strong>

            <ul>
              <li>Identificação de eventos suspeitos.</li>
              <li>Correlação de informações.</li>
              <li>Classificação de uma possível ameaça.</li>
              <li>Conceitos básicos de resposta a incidentes.</li>
              <li>Documentação de uma investigação.</li>
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
