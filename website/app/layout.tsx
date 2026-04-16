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
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans bg-[#050505] text-zinc-100 selection:bg-white/20 selection:text-white`}>
        <div className="grid-bg"></div>
        <div className="glow"></div>
        {children}
      </body>
    </html>
  );
}
