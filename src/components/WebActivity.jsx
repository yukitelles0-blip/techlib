import React, { useState } from "react";

const browserOptions = [
  {
    id: "a",
    text: "O navegador solicita o endereço informado e inicia o processo de acesso ao site.",
  },
  {
    id: "b",
    text: "O navegador cria automaticamente um banco de dados no servidor.",
  },
  {
    id: "c",
    text: "O navegador substitui o servidor web.",
  },
  {
    id: "d",
    text: "O navegador transforma qualquer endereço em um arquivo local.",
  },
];

const dnsOptions = [
  {
    id: "a",
    text: "O DNS ajuda a encontrar o endereço IP associado a um nome de domínio.",
  },
  {
    id: "b",
    text: "O DNS armazena exclusivamente senhas dos usuários.",
  },
  {
    id: "c",
    text: "O DNS substitui o protocolo HTTP.",
  },
  {
    id: "d",
    text: "O DNS serve apenas para criar páginas HTML.",
  },
];

const httpOptions = [
  {
    id: "a",
    text: "HTTP é um protocolo utilizado na comunicação entre cliente e servidor na Web.",
  },
  {
    id: "b",
    text: "HTTP é um sistema operacional.",
  },
  {
    id: "c",
    text: "HTTP é utilizado exclusivamente para configurar placas de rede.",
  },
  {
    id: "d",
    text: "HTTP é um banco de dados.",
  },
];

const serverOptions = [
  {
    id: "a",
    text: "O servidor pode receber uma requisição, processá-la e enviar uma resposta ao cliente.",
  },
  {
    id: "b",
    text: "O servidor somente armazena o navegador do usuário.",
  },
  {
    id: "c",
    text: "O servidor impede qualquer comunicação com o navegador.",
  },
  {
    id: "d",
    text: "O servidor transforma automaticamente todos os sites em arquivos locais.",
  },
];

const securityOptions = [
  {
    id: "a",
    text: "HTTPS utiliza TLS para proteger a comunicação entre cliente e servidor.",
  },
  {
    id: "b",
    text: "HTTPS significa que nenhum dado precisa ser protegido.",
  },
  {
    id: "c",
    text: "HTTPS elimina todos os tipos de vulnerabilidades de uma aplicação.",
  },
  {
    id: "d",
    text: "HTTPS substitui completamente a necessidade de autenticação.",
  },
];

export default function WebActivity() {
  const [step, setStep] = useState(1);

  const [browserAnswer, setBrowserAnswer] = useState("");
  const [browserSubmitted, setBrowserSubmitted] = useState(false);

  const [dnsAnswer, setDnsAnswer] = useState("");
  const [dnsSubmitted, setDnsSubmitted] = useState(false);

  const [httpAnswer, setHttpAnswer] = useState("");
  const [httpSubmitted, setHttpSubmitted] = useState(false);

  const [serverAnswer, setServerAnswer] = useState("");
  const [serverSubmitted, setServerSubmitted] = useState(false);

  const [securityAnswer, setSecurityAnswer] = useState("");
  const [securitySubmitted, setSecuritySubmitted] = useState(false);

  const correctBrowser = "a";
  const correctDns = "a";
  const correctHttp = "a";
  const correctServer = "a";
  const correctSecurity = "a";

  const resetLab = () => {
    setStep(1);

    setBrowserAnswer("");
    setBrowserSubmitted(false);

    setDnsAnswer("");
    setDnsSubmitted(false);

    setHttpAnswer("");
    setHttpSubmitted(false);

    setServerAnswer("");
    setServerSubmitted(false);

    setSecurityAnswer("");
    setSecuritySubmitted(false);
  };

  const browserCorrect = browserAnswer === correctBrowser;
  const dnsCorrect = dnsAnswer === correctDns;
  const httpCorrect = httpAnswer === correctHttp;
  const serverCorrect = serverAnswer === correctServer;
  const securityCorrect = securityAnswer === correctSecurity;

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
            <span>🌐</span>

            <div>
              <h2>Etapa 1 — O navegador inicia a conexão</h2>

              <p>
                Você digitou um endereço de site no navegador. Agora vamos
                entender o que acontece quando uma página começa a ser
                carregada.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Navegador</span>
            </div>

            <div className="terminal-content">
              <p>https://techlib.example</p>

              <p>↓</p>

              <p>Solicitação de acesso ao site</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setBrowserSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é uma das primeiras funções do navegador nesse processo?
              </legend>

              {browserOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="browser"
                    value={option.id}
                    checked={browserAnswer === option.id}
                    onChange={(event) =>
                      setBrowserAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!browserAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {browserSubmitted && (
            <div
              className={
                browserCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {browserCorrect ? (
                <>
                  <strong>✅ Processo iniciado!</strong>

                  <p>
                    O navegador inicia o processo de comunicação necessário
                    para acessar o endereço solicitado.
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
                  <strong>❌ Revise o processo.</strong>

                  <p>
                    Pense no papel do navegador quando você informa um
                    endereço de site.
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
              <h2>Etapa 2 — Descobrindo o endereço com DNS</h2>

              <p>
                O navegador possui um nome de domínio, mas precisa descobrir
                qual endereço IP está associado a ele.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>DNS</span>
            </div>

            <div className="terminal-content">
              <p>Domínio: techlib.example</p>

              <p>↓</p>

              <p>Consulta DNS</p>

              <p>↓</p>

              <p>Endereço IP: 192.0.2.10</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setDnsSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a função do DNS nesse processo?
              </legend>

              {dnsOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="dns"
                    value={option.id}
                    checked={dnsAnswer === option.id}
                    onChange={(event) =>
                      setDnsAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!dnsAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {dnsSubmitted && (
            <div
              className={
                dnsCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {dnsCorrect ? (
                <>
                  <strong>✅ DNS identificado!</strong>

                  <p>
                    O DNS ajuda a encontrar o endereço IP associado a um nome
                    de domínio.
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
                  <strong>❌ Revise o conceito.</strong>

                  <p>
                    Pense no motivo pelo qual utilizamos nomes de domínio em
                    vez de precisar memorizar endereços IP.
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
            <span>📡</span>

            <div>
              <h2>Etapa 3 — Comunicação com HTTP</h2>

              <p>
                Agora que o destino foi localizado, o cliente precisa
                estabelecer uma comunicação com o servidor web.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>HTTP</span>
            </div>

            <div className="terminal-content">
              <p>Cliente → Servidor</p>

              <p>GET /index.html HTTP/1.1</p>

              <p>↓</p>

              <p>Servidor → Cliente</p>

              <p>HTTP/1.1 200 OK</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setHttpSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é o papel do HTTP nesse cenário?
              </legend>

              {httpOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="http"
                    value={option.id}
                    checked={httpAnswer === option.id}
                    onChange={(event) =>
                      setHttpAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!httpAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {httpSubmitted && (
            <div
              className={
                httpCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {httpCorrect ? (
                <>
                  <strong>✅ Comunicação identificada!</strong>

                  <p>
                    HTTP é um protocolo utilizado na comunicação entre
                    clientes e servidores na Web.
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
                  <strong>❌ Revise o conceito.</strong>

                  <p>
                    Observe a comunicação entre cliente e servidor apresentada
                    no terminal.
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
            <span>🖥️</span>

            <div>
              <h2>Etapa 4 — O servidor responde</h2>

              <p>
                O servidor recebeu a requisição e agora precisa processá-la e
                enviar uma resposta para o cliente.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Servidor Web</span>
            </div>

            <div className="terminal-content">
              <p>Requisição recebida</p>

              <p>↓</p>

              <p>Processamento</p>

              <p>↓</p>

              <p>Resposta enviada</p>

              <p>HTTP/1.1 200 OK</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setServerSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                O que o servidor pode fazer após receber uma requisição?
              </legend>

              {serverOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="server"
                    value={option.id}
                    checked={serverAnswer === option.id}
                    onChange={(event) =>
                      setServerAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!serverAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {serverSubmitted && (
            <div
              className={
                serverCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {serverCorrect ? (
                <>
                  <strong>✅ Resposta do servidor identificada!</strong>

                  <p>
                    O servidor pode processar uma requisição e enviar uma
                    resposta ao cliente.
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
                  <strong>❌ Revise o processo.</strong>

                  <p>
                    Pense no que acontece depois que o servidor recebe uma
                    requisição HTTP.
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
            <span>🔐</span>

            <div>
              <h2>Etapa 5 — HTTPS e segurança</h2>

              <p>
                Agora vamos analisar uma diferença importante entre HTTP e
                HTTPS e entender como a comunicação pode ser protegida.
              </p>
            </div>
          </div>

          <div className="terminal-warning">
            <strong>Comunicação segura</strong>

            <p>
              Em uma conexão HTTPS, o TLS ajuda a proteger a comunicação
              entre o cliente e o servidor contra leitura ou alteração por
              terceiros durante o transporte.
            </p>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setSecuritySubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual afirmação está correta sobre HTTPS?
              </legend>

              {securityOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="security"
                    value={option.id}
                    checked={securityAnswer === option.id}
                    onChange={(event) =>
                      setSecurityAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!securityAnswer}
            >
              Finalizar Lab
            </button>
          </form>

          {securitySubmitted && (
            <div
              className={
                securityCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {securityCorrect ? (
                <>
                  <strong>✅ Comunicação segura identificada!</strong>

                  <p>
                    HTTPS utiliza TLS para ajudar a proteger a comunicação
                    entre cliente e servidor. Isso é importante, mas não
                    elimina outras necessidades de segurança da aplicação.
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
                  <strong>❌ Revise o conceito.</strong>

                  <p>
                    HTTPS utiliza TLS para proteger a comunicação durante o
                    transporte.
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
            Você completou uma atividade prática sobre o funcionamento básico
            de uma página web, passando pelo navegador, DNS, HTTP, servidor e
            HTTPS.
          </p>

          <div className="lab-completed-summary">
            <strong>O que você praticou:</strong>

            <ul>
              <li>Papel do navegador.</li>
              <li>Resolução de nomes com DNS.</li>
              <li>Comunicação utilizando HTTP.</li>
              <li>Funcionamento básico de um servidor web.</li>
              <li>Conceito de HTTPS e TLS.</li>
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
