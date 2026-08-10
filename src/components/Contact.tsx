'use client';

import { Button } from "./Button";

export function Contact() {
   return (
      <section id="contato" className="relative py-20 md:py-28 bg-rm-offwhite overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

               {/* ================= COLUNA ESQUERDA: Textos + Contatos ================= */}
               <div className="lg:col-span-6 space-y-8">
                  <div className="space-y-4">
                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-rm-navy tracking-tight font-heading leading-tight">
                        Agende sua Reunião do <br />
                        <span className="text-rm-navy">Diagnóstico Gratuita</span>
                     </h2>
                     <p className="text-base sm:text-lg text-rm-navy/80 leading-relaxed font-normal max-w-xl">
                        Fale com nossos especialistas e descubra como podemos otimizar o seu negócio. Estamos prontos para entender seus desafios e entregar resultados imediatos.
                     </p>
                  </div>

                  {/* Lista de Contatos com Ícones Hexagonais */}
                  <div className="space-y-6 pt-2">

                     {/* WhatsApp / Telefone */}
                     <div className="flex items-center gap-4">
                        <div
                           className="w-12 h-12 shrink-0 bg-rm-navy flex items-center justify-center text-rm-gold shadow-md"
                           style={{
                              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                           }}
                        >
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                           </svg>
                        </div>
                        <div>
                           <h4 className="font-heading font-bold text-rm-navy text-sm sm:text-base">Telefone & WhatsApp</h4>
                           <p className="font-body text-rm-navy/70 text-sm sm:text-base">+55 (22) 99243-4321</p>
                        </div>
                     </div>

                     {/* E-mail */}
                     <div className="flex items-center gap-4">
                        <div
                           className="w-12 h-12 shrink-0 bg-rm-navy flex items-center justify-center text-rm-gold shadow-md"
                           style={{
                              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                           }}
                        >
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                           </svg>
                        </div>
                        <div>
                           <h4 className="font-heading font-bold text-rm-navy text-sm sm:text-base">E-mail</h4>
                           <p className="font-body text-rm-navy/70 text-sm sm:text-base">rmcontabilcm@gmail.com</p>
                        </div>
                     </div>

                  </div>
               </div>


               {/* ================= COLUNA DIREITA: Form com Moldura Cantos Cortados ================= */}
               <div className="lg:col-span-6 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-md p-6 sm:p-8 bg-rm-white shadow-xl">

                     {/* Moldura Vetorial de Borda Dupla com Cantos Cortados */}
                     <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full absolute inset-0 pointer-events-none overflow-visible"
                        preserveAspectRatio="none"
                     >
                        {/* Borda Exterior - Azul Marinho */}
                        <polygon
                           points="12,0 88,0 100,12 100,88 88,100 12,100 0,88 0,12"
                           fill="none"
                           stroke="var(--color-rm-navy, #0A192F)"
                           strokeWidth="2.5"
                           strokeLinejoin="round"
                        />
                        {/* Borda Interior - Dourado */}
                        <polygon
                           points="13,1.5 87,1.5 98.5,13 98.5,87 87,98.5 13,98.5 1.5,87 1.5,13"
                           fill="none"
                           stroke="var(--color-rm-gold, #C5A059)"
                           strokeWidth="1.5"
                           strokeLinejoin="round"
                        />
                     </svg>

                     {/* Formulário */}
                     <form className="relative z-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                           <label htmlFor="name" className="block text-xs font-bold text-rm-navy mb-1">
                              Nome Completo
                           </label>
                           <input
                              type="text"
                              id="name"
                              className="w-full bg-rm-white border border-rm-navy/20 rounded-md py-2.5 px-3.5 text-sm text-rm-navy placeholder-rm-navy/40 focus:outline-none focus:border-rm-navy focus:ring-1 focus:ring-rm-navy transition-colors shadow-xs"
                              placeholder="Seu nome"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="email" className="block text-xs font-bold text-rm-navy mb-1">
                              E-mail
                           </label>
                           <input
                              type="email"
                              id="email"
                              className="w-full bg-rm-white border border-rm-navy/20 rounded-md py-2.5 px-3.5 text-sm text-rm-navy placeholder-rm-navy/40 focus:outline-none focus:border-rm-navy focus:ring-1 focus:ring-rm-navy transition-colors shadow-xs"
                              placeholder="seu@email.com"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="phone" className="block text-xs font-bold text-rm-navy mb-1">
                              Telefone/WhatsApp
                           </label>
                           <input
                              type="tel"
                              id="phone"
                              className="w-full bg-rm-white border border-rm-navy/20 rounded-md py-2.5 px-3.5 text-sm text-rm-navy placeholder-rm-navy/40 focus:outline-none focus:border-rm-navy focus:ring-1 focus:ring-rm-navy transition-colors shadow-xs"
                              placeholder="(22) 90000-0000"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="message" className="block text-xs font-bold text-rm-navy mb-1">
                              Mensagem
                           </label>
                           <textarea
                              id="message"
                              rows={3}
                              className="w-full bg-rm-white border border-rm-navy/20 rounded-md py-2.5 px-3.5 text-sm text-rm-navy placeholder-rm-navy/40 focus:outline-none focus:border-rm-navy focus:ring-1 focus:ring-rm-navy transition-colors resize-none shadow-xs"
                              placeholder="Como podemos te ajudar?"
                           ></textarea>
                        </div>

                        <div className="pt-2">
                           <button
                              type="submit"
                              className="w-full bg-rm-navy hover:bg-rm-navy/90 text-rm-white font-bold py-3 px-6 rounded-md transition-colors shadow-md text-sm uppercase tracking-wider"
                           >
                              Enviar Solicitação
                           </button>
                        </div>
                     </form>

                  </div>
               </div>

            </div>
         </div>
      </section>
   );
}