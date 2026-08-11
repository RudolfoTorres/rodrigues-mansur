"use client";

import { useState } from "react";

export function Services() {
  // Estado para controlar o card ativo via toque/clique
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Estado para o botão de collapse no mobile
  const [showAllMobile, setShowAllMobile] = useState(false);

  const servicesList = [
    {
      title: "Abertura ou Baixa",
      icon: "🏢",
      description: "Processo ágil e descomplicação na constituição ou encerramento de empresas."
    },
    {
      title: "Homologação",
      icon: "⚖️",
      description: "Acompanhamento e validação de rescisões com total suporte legal."
    },
    {
      title: "Parcelamento",
      icon: "💳",
      description: "Regularização de débitos fiscais junto aos órgãos competentes."
    },
    {
      title: "Administração",
      icon: "📊",
      description: "Apoio no planejamento estratégico e organização da rotina do negócio."
    },
    {
      title: "Contábil / Fiscal",
      icon: "🧾",
      description: "Apuração de impostos, demonstrações financeiras e obrigações acessórias."
    },
    {
      title: "Financeiro",
      icon: "💲",
      description: "Gestão do fluxo de caixa e relatórios analíticos para tomada de decisão."
    },
    {
      title: "Legalização",
      icon: "🏛️",
      description: "Obtenção de alvarás, licenças e adequação aos órgãos reguladores."
    },
    {
      title: "RH e DP",
      icon: "👥",
      description: "Admissões, demissões e gestão completa do departamento pessoal."
    },
    {
      title: "Folha de Pagamento",
      icon: "💵",
      description: "Cálculo exato de salários, encargos sociais e contracheques."
    },
    {
      title: "Simples Nacional",
      icon: "📝",
      description: "Planejamento e enquadramento ideal para micro e pequenas empresas."
    },
    {
      title: "Lucro Real / Presumido",
      icon: "📈",
      description: "Consultoria tributária avançada para otimização de impostos corporativos."
    },
    {
      title: "Consultoria Tributária",
      icon: "🛡️",
      description: "Revisão e inteligência fiscal para redução legal da carga de impostos."
    }
  ];

  const handleCardClick = (idx: number) => {
    setActiveCard((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="bg-rm-black py-20 md:py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rm-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-rm-gold mb-4 md:mb-6 leading-tight">
            Nossos Serviços
          </h2>
          <p className="text-rm-cream/90 font-heading tracking-wide text-lg md:text-2xl font-semibold max-w-3xl mx-auto italic">
            "Por trás de cada sucesso empresarial, há uma boa contabilidade."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-center items-start">
          {servicesList.map((service, idx) => {
            const isActive = activeCard === idx;
            const isHiddenOnMobile = !showAllMobile && idx >= 4;

            return (
              <div
                key={idx}
                onClick={() => handleCardClick(idx)}
                className={`
                  ${isHiddenOnMobile ? "hidden sm:flex" : "flex"}
                  group bg-rm-black border p-5 rounded-xl flex-col justify-start 
                  transition-all duration-300 ease-in-out cursor-pointer select-none
                  ${isActive
                    ? "border-rm-gold bg-rm-gold/10 -translate-y-1 shadow-[0_10px_30px_rgba(207,188,135,0.15)]"
                    : "border-rm-gold/20 hover:bg-rm-gold/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(207,188,135,0.1)] hover:border-rm-gold/50"
                  }
                `}
              >
                {/* Topo do Card: Ícone e Título */}
                <div className="flex items-center gap-4">
                  <div
                    className={`
                      w-12 h-12 rounded bg-rm-cream/5 border flex items-center justify-center text-xl shrink-0 
                      transition-all duration-300
                      ${isActive
                        ? "border-rm-gold scale-110"
                        : "border-rm-gold/30 group-hover:scale-110 group-hover:border-rm-gold"
                      }
                    `}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className={`
                      text-base font-heading font-bold leading-snug transition-colors duration-300
                      ${isActive ? "text-rm-gold" : "text-rm-cream group-hover:text-rm-gold"}
                    `}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Área Expansível (Funciona via Hover no Desktop e Clique no Mobile) */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${isActive
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr] group-hover:grid-rows-[1fr]"
                    }
                  `}
                >
                  <div
                    className={`
                      overflow-hidden transition-opacity duration-300
                      ${isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                  >
                    <p className="text-xs text-rm-cream/80 pt-3 mt-3 border-t border-rm-gold/20 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão de Ver Mais/Menos (Apenas Mobile) */}
        <div className="mt-8 text-center sm:hidden">
          <button
            onClick={() => setShowAllMobile((prev) => !prev)}
            className="px-6 py-2.5 rounded-full border border-rm-gold/40 text-rm-gold text-sm font-semibold hover:bg-rm-gold/10 transition-colors"
          >
            {showAllMobile ? "Ver menos serviços ▲" : "Ver todos os serviços ▼"}
          </button>
        </div>

      </div>
    </section>
  );
}