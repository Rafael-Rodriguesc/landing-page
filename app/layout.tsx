import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ferrari | A Essência da Velocidade",
  description: "Design italiano. Performance absoluta.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
