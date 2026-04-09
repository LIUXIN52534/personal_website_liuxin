import Link from "next/link";

import { ContactCopyAction } from "@/components/site/ContactCopyAction";
import { contactConfig } from "@/content/site";
import type { Locale } from "@/content/types";

type ContactListProps = {
  locale: Locale;
};

export function ContactList({ locale }: ContactListProps) {
  const items = [
    {
      key: "email",
      labelZh: "邮箱",
      labelEn: "Email",
      values: [contactConfig.email.value, ...(contactConfig.email.extraValues ?? [])].filter(Boolean),
      hrefBuilder: (value: string) => `mailto:${value}`,
    },
    {
      key: "wechat",
      labelZh: "微信",
      labelEn: "WeChat",
      values: [contactConfig.wechat?.value ?? "", ...(contactConfig.wechat?.extraValues ?? [])].filter(Boolean),
      hrefBuilder: undefined,
    },
    {
      key: "phone",
      labelZh: "手机",
      labelEn: "Phone",
      values: [contactConfig.phone?.value ?? "", ...(contactConfig.phone?.extraValues ?? [])].filter(Boolean),
      hrefBuilder: (value: string) => `tel:${value}`,
    },
  ];

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-16 pt-4 sm:px-8 sm:pb-20 sm:pt-6">
      <div className="grid gap-4 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.key} className="panel-surface min-w-0 flex flex-col gap-4 p-5">
            <p className="mono-label">{locale === "zh" ? item.labelZh : item.labelEn}</p>

            <div className="space-y-4">
              {item.values.map((value, index) => (
                <div key={`${item.key}-${value}`} className="space-y-3">
                  <p className="break-all text-xl font-semibold text-[var(--text-primary)]">{value}</p>

                  <div className="flex flex-wrap gap-3">
                    {item.hrefBuilder ? (
                      <Link className="button-secondary" href={item.hrefBuilder(value)}>
                        {item.key === "email"
                          ? locale === "zh"
                            ? "发送邮件"
                            : "Send email"
                          : locale === "zh"
                            ? "拨打电话"
                            : "Call"}
                      </Link>
                    ) : null}

                    <ContactCopyAction
                      copiedLabel={locale === "zh" ? "已复制" : "Copied"}
                      copyLabel={locale === "zh" ? "复制" : "Copy"}
                      value={value}
                    />
                  </div>

                  {index < item.values.length - 1 ? (
                    <div className="border-t border-[var(--line-soft)] pt-1" />
                  ) : null}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
