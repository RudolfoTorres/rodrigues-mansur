import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap", // Garante carregamento suave da fonte sem FOIT
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodrigues Mansur | Assessoria Administrativa & Contábil",
  description:
    "Tradição em excelência, foco no resultado. Soluções contábeis e administrativas estratégicas para impulsionar o seu negócio.",
  keywords: [
    "Rodrigues Mansur",
    "RM Contábil",
    "Assessoria Administrativa",
    "Assessoria Contábil",
    "Consultoria Fiscal",
    "Gestão Financeira",
  ],
  authors: [{ name: "Rodrigues Mansur" }],
  openGraph: {
    title: "Rodrigues Mansur | Assessoria Administrativa & Contábil",
    description:
      "Tradição em excelência, foco no resultado. Soluções contábeis e administrativas estratégicas para o seu negócio.",
    url: "https://www.rodriguesmansur.com.br", // Substitua pelo domínio final
    siteName: "Rodrigues Mansur",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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