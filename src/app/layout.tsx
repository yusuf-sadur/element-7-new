import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
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
    <html lang="en-AU" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
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
