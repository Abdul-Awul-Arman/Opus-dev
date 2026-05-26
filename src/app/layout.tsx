import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import LenisProvider from "@/components/LenisProvider";
import { absoluteUrl, organizationJsonLd, siteConfig, websiteJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Opus Communications | Full-Service Marketing Agency in Dhaka",
    template: "%s | Opus Communications",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Marketing Agency",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Opus Communications | Full-Service Marketing Agency in Dhaka",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Opus Communications full-service marketing agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opus Communications | Full-Service Marketing Agency in Dhaka",
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-surface-main text-brand-navy-dark font-sans antialiased">
        <StructuredData data={[organizationJsonLd(), websiteJsonLd()]} />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
