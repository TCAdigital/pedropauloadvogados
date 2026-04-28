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
  title: "Pedro Paulo Advogados – Escritório de Advocacia Full Service",
  description: "Escritório de advocacia Full Service com atendimento em todo o Brasil. Unidades no Recreio dos Bandeirantes e Barra da Tijuca. Presença física e digital.",
  keywords: "advogado, escritório de advocacia, Rio de Janeiro, Recreio dos Bandeirantes, Barra da Tijuca, atendimento digital, advogado rj",
  openGraph: {
    title: "Pedro Paulo Advogados – Atendimento em todo o Brasil",
    description: "Escritório de advocacia Full Service com unidades no Rio de Janeiro. Soluções jurídicas inovadoras e personalizadas.",
    url: "https://pedropauloadvogados.com.br/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Paulo Advogados",
    description: "Escritório de advocacia Full Service com atendimento em todo o Brasil.",
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
