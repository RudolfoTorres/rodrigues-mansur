import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-rm-black/80"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(55, 55, 54, 0.7), rgba(55, 55, 54, 0.95)), url("/images/hero-bg-placeholder.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Placeholder for Graphic Logo */}
        <div className="w-32 h-32 md:w-48 md:h-48 mb-8 border border-rm-gold/30 rounded-full flex items-center justify-center bg-rm-black/50 backdrop-blur-sm shadow-[0_0_40px_rgba(207,188,135,0.15)] opacity-0 animate-[fade-in_1s_ease-out_forwards]">
          <span className="text-5xl md:text-7xl font-heading font-bold text-rm-gold">RM</span>
        </div>

        {/* Text Area */}
        <div className="opacity-0 animate-[slide-in-up_1s_ease-out_0.3s_forwards]">
          <h2 className="text-xl md:text-3xl font-heading font-bold text-rm-gold tracking-[0.2em] uppercase mb-2">
            Rodrigues Mansur
          </h2>
          <h3 className="text-sm md:text-lg font-body text-rm-cream tracking-[0.3em] uppercase mb-8 opacity-80">
            Assessoria Administrativa
          </h3>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-rm-cream leading-tight mb-6">
            Sua Assessoria Contábil Estratégica <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rm-gold to-rm-gold-dark">para o Futuro</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl font-body text-rm-cream/90 mb-10 leading-relaxed">
            Transformamos números em inteligência para impulsionar o seu negócio. Experiência e Inovação para sua empresa.
          </p>

          <Button variant="primary" className="text-lg px-10 py-5">
            Conheça nossas Soluções
          </Button>
        </div>
      </div>
      
      {/* Custom Keyframes for Tailwind */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
