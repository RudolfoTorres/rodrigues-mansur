export function Services() {
  const services = [
    {
      icon: "📊",
      title: "Contabilidade Digital e Fiscal",
      desc: "Gestão eficiente de obrigações contábeis e fiscais, com planejamento estratégico contínuo."
    },
    {
      icon: "💼",
      title: "Gestão Financeira e Controladoria",
      desc: "BPO financeiro sob medida, análise de fluxo de caixa projetado e relatórios gerenciais focados em resultado."
    },
    {
      icon: "👥",
      title: "Departamento Pessoal e RH",
      desc: "Gestão de folha de pagamento, rotinas de admissão/demissão, benefícios e conformidade trabalhista."
    },
    {
      icon: "📈",
      title: "Consultoria Empresarial",
      desc: "Assessoria estratégica para abertura de empresas, estruturação societária, holding e análise de viabilidade."
    }
  ];

  return (
    <section className="bg-rm-black py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rm-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-rm-gold mb-4 leading-tight">
            Soluções Contábeis <br className="hidden sm:block" /> e Administrativas Completas
          </h2>
          <p className="text-rm-cream/70 font-body max-w-2xl mx-auto md:text-lg">
            Combinamos inteligência tecnológica e senioridade técnica para destravar o valor e acelerar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-rm-black border border-rm-gold/20 p-8 rounded-xl hover:bg-rm-gold/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(207,188,135,0.05)] group"
            >
              <div className="w-14 h-14 mb-6 rounded bg-rm-cream/5 border border-rm-gold/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-heading font-bold text-rm-cream mb-3 leading-snug">
                {service.title}
              </h3>
              
              <p className="text-rm-cream/60 font-body text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
