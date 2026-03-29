export function About() {
  return (
    <section className="bg-rm-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-rm-black">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-rm-black mb-6 leading-tight">
              Tradição em Excelência, <br />
              <span className="text-rm-blue">Foco no Resultado</span>
            </h2>
            
            <p className="text-lg font-body leading-relaxed mb-6 opacity-80">
              A Rodrigues Mansur é uma firma experiente que combina o conhecimento tradicional 
              contábil com as mais modernas tecnologias e plataformas digitais. Nosso propósito 
              é entregar uma assessoria empresarial completa e descomplicada.
            </p>

            <p className="text-lg font-body leading-relaxed mb-10 opacity-80">
              Apoiamos pequenas, médias e grandes empresas não apenas no compliance fiscal e trabalhista, 
              mas atuando lado a lado de empreendedores como parceiros estratégicos de negócio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'Transparência', desc: 'Clareza em cada relatório e ação.', icon: '🔍' },
                { title: 'Ética', desc: 'Rigor e conformidade legal absoluta.', icon: '⚖️' },
                { title: 'Inovação', desc: 'Processos ágeis e parceiros Tech.', icon: '💡' },
              ].map((value) => (
                <div key={value.title} className="p-4 bg-white rounded-lg shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h4 className="font-heading font-bold text-lg mb-1">{value.title}</h4>
                  <p className="font-body text-sm opacity-70">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="w-full lg:w-5/12 aspect-[4/5] bg-rm-black/5 rounded-2xl border border-black/10 flex items-center justify-center p-8 text-center relative overflow-hidden group">
            {/* Replace with AI generated or actual team photo later */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("/images/about-placeholder.png")' }} />
            <div className="absolute inset-0 bg-rm-gold/10 mix-blend-multiply" />
            <div className="relative z-10 p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl shadow-black/5">
              <span className="font-heading font-bold text-rm-gold-dark text-xl">Nossa Equipe</span>
              <p className="text-sm font-body mt-2 text-rm-black/70">Placeholder para foto profissional da equipe ou fundadores.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
