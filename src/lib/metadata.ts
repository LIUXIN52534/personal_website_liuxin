import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import type { Locale } from "@/content/types";
import { localizePath } from "@/lib/i18n";

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  const normalized = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    return new URL(normalized);
  } catch {
    return null;
  }
}

export const siteOrigin =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeSiteUrl(process.env.VERCEL_URL) ??
  normalizeSiteUrl(process.env.CF_PAGES_URL) ??
  new URL("http://localhost:3000");

export function createPageMetadata(input: {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
}): Metadata {
  const canonicalPath = localizePath(input.locale, input.pathname);
  const zhPath = localizePath("zh", input.pathname);
  const enPath = localizePath("en", input.pathname);

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        zh: zhPath,
        "zh-CN": zhPath,
        en: enPath,
        "x-default": zhPath,
      },
    },
    openGraph: {
      title: input.title,
      description: input.description,
      images: siteConfig.seo.ogImageDefault
        ? [
            {
              url: siteConfig.seo.ogImageDefault,
            },
          ]
        : undefined,
      url: canonicalPath,
      siteName: siteConfig.seo.siteName,
      locale: input.locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: siteConfig.seo.ogImageDefault ? [siteConfig.seo.ogImageDefault] : undefined,
    },
  };
}
