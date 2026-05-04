import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Element 7 | Bespoke Wellness & Recovery Environments | Melbourne",
  description:
    "Element 7 is Melbourne's premier luxury wellness company specialising in custom saunas, steam rooms, cold plunge systems, and contrast therapy environments for residential and commercial clients.",
  keywords:
    "custom sauna Melbourne, luxury sauna, infrared sauna, steam room, cold plunge pool, contrast therapy, wellness room, recovery space, barrel sauna, outdoor sauna",
  openGraph: {
    title: "Element 7 | Engineered Environments for Human Performance",
    description:
      "Bespoke wellness & recovery spaces. Custom saunas, steam rooms, cold plunge and contrast therapy systems — Melbourne's premium wellness builder.",
    type: "website",
    locale: "en_AU",
    siteName: "Element 7",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-white antialiased">
        <ScrollRevealInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
