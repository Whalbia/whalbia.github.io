import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Maximus Young — Fullstack Developer",
  description:
    "I build fast, accessible web experiences that people actually use.",
  openGraph: {
    title: "Maximus Young — Fullstack Developer",
    description:
      "I build fast, accessible web experiences that people actually use.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-text font-sans antialiased">{children}</body>
    </html>
  );
}
