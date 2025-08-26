import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/themes.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
