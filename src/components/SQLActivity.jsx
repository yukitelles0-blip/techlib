import React, { useState } from "react";

const selectOptions = [
  {
    id: "a",
    text: "SELECT é utilizado para consultar dados de uma tabela.",
  },
  {
    id: "b",
    text: "SELECT apaga automaticamente todos os registros.",
  },
  {
    id: "c",
    text: "SELECT altera as permissões do sistema operacional.",
  },
  {
    id: "d",
    text: "SELECT reinicia o banco de dados.",
  },
];

const whereOptions = [
  {
    id: "a",
    text: "WHERE permite aplicar uma condição para filtrar os registros retornados.",
  },
  {
    id: "b",
    text: "WHERE serve exclusivamente para criar novas tabelas.",
  },
  {
    id: "c",
    text: "WHERE apaga todos os registros que não correspondem à consulta.",
  },
  {
    id: "d",
    text: "WHERE encerra a conexão com o banco de dados.",
  },
];

const orderOptions = [
  {
    id: "a",
    text: "ORDER BY permite organizar os resultados de uma consulta.",
  },
  {
    id: "b",
    text: "ORDER BY exclui automaticamente os registros.",
  },
  {
    id: "c",
    text: "ORDER BY cria usuários no sistema operacional.",
  },
  {
    id: "d",
    text: "ORDER BY serve para desligar o banco de dados.",
  },
];

const updateOptions = [
  {
    id: "a",
    text: "UPDATE pode ser utilizado para alterar dados existentes em uma tabela.",
  },
  {
    id: "b",
    text: "UPDATE serve somente para consultar dados.",
  },
  {
    id: "c",
    text: "UPDATE não pode modificar nenhum registro.",
  },
  {
    id: "d",
    text: "UPDATE serve exclusivamente para criar bancos de dados.",
  },
];

const securityOptions = [
  {
    id: "a",
    text: "Consultas devem ser construídas com cuidado e entradas externas devem ser tratadas de forma segura.",
  },
  {
    id: "b",
    text: "Qualquer texto recebido do usuário pode ser colocado diretamente em uma consulta.",
  },
  {
    id: "c",
    text: "SQL não possui relação com segurança da informação.",
  },
  {
    id: "d",
    text: "Toda consulta SQL encontrada na internet deve ser executada sem análise.",
  },
];

export default function SQLActivity() {
  const [step, setStep] = useState(1);

  const [selectAnswer, setSelectAnswer] = useState("");
  const [selectSubmitted, setSelectSubmitted] = useState(false);

  const [whereAnswer, setWhereAnswer] = useState("");
  const [whereSubmitted, setWhereSubmitted] = useState(false);

  const [orderAnswer, setOrderAnswer] = useState("");
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const [updateAnswer, setUpdateAnswer] = useState("");
  const [updateSubmitted, setUpdateSubmitted] = useState(false);

  const [securityAnswer, setSecurityAnswer] = useState("");
  const [securitySubmitted, setSecuritySubmitted] = useState(false);

  const correctSelect = "a";
  const correctWhere = "a";
  const correctOrder = "a";
  const correctUpdate = "a";
  const correctSecurity = "a";

  const resetLab = () => {
    setStep(1);

    setSelectAnswer("");
    setSelectSubmitted(false);

    setWhereAnswer("");
    setWhereSubmitted(false);

    setOrderAnswer("");
    setOrderSubmitted(false);

    setUpdateAnswer("");
    setUpdateSubmitted(false);

    setSecurityAnswer("");
    setSecuritySubmitted(false);
  };

  const selectCorrect = selectAnswer === correctSelect;
  const whereCorrect = whereAnswer === correctWhere;
  const orderCorrect = orderAnswer === correctOrder;
  const updateCorrect = updateAnswer === correctUpdate;
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
            <span>🔎</span>

            <div>
              <h2>Etapa 1 — Consultando dados</h2>

              <p>
                Você recebeu acesso a uma tabela de usuários e precisa
                consultar os registros disponíveis.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>SQL</span>
            </div>

            <div className="terminal-content">
              <p>SELECT * FROM usuarios;</p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setSelectSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a função principal do SELECT?
              </legend>

              {selectOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="select"
                    value={option.id}
                    checked={selectAnswer === option.id}
                    onChange={(event) =>
                      setSelectAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!selectAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {selectSubmitted && (
            <div
              className={
                selectCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {selectCorrect ? (
                <>
                  <strong>✅ Consulta identificada!</strong>

                  <p>
                    SELECT é utilizado para consultar dados armazenados em
                    uma tabela.
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
                  <strong>❌ Revise o comando.</strong>

                  <p>
                    Observe que o comando está sendo utilizado para consultar
                    registros da tabela usuarios.
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
            <span>🎯</span>

            <div>
              <h2>Etapa 2 — Filtrando resultados</h2>

              <p>
                A tabela possui muitos registros. Agora você precisa retornar
                somente os usuários que atendem a uma determinada condição.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>SQL</span>
            </div>

            <div className="terminal-content">
              <p>
                SELECT * FROM usuarios
              </p>

              <p>
                WHERE status = 'ativo';
              </p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setWhereSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a função do WHERE?
              </legend>

              {whereOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="where"
                    value={option.id}
                    checked={whereAnswer === option.id}
                    onChange={(event) =>
                      setWhereAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!whereAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {whereSubmitted && (
            <div
              className={
                whereCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {whereCorrect ? (
                <>
                  <strong>✅ Filtro identificado!</strong>

                  <p>
                    WHERE permite definir uma condição para filtrar os
                    registros retornados pela consulta.
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
                    Observe que somente os usuários com status ativo devem
                    aparecer no resultado.
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
            <span>↕️</span>

            <div>
              <h2>Etapa 3 — Organizando resultados</h2>

              <p>
                Você precisa organizar os resultados de uma consulta para
                facilitar a análise dos dados.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>SQL</span>
            </div>

            <div className="terminal-content">
              <p>
                SELECT nome, idade FROM usuarios
              </p>

              <p>
                ORDER BY idade DESC;
              </p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setOrderSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a função do ORDER BY?
              </legend>

              {orderOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="order"
                    value={option.id}
                    checked={orderAnswer === option.id}
                    onChange={(event) =>
                      setOrderAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!orderAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {orderSubmitted && (
            <div
              className={
                orderCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {orderCorrect ? (
                <>
                  <strong>✅ Resultados organizados!</strong>

                  <p>
                    ORDER BY permite ordenar os resultados de uma consulta de
                    acordo com uma determinada coluna.
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
                    Observe que ORDER BY aparece junto da coluna utilizada
                    para organizar os resultados.
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
            <span>✏️</span>

            <div>
              <h2>Etapa 4 — Alterando dados</h2>

              <p>
                Um registro existente precisa ser atualizado. Antes de
                executar uma alteração, é importante entender exatamente quais
                dados serão modificados.
              </p>
            </div>
          </div>

          <div className="terminal-viewer">
            <div className="terminal-header">
              <span>SQL</span>
            </div>

            <div className="terminal-content">
              <p>
                UPDATE usuarios
              </p>

              <p>
                SET status = 'inativo'
              </p>

              <p>
                WHERE id = 15;
              </p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setUpdateSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a função do UPDATE?
              </legend>

              {updateOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="update"
                    value={option.id}
                    checked={updateAnswer === option.id}
                    onChange={(event) =>
                      setUpdateAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!updateAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {updateSubmitted && (
            <div
              className={
                updateCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {updateCorrect ? (
                <>
                  <strong>✅ Atualização identificada!</strong>

                  <p>
                    UPDATE pode alterar dados existentes. A cláusula WHERE
                    ajuda a definir quais registros serão modificados.
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
                  <strong>❌ Revise o comando.</strong>

                  <p>
                    Observe que o comando modifica um dado existente no
                    registro identificado pela condição.
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
              <h2>Etapa 5 — SQL e segurança</h2>

              <p>
                Consultas SQL também fazem parte da segurança de aplicações.
                Dados recebidos de usuários precisam ser tratados
                cuidadosamente.
              </p>
            </div>
          </div>

          <div className="terminal-warning">
            <strong>Atenção</strong>

            <p>
              Construir consultas diretamente a partir de dados externos sem
              tratamento adequado pode criar riscos de segurança. Em
              aplicações reais, técnicas como consultas parametrizadas ajudam
              a reduzir esse tipo de problema.
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
                    Consultas devem ser construídas de forma segura e dados
                    externos devem ser tratados adequadamente antes de serem
                    utilizados.
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
                    Evite utilizar dados externos diretamente em consultas sem
                    tratamento adequado.
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
            Você completou uma atividade prática sobre fundamentos de SQL,
            passando por consultas, filtros, organização, atualização de
            dados e conceitos básicos de segurança.
          </p>

          <div className="lab-completed-summary">
            <strong>O que você praticou:</strong>

            <ul>
              <li>Consultas com SELECT.</li>
              <li>Filtros com WHERE.</li>
              <li>Organização com ORDER BY.</li>
              <li>Atualização de dados com UPDATE.</li>
              <li>Cuidados básicos com segurança em consultas SQL.</li>
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
