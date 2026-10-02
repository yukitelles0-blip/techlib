import React, { useState } from "react";

const ipOptions = [
  {
    id: "a",
    text: "192.168.1.25 é um endereço IPv4 privado.",
  },
  {
    id: "b",
    text: "192.168.1.25 é obrigatoriamente um endereço público da Internet.",
  },
  {
    id: "c",
    text: "192.168.1.25 é um endereço IPv6.",
  },
  {
    id: "d",
    text: "192.168.1.25 representa um endereço de broadcast.",
  },
];

const networkOptions = [
  {
    id: "a",
    text: "Com a máscara 255.255.255.0, a rede do cenário é 192.168.1.0/24.",
  },
  {
    id: "b",
    text: "A rede é obrigatoriamente 192.168.0.0/16.",
  },
  {
    id: "c",
    text: "A máscara 255.255.255.0 representa uma rede /8.",
  },
  {
    id: "d",
    text: "O endereço 192.168.1.25 pertence a uma rede IPv6.",
  },
];

const gatewayOptions = [
  {
    id: "a",
    text: "O gateway padrão pode ser utilizado para encaminhar tráfego para outras redes.",
  },
  {
    id: "b",
    text: "O gateway é responsável apenas por armazenar arquivos.",
  },
  {
    id: "c",
    text: "O gateway substitui o endereço IP do dispositivo.",
  },
  {
    id: "d",
    text: "O gateway impede qualquer comunicação entre dispositivos.",
  },
];

const eventOptions = [
  {
    id: "a",
    text: "Um evento registrado às 14:32 envolvendo 192.168.1.25 pode ser relacionado ao dispositivo identificado pelo IP.",
  },
  {
    id: "b",
    text: "O horário do evento permite descobrir automaticamente a identidade física do usuário.",
  },
  {
    id: "c",
    text: "Um endereço IP sempre identifica uma pessoa específica.",
  },
  {
    id: "d",
    text: "O horário torna desnecessária qualquer outra informação de investigação.",
  },
];

const conclusionOptions = [
  {
    id: "a",
    text: "É importante analisar IP, rede, gateway, horário e outros registros antes de tirar conclusões.",
  },
  {
    id: "b",
    text: "Um único endereço IP é suficiente para determinar toda a atividade de uma pessoa.",
  },
  {
    id: "c",
    text: "Qualquer IP privado pode ser atribuído diretamente a uma pessoa na Internet.",
  },
  {
    id: "d",
    text: "A investigação deve considerar somente o endereço IP.",
  },
];

export default function IPInvestigationActivity() {
  const [step, setStep] = useState(1);

  const [ipAnswer, setIpAnswer] = useState("");
  const [ipSubmitted, setIpSubmitted] = useState(false);

  const [networkAnswer, setNetworkAnswer] = useState("");
  const [networkSubmitted, setNetworkSubmitted] = useState(false);

  const [gatewayAnswer, setGatewayAnswer] = useState("");
  const [gatewaySubmitted, setGatewaySubmitted] = useState(false);

  const [eventAnswer, setEventAnswer] = useState("");
  const [eventSubmitted, setEventSubmitted] = useState(false);

  const [conclusionAnswer, setConclusionAnswer] = useState("");
  const [conclusionSubmitted, setConclusionSubmitted] = useState(false);

  const correctIp = "a";
  const correctNetwork = "a";
  const correctGateway = "a";
  const correctEvent = "a";
  const correctConclusion = "a";

  const resetLab = () => {
    setStep(1);

    setIpAnswer("");
    setIpSubmitted(false);

    setNetworkAnswer("");
    setNetworkSubmitted(false);

    setGatewayAnswer("");
    setGatewaySubmitted(false);

    setEventAnswer("");
    setEventSubmitted(false);

    setConclusionAnswer("");
    setConclusionSubmitted(false);
  };

  const ipCorrect = ipAnswer === correctIp;
  const networkCorrect = networkAnswer === correctNetwork;
  const gatewayCorrect = gatewayAnswer === correctGateway;
  const eventCorrect = eventAnswer === correctEvent;
  const conclusionCorrect = conclusionAnswer === correctConclusion;

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
            <span>📡</span>

            <div>
              <h2>Etapa 1 — Identificando o endereço IP</h2>

              <p>
                Você recebeu um registro de rede contendo o endereço
                192.168.1.25. Vamos começar identificando que tipo de endereço
                está presente no cenário.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Registro de rede</span>
            </div>

            <div className="terminal-content">
              <p>Dispositivo: estação-25</p>
              <p>IP: 192.168.1.25</p>
              <p>Protocolo: IPv4</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setIpSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                O que podemos afirmar sobre o endereço apresentado?
              </legend>

              {ipOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="ip"
                    value={option.id}
                    checked={ipAnswer === option.id}
                    onChange={(event) => setIpAnswer(event.target.value)}
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!ipAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {ipSubmitted && (
            <div
              className={
                ipCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {ipCorrect ? (
                <>
                  <strong>✅ Endereço identificado!</strong>

                  <p>
                    O endereço 192.168.1.25 pertence à faixa privada de IPv4.
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
                  <strong>❌ Revise a informação.</strong>

                  <p>
                    Observe o formato do endereço e a faixa em que ele está
                    inserido.
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
            <span>🌐</span>

            <div>
              <h2>Etapa 2 — Descobrindo a rede</h2>

              <p>
                Agora temos o IP e a máscara de rede. Use essas informações
                para identificar a rede à qual o dispositivo pertence.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Configuração de rede</span>
            </div>

            <div className="terminal-content">
              <p>IP: 192.168.1.25</p>
              <p>Máscara: 255.255.255.0</p>
              <p>Gateway: 192.168.1.1</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setNetworkSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a rede correspondente ao cenário?
              </legend>

              {networkOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="network"
                    value={option.id}
                    checked={networkAnswer === option.id}
                    onChange={(event) =>
                      setNetworkAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!networkAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {networkSubmitted && (
            <div
              className={
                networkCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {networkCorrect ? (
                <>
                  <strong>✅ Rede identificada!</strong>

                  <p>
                    Com a máscara 255.255.255.0, o cenário corresponde à rede
                    192.168.1.0/24.
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
                  <strong>❌ Revise a máscara.</strong>

                  <p>
                    Observe a máscara 255.255.255.0 e como ela define a rede.
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
            <span>🚪</span>

            <div>
              <h2>Etapa 3 — Analisando o gateway</h2>

              <p>
                O registro mostra 192.168.1.1 como gateway. Agora vamos
                entender o papel desse equipamento na rede.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Roteamento</span>
            </div>

            <div className="terminal-content">
              <p>Estação: 192.168.1.25</p>
              <p>↓</p>
              <p>Gateway: 192.168.1.1</p>
              <p>↓</p>
              <p>Outras redes</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setGatewaySubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é uma função do gateway padrão?
              </legend>

              {gatewayOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="gateway"
                    value={option.id}
                    checked={gatewayAnswer === option.id}
                    onChange={(event) =>
                      setGatewayAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!gatewayAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {gatewaySubmitted && (
            <div
              className={
                gatewayCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {gatewayCorrect ? (
                <>
                  <strong>✅ Gateway identificado!</strong>

                  <p>
                    O gateway padrão pode encaminhar tráfego destinado a
                    outras redes.
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
                  <strong>❌ Revise a função do gateway.</strong>

                  <p>
                    Pense no equipamento utilizado quando um dispositivo
                    precisa alcançar outra rede.
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
            <span>🔎</span>

            <div>
              <h2>Etapa 4 — Investigando um evento</h2>

              <p>
                Um registro indica que o endereço 192.168.1.25 esteve
                relacionado a um evento às 14:32. Agora precisamos interpretar
                essa informação corretamente.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Evento registrado</span>
            </div>

            <div className="terminal-content">
              <p>Horário: 14:32</p>
              <p>Origem: 192.168.1.25</p>
              <p>Evento: tentativa de acesso</p>
              <p>Status: registrada</p>
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
                Como devemos interpretar esse registro?
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
                  <strong>✅ Registro interpretado!</strong>

                  <p>
                    O IP e o horário ajudam a contextualizar o evento, mas
                    outras informações devem ser analisadas antes de qualquer
                    conclusão.
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
                  <strong>❌ Cuidado com conclusões precipitadas.</strong>

                  <p>
                    Um endereço IP é apenas uma das informações disponíveis em
                    uma investigação.
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
            <span>🧠</span>

            <div>
              <h2>Etapa 5 — Interpretando as evidências</h2>

              <p>
                Você já analisou o IP, a rede, o gateway e um evento. Agora
                vamos reunir essas informações sem assumir conclusões que os
                dados não permitem.
              </p>
            </div>
          </div>

          <div className="terminal-warning">
            <strong>Investigação baseada em evidências</strong>

            <p>
              Um endereço IP pode ajudar a relacionar eventos a um dispositivo
              ou ambiente de rede, mas não deve ser utilizado isoladamente
              para identificar uma pessoa ou determinar toda a atividade
              realizada.
            </p>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setConclusionSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual abordagem é mais adequada para uma investigação?
              </legend>

              {conclusionOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="conclusion"
                    value={option.id}
                    checked={conclusionAnswer === option.id}
                    onChange={(event) =>
                      setConclusionAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!conclusionAnswer}
            >
              Finalizar Lab
            </button>
          </form>

          {conclusionSubmitted && (
            <div
              className={
                conclusionCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {conclusionCorrect ? (
                <>
                  <strong>✅ Investigação concluída!</strong>

                  <p>
                    Uma boa análise considera diferentes evidências e evita
                    conclusões baseadas em uma única informação.
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
                  <strong>❌ Revise a abordagem.</strong>

                  <p>
                    Uma investigação deve considerar o contexto e diferentes
                    evidências antes de chegar a uma conclusão.
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
            Você completou uma atividade prática de investigação de endereço
            IP, analisando informações de rede e interpretando registros de
            forma contextual.
          </p>

          <div className="lab-completed-summary">
            <strong>O que você praticou:</strong>

            <ul>
              <li>Identificação de endereço IPv4 privado.</li>
              <li>Interpretação de máscara e rede.</li>
              <li>Função do gateway padrão.</li>
              <li>Análise de eventos de rede.</li>
              <li>Investigação baseada em múltiplas evidências.</li>
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
