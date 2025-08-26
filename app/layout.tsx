import type React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "../styles/themes.css";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  title: "shivenaggarwal",
  description: "shivenaggarwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" saved-theme="dark">
      <body className={`${jetbrainsMono.variable} ${jetbrainsMono.className}`}>{children}</body>
    </html>
  );
}
