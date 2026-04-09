"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation, siteConfig } from "@/content/site";
import { LocaleSwitch } from "@/components/site/LocaleSwitch";
import type { Locale } from "@/content/types";
import { localizePath } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line-soft)] bg-[rgba(10,10,13,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <div className="flex min-w-0 flex-col gap-1">
          <Link
            className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--text-primary)]"
            href={localizePath(locale, "/")}
          >
            {locale === "zh" ? siteConfig.nameZh : siteConfig.nameEn}
          </Link>
          <p className="max-w-md text-sm leading-6 text-[var(--text-secondary)]">
            {locale === "zh" ? siteConfig.roleLineZh : siteConfig.roleLineEn}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-5 md:flex">
            {navigation.map((item) => {
              const href = localizePath(locale, item.href);
              const isActive =
                pathname === href || (href !== localizePath(locale, "/") && pathname.startsWith(`${href}/`));

              return (
                <Link
                  key={item.key}
                  className={`text-sm transition-colors ${
                    isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                  href={href}
                >
                  {locale === "zh" ? item.labelZh : item.labelEn}
                </Link>
              );
            })}
          </nav>

          <LocaleSwitch locale={locale} />
        </div>
      </div>
    </header>
  );
}
