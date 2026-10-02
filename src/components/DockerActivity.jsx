import React, { useState } from "react";

const imageOptions = [
  {
    id: "a",
    text: "Uma imagem contém os elementos necessários para criar e executar um container.",
  },
  {
    id: "b",
    text: "Uma imagem é exclusivamente um arquivo de imagem visual, como PNG ou JPG.",
  },
  {
    id: "c",
    text: "Uma imagem substitui completamente o sistema operacional do computador.",
  },
  {
    id: "d",
    text: "Uma imagem serve apenas para armazenar senhas.",
  },
];

const containerOptions = [
  {
    id: "a",
    text: "Um container é uma instância executável baseada em uma imagem.",
  },
  {
    id: "b",
    text: "Um container é apenas uma pasta comum do computador.",
  },
  {
    id: "c",
    text: "Um container é obrigatoriamente uma máquina física separada.",
  },
  {
    id: "d",
    text: "Um container só pode ser utilizado para armazenar imagens.",
  },
];

const commandOptions = [
  {
    id: "a",
    text: "docker run hello-world",
  },
  {
    id: "b",
    text: "docker delete-all",
  },
  {
    id: "c",
    text: "docker start-system",
  },
  {
    id: "d",
    text: "docker create-network-os",
  },
];

const isolationOptions = [
  {
    id: "a",
    text: "Containers ajudam a isolar aplicações e seus ambientes de execução.",
  },
  {
    id: "b",
    text: "Containers tornam todos os programas automaticamente seguros.",
  },
  {
    id: "c",
    text: "Containers eliminam a necessidade de atualizações.",
  },
  {
    id: "d",
    text: "Containers impedem qualquer comunicação de rede.",
  },
];

const securityOptions = [
  {
    id: "a",
    text: "É importante utilizar imagens confiáveis, manter componentes atualizados e limitar permissões.",
  },
  {
    id: "b",
    text: "Qualquer imagem encontrada na internet deve ser executada sem análise.",
  },
  {
    id: "c",
    text: "Containers não possuem nenhuma consideração relacionada à segurança.",
  },
  {
    id: "d",
    text: "Executar tudo como administrador é sempre a opção mais segura.",
  },
];

export default function DockerActivity() {
  const [step, setStep] = useState(1);

  const [imageAnswer, setImageAnswer] = useState("");
  const [imageSubmitted, setImageSubmitted] = useState(false);

  const [containerAnswer, setContainerAnswer] = useState("");
  const [containerSubmitted, setContainerSubmitted] = useState(false);

  const [commandAnswer, setCommandAnswer] = useState("");
  const [commandSubmitted, setCommandSubmitted] = useState(false);

  const [isolationAnswer, setIsolationAnswer] = useState("");
  const [isolationSubmitted, setIsolationSubmitted] = useState(false);

  const [securityAnswer, setSecurityAnswer] = useState("");
  const [securitySubmitted, setSecuritySubmitted] = useState(false);

  const correctImage = "a";
  const correctContainer = "a";
  const correctCommand = "a";
  const correctIsolation = "a";
  const correctSecurity = "a";

  const resetLab = () => {
    setStep(1);

    setImageAnswer("");
    setImageSubmitted(false);

    setContainerAnswer("");
    setContainerSubmitted(false);

    setCommandAnswer("");
    setCommandSubmitted(false);

    setIsolationAnswer("");
    setIsolationSubmitted(false);

    setSecurityAnswer("");
    setSecuritySubmitted(false);
  };

  const imageCorrect = imageAnswer === correctImage;
  const containerCorrect = containerAnswer === correctContainer;
  const commandCorrect = commandAnswer === correctCommand;
  const isolationCorrect = isolationAnswer === correctIsolation;
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
            <span>📦</span>

            <div>
              <h2>Etapa 1 — Entendendo uma imagem Docker</h2>

              <p>
                Antes de executar um container, precisamos entender o conceito
                de imagem. Pense nela como uma base utilizada para criar um
                ambiente de execução.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Docker</span>
            </div>

            <div className="terminal-content">
              <p>Imagem Docker</p>
              <p>↓</p>
              <p>Base para criação de um container</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setImageSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual afirmação representa melhor o conceito de imagem Docker?
              </legend>

              {imageOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="image"
                    value={option.id}
                    checked={imageAnswer === option.id}
                    onChange={(event) =>
                      setImageAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!imageAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {imageSubmitted && (
            <div
              className={
                imageCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {imageCorrect ? (
                <>
                  <strong>✅ Conceito identificado!</strong>

                  <p>
                    A imagem fornece a base utilizada para criar um ou mais
                    containers.
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
                  <strong>❌ Revise o conceito.</strong>

                  <p>
                    Pense na imagem como a base utilizada para criar um
                    ambiente executável.
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
            <span>🐳</span>

            <div>
              <h2>Etapa 2 — Criando um container</h2>

              <p>
                Agora temos uma imagem. A partir dela podemos criar e executar
                um container.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Container</span>
            </div>

            <div className="terminal-content">
              <p>Imagem</p>
              <p>↓</p>
              <p>Container</p>
              <p>↓</p>
              <p>Aplicação em execução</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setContainerSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                O que é um container nesse contexto?
              </legend>

              {containerOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="container"
                    value={option.id}
                    checked={containerAnswer === option.id}
                    onChange={(event) =>
                      setContainerAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!containerAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {containerSubmitted && (
            <div
              className={
                containerCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {containerCorrect ? (
                <>
                  <strong>✅ Container identificado!</strong>

                  <p>
                    Um container é uma instância executável baseada em uma
                    imagem.
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
                    Pense na relação entre a imagem e o ambiente que será
                    executado.
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
            <span>⌨️</span>

            <div>
              <h2>Etapa 3 — Executando um container</h2>

              <p>
                O Docker disponibiliza comandos para criar e executar
                containers a partir de imagens.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Terminal</span>
            </div>

            <div className="terminal-content">
              <p>$ docker run hello-world</p>
              <p>↓</p>
              <p>Docker utiliza a imagem necessária</p>
              <p>↓</p>
              <p>Container é criado e executado</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setCommandSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual comando é utilizado para criar e executar um container a
                partir de uma imagem?
              </legend>

              {commandOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="command"
                    value={option.id}
                    checked={commandAnswer === option.id}
                    onChange={(event) =>
                      setCommandAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!commandAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {commandSubmitted && (
            <div
              className={
                commandCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {commandCorrect ? (
                <>
                  <strong>✅ Comando identificado!</strong>

                  <p>
                    O comando <code>docker run</code> pode criar e executar
                    um container utilizando uma imagem.
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
                  <strong>❌ Revise o comando.</strong>

                  <p>
                    Procure pelo comando utilizado para executar um container
                    a partir de uma imagem.
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
            <span>🔒</span>

            <div>
              <h2>Etapa 4 — Isolamento de aplicações</h2>

              <p>
                Containers podem ajudar a manter aplicações e seus ambientes
                de execução separados, facilitando a organização e a
                implantação de sistemas.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Ambiente</span>
            </div>

            <div className="terminal-content">
              <p>Aplicação A → Container A</p>
              <p>Aplicação B → Container B</p>
              <p>Aplicação C → Container C</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setIsolationSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é uma característica importante dos containers?
              </legend>

              {isolationOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="isolation"
                    value={option.id}
                    checked={isolationAnswer === option.id}
                    onChange={(event) =>
                      setIsolationAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!isolationAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {isolationSubmitted && (
            <div
              className={
                isolationCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {isolationCorrect ? (
                <>
                  <strong>✅ Conceito compreendido!</strong>

                  <p>
                    Containers ajudam a separar aplicações e seus ambientes
                    de execução. Isso não significa que sejam automaticamente
                    seguros.
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
                  <strong>❌ Revise o conceito.</strong>

                  <p>
                    Pense em como diferentes aplicações podem ter seus
                    próprios ambientes de execução.
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
              <h2>Etapa 5 — Docker e segurança</h2>

              <p>
                Containers facilitam a execução de aplicações, mas continuam
                exigindo cuidados de segurança durante sua utilização.
              </p>
            </div>
          </div>

          <div className="terminal-warning">
            <strong>Atenção à segurança</strong>

            <p>
              Imagens e containers devem ser tratados como componentes que
              precisam de manutenção. Utilize fontes confiáveis, mantenha os
              componentes atualizados e evite permissões desnecessárias.
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
                Qual prática representa uma abordagem mais segura?
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
                  <strong>✅ Segurança analisada!</strong>

                  <p>
                    Utilizar imagens confiáveis, manter componentes
                    atualizados e limitar permissões são práticas importantes
                    ao trabalhar com containers.
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
                  <strong>❌ Revise a prática.</strong>

                  <p>
                    Pense em confiança da imagem, atualizações e princípio do
                    menor privilégio.
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
            Você completou uma introdução prática aos conceitos de Docker,
            passando por imagens, containers, execução, isolamento e cuidados
            básicos de segurança.
          </p>

          <div className="lab-completed-summary">
            <strong>O que você praticou:</strong>

            <ul>
              <li>Conceito de imagem Docker.</li>
              <li>Conceito de container.</li>
              <li>Execução de containers.</li>
              <li>Isolamento de aplicações.</li>
              <li>Cuidados básicos de segurança.</li>
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
