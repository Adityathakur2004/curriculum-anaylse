import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "EdGE | Education-to-Industry Gap Evaluator",
  description:
    "Production-grade EdTech SaaS experience for mapping university curriculum against industry demand."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
