import { ResumeOverview } from "@/components/site/ResumeOverview";
import { getLocalizedPageCopy } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";

const copy = getLocalizedPageCopy("zh", "about");

export const metadata = createPageMetadata({
  locale: "zh",
  pathname: "/about",
  title: "About / 简历",
  description: copy.description,
});

export default function AboutPage() {
  return <ResumeOverview locale="zh" />;
}
