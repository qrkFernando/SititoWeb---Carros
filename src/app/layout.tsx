import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cars Sell Center - Mercedes-Benz AMG C63 S Coupe",
  description: "Descubre el Mercedes-AMG C 63 S Coupe 2023",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#f5f5f5]">{children}</body>
    </html>
  );
}
