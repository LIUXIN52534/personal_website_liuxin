import { ContactList } from "@/components/site/ContactList";
import { PageIntro } from "@/components/site/PageIntro";
import { getLocalizedPageCopy } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";

const copy = getLocalizedPageCopy("en", "contact");

export const metadata = createPageMetadata({
  locale: "en",
  pathname: "/contact",
  title: "Contact",
  description: "Public contact information for Liu Xin.",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <ContactList locale="en" />
    </>
  );
}
