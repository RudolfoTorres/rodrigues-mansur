"use client";

import { useState } from "react";

interface Testimonial {
  text: string;
  author: string;
  role: string;
  imageUrl?: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      text: "Contar com a RM Contábil para cuidar da minha declaração de Imposto de Renda foi uma ótima escolha. O atendimento é sempre atencioso, profissional e, acima de tudo, transmite muita confiança. Toda a orientação é feita de forma clara e cuidadosa, o que torna um processo que poderia ser complicado, muito mais simples e tranquilo. Fico muito satisfeita em saber que posso contar com uma equipe competente e responsável para cuidar de tudo com segurança. Recomendo a RM Contábil pela excelência no atendimento e pela confiança que transmite!",
      author: "Thaís Alves Pereira Cardoso",
      role: "Cliente Imposto de Renda",
      imageUrl: "/images/testimonials/thays-alves.png"
    },
    {
      text: "Quero deixar aqui meu reconhecimento à RM Contábil, uma empresa que transmite confiança, seriedade e profissionalismo. No dia a dia de uma empresa, ter uma contabilidade parceira faz toda a diferença. E a RM Contábil busca justamente isso: estar ao lado do empresário, oferecendo suporte, orientação e segurança para que ele possa tomar as melhores decisões e focar no crescimento do seu negócio. Desejo muito sucesso à RM Contábil e que continue construindo uma história baseada em confiança, competência e bons resultados.",
      author: "Yang Ouverney Salerno",
      role: "Diretor e CEO, Shopping Rural",
      imageUrl: "/images/testimonials/shopping-rural.jpg"
    },
    {
      text: "Consultoria estratégica de alto nível. Com o planejamento societário que desenvolveram para nós, obtivemos benefícios visíveis desde o primeiro semestre.",
      author: "Eduardo Ribeiro",
      role: "Sócio Fundador, Ribeiro Arquitetos",
      imageUrl: "/images/testimonials/eduardo.jpg"
    }
  ];

  return (
    <section className="bg-rm-cream py-24 relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {testimonials.map((test, idx) => (
            <TestimonialCard key={idx} test={test} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ test }: { test: Testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const isLongText = test.text.length > 220;

  // Extrai as iniciais caso precise do fallback
  const initials = test.author
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 flex flex-col justify-between h-full border border-black/5 hover:-translate-y-2 transition-transform duration-300">
      <div>

        {/* TOPO DO CARD: Foto + Nome/Cargo + Aspas */}
        <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-black/10">
          <div className="flex items-center gap-4">

            {/* Avatar Maior e Sem Sobreposição */}
            <div className="w-16 h-16 rounded-full overflow-hidden bg-rm-cream border-2 border-rm-gold/40 shrink-0 flex items-center justify-center font-heading font-bold text-rm-blue text-base shadow-sm relative">
              {test.imageUrl && !imgError ? (
                <img
                  src={test.imageUrl}
                  alt={test.author}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span>{initials}</span>
              )}
            </div>

            {/* Informações da Pessoa */}
            <div>
              <h4 className="font-heading font-bold text-rm-black text-base sm:text-lg leading-snug">
                {test.author}
              </h4>
              <p className="font-body text-xs sm:text-sm text-rm-black/60 mt-0.5">
                {test.role}
              </p>
            </div>
          </div>

          {/* Aspas em Destaque */}
          <span className="text-rm-gold text-4xl font-serif font-bold leading-none select-none opacity-80 self-start">
            “
          </span>
        </div>

        {/* CORPO DO CARD: Depoimento */}
        <p className={`text-rm-black/80 font-body text-base leading-relaxed italic transition-all duration-300 ${!isExpanded && isLongText ? "line-clamp-6" : ""}`}>
          {test.text}
        </p>

        {/* Botão de Expansão */}
        {isLongText && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-xs font-heading font-bold text-rm-blue hover:text-rm-gold-dark uppercase tracking-wider transition-colors inline-flex items-center gap-1 focus:outline-none"
          >
            {isExpanded ? "Ler menos ↑" : "Ler mais ↓"}
          </button>
        )}

      </div>
    </div>
  );
}