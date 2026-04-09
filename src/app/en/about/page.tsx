import { ResumeOverview } from "@/components/site/ResumeOverview";
import { getLocalizedPageCopy } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";

const copy = getLocalizedPageCopy("en", "about");

export const metadata = createPageMetadata({
  locale: "en",
  pathname: "/about",
  title: "About",
  description: copy.description,
});

export default function AboutPage() {
  return <ResumeOverview locale="en" />;
}
