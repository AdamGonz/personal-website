import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "lenis/dist/lenis.css";

import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adam Axtopani Gonzales",
  description: "Adam Axtopani Gonzales' personal website and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pfr5ozx.css" />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SmoothScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
