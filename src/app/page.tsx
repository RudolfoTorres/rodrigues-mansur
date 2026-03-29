import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Differentials } from "@/components/Differentials";
import { BlogPreview } from "@/components/BlogPreview";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col bg-rm-black overflow-x-hidden">
      <Header />
      
      {/* Sections */}
      <div id="inicio"><Hero /></div>
      <div id="sobre"><About /></div>
      <div id="servicos"><Services /></div>
      <div id="diferenciais"><Differentials /></div>
      {/* <div id="blog"><BlogPreview /></div> */}
      <div id="depoimentos"><Testimonials /></div>
      <div id="contato"><Contact /></div>
      
      <Footer />
    </main>
  );
}
