import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Lawdit – Escritório de Advocacia & Consultoria Jurídica",
  description: "Lawdit – Escritório de advocacia especializado em consultoria jurídica, direito criminal, família, imóveis e lesões pessoais. Estamos aqui pela voz da justiça.",
  keywords: "advogado, escritório de advocacia, consultoria jurídica, direito criminal, direito de família, direito imobiliário, lesões pessoais",
  openGraph: {
    title: "Lawdit – Estamos aqui pela voz da justiça",
    description: "Escritório de advocacia com 20 anos de experiência. Consultoria jurídica confiável e soluções inovadoras.",
    url: "https://lawdit.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawdit – Escritório de Advocacia",
    description: "Estamos aqui pela voz da justiça. 20 anos de experiência jurídica.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${jost.variable} antialiased text-dark bg-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
