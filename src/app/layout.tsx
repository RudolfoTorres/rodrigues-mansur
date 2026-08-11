import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodrigues Mansur | Assessoria Administrativa",
  description:
    "Tradição em excelência, foco no resultado. Soluções contábeis e administrativas estratégicas para impulsionar o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="font-body min-h-full flex flex-col bg-rm-black text-rm-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Botão Flutuante de Voltar ao Topo */}
        <ScrollToTop />
      </body>
    </html>
  );
}