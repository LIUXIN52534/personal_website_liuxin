import Link from "next/link";

import { BilibiliEmbedPlayer } from "@/components/media/BilibiliEmbedPlayer";
import { InlineVideoPlayer } from "@/components/media/InlineVideoPlayer";
import { PosterFrame } from "@/components/media/PosterFrame";
import { XMindViewer } from "@/components/media/XMindViewer";
import type { Locale, ProjectDetailEntry } from "@/content/types";
import { localizePath } from "@/lib/i18n";
import { getProjectMediaInfo } from "@/lib/project-media";

type ProjectDetailViewProps = {
  locale: Locale;
  project: ProjectDetailEntry;
};

export function ProjectDetailView({ locale, project }: ProjectDetailViewProps) {
  const media = getProjectMediaInfo(project);
  const title = locale === "zh" ? project.titleZh : project.titleEn;
  const summary = locale === "zh" ? project.summaryZh : project.summaryEn;
  const body = locale === "zh" ? project.detailIntroZh : project.detailIntroEn;
  const bilibiliBvid = getBilibiliBvid(project.externalUrl);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
      <section className="section-frame flex flex-col gap-5 px-6 py-8 sm:px-8">
        <Link className="mono-label hover:text-[var(--text-primary)]" href={localizePath(locale, "/work")}>
          {locale === "zh" ? "返回作品列表" : "Back to work"}
        </Link>

        <div className="space-y-4">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.96] text-[var(--text-primary)] sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl leading-7 text-[var(--text-secondary)]">{summary}</p>
        </div>
      </section>

      <div className="space-y-4">
        {media ? (
          media.kind === "video" ? (
            <InlineVideoPlayer src={media.src} title={title} />
          ) : media.kind === "xmind" ? (
            <XMindViewer locale={locale} sourceUrl={media.src} />
          ) : (
            <PosterFrame locale={locale} priority="featured" project={project} />
          )
        ) : bilibiliBvid ? (
          <BilibiliEmbedPlayer bvid={bilibiliBvid} title={title} />
        ) : (
          <PosterFrame locale={locale} priority="featured" project={project} />
        )}

        <div className="panel-surface flex flex-wrap gap-3 p-4">
          {project.externalUrl ? (
            <Link
              className="button-secondary"
              href={project.externalUrl}
              rel="noreferrer"
              target="_blank"
            >
              {project.linkLabel}
            </Link>
          ) : null}
          <Link className="button-secondary" href={localizePath(locale, "/work")}>
            {locale === "zh" ? "继续浏览作品" : "Continue browsing"}
          </Link>
        </div>
      </div>

      <section className="panel-surface flex flex-col gap-4 p-6 sm:p-7">
        <p className="mono-label">{locale === "zh" ? "项目说明" : "Project note"}</p>
        <p className="max-w-4xl whitespace-pre-line leading-8 text-[var(--text-secondary)]">
          {body}
        </p>
      </section>
    </div>
  );
}

function getBilibiliBvid(url: string) {
  const match = /\/video\/(BV[0-9A-Za-z]+)/.exec(url);
  return match?.[1] ?? null;
}
