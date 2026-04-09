import type { ReactNode } from "react";

import { SiteShell } from "@/components/site/SiteShell";

export default function EnSiteLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="en">
      <SiteShell locale="en">{children}</SiteShell>
    </div>
  );
}
