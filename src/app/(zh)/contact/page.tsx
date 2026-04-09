import { ContactList } from "@/components/site/ContactList";
import { PageIntro } from "@/components/site/PageIntro";
import { getLocalizedPageCopy } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";

const copy = getLocalizedPageCopy("zh", "contact");

export const metadata = createPageMetadata({
  locale: "zh",
  pathname: "/contact",
  title: "联系",
  description: "刘鑫的公开联系方式。",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <ContactList locale="zh" />
    </>
  );
}
