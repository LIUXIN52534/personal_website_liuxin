"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/content/types";
import { switchLocalePath } from "@/lib/i18n";

type LocaleSwitchProps = {
  locale: Locale;
};

export function LocaleSwitch({ locale }: LocaleSwitchProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
      <Link
        aria-current={locale === "zh" ? "page" : undefined}
        className={locale === "zh" ? "text-[var(--text-primary)]" : "hover:text-[var(--text-primary)]"}
        href={switchLocalePath(pathname, "zh")}
      >
        CN
      </Link>
      <span className="text-[var(--line-strong)]">/</span>
      <Link
        aria-current={locale === "en" ? "page" : undefined}
        className={locale === "en" ? "text-[var(--text-primary)]" : "hover:text-[var(--text-primary)]"}
        href={switchLocalePath(pathname, "en")}
      >
        EN
      </Link>
    </div>
  );
}
