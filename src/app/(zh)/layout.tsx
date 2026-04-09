import type { ReactNode } from "react";

import { SiteShell } from "@/components/site/SiteShell";

export default function ZhSiteLayout({ children }: { children: ReactNode }) {
  return <SiteShell locale="zh">{children}</SiteShell>;
}
