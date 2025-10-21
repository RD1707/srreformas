import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SR Reformas - Transformando seu Imóvel em Salvador",
  description: "Serviços de reforma residencial e comercial em Salvador, Bahia. Qualidade, pontualidade e orçamento transparente. Peça sua cotação!",
  keywords: ["reforma", "construção", "pintor", "eletricista", "pedreiro", "salvador", "bahia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
