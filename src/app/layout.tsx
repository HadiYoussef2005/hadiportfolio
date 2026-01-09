import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { LiquidCursor } from "@/components/LiquidCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Hadi Youssef | Software Engineering & Business",
  description: "Portfolio of Hadi Youssef, a Software Engineering and Business student at Western University and Ivey Business School.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground selection:bg-cyan-500/30 selection:text-cyan-200`}>
        <LiquidCursor />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/40">
          <p>© {new Date().getFullYear()} Hadi Youssef.</p>
        </footer>
      </body>
    </html>
  );
}
