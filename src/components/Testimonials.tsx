export function Testimonials() {
  const testimonials = [
    {
      text: "A equipe da Rodrigues Mansur revolucionou nossa gestão tributária. O atendimento proativo e a expertise nos garantiram mais rentabilidade e segurança no fechamento fiscal.",
      author: "Carlos Silveira",
      role: "Diretor Financeiro, TechNova"
    },
    {
      text: "Ter um BPO financeiro tão organizado quanto o deles nos permitiu focar 100% nas vendas. Os relatórios gerenciais são claros e o atendimento é impecável.",
      author: "Mariana Costa",
      role: "CEO, Costa & Co. Logística"
    },
    {
      text: "Consultoria estratégica de alto nível. Com o planejamento societário que desenvolveram para nós, obtivemos benefícios visíveis desde o primeiro semestre.",
      author: "Eduardo Ribeiro",
      role: "Sócio Fundador, Ribeiro Arquitetos"
    }
  ];

  return (
    <section className="bg-rm-cream py-24 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-rm-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-rm-gold-dark font-heading font-bold uppercase tracking-widest text-sm mb-2 block">
                O que dizem nossos clientes
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-rm-black leading-tight">
                Parcerias que geram <span className="text-rm-blue">valor</span>
            </h2>
          </div>

          {/* Simple Grid (Could be converted to a Swiper/Carousel later) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
                <div key={idx} className="bg-white p-10 rounded-2xl shadow-xl shadow-black/5 flex flex-col h-full border border-black/5 hover:-translate-y-2 transition-transform duration-300">
                   <div className="text-rm-gold text-5xl font-heading leading-none mb-4">"</div>
                   <p className="text-rm-black/80 font-body text-lg leading-relaxed flex-grow italic">
                     {test.text}
                   </p>
                   <div className="mt-8 pt-6 border-t border-black/10">
                      <p className="font-heading font-bold text-rm-black">{test.author}</p>
                      <p className="font-body text-sm text-rm-black/60">{test.role}</p>
                   </div>
                </div>
            ))}
          </div>

        </div>
    </section>
  );
}
