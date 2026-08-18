import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
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
  icons: {
    icon: "/images/favicon.ico",
  },
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
    url: "https://www.rodriguesmansur.com.br",
    siteName: "Rodrigues Mansur",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.rodriguesmansur.com.br',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Rodrigues Mansur | Assessoria Administrativa & Contábil",
    image: "https://www.rodriguesmansur.com.br/images/favicon.ico",
    url: "https://www.rodriguesmansur.com.br",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
  };

  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="font-body min-h-full flex flex-col bg-rm-black text-rm-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Botão Flutuante de Voltar ao Topo */}
        <ScrollToTop />
      </body>
    </html>
  );
}