import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import ScrollProgress from "@/components/ScrollProgress";
import { BRAND } from "@/lib/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Element Seven | Recovery Architecture | Australia",
  description: BRAND.description,
  keywords:
    "recovery architecture, wellness architecture, custom sauna Australia, luxury sauna builder, infrared sauna, steam room, hammam, cold plunge, contrast therapy, nervous system recovery",
  openGraph: {
    title: "Element Seven | Recovery Architecture",
    description: BRAND.supportingLine,
    type: "website",
    locale: "en_AU",
    siteName: "Element Seven",
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
    <html lang="en-AU" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-stone font-sans text-ink-muted antialiased">
        <ScrollRevealInit />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
