import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";

import { LiquidCursor } from "@/components/LiquidCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: 'Hadi Youssef | Software Engineer & Developer',
    template: '%s | Hadi Youssef'
  },
  description: 'Portfolio and personal website of Hadi Youssef, a Software Engineering student and developer specializing in Python, Next.js, and Quantitative Finance.',
  keywords: ['Hadi Youssef', 'Software Engineer', 'Next.js', 'Python', 'Western University', 'Ivey Business School', 'Developer', 'Portfolio'],
  authors: [{ name: 'Hadi Youssef' }],
  creator: 'Hadi Youssef',
  metadataBase: new URL('https://hyoussef.tech'),
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://hyoussef.tech',
    title: 'Hadi Youssef',
    description: 'Personal portfolio of Hadi Youssef, Software Engineering student at Western University.',
    siteName: 'Hadi Youssef',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hadi Youssef | Software Engineer',
    description: 'Personal portfolio of Hadi Youssef.',
    creator: '@HadiYoussef',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground selection:bg-cyan-500/30 selection:text-cyan-200`}>
        <JsonLd />
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
