import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GlobalStyle } from "../styles/GlobalStyle";
import Header from "../components/Header/Header"; 
import { FavoritesProvider } from "../Context/FavoritesContext";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PS Academy",
  description: "PS Academy - Cursos de Programação",
  icons: {
    icon: "/logo/favicon.png",
    shortcut: "/logo/favicon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalStyle />
          <FavoritesProvider>
            <Header />
            {children}
            <Footer />
          </FavoritesProvider>
      </body>
    </html>
  );
}
