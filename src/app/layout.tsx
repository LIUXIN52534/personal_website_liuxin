import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Sans_SC, Sora } from "next/font/google";

import { siteConfig } from "@/content/site";
import { siteOrigin } from "@/lib/metadata";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-brand-sans",
});

const notoSansSc = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-cjk-sans",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-family",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: {
    default: siteConfig.seo.defaultTitleZh,
    template: `%s | ${siteConfig.seo.siteName}`,
  },
  description: siteConfig.seo.defaultDescriptionZh,
  applicationName: siteConfig.seo.siteName,
  keywords: [
    "Liu Xin",
    "刘鑫",
    "Game Design",
    "Technical Design",
    "AI Workflow",
    "Portfolio",
  ],
  authors: [
    {
      name: siteConfig.nameEn,
    },
  ],
  openGraph: {
    title: siteConfig.seo.defaultTitleZh,
    description: siteConfig.seo.defaultDescriptionZh,
    images: siteConfig.seo.ogImageDefault
      ? [
          {
            url: siteConfig.seo.ogImageDefault,
          },
        ]
      : undefined,
    siteName: siteConfig.seo.siteName,
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitleZh,
    description: siteConfig.seo.defaultDescriptionZh,
    images: siteConfig.seo.ogImageDefault ? [siteConfig.seo.ogImageDefault] : undefined,
  },
};

export const viewport = {
  themeColor: "#0a0a0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${sora.variable} ${notoSansSc.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
