"use client";

import { Button } from './Button';

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-rm-offwhite overflow-hidden">
      {/* Detalhes de Fundo (Gradients sutis para dar profundidade) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-rm-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-rm-navy/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Coluna de Texto / Chamada Principal */}
          <div className="lg:col-span-7 text-left space-y-6">

            {/* Badge de Destaque */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rm-white border border-rm-gold/30 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-rm-gold animate-pulse" />
              <span className="text-xs font-semibold text-rm-navy uppercase tracking-wider font-heading">
                Assessoria Administrativa & Contábil
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-rm-navy tracking-tight leading-tight font-heading">
              Sua Assessoria Contábil Estratégica{" "}
              <span className="text-rm-gold-dark block mt-1">para o Futuro</span>
            </h1>

            {/* Subtítulo / Proposta de Valor */}
            <p className="text-lg sm:text-xl text-rm-navy/80 max-w-2xl leading-relaxed font-normal">
              Transformamos números em inteligência para impulsionar o seu negócio.
              Eficiência, segurança e inovação para o crescimento contínuo da sua empresa.
            </p>

            {/* Botões de Ação */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="#servicos" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  className="!bg-rm-navy !text-rm-white hover:!bg-rm-navy-dark !px-8 !py-4 text-sm font-semibold uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow-lg font-heading w-full"
                >
                  Conheça Nossas Soluções
                </Button>
              </a>

              <a
                href="#contato"
                className="inline-flex justify-center items-center px-8 py-4 text-sm font-semibold text-rm-navy hover:text-rm-gold transition-colors uppercase tracking-wider font-heading"
              >
                Agendar Diagnóstico →
              </a>
            </div>

            {/* Indicadores Rápidos de Confiança */}
            <div className="pt-8 border-t border-rm-navy/10 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-rm-navy font-heading">+100%</p>
                <p className="text-xs text-rm-navy/70 uppercase tracking-wider">Conformidade Fiscal</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-rm-navy font-heading">Foco</p>
                <p className="text-xs text-rm-navy/70 uppercase tracking-wider">em Resultados</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-rm-navy font-heading">Gestão</p>
                <p className="text-xs text-rm-navy/70 uppercase tracking-wider">Estratégica</p>
              </div>
            </div>

          </div>

          {/* Coluna da Direita (Card Ilustrativo com Hexágono da Marca) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-8 bg-rm-white rounded-2xl shadow-xl border border-rm-gold/20 backdrop-blur-sm">

              {/* Hexágono da Logo */}
              <div className="absolute -top-4 -right-4 w-14 h-14">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full drop-shadow-sm"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <polygon
                    points="50,2 96,25 96,75 50,98 4,75 4,25"
                    fill="none"
                    stroke="var(--color-rm-navy, #0A192F)"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <polygon
                    points="50,11 87,30 87,70 50,89 13,70 13,30"
                    fill="none"
                    stroke="var(--color-rm-gold, #C5A059)"
                    strokeWidth="5"
                    strokeLinejoin="round"
                  />
                  <polygon
                    points="50,20 78,35 78,65 50,80 22,65 22,35"
                    fill="none"
                    stroke="var(--color-rm-navy, #0A192F)"
                    strokeWidth="5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-rm-navy mb-4 font-heading">
                Gestão Descomplicada
              </h3>

              <p className="text-sm text-rm-navy/70 mb-6 leading-relaxed">
                Relatórios claros e planejamento tributário sob medida para que você foque no que realmente importa: <strong className="font-semibold text-rm-navy">fazer sua empresa crescer</strong>.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-rm-offwhite rounded-lg border border-rm-navy/5">
                  <div className="w-8 h-8 rounded-full bg-rm-navy text-rm-white flex items-center justify-center font-bold text-xs">✓</div>
                  <span className="text-xs font-semibold text-rm-navy">Atendimento Consultivo e Direto</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-rm-offwhite rounded-lg border border-rm-navy/5">
                  <div className="w-8 h-8 rounded-full bg-rm-gold text-rm-navy flex items-center justify-center font-bold text-xs">✓</div>
                  <span className="text-xs font-semibold text-rm-navy">Tecnologia e Automação Fiscal</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}