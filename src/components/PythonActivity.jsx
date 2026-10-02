import React, { useState } from "react";

const variableOptions = [
  {
    id: "a",
    text: "Uma variável pode armazenar um valor que será utilizado pelo programa.",
  },
  {
    id: "b",
    text: "Uma variável serve exclusivamente para instalar bibliotecas.",
  },
  {
    id: "c",
    text: "Uma variável encerra automaticamente o programa.",
  },
  {
    id: "d",
    text: "Uma variável só pode armazenar números.",
  },
];

const conditionOptions = [
  {
    id: "a",
    text: "A estrutura if permite executar um bloco de código quando uma condição é verdadeira.",
  },
  {
    id: "b",
    text: "A estrutura if serve exclusivamente para criar arquivos.",
  },
  {
    id: "c",
    text: "A estrutura if sempre executa o mesmo código, independentemente da condição.",
  },
  {
    id: "d",
    text: "A estrutura if é utilizada apenas para instalar o Python.",
  },
];

const functionOptions = [
  {
    id: "a",
    text: "Uma função permite organizar um conjunto de instruções que pode ser reutilizado.",
  },
  {
    id: "b",
    text: "Uma função sempre precisa apagar arquivos do computador.",
  },
  {
    id: "c",
    text: "Uma função só pode ser utilizada para trabalhar com redes.",
  },
  {
    id: "d",
    text: "Uma função impede que o programa receba dados.",
  },
];

const inputOptions = [
  {
    id: "a",
    text: "input() pode ser utilizado para receber uma informação digitada pelo usuário.",
  },
  {
    id: "b",
    text: "input() encerra o computador imediatamente.",
  },
  {
    id: "c",
    text: "input() serve exclusivamente para criar bancos de dados.",
  },
  {
    id: "d",
    text: "input() remove automaticamente arquivos temporários.",
  },
];

const securityOptions = [
  {
    id: "a",
    text: "Validar entradas e evitar executar dados fornecidos pelo usuário como código são boas práticas.",
  },
  {
    id: "b",
    text: "Todo dado recebido pelo usuário deve ser executado diretamente pelo programa.",
  },
  {
    id: "c",
    text: "Validação de entrada não possui relação com segurança.",
  },
  {
    id: "d",
    text: "Qualquer código encontrado na internet pode ser executado sem análise.",
  },
];

export default function PythonActivity() {
  const [step, setStep] = useState(1);

  const [variableAnswer, setVariableAnswer] = useState("");
  const [variableSubmitted, setVariableSubmitted] = useState(false);

  const [conditionAnswer, setConditionAnswer] = useState("");
  const [conditionSubmitted, setConditionSubmitted] = useState(false);

  const [functionAnswer, setFunctionAnswer] = useState("");
  const [functionSubmitted, setFunctionSubmitted] = useState(false);

  const [inputAnswer, setInputAnswer] = useState("");
  const [inputSubmitted, setInputSubmitted] = useState(false);

  const [securityAnswer, setSecurityAnswer] = useState("");
  const [securitySubmitted, setSecuritySubmitted] = useState(false);

  const correctVariable = "a";
  const correctCondition = "a";
  const correctFunction = "a";
  const correctInput = "a";
  const correctSecurity = "a";

  const resetLab = () => {
    setStep(1);

    setVariableAnswer("");
    setVariableSubmitted(false);

    setConditionAnswer("");
    setConditionSubmitted(false);

    setFunctionAnswer("");
    setFunctionSubmitted(false);

    setInputAnswer("");
    setInputSubmitted(false);

    setSecurityAnswer("");
    setSecuritySubmitted(false);
  };

  const variableCorrect = variableAnswer === correctVariable;
  const conditionCorrect = conditionAnswer === correctCondition;
  const functionCorrect = functionAnswer === correctFunction;
  const inputCorrect = inputAnswer === correctInput;
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
            <span>🐍</span>

            <div>
              <h2>Etapa 1 — Variáveis em Python</h2>

              <p>
                Você começou seu primeiro script e precisa armazenar
                informações que serão utilizadas pelo programa.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Python</span>
            </div>

            <div className="terminal-content">
              <p>nome = "Yuki"</p>
              <p>idade = 20</p>
              <p>print(nome)</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setVariableSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                O que representa uma variável nesse exemplo?
              </legend>

              {variableOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="variable"
                    value={option.id}
                    checked={variableAnswer === option.id}
                    onChange={(event) =>
                      setVariableAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!variableAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {variableSubmitted && (
            <div
              className={
                variableCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {variableCorrect ? (
                <>
                  <strong>✅ Variáveis identificadas!</strong>

                  <p>
                    Variáveis permitem armazenar valores que podem ser
                    utilizados posteriormente pelo programa.
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
                    Observe os valores armazenados em nome e idade.
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
            <span>🔀</span>

            <div>
              <h2>Etapa 2 — Condições</h2>

              <p>
                Agora o programa precisa tomar uma decisão com base em uma
                condição.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Python</span>
            </div>

            <div className="terminal-content">
              <p>idade = 18</p>
              <p>if idade &gt;= 18:</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;print("Acesso permitido")</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setConditionSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a função da estrutura if?
              </legend>

              {conditionOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="condition"
                    value={option.id}
                    checked={conditionAnswer === option.id}
                    onChange={(event) =>
                      setConditionAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!conditionAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {conditionSubmitted && (
            <div
              className={
                conditionCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {conditionCorrect ? (
                <>
                  <strong>✅ Condição compreendida!</strong>

                  <p>
                    A estrutura if permite executar determinadas instruções
                    quando uma condição é verdadeira.
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
                  <strong>❌ Revise a estrutura.</strong>

                  <p>
                    Observe que o código verifica uma condição antes de
                    executar print().
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
            <span>🧩</span>

            <div>
              <h2>Etapa 3 — Funções</h2>

              <p>
                Seu script está crescendo e você precisa organizar algumas
                instruções para poder reutilizá-las.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Python</span>
            </div>

            <div className="terminal-content">
              <p>def analisar_ip(ip):</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;print("Analisando:", ip)</p>
              <p></p>
              <p>analisar_ip("192.168.1.10")</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setFunctionSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Por que utilizar uma função?
              </legend>

              {functionOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="function"
                    value={option.id}
                    checked={functionAnswer === option.id}
                    onChange={(event) =>
                      setFunctionAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!functionAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {functionSubmitted && (
            <div
              className={
                functionCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {functionCorrect ? (
                <>
                  <strong>✅ Função identificada!</strong>

                  <p>
                    Funções ajudam a organizar instruções e permitem
                    reutilizar uma determinada lógica no programa.
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
                    Observe que a função analisar_ip() pode ser chamada
                    sempre que essa lógica for necessária.
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
            <span>⌨️</span>

            <div>
              <h2>Etapa 4 — Entrada de dados</h2>

              <p>
                Agora seu programa precisa receber uma informação digitada
                pelo usuário.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>Python</span>
            </div>

            <div className="terminal-content">
              <p>nome = input("Digite seu nome: ")</p>
              <p>print("Olá,", nome)</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setInputSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a função do input() nesse exemplo?
              </legend>

              {inputOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="input"
                    value={option.id}
                    checked={inputAnswer === option.id}
                    onChange={(event) =>
                      setInputAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!inputAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {inputSubmitted && (
            <div
              className={
                inputCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {inputCorrect ? (
                <>
                  <strong>✅ Entrada identificada!</strong>

                  <p>
                    A função input() permite receber dados digitados pelo
                    usuário durante a execução do programa.
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
                  <strong>❌ Revise a função.</strong>

                  <p>
                    Observe que o programa espera uma informação digitada
                    antes de continuar.
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
              <h2>Etapa 5 — Python e segurança</h2>

              <p>
                Você está criando ferramentas para análise de segurança.
                Antes de utilizar dados recebidos por um programa, é
                importante pensar em segurança.
              </p>
            </div>
          </div>

          <div className="terminal-warning">
            <strong>Atenção</strong>

            <p>
              Programas podem receber dados de usuários, arquivos ou outros
              sistemas. Esses dados devem ser tratados de forma segura antes
              de serem utilizados.
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
                Qual prática é mais adequada?
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
                  <strong>✅ Boa prática!</strong>

                  <p>
                    Validar entradas e evitar a execução direta de dados como
                    código são princípios importantes para desenvolver
                    aplicações mais seguras.
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
                    Dados recebidos por um programa devem ser tratados com
                    cuidado antes de serem utilizados.
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
            Você completou uma atividade prática sobre fundamentos de Python,
            passando por variáveis, condições, funções, entrada de dados e
            conceitos básicos de segurança.
          </p>

          <div className="lab-completed-summary">
            <strong>O que você praticou:</strong>

            <ul>
              <li>Uso de variáveis.</li>
              <li>Estruturas condicionais.</li>
              <li>Criação e utilização de funções.</li>
              <li>Entrada de dados com input().</li>
              <li>Cuidados básicos com dados recebidos pelo programa.</li>
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
