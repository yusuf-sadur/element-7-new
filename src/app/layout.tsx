import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import ScrollProgress from "@/components/ScrollProgress";

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
  title: "Element 7 | Wellness & Recovery Architecture | Australia",
  description:
    "Luxury wellness design and construction — custom saunas, cold plunge, steam, hammam, and complete recovery environments. End-to-end, Australia-wide.",
  keywords:
    "wellness architecture, recovery architecture, custom sauna Australia, luxury sauna, infrared sauna, steam room, hammam, cold plunge, low tox construction, contrast therapy, recovery space",
  openGraph: {
    title: "Element 7 | Recovery Architecture, Built for Life",
    description:
      "Complete wellness environments — consultation, design, construction, and delivery. Not a supplier. A wellness architecture studio.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
      </head>
      <body className="bg-obsidian text-sand antialiased">
        <ScrollRevealInit />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
