export function Differentials() {
  const points = [
    "Tecnologia e Digitalização (Plataformas modernas de BPO)",
    "Atendimento Personalizado e Pró-ativo",
    "Compliance e Segurança de Dados",
    "Foco na Rentabilidade do Cliente"
  ];

  return (
    <section className="bg-rm-cream py-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Placeholder */}
          <div className="w-full lg:w-1/2 aspect-square max-h-[600px] bg-white rounded-[2rem] p-4 shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group">
             {/* Replace with AI generated tablet image later */}
             <div className="w-full h-full rounded-2xl bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: 'url("/images/differentials-placeholder.png")' }} />
             <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <span className="font-heading font-bold text-rm-gold text-2xl">Mais Performance</span>
                <p className="font-body text-rm-cream text-sm mt-1">Dados reais, decisões em tempo real.</p>
             </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-rm-black mb-8 leading-tight">
              O Diferencial <br />
              <span className="text-rm-blue border-b-4 border-rm-gold pb-1 inline-block mt-2">Rodrigues Mansur</span>
            </h2>
            
            <p className="text-lg font-body text-rm-black/70 mb-10">
              Escolher nossa assessoria significa garantir que cada decisão financeira e estratégica do seu negócio será embasada em números concretos, inteligência e as melhores ferramentas disponíveis.
            </p>

            <ul className="space-y-6">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rm-gold/20 text-rm-gold-dark flex items-center justify-center mr-4 mt-1 group-hover:bg-rm-gold group-hover:text-white transition-colors">
                    ✓
                  </div>
                  <span className="text-lg font-body text-rm-black font-medium group-hover:text-rm-blue transition-colors">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
