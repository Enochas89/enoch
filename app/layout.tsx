import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://enochschmaltz.com/#website",
  name: "E. A. Schmaltz",
  url: "https://enochschmaltz.com",
  publisher: {
    "@id": "https://enochschmaltz.com/#author",
  },
  inLanguage: "en-US",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "E. A. Schmaltz",
  url: "https://enochschmaltz.com",
  logo: "https://enochschmaltz.com/favicon.ico",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://enochschmaltz.com/#author",
  name: "E. A. Schmaltz",
  alternateName: "Enoch Schmaltz",
  url: "https://enochschmaltz.com/enoch-schmaltz",
  jobTitle: ["Author", "Technology Writer", "Developer"],
  description:
    "E. A. Schmaltz writes about technology, perception, sensing systems, artificial intelligence, and complex systems.",
  sameAs: [
    "https://github.com/Enochas89",
    "https://www.wikidata.org/wiki/Q138569168",
  ],
};

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL("https://enochschmaltz.com"),
  alternates: {
    canonical: "https://enochschmaltz.com",
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "E. A. Schmaltz",
    siteName: "E. A. Schmaltz",
    url: "https://enochschmaltz.com",
    type: "website",
  },
  twitter: {
    ...defaultMetadata.twitter,
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="author" content="E. A. Schmaltz" />
        <JsonLd data={webSiteJsonLd} />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={personJsonLd} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
