import { HomePlaceholder } from "@/components/site/HomePlaceholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  locale: "en",
  pathname: "/",
  title: "Liu Xin | Home",
  description:
    "A bilingual portfolio homepage for Liu Xin, framing gameplay design, technical design, and AI-driven interactive systems through an experimental poster-like hero.",
});

export default function HomePage() {
  return <HomePlaceholder locale="en" />;
}
