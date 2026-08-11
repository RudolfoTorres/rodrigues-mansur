"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Monitora a rolagem da página
    useEffect(() => {
        const toggleVisibility = () => {
            // Exibe o botão após rolar 300px do topo
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Função para rolar até o topo suavemente
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className={`
        fixed bottom-6 right-6 z-50
        p-3 rounded-full
        bg-rm-navy/90 border border-rm-gold/30 text-rm-gold
        shadow-lg backdrop-blur-sm
        transition-all duration-300 ease-in-out
        hover:bg-rm-navy hover:border-rm-gold hover:scale-110 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-rm-gold
        ${isVisible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }
      `}
        >
            {/* Ícone de Seta para Cima */}
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
            </svg>
        </button>
    );
}