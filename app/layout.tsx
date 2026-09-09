import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velmoria — Fantasy RPG",
  description:
    "Enter the world of Velmoria, an interactive fantasy RPG universe powered by WhatsApp.",
  keywords: [
    "Velmoria",
    "Fantasy RPG",
    "WhatsApp RPG",
    "RPG Bot",
    "Adventure",
    "Dungeon",
    "Guild",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}