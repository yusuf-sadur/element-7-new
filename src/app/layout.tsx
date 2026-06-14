import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import { BRAND } from "@/lib/brand";
import { canela, canelaSubstitute, inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Element Seven | Custom Sauna, Steam Room & Plunge Pool Builders Melbourne",
  description: BRAND.description,
  keywords:
    "custom sauna Melbourne, steam room builder, plunge pool Australia, recovery suite, low-VOC sauna, natural materials sauna, licensed builder wellness",
  openGraph: {
    title: "Element Seven | Custom Sauna & Recovery Suite Builders Melbourne",
    description: BRAND.description,
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
    <html
      lang="en-AU"
      className={`${inter.variable} ${canelaSubstitute.variable} ${canela.variable}`}
    >
      <body className="bg-stone font-sans text-ink-muted antialiased">
        <ScrollRevealInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
