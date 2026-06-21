import type { Metadata } from "next";
import { Anton } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Cars Sell Center - Chevrolet Camaro ZL1",
  description: "Descubre el Mercedes-AMG C 63 S Coupe 2023",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={anton.variable}>
      <body className="min-h-screen bg-[#f5f5f5]">
        <Header />
        {children}
      </body>
    </html>
  );
}
