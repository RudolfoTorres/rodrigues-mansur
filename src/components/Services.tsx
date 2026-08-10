"use client";

export function Services() {
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
    }
  ];

  return (
    <section className="bg-rm-black py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rm-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-rm-gold mb-6 leading-tight">
            Nossos Serviços
          </h2>
          <p className="text-rm-cream/90 font-heading tracking-wide text-xl md:text-2xl font-semibold max-w-3xl mx-auto italic">
            "Por trás de cada sucesso empresarial, há uma boa contabilidade."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-center items-start">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="group bg-rm-black border border-rm-gold/20 p-5 rounded-xl flex flex-col justify-start transition-all duration-300 ease-in-out hover:bg-rm-gold/10 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(207,188,135,0.1)] hover:border-rm-gold/50 cursor-pointer"
            >
              {/* Topo do Card: Ícone e Título */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-rm-cream/5 border border-rm-gold/30 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 group-hover:border-rm-gold transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-base font-heading font-bold text-rm-cream leading-snug group-hover:text-rm-gold transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Área Expansível do Hover */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-rm-cream/80 pt-3 mt-3 border-t border-rm-gold/20 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}