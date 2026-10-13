import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Sollnis Technologies",
  description:
    "Sollnis Technologies builds Sollnis Solar and Sollnis Pay: solar power and everyday payments for people across Africa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} scroll-smooth motion-reduce:scroll-auto`}>
      <body>{children}</body>
    </html>
  );
}
