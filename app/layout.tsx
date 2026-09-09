import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velmoria — Fantasy RPG",
  description:
    "Velmoria adalah dunia fantasy RPG interaktif yang hadir langsung melalui WhatsApp."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}