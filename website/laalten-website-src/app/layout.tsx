import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased font-sans">
        <div className="grid-bg"></div>
        <div className="glow"></div>
        {children}
      </body>
    </html>
  );
}
