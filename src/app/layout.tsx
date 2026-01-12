import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "FrameRights — Clear, shareable image license records for photographers",
  description:
    "FrameRights helps photographers document how their images are licensed — who can use them, for what purpose, and under what terms. Simple, neutral, and readable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceSerif.variable} ${inter.variable} antialiased bg-white text-slate-900 selection:bg-slate-200 selection:text-slate-900 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
