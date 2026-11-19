// import type { Metadata } from "next";
// import { Bricolage_Grotesque, Figtree } from "next/font/google";
// import "./globals.css";

// const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
// const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

// export const metadata: Metadata = {
//   title: "Sollnis Technologies",
//   description:
//     "Sollnis Technologies builds Sollnis Solar and Sollnis Pay: solar power and everyday payments for people across Africa.",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={`${display.variable} ${body.variable} scroll-smooth motion-reduce:scroll-auto`}>
//       <body>{children}</body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Sollnis Technologies",
  description:
    "Sollnis Technologies builds Sollnissolar and Sollnispay: clean energy and everyday payments for Africa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-[family-name:var(--font-sans)] antialiased">{children}</body>
    </html>
  );
}