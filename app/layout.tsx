import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import {
  authorPersonSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";

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

const webSiteJsonLd = websiteSchema();
const organizationJsonLd = organizationSchema();
const personJsonLd = authorPersonSchema();

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL("https://www.enochschmaltz.com"),
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "E. A. Schmaltz",
    siteName: "E. A. Schmaltz",
    url: "https://www.enochschmaltz.com",
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
