import { Button } from "./Button";

export function BlogPreview() {
  const articles = [
    {
      title: "Tendências do Simples Nacional em 2024",
      resume: "Descubra as principais mudanças tributárias e como elas impactam a sua pequena ou média empresa ao longo do ano fiscal atual.",
      date: "15 Fev 2024"
    },
    {
      title: "Como a Contabilidade Digital Acelera PMEs",
      resume: "A revolução dos dados na contabilidade: como a automação de BPO financeiro e integração na nuvem estão mudando a gestão de negócios.",
      date: "03 Fev 2024"
    },
    {
      title: "Planejamento Sucessório e Estruturação",
      resume: "A importância de um suporte jurídico e contábil sólido na hora de pensar na longevidade e blindagem patrimonial da sua marca.",
      date: "28 Jan 2024"
    }
  ];

  return (
    <section className="bg-rm-black py-24 border-t border-rm-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-rm-gold leading-tight">
              Insights & <br /> Atualizações
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="outline" className="hidden md:inline-flex">
              Ver todos os Artigos
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {articles.map((article, idx) => (
             <article key={idx} className="group cursor-pointer">
                {/* Image Placeholder */}
                <div className="w-full aspect-[16/9] mb-6 rounded-2xl overflow-hidden bg-rm-gold/10 relative">
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url("/images/blog-placeholder-${idx + 1}.jpg")` }} />
                   <div className="absolute top-4 left-4 bg-rm-blue text-white text-xs font-bold py-1 px-3 rounded-full uppercase tracking-wider">
                     Notícias
                   </div>
                </div>
                
                <time className="text-rm-cream/50 text-sm font-body tracking-widest uppercase block mb-3">{article.date}</time>
                <h3 className="text-xl font-heading font-bold text-rm-cream leading-snug mb-3 group-hover:text-rm-blue transition-colors">
                  {article.title}
                </h3>
                <p className="text-rm-cream/70 font-body text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.resume}
                </p>
                
                <span className="text-rm-gold font-body font-bold text-sm uppercase tracking-widest group-hover:text-rm-cream transition-colors flex items-center">
                  Ler artigo <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </span>
             </article>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
            <Button variant="outline" fullWidth>
              Ver todos os Artigos
            </Button>
        </div>
      </div>
    </section>
  );
}
