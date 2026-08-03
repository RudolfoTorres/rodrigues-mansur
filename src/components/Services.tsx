export function Services() {
  const servicesList = [
    { title: "Abertura ou Baixa", icon: "🏢" },
    { title: "Homologação", icon: "⚖️" },
    { title: "Parcelamento", icon: "💳" },
    { title: "Administração", icon: "📊" },
    { title: "Contábil / Fiscal", icon: "🧾" },
    { title: "Financeiro", icon: "💲" },
    { title: "Legalização", icon: "🏛️" },
    { title: "RH e DP", icon: "👥" },
    { title: "Folha de Pagamento", icon: "💵" },
    { title: "Simples Nacional", icon: "📝" },
    { title: "Lucro Real / Presumido", icon: "📈" }
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-center">
          {servicesList.map((service, idx) => (
            <div 
              key={idx}
              className="bg-rm-black border border-rm-gold/20 px-6 py-5 rounded-xl flex items-center gap-4 hover:bg-rm-gold/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(207,188,135,0.05)] hover:border-rm-gold/40 group"
            >
              <div className="w-12 h-12 rounded bg-rm-cream/5 border border-rm-gold/30 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-base font-heading font-bold text-rm-cream leading-snug">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
