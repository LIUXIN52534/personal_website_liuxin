import Link from "next/link";

import { uiCopy } from "@/content/site";
import type { Locale, ProjectDetailEntry } from "@/content/types";

type ProjectDetailPlaceholderProps = {
  locale: Locale;
  project: ProjectDetailEntry;
};

export function ProjectDetailPlaceholder({
  locale,
  project,
}: ProjectDetailPlaceholderProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 pb-16 sm:px-8 sm:pb-20">
      <section className="section-frame flex flex-col gap-5 px-6 py-8 sm:px-8">
        <p className="mono-label">{project.slug}</p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-[0.98] text-[var(--text-primary)] sm:text-5xl">
            {locale === "zh" ? project.titleZh : project.titleEn}
          </h1>
          <p className="max-w-3xl leading-7 text-[var(--text-secondary)]">
            {locale === "zh" ? project.detailIntroZh : project.detailIntroEn}
          </p>
        </div>
      </section>

      <section className="panel-surface flex flex-col gap-6 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="mono-label">{project.medium}</p>
          <p className="text-sm text-[var(--text-muted)]">
            {project.year} / {project.platform}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(260px,0.6fr)]">
          <div className="space-y-3">
            {(locale === "zh" ? project.highlightsZh : project.highlightsEn).map((highlight) => (
              <p key={highlight} className="leading-7 text-[var(--text-secondary)]">
                • {highlight}
              </p>
            ))}
          </div>

          <div className="panel-surface bg-[rgba(16,16,22,0.56)] p-5">
            <p className="mono-label">{locale === "zh" ? "当前状态" : "Current state"}</p>
            <p className="mt-3 leading-7 text-[var(--text-secondary)]">
              {locale === "zh"
                ? "独立详情页路由与元信息已就位，后续 U5 会补入本地视频播放、XMind 查看器与更完整的项目说明。"
                : "The dedicated detail route and metadata are now in place. U5 will later add local video playback, the XMind viewer, and fuller project explanation."}
            </p>

            {project.externalUrl ? (
              <Link
                className="button-secondary mt-5 inline-flex"
                href={project.externalUrl}
                rel="noreferrer"
                target="_blank"
              >
                {locale === "zh" ? uiCopy.detailCta.zh : uiCopy.detailCta.en}
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
