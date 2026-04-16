import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Laalten — Dynamic Island for macOS",
  description: "Transform your MacBook's notch into a powerful, interactive dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans bg-[#0A0A0A] text-zinc-300 selection:bg-brand-amber/30 selection:text-white`}>
        <div className="noise-bg opacity-30"></div>
        {children}
      </body>
    </html>
  );
}
