import React, { useState } from "react";

const navigationOptions = [
  {
    id: "a",
    text: "Usar cd para navegar entre diretórios e pwd para verificar o diretório atual.",
  },
  {
    id: "b",
    text: "Usar rm para entrar em diretórios e mkdir para visualizar arquivos.",
  },
  {
    id: "c",
    text: "Usar sudo para listar automaticamente todos os arquivos.",
  },
  {
    id: "d",
    text: "Usar touch para navegar entre diretórios.",
  },
];

const listingOptions = [
  {
    id: "a",
    text: "O comando ls lista arquivos e diretórios do local atual.",
  },
  {
    id: "b",
    text: "O comando ls apaga todos os arquivos do diretório.",
  },
  {
    id: "c",
    text: "O comando ls altera a senha do usuário.",
  },
  {
    id: "d",
    text: "O comando ls encerra todos os processos do sistema.",
  },
];

const fileOptions = [
  {
    id: "a",
    text: "cat pode ser utilizado para visualizar o conteúdo de um arquivo de texto.",
  },
  {
    id: "b",
    text: "cat serve exclusivamente para criar usuários.",
  },
  {
    id: "c",
    text: "cat apaga automaticamente o conteúdo de todos os arquivos.",
  },
  {
    id: "d",
    text: "cat reinicia o sistema operacional.",
  },
];

const processOptions = [
  {
    id: "a",
    text: "ps pode ser utilizado para consultar processos em execução.",
  },
  {
    id: "b",
    text: "ps serve exclusivamente para alterar endereços IP.",
  },
  {
    id: "c",
    text: "ps apaga processos sem nenhuma confirmação.",
  },
  {
    id: "d",
    text: "ps é utilizado para criar diretórios.",
  },
];

const permissionOptions = [
  {
    id: "a",
    text: "Antes de alterar permissões ou executar comandos administrativos, é importante entender o que o comando fará e quais privilégios são necessários.",
  },
  {
    id: "b",
    text: "Todo comando Linux deve ser executado com privilégios administrativos.",
  },
  {
    id: "c",
    text: "Permissões não possuem relação com a segurança do sistema.",
  },
  {
    id: "d",
    text: "É seguro executar qualquer comando encontrado na internet com sudo.",
  },
];

export default function LinuxActivity() {
  const [step, setStep] = useState(1);

  const [navigationAnswer, setNavigationAnswer] = useState("");
  const [navigationSubmitted, setNavigationSubmitted] = useState(false);

  const [listingAnswer, setListingAnswer] = useState("");
  const [listingSubmitted, setListingSubmitted] = useState(false);

  const [fileAnswer, setFileAnswer] = useState("");
  const [fileSubmitted, setFileSubmitted] = useState(false);

  const [processAnswer, setProcessAnswer] = useState("");
  const [processSubmitted, setProcessSubmitted] = useState(false);

  const [permissionAnswer, setPermissionAnswer] = useState("");
  const [permissionSubmitted, setPermissionSubmitted] = useState(false);

  const correctNavigation = "a";
  const correctListing = "a";
  const correctFile = "a";
  const correctProcess = "a";
  const correctPermission = "a";

  const resetLab = () => {
    setStep(1);

    setNavigationAnswer("");
    setNavigationSubmitted(false);

    setListingAnswer("");
    setListingSubmitted(false);

    setFileAnswer("");
    setFileSubmitted(false);

    setProcessAnswer("");
    setProcessSubmitted(false);

    setPermissionAnswer("");
    setPermissionSubmitted(false);
  };

  const navigationCorrect = navigationAnswer === correctNavigation;
  const listingCorrect = listingAnswer === correctListing;
  const fileCorrect = fileAnswer === correctFile;
  const processCorrect = processAnswer === correctProcess;
  const permissionCorrect = permissionAnswer === correctPermission;

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
            <span>🐧</span>

            <div>
              <h2>Etapa 1 — Navegação no terminal</h2>

              <p>
                Você abriu um terminal Linux e precisa descobrir onde está e
                navegar até outro diretório.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Terminal</span>
            </div>

            <div className="terminal-content">
              <p>
                <span className="terminal-prompt">$</span> pwd
              </p>

              <p>/home/usuario</p>

              <p>
                <span className="terminal-prompt">$</span> cd projetos
              </p>

              <p>
                <span className="terminal-prompt">$</span> pwd
              </p>

              <p>/home/usuario/projetos</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setNavigationSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Quais comandos estão relacionados a essa atividade?
              </legend>

              {navigationOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="navigation"
                    value={option.id}
                    checked={navigationAnswer === option.id}
                    onChange={(event) =>
                      setNavigationAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!navigationAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {navigationSubmitted && (
            <div
              className={
                navigationCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {navigationCorrect ? (
                <>
                  <strong>✅ Comandos identificados!</strong>

                  <p>
                    O comando pwd mostra o diretório atual e cd permite
                    navegar entre diretórios.
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
                  <strong>❌ Revise os comandos.</strong>

                  <p>
                    Pense em qual comando mostra a localização atual e qual
                    permite mudar de diretório.
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
            <span>📂</span>

            <div>
              <h2>Etapa 2 — Listar arquivos</h2>

              <p>
                Agora você precisa verificar quais arquivos e diretórios estão
                disponíveis no local atual.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Terminal</span>
            </div>

            <div className="terminal-content">
              <p>
                <span className="terminal-prompt">$</span> ls
              </p>

              <p>documentos &nbsp; projetos &nbsp; scripts &nbsp; notas.txt</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setListingSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a função principal do comando ls?
              </legend>

              {listingOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="listing"
                    value={option.id}
                    checked={listingAnswer === option.id}
                    onChange={(event) =>
                      setListingAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!listingAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {listingSubmitted && (
            <div
              className={
                listingCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {listingCorrect ? (
                <>
                  <strong>✅ Diretório analisado!</strong>

                  <p>
                    O comando ls lista arquivos e diretórios disponíveis no
                    local atual.
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
                  <strong>❌ Revise o comando.</strong>

                  <p>
                    Pense no comando utilizado para visualizar o conteúdo do
                    diretório atual.
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
            <span>📄</span>

            <div>
              <h2>Etapa 3 — Visualizar um arquivo</h2>

              <p>
                Você encontrou um arquivo chamado <strong>logs.txt</strong> e
                precisa visualizar seu conteúdo diretamente pelo terminal.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Terminal</span>
            </div>

            <div className="terminal-content">
              <p>
                <span className="terminal-prompt">$</span> ls
              </p>

              <p>logs.txt &nbsp; scripts &nbsp; documentos</p>

              <p>
                <span className="terminal-prompt">$</span> cat logs.txt
              </p>

              <p>LOGIN_SUCCESS user=admin</p>
              <p>LOGIN_FAILED user=guest</p>
              <p>LOGIN_SUCCESS user=yuki</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setFileSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a função do comando cat nesse cenário?
              </legend>

              {fileOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="file"
                    value={option.id}
                    checked={fileAnswer === option.id}
                    onChange={(event) =>
                      setFileAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!fileAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {fileSubmitted && (
            <div
              className={
                fileCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {fileCorrect ? (
                <>
                  <strong>✅ Arquivo analisado!</strong>

                  <p>
                    O comando cat pode ser utilizado para exibir o conteúdo de
                    arquivos de texto no terminal.
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
                    Observe o resultado apresentado depois da execução de
                    cat logs.txt.
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
            <span>⚙️</span>

            <div>
              <h2>Etapa 4 — Consultar processos</h2>

              <p>
                Um analista precisa verificar quais processos estão em
                execução no sistema.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Terminal</span>
            </div>

            <div className="terminal-content">
              <p>
                <span className="terminal-prompt">$</span> ps
              </p>

              <p>PID &nbsp; TTY &nbsp; TIME &nbsp; CMD</p>
              <p>101 &nbsp; pts/0 &nbsp; 00:00 &nbsp; bash</p>
              <p>245 &nbsp; pts/0 &nbsp; 00:00 &nbsp; python</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setProcessSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a função do comando ps?
              </legend>

              {processOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="process"
                    value={option.id}
                    checked={processAnswer === option.id}
                    onChange={(event) =>
                      setProcessAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!processAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {processSubmitted && (
            <div
              className={
                processCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {processCorrect ? (
                <>
                  <strong>✅ Processos identificados!</strong>

                  <p>
                    O comando ps permite consultar processos em execução,
                    fornecendo informações como PID e comando.
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
                  <strong>❌ Revise sua escolha.</strong>

                  <p>
                    Observe o resultado apresentado pelo terminal após a
                    execução do comando ps.
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
              <h2>Etapa 5 — Privilégios e segurança</h2>

              <p>
                Durante uma atividade de administração, você encontra um
                comando que solicita privilégios elevados. Antes de executá-lo,
                qual deve ser sua postura?
              </p>
            </div>
          </div>

          <div className="terminal-warning">
            <strong>Atenção</strong>

            <p>
              Um comando desconhecido solicita privilégios administrativos.
              Antes de executá-lo, é necessário entender sua finalidade e os
              efeitos que ele pode causar.
            </p>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setPermissionSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual atitude é mais adequada?
              </legend>

              {permissionOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="permission"
                    value={option.id}
                    checked={permissionAnswer === option.id}
                    onChange={(event) =>
                      setPermissionAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!permissionAnswer}
            >
              Finalizar Lab
            </button>
          </form>

          {permissionSubmitted && (
            <div
              className={
                permissionCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {permissionCorrect ? (
                <>
                  <strong>✅ Boa decisão!</strong>

                  <p>
                    Privilégios elevados devem ser utilizados com cuidado.
                    Entender o comando antes da execução é uma prática
                    importante para a administração segura de sistemas.
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
                  <strong>❌ Pense na segurança.</strong>

                  <p>
                    Evite executar comandos desconhecidos com privilégios
                    elevados. Primeiro entenda sua finalidade e seus possíveis
                    efeitos.
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
            Você completou uma atividade prática sobre comandos essenciais do
            Linux, passando por navegação, arquivos, processos e conceitos
            básicos de segurança.
          </p>

          <div className="lab-completed-summary">
            <strong>O que você praticou:</strong>

            <ul>
              <li>Navegação entre diretórios.</li>
              <li>Consulta do diretório atual.</li>
              <li>Listagem de arquivos e diretórios.</li>
              <li>Visualização de arquivos de texto.</li>
              <li>Consulta de processos em execução.</li>
              <li>Uso consciente de privilégios administrativos.</li>
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
