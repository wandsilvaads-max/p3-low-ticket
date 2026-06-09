import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Script Agenda Lotada — Protocolo de Vendas para Clínicas de Estética",
  description:
    "O script que transforma orçamento pedido em agenda lotada — sem dar desconto e sem ficar implorando por resposta.",
  openGraph: {
    title: "Script Agenda Lotada",
    description:
      "Protocolo de atendimento validado para recepcionistas e donas de clínica que querem parar de perder clientes no WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`h-full ${inter.variable}`}>
      <body className="min-h-full antialiased bg-[#0a0a0a] text-white font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
