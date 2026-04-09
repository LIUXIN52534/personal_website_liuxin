import { pageCopy, siteConfig } from "@/content/site";
import type { Locale } from "@/content/types";

export const locales = ["zh", "en"] as const;
export const defaultLocale: Locale = "zh";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(locale: Locale, pathname: string) {
  const normalizedPath = pathname === "" ? "/" : pathname;

  if (locale === "zh") {
    return normalizedPath === "/" ? "/" : normalizedPath;
  }

  return normalizedPath === "/" ? "/en" : `/en${normalizedPath}`;
}

export function switchLocalePath(pathname: string, nextLocale: Locale) {
  const normalizedPath = pathname === "" ? "/" : pathname;
  const zhPath = normalizedPath.replace(/^\/en(?=\/|$)/, "") || "/";

  if (nextLocale === "zh") {
    return zhPath;
  }

  return zhPath === "/" ? "/en" : `/en${zhPath}`;
}

export function getLocalizedPageCopy<TKey extends keyof typeof pageCopy>(
  locale: Locale,
  key: TKey,
) {
  return pageCopy[key][locale];
}

export function getLocalizedSiteCopy(locale: Locale) {
  return {
    name: locale === "zh" ? siteConfig.nameZh : siteConfig.nameEn,
    roleLine: locale === "zh" ? siteConfig.roleLineZh : siteConfig.roleLineEn,
    subtitle: locale === "zh" ? siteConfig.subtitleZh : siteConfig.subtitleEn,
  };
}
