"use client";

import Image from 'next/image';

// Componente utilitário de Hexágono SVG com recuo ajustado (bordas mais próximas e miolo maior)
function HexagonFrame({
  children
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full absolute inset-0 overflow-visible drop-shadow-sm"
        preserveAspectRatio="none"
      >
        {/* 1. Camada Exterior - Azul Marinho */}
        <polygon
          points="50,2 96,25 96,75 50,98 4,75 4,25"
          fill="none"
          stroke="var(--color-rm-navy, #0A192F)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* 2. Camada Intermediária - Dourado */}
        <polygon
          points="50,6 92,27 92,73 50,94 8,73 8,27"
          fill="none"
          stroke="var(--color-rm-gold, #C5A059)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* 3. Camada Interior - Azul Marinho (Com muito mais área útil por dentro) */}
        <polygon
          points="50,10 88,29 88,71 50,90 12,71 12,29"
          fill="none"
          stroke="var(--color-rm-navy, #0A192F)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      {children && (
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 py-4">
          {children}
        </div>
      )}
    </div>
  );
}

export function About() {
  const pillars = [
    {
      title: "Transparência",
      description: "Clareza e precisão em todas as informações financeiras.",
      icon: (
        <svg className="w-5 h-5 text-rm-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Ética",
      description: "Rigor técnico e compromisso com as normas legais.",
      icon: (
        <svg className="w-5 h-5 text-rm-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Inovação",
      description: "Soluções tecnológicas para otimizar os seus processos.",
      icon: (
        <svg className="w-5 h-5 text-rm-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="sobre" className="relative py-20 md:py-28 bg-rm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* COLUNA ESQUERDA: Textos + 3 Cards Hexagonais */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-rm-navy tracking-tight font-heading leading-tight">
                Tradição em Excelência, <br />
                <span className="text-rm-navy">Foco no Resultado</span>
              </h2>
              <p className="text-base sm:text-lg text-rm-navy/80 leading-relaxed font-normal max-w-2xl">
                A Rodrigues Mansur é um escritório de consultoria e gestão contábil focado em entregar soluções estratégicas para empresas de diferentes portes. Mais do que apenas cumprir obrigações fiscais, atuamos como parceiros do seu negócio.
              </p>
              <p className="text-sm sm:text-base text-rm-navy/70 leading-relaxed max-w-2xl">
                Apoiamos pequenas, médias e grandes empresas não só no compliance fiscal e tributário, mas no planejamento estratégico do negócio.
              </p>
            </div>

            {/* Três Cards com Moldura Hexagonal Vertical e Espaço Interno Otimizado */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="relative w-full aspect-[1/1.15] max-w-[220px] mx-auto">
                  <HexagonFrame>
                    <div className="mb-2 p-2 rounded-full bg-rm-offwhite shadow-xs border border-rm-navy/10 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <h3 className="text-sm font-bold text-rm-navy font-heading mb-1 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-rm-navy/75 leading-tight max-w-[140px] font-normal">
                      {pillar.description}
                    </p>
                  </HexagonFrame>
                </div>
              ))}
            </div>
          </div>


          {/* COLUNA DIREITA: Hexágono Grande com a Imagem */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4">

            <div className="relative w-80 sm:w-96 lg:w-[420px] aspect-[1/1.15]">

              {/* Moldura SVG do Hexágono Grande em 3 Camadas */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full absolute inset-0 z-20 pointer-events-none overflow-visible drop-shadow-xl"
                preserveAspectRatio="none"
              >
                {/* 1. Borda Externa - Azul Marinho */}
                <polygon
                  points="50,2 96,25 96,75 50,98 4,75 4,25"
                  fill="none"
                  stroke="var(--color-rm-navy, #0A192F)"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
                {/* 2. Borda Intermediária - Dourado */}
                <polygon
                  points="50,4 93.5,26.2 93.5,73.8 50,96 6.5,73.8 6.5,26.2"
                  fill="none"
                  stroke="var(--color-rm-gold, #C5A059)"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
                {/* 3. Borda Interna - Azul Marinho */}
                <polygon
                  points="50,6 91,27.5 91,72.5 50,94 9,72.5 9,27.5"
                  fill="none"
                  stroke="var(--color-rm-navy, #0A192F)"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Foto Recortada com a Geometria Hexagonal Vertical */}
              <div
                className="w-full h-full relative z-10 overflow-hidden bg-rm-offwhite"
                style={{
                  clipPath: 'polygon(50% 3%, 95% 26%, 95% 74%, 50% 97%, 5% 74%, 5% 26%)'
                }}
              >
                <Image
                  src="/images/QuemSomos.png"
                  alt="Sócios Rodrigues Mansur"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}