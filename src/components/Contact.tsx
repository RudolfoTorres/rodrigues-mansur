'use client';

import { Button } from "./Button";

export function Contact() {
   return (
      <section className="bg-rm-black py-24 relative">
         {/* Dark overlay with background image placeholder */}
         <div
            className="absolute inset-0 z-0 bg-rm-black/95"
            style={{
               backgroundImage: 'linear-gradient(to right, rgba(55, 55, 54, 1), rgba(55, 55, 54, 0.85)), url("/images/contact-bg-placeholder.jpg")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundBlendMode: 'overlay'
            }}
         />

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16">

               {/* Text Info */}
               <div className="flex-1 lg:pr-12">
                  <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-rm-cream leading-tight mb-6">
                     Agende sua Reunião de <span className="text-rm-gold">Diagnóstico Gratuita</span>
                  </h2>
                  <p className="text-lg font-body text-rm-cream/80 mb-12">
                     Fale com nossos especialistas e descubra como podemos otimizar seu negócio. Estamos prontos para entender seus desafios.
                  </p>

                  <div className="space-y-8">

                     <div className="flex items-start">
                        <div className="w-12 h-12 rounded bg-rm-gold/10 flex items-center justify-center text-rm-gold text-xl shrink-0">
                           📞
                        </div>
                        <div className="ml-4">
                           <h4 className="font-heading font-bold text-rm-cream text-lg">Telefone & WhatsApp</h4>
                           <p className="font-body text-rm-cream/60">+55 (22) 99243-4321</p>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <div className="w-12 h-12 rounded bg-rm-gold/10 flex items-center justify-center text-rm-gold text-xl shrink-0">
                           ✉️
                        </div>
                        <div className="ml-4">
                           <h4 className="font-heading font-bold text-rm-cream text-lg">E-mail</h4>
                           <p className="font-body text-rm-cream/60">rmcontabilcm@gmail.com</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Contact Form */}
               <div className="flex-1 w-full lg:max-w-md">
                  <div className="bg-white/5 backdrop-blur-md border border-rm-gold/20 p-8 rounded-2xl">
                     <form className="space-y-6" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
                        {/* Placeholder for future SMTP Integration / Server Actions */}
                        <div>
                           <label htmlFor="name" className="block text-sm font-medium font-body text-rm-cream/80 mb-2">Nome Completo</label>
                           <input
                              type="text"
                              id="name"
                              className="w-full bg-rm-black border border-rm-gold/30 rounded py-3 px-4 text-rm-cream focus:outline-none focus:border-rm-gold focus:ring-1 focus:ring-rm-gold transition-colors"
                              placeholder="Seu nome"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="email" className="block text-sm font-medium font-body text-rm-cream/80 mb-2">E-mail Profissional</label>
                           <input
                              type="email"
                              id="email"
                              className="w-full bg-rm-black border border-rm-gold/30 rounded py-3 px-4 text-rm-cream focus:outline-none focus:border-rm-gold focus:ring-1 focus:ring-rm-gold transition-colors"
                              placeholder="seu@email.com"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="phone" className="block text-sm font-medium font-body text-rm-cream/80 mb-2">Telefone/WhatsApp</label>
                           <input
                              type="tel"
                              id="phone"
                              className="w-full bg-rm-black border border-rm-gold/30 rounded py-3 px-4 text-rm-cream focus:outline-none focus:border-rm-gold focus:ring-1 focus:ring-rm-gold transition-colors"
                              placeholder="(11) 90000-0000"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="message" className="block text-sm font-medium font-body text-rm-cream/80 mb-2">Mensagem (Opcional)</label>
                           <textarea
                              id="message"
                              rows={4}
                              className="w-full bg-rm-black border border-rm-gold/30 rounded py-3 px-4 text-rm-cream focus:outline-none focus:border-rm-gold focus:ring-1 focus:ring-rm-gold transition-colors resize-none"
                              placeholder="Como podemos te ajudar?"
                           ></textarea>
                        </div>

                        <Button type="submit" variant="primary" fullWidth>
                           Enviar Solicitação
                        </Button>
                     </form>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
}
