import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import FloatingWhats from "./components/FloatingWhats";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobilize Clínica - Ortopedia e Fisioterapia",
  description: "Recupere seus movimentos, recupere sua vida.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + " text-[#222] bg-[#F5F7F9]"}>
        <Header />
        {children}
        <FloatingWhats />
      </body>
    </html>
  );
}
