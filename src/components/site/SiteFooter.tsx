import Link from "next/link";

import { navigation, siteConfig } from "@/content/site";
import type { Locale } from "@/content/types";
import { localizePath } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  return (
    <footer className="border-t border-[var(--line-soft)] px-5 py-8 sm:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Contact
          </p>
          <p className="text-base text-[var(--text-primary)]">{siteConfig.email}</p>
        </div>

        <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
          {navigation.map((item) => (
            <Link key={item.key} href={localizePath(locale, item.href)}>
              {locale === "zh" ? item.labelZh : item.labelEn}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
