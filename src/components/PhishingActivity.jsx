import React, { useState } from "react";

const senderOptions = [
  {
    id: "a",
    text: "O remetente parece confiável porque utiliza o nome de uma empresa conhecida.",
  },
  {
    id: "b",
    text: "O endereço do remetente apresenta um domínio diferente do domínio oficial da empresa mencionada.",
  },
  {
    id: "c",
    text: "O remetente deve ser considerado seguro porque a mensagem possui logotipo.",
  },
  {
    id: "d",
    text: "Não é possível analisar o remetente em uma mensagem de phishing.",
  },
];

const linkOptions = [
  {
    id: "a",
    text: "O link deve ser acessado para confirmar se realmente pertence à empresa.",
  },
  {
    id: "b",
    text: "O endereço do link deve ser analisado antes de qualquer acesso, procurando diferenças ou domínios suspeitos.",
  },
  {
    id: "c",
    text: "Todo link enviado por e-mail é automaticamente seguro.",
  },
  {
    id: "d",
    text: "O texto exibido no botão é suficiente para confirmar o destino do link.",
  },
];

const socialEngineeringOptions = [
  {
    id: "a",
    text: "A mensagem utiliza urgência e ameaça de bloqueio para pressionar o usuário a agir rapidamente.",
  },
  {
    id: "b",
    text: "A mensagem não utiliza nenhuma técnica de engenharia social.",
  },
  {
    id: "c",
    text: "Apenas o uso de imagens caracteriza engenharia social.",
  },
  {
    id: "d",
    text: "A mensagem é segura porque solicita uma ação do usuário.",
  },
];

const actionOptions = [
  {
    id: "a",
    text: "Clicar no botão rapidamente para evitar o bloqueio da conta.",
  },
  {
    id: "b",
    text: "Responder ao remetente solicitando a senha da conta.",
  },
  {
    id: "c",
    text: "Não clicar no link, verificar a situação por um canal oficial e reportar a mensagem suspeita.",
  },
  {
    id: "d",
    text: "Encaminhar a mensagem para outras pessoas para descobrir se é verdadeira.",
  },
];

const firstAnalysisOptions = [
  {
    id: "a",
    text: "A mensagem deve ser considerada confiável porque utiliza a identidade visual de uma empresa.",
  },
  {
    id: "b",
    text: "Existem vários indicadores suspeitos que justificam uma análise antes de qualquer interação.",
  },
  {
    id: "c",
    text: "Uma mensagem nunca pode ser considerada phishing se não pedir uma senha diretamente.",
  },
  {
    id: "d",
    text: "O usuário deve clicar no link para descobrir se a mensagem é verdadeira.",
  },
];

export default function PhishingActivity() {
  const [step, setStep] = useState(1);

  const [analysisAnswer, setAnalysisAnswer] = useState("");
  const [analysisSubmitted, setAnalysisSubmitted] = useState(false);

  const [senderAnswer, setSenderAnswer] = useState("");
  const [senderSubmitted, setSenderSubmitted] = useState(false);

  const [linkAnswer, setLinkAnswer] = useState("");
  const [linkSubmitted, setLinkSubmitted] = useState(false);

  const [socialAnswer, setSocialAnswer] = useState("");
  const [socialSubmitted, setSocialSubmitted] = useState(false);

  const [actionAnswer, setActionAnswer] = useState("");
  const [actionSubmitted, setActionSubmitted] = useState(false);

  const correctAnalysis = "b";
  const correctSender = "b";
  const correctLink = "b";
  const correctSocial = "a";
  const correctAction = "c";

  const resetLab = () => {
    setStep(1);

    setAnalysisAnswer("");
    setAnalysisSubmitted(false);

    setSenderAnswer("");
    setSenderSubmitted(false);

    setLinkAnswer("");
    setLinkSubmitted(false);

    setSocialAnswer("");
    setSocialSubmitted(false);

    setActionAnswer("");
    setActionSubmitted(false);
  };

  const analysisCorrect = analysisAnswer === correctAnalysis;
  const senderCorrect = senderAnswer === correctSender;
  const linkCorrect = linkAnswer === correctLink;
  const socialCorrect = socialAnswer === correctSocial;
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
            <span>🎣</span>

            <div>
              <h2>Etapa 1 — Analisar a mensagem</h2>

              <p>
                Você recebeu uma mensagem simulada. Analise o conteúdo e
                identifique se existem sinais que justificam uma investigação.
              </p>
            </div>
          </div>

          <div className="phishing-message">
            <div className="phishing-message-header">
              <strong>Mensagem recebida</strong>
              <span>09:42</span>
            </div>

            <div className="phishing-field">
              <strong>De:</strong>
              <span>Suporte Segurança &lt;seguranca@conta-verificacao.com&gt;</span>
            </div>

            <div className="phishing-field">
              <strong>Assunto:</strong>
              <span>Ação necessária: sua conta será bloqueada</span>
            </div>

            <div className="phishing-body">
              <p>Olá, usuário.</p>

              <p>
                Detectamos uma atividade incomum em sua conta. Para evitar o
                bloqueio, confirme seus dados imediatamente.
              </p>

              <button type="button" className="phishing-fake-button">
                Confirmar minha conta
              </button>

              <p>
                Caso a confirmação não seja realizada hoje, seu acesso poderá
                ser temporariamente suspenso.
              </p>

              <p>
                Atenciosamente,
                <br />
                Equipe de Segurança
              </p>
            </div>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setAnalysisSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a melhor avaliação inicial dessa mensagem?
              </legend>

              {firstAnalysisOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="analysis"
                    value={option.id}
                    checked={analysisAnswer === option.id}
                    onChange={(event) =>
                      setAnalysisAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!analysisAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {analysisSubmitted && (
            <div
              className={
                analysisCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {analysisCorrect ? (
                <>
                  <strong>✅ Boa análise!</strong>

                  <p>
                    A mensagem apresenta sinais que justificam uma investigação,
                    como urgência, ameaça de bloqueio e um remetente que precisa
                    ser verificado.
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
                  <strong>❌ Observe os sinais.</strong>

                  <p>
                    Não confie apenas na aparência da mensagem. Analise o
                    remetente, o conteúdo, a urgência e os links antes de tomar
                    qualquer ação.
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
            <span>📧</span>

            <div>
              <h2>Etapa 2 — Investigar o remetente</h2>

              <p>
                Agora concentre sua análise no endereço que enviou a mensagem.
              </p>
            </div>
          </div>

          <div className="phishing-evidence">
            <strong>Remetente identificado:</strong>

            <code>seguranca@conta-verificacao.com</code>

            <p>
              A mensagem afirma representar uma empresa conhecida, mas o
              domínio apresentado é diferente do domínio oficial esperado.
            </p>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setSenderSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é o principal ponto de atenção no remetente?
              </legend>

              {senderOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="sender"
                    value={option.id}
                    checked={senderAnswer === option.id}
                    onChange={(event) =>
                      setSenderAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!senderAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {senderSubmitted && (
            <div
              className={
                senderCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {senderCorrect ? (
                <>
                  <strong>✅ Remetente identificado!</strong>

                  <p>
                    O nome exibido pode parecer legítimo, mas o domínio do
                    endereço também precisa ser analisado.
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
                  <strong>❌ Continue investigando.</strong>

                  <p>
                    Não analise somente o nome exibido. Observe o endereço
                    completo do remetente e o domínio utilizado.
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
            <span>🔗</span>

            <div>
              <h2>Etapa 3 — Analisar o link</h2>

              <p>
                A mensagem apresenta um botão para confirmar a conta. Antes de
                qualquer acesso, pense em como um analista deve tratar esse
                tipo de link.
              </p>
            </div>
          </div>

          <div className="phishing-evidence">
            <strong>Destino simulado:</strong>

            <code>https://conta-verificacao.example/confirmar</code>

            <p>
              Este endereço é utilizado apenas como exemplo dentro deste
              laboratório. Não é necessário acessá-lo.
            </p>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setLinkSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual é a atitude mais adequada diante de um link suspeito?
              </legend>

              {linkOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="link"
                    value={option.id}
                    checked={linkAnswer === option.id}
                    onChange={(event) =>
                      setLinkAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!linkAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {linkSubmitted && (
            <div
              className={
                linkCorrect ? "lab-feedback success" : "lab-feedback error"
              }
            >
              {linkCorrect ? (
                <>
                  <strong>✅ Link analisado!</strong>

                  <p>
                    Um analista deve verificar cuidadosamente o destino de um
                    link antes de qualquer interação e evitar acessar endereços
                    suspeitos.
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
                  <strong>❌ Atenção ao link.</strong>

                  <p>
                    O texto apresentado em um botão não é suficiente para
                    determinar se o destino é confiável.
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
              <h2>Etapa 4 — Engenharia social</h2>

              <p>
                Além dos aspectos técnicos, analise como a mensagem tenta
                influenciar o comportamento do usuário.
              </p>
            </div>
          </div>

          <div className="phishing-highlight">
            <strong>Elementos observados na mensagem:</strong>

            <ul>
              <li>“Ação necessária”</li>
              <li>“sua conta será bloqueada”</li>
              <li>“confirme seus dados imediatamente”</li>
              <li>Prazo curto para realizar a ação</li>
            </ul>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setSocialSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual técnica de engenharia social está mais evidente?
              </legend>

              {socialEngineeringOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="social"
                    value={option.id}
                    checked={socialAnswer === option.id}
                    onChange={(event) =>
                      setSocialAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!socialAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {socialSubmitted && (
            <div
              className={
                socialCorrect ? "lab-feedback success" : "lab-feedback error"
              }
            >
              {socialCorrect ? (
                <>
                  <strong>✅ Técnica identificada!</strong>

                  <p>
                    A mensagem tenta criar pressão por meio de urgência e
                    ameaça de bloqueio, incentivando o usuário a agir sem
                    analisar cuidadosamente.
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
                  <strong>❌ Analise o comportamento da mensagem.</strong>

                  <p>
                    Observe principalmente as palavras utilizadas para criar
                    pressa, medo ou pressão sobre o usuário.
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
                Você identificou vários indicadores suspeitos. Agora escolha a
                atitude mais segura diante da mensagem.
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
                O que deve ser feito com a mensagem?
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
                actionCorrect ? "lab-feedback success" : "lab-feedback error"
              }
            >
              {actionCorrect ? (
                <>
                  <strong>✅ Decisão correta!</strong>

                  <p>
                    Evite interagir com mensagens suspeitas. A situação deve
                    ser verificada por canais oficiais e a mensagem pode ser
                    reportada para análise.
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
                    Diante de vários indicadores suspeitos, evite clicar,
                    responder ou compartilhar a mensagem.
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
            Você completou uma análise de phishing, identificando sinais
            suspeitos, investigando o remetente, analisando links e
            reconhecendo técnicas de engenharia social.
          </p>

          <div className="lab-completed-summary">
            <strong>O que você praticou:</strong>

            <ul>
              <li>Identificação de sinais de phishing.</li>
              <li>Análise do endereço do remetente.</li>
              <li>Análise segura de links.</li>
              <li>Identificação de técnicas de engenharia social.</li>
              <li>Tomada de decisão diante de uma mensagem suspeita.</li>
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
