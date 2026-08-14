"use client";

import { useState, useEffect, useRef } from "react";

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
      author: "Thays Alves Pereira Cardoso",
      role: "Cliente Imposto de Renda",
      imageUrl: "/images/testimonials/thays-alves.png"
    },
    {
      text: "Quero deixar aqui meu reconhecimento à RM Contábil, uma empresa que transmite confiança, seriedade e profissionalismo. No dia a dia de uma empresa, ter uma contabilidade parceira faz toda a diferença. E a RM Contábil busca justamente isso: estar ao lado do empresário, oferecendo suporte, orientação e segurança para que ele possa tomar as melhores decisões e focar no crescimento do seu negócio. Desejo muito sucesso à RM Contábil e que continue construindo uma história baseada em confiança, competência e bons resultados.",
      author: "Yang Ouverney Salerno",
      role: "Diretor e CEO, Shopping Rural",
      imageUrl: "/images/testimonials/shopping-rural.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Estados para gerenciar o toque (Swipe)
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const isCarouselActive = testimonials.length > itemsPerPage;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  useEffect(() => {
    if (!isCarouselActive || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [isCarouselActive, isPaused, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setIsPaused(false);
  };

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

        {/* Container com eventos de touch */}
        <div
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Adicionado items-start para evitar o alinhamento stretch */}
          <div
            className="flex items-start transition-transform duration-500 ease-in-out"
            style={{
              gap: "2rem",
              transform: isMobile
                ? `translateX(calc(-${currentIndex} * (100% + 2rem)))`
                : `translateX(calc(-${currentIndex} * (33.333% + 0.66rem)))`
            }}
          >
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="w-full shrink-0 md:w-[calc(33.333%-1.33rem)] box-border select-none"
              >
                <TestimonialCard test={test} />
              </div>
            ))}
          </div>
        </div>

        {/* Controles do Carrossel */}
        {isCarouselActive && (
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              aria-label="Anterior"
              className="w-10 h-10 rounded-full border border-rm-navy/20 flex items-center justify-center text-rm-navy hover:bg-rm-navy hover:text-rm-gold transition-colors"
            >
              ←
            </button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir para slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx
                      ? "w-8 bg-rm-gold"
                      : "w-2.5 bg-rm-navy/20 hover:bg-rm-navy/40"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Próximo"
              className="w-10 h-10 rounded-full border border-rm-navy/20 flex items-center justify-center text-rm-navy hover:bg-rm-navy hover:text-rm-gold transition-colors"
            >
              →
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

function TestimonialCard({ test }: { test: Testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const isLongText = test.text.length > 220;

  const initials = test.author
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    /* Removido o h-full para que o card cresça de forma totalmente auto-contida */
    <div className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 flex flex-col justify-between border border-black/5 hover:-translate-y-2 transition-transform duration-300">
      <div>

        <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-black/10">
          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-full overflow-hidden bg-rm-cream border-2 border-rm-gold/40 shrink-0 flex items-center justify-center font-heading font-bold text-rm-blue text-base shadow-sm relative">
              {test.imageUrl && !imgError ? (
                <img
                  src={test.imageUrl}
                  alt={test.author}
                  className="w-full h-full object-cover pointer-events-none"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span>{initials}</span>
              )}
            </div>

            <div>
              <h4 className="font-heading font-bold text-rm-black text-base sm:text-lg leading-snug">
                {test.author}
              </h4>
              <p className="font-body text-xs sm:text-sm text-rm-black/60 mt-0.5">
                {test.role}
              </p>
            </div>
          </div>

          <span className="text-rm-gold text-4xl font-serif font-bold leading-none select-none opacity-80 self-start">
            “
          </span>
        </div>

        <p className={`text-rm-black/80 font-body text-base leading-relaxed italic transition-all duration-300 ${!isExpanded && isLongText ? "line-clamp-6" : ""}`}>
          {test.text}
        </p>

        {isLongText && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="mt-4 text-xs font-heading font-bold text-rm-blue hover:text-rm-gold-dark uppercase tracking-wider transition-colors inline-flex items-center gap-1 focus:outline-none"
          >
            {isExpanded ? "Ler menos ↑" : "Ler mais ↓"}
          </button>
        )}

      </div>
    </div>
  );
}