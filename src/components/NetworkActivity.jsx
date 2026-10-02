import React, { useState } from "react";

const deviceOptions = [
  {
    id: "a",
    text: "192.168.1.1 é o gateway, 192.168.1.10 e 192.168.1.20 são dispositivos da rede local.",
  },
  {
    id: "b",
    text: "192.168.1.1 é um endereço público da internet.",
  },
  {
    id: "c",
    text: "Todos os endereços pertencem a redes diferentes.",
  },
  {
    id: "d",
    text: "192.168.1.255 deve ser utilizado como computador da rede.",
  },
];

const maskOptions = [
  {
    id: "a",
    text: "A máscara 255.255.255.0 indica uma rede IPv4 /24.",
  },
  {
    id: "b",
    text: "A máscara 255.255.255.0 indica uma rede /8.",
  },
  {
    id: "c",
    text: "A máscara não possui relação com o endereço IP.",
  },
  {
    id: "d",
    text: "A máscara identifica exclusivamente o servidor DNS.",
  },
];

const gatewayOptions = [
  {
    id: "a",
    text: "O gateway normalmente permite que dispositivos da rede local se comuniquem com outras redes.",
  },
  {
    id: "b",
    text: "O gateway serve apenas para armazenar arquivos dos computadores.",
  },
  {
    id: "c",
    text: "O gateway substitui automaticamente o endereço IP de todos os dispositivos.",
  },
  {
    id: "d",
    text: "O gateway é responsável exclusivamente por fornecer nomes de domínio.",
  },
];

const dnsOptions = [
  {
    id: "a",
    text: "O DNS ajuda a traduzir nomes de domínio em endereços IP.",
  },
  {
    id: "b",
    text: "O DNS é utilizado exclusivamente para configurar senhas.",
  },
  {
    id: "c",
    text: "O DNS substitui o gateway da rede.",
  },
  {
    id: "d",
    text: "O DNS impede qualquer comunicação entre dispositivos.",
  },
];

const troubleshootingOptions = [
  {
    id: "a",
    text: "Verificar IP, máscara, gateway, conectividade e resolução DNS antes de concluir a causa.",
  },
  {
    id: "b",
    text: "Trocar todos os cabos da rede imediatamente.",
  },
  {
    id: "c",
    text: "Alterar todos os endereços IP sem realizar nenhuma análise.",
  },
  {
    id: "d",
    text: "Concluir que o problema é DNS sem realizar nenhum teste.",
  },
];

export default function NetworkActivity() {
  const [step, setStep] = useState(1);

  const [deviceAnswer, setDeviceAnswer] = useState("");
  const [deviceSubmitted, setDeviceSubmitted] = useState(false);

  const [maskAnswer, setMaskAnswer] = useState("");
  const [maskSubmitted, setMaskSubmitted] = useState(false);

  const [gatewayAnswer, setGatewayAnswer] = useState("");
  const [gatewaySubmitted, setGatewaySubmitted] = useState(false);

  const [dnsAnswer, setDnsAnswer] = useState("");
  const [dnsSubmitted, setDnsSubmitted] = useState(false);

  const [troubleshootingAnswer, setTroubleshootingAnswer] = useState("");
  const [troubleshootingSubmitted, setTroubleshootingSubmitted] =
    useState(false);

  const correctDevice = "a";
  const correctMask = "a";
  const correctGateway = "a";
  const correctDns = "a";
  const correctTroubleshooting = "a";

  const resetLab = () => {
    setStep(1);

    setDeviceAnswer("");
    setDeviceSubmitted(false);

    setMaskAnswer("");
    setMaskSubmitted(false);

    setGatewayAnswer("");
    setGatewaySubmitted(false);

    setDnsAnswer("");
    setDnsSubmitted(false);

    setTroubleshootingAnswer("");
    setTroubleshootingSubmitted(false);
  };

  const deviceCorrect = deviceAnswer === correctDevice;
  const maskCorrect = maskAnswer === correctMask;
  const gatewayCorrect = gatewayAnswer === correctGateway;
  const dnsCorrect = dnsAnswer === correctDns;
  const troubleshootingCorrect =
    troubleshootingAnswer === correctTroubleshooting;

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
              <h2>Etapa 1 — Identificar os dispositivos</h2>

              <p>
                Analise a rede fictícia abaixo e identifique a função dos
                principais endereços apresentados.
              </p>
            </div>
          </div>

          <div className="network-diagram">
            <div className="network-device">
              <span>🌐</span>
              <strong>Gateway</strong>
              <code>192.168.1.1</code>
            </div>

            <div className="network-connection">│</div>

            <div className="network-device">
              <span>💻</span>
              <strong>Computador</strong>
              <code>192.168.1.10</code>
            </div>

            <div className="network-device">
              <span>📱</span>
              <strong>Smartphone</strong>
              <code>192.168.1.20</code>
            </div>
          </div>

          <div className="network-info">
            <strong>Rede:</strong>
            <code>192.168.1.0/24</code>

            <strong>Máscara:</strong>
            <code>255.255.255.0</code>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setDeviceSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual interpretação melhor representa essa rede?
              </legend>

              {deviceOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="device"
                    value={option.id}
                    checked={deviceAnswer === option.id}
                    onChange={(event) =>
                      setDeviceAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!deviceAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {deviceSubmitted && (
            <div
              className={
                deviceCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {deviceCorrect ? (
                <>
                  <strong>✅ Boa análise!</strong>

                  <p>
                    Os endereços apresentados fazem parte da mesma rede local,
                    e o endereço 192.168.1.1 está sendo utilizado como gateway.
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
                  <strong>❌ Analise novamente.</strong>

                  <p>
                    Observe os endereços IP e a informação da rede
                    192.168.1.0/24.
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
            <span>📐</span>

            <div>
              <h2>Etapa 2 — Interpretar a máscara de rede</h2>

              <p>
                Agora analise a máscara utilizada pela rede e identifique o
                que ela representa.
              </p>
            </div>
          </div>

          <div className="network-evidence">
            <strong>Informação encontrada:</strong>

            <code>IP: 192.168.1.10</code>
            <code>Máscara: 255.255.255.0</code>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setMaskSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual afirmação sobre essa máscara está correta?
              </legend>

              {maskOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="mask"
                    value={option.id}
                    checked={maskAnswer === option.id}
                    onChange={(event) =>
                      setMaskAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!maskAnswer}
            >
              Verificar resposta
            </button>
          </form>

          {maskSubmitted && (
            <div
              className={
                maskCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {maskCorrect ? (
                <>
                  <strong>✅ Máscara identificada!</strong>

                  <p>
                    A máscara 255.255.255.0 corresponde a uma rede IPv4 /24.
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
                    Relacione a máscara 255.255.255.0 com a notação CIDR
                    correspondente.
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
              <h2>Etapa 3 — Entender o gateway</h2>

              <p>
                Um dispositivo precisa acessar um recurso localizado fora da
                rede local. Qual é a função do gateway nesse cenário?
              </p>
            </div>
          </div>

          <div className="network-evidence">
            <strong>Configuração do computador:</strong>

            <code>IP: 192.168.1.10</code>
            <code>Máscara: 255.255.255.0</code>
            <code>Gateway: 192.168.1.1</code>
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
                Qual é a função principal do gateway?
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
                    O gateway atua como ponto de saída da rede local para outras
                    redes, como a internet.
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
                  <strong>❌ Revise sua escolha.</strong>

                  <p>
                    Pense no papel do gateway quando um dispositivo precisa
                    alcançar outra rede.
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
              <h2>Etapa 4 — Investigar o DNS</h2>

              <p>
                O usuário consegue acessar um endereço IP, mas está com
                dificuldades para acessar um site pelo nome. Qual componente
                deve ser investigado?
              </p>
            </div>
          </div>

          <div className="network-evidence">
            <strong>Cenário:</strong>

            <p>
              O computador possui endereço IP, máscara e gateway configurados.
              A conectividade básica funciona, mas a resolução de nomes não
              está funcionando corretamente.
            </p>
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
                Qual função está relacionada ao DNS?
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
                dnsCorrect ? "lab-feedback success" : "lab-feedback error"
              }
            >
              {dnsCorrect ? (
                <>
                  <strong>✅ DNS identificado!</strong>

                  <p>
                    O DNS ajuda a relacionar nomes de domínio com endereços IP,
                    permitindo que usuários acessem serviços utilizando nomes.
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
                  <strong>❌ Analise o cenário.</strong>

                  <p>
                    O problema descrito está relacionado à resolução de nomes.
                    Pense no componente responsável por essa função.
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
            <span>🛠️</span>

            <div>
              <h2>Etapa 5 — Investigar um problema de rede</h2>

              <p>
                Um computador apresenta problemas de conectividade. Como um
                analista deve iniciar a investigação?
              </p>
            </div>
          </div>

          <div className="network-evidence">
            <strong>Informações disponíveis:</strong>

            <ul>
              <li>IP: 192.168.1.10</li>
              <li>Máscara: 255.255.255.0</li>
              <li>Gateway: 192.168.1.1</li>
              <li>DNS configurado</li>
            </ul>
          </div>

          <form
            className="lab-question"
            onSubmit={(event) => {
              event.preventDefault();
              setTroubleshootingSubmitted(true);
            }}
          >
            <fieldset>
              <legend>
                Qual abordagem é mais adequada?
              </legend>

              {troubleshootingOptions.map((option) => (
                <label key={option.id} className="lab-option">
                  <input
                    type="radio"
                    name="troubleshooting"
                    value={option.id}
                    checked={troubleshootingAnswer === option.id}
                    onChange={(event) =>
                      setTroubleshootingAnswer(event.target.value)
                    }
                  />

                  <span>{option.text}</span>
                </label>
              ))}
            </fieldset>

            <button
              type="submit"
              className="card-button"
              disabled={!troubleshootingAnswer}
            >
              Finalizar Lab
            </button>
          </form>

          {troubleshootingSubmitted && (
            <div
              className={
                troubleshootingCorrect
                  ? "lab-feedback success"
                  : "lab-feedback error"
              }
            >
              {troubleshootingCorrect ? (
                <>
                  <strong>✅ Investigação concluída!</strong>

                  <p>
                    Uma análise de rede deve ser feita de forma organizada,
                    verificando as configurações e testando a conectividade
                    antes de concluir a causa do problema.
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
                  <strong>❌ Revise sua abordagem.</strong>

                  <p>
                    Evite alterar configurações sem entender primeiro o que
                    está acontecendo. Comece coletando informações e realizando
                    testes.
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
            Você completou uma investigação básica de rede, analisando
            endereçamento IP, máscara, gateway, DNS e conectividade.
          </p>

          <div className="lab-completed-summary">
            <strong>O que você praticou:</strong>

            <ul>
              <li>Identificação de dispositivos em uma rede local.</li>
              <li>Interpretação de endereços IPv4.</li>
              <li>Identificação de máscara e notação CIDR.</li>
              <li>Compreensão da função do gateway.</li>
              <li>Compreensão da função do DNS.</li>
              <li>Investigação estruturada de problemas de conectividade.</li>
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
