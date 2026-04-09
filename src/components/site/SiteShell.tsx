import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import type { Locale } from "@/content/types";

type SiteShellProps = {
  children: ReactNode;
  locale: Locale;
};

export function SiteShell({ children, locale }: SiteShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(244,241,234,0.02),transparent_26%),radial-gradient(circle_at_top_left,rgba(119,247,255,0.04),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(244,241,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(244,241,234,0.025)_1px,transparent_1px)] [background-size:40px_40px]" />
      <SiteHeader locale={locale} />
      <main className="relative z-10 flex flex-1 flex-col">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
