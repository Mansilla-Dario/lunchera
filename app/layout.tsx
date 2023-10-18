import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import RegisterModal from "./components/Modals/RegisterModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lunchera App",
  description: "Elige Lunchera y conecta tu experiencia gastronómica",
};

export default function RootLayout({ children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
