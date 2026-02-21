import type { Metadata } from "next";
import { portfolioData } from "@/data/data";
import "./globals.css";

export const metadata: Metadata = {
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  openGraph: {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    url: portfolioData.seo.url,
    siteName: "Kapil Hingu Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: portfolioData.seo.image,
        width: 1200,
        height: 630,
        alt: portfolioData.seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    images: [portfolioData.seo.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
