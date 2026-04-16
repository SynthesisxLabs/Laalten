import type { Metadata } from "next";
import { Inter, JetBrains_Mono, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const pixelFont = VT323({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });

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
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${pixelFont.variable} antialiased font-sans bg-[#111111] text-zinc-300 selection:bg-neon/30 selection:text-white`}>
        <div className="noise-bg"></div>
        {children}
      </body>
    </html>
  );
}
