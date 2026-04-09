import Link from "next/link";

import { PosterFrame } from "@/components/media/PosterFrame";
import { uiCopy } from "@/content/site";
import type { Locale, ProjectDetailEntry } from "@/content/types";
import { localizePath } from "@/lib/i18n";

type ProjectListProps = {
  locale: Locale;
  projects: ProjectDetailEntry[];
};

function renderProjectCard(locale: Locale, project: ProjectDetailEntry, priority: "featured" | "secondary") {
  return (
    <article
      key={project.slug}
      className="panel-surface flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-5"
    >
      <PosterFrame locale={locale} priority={priority} project={project} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="mono-label">{project.year}</span>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--line-soft)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-1">
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
        <Link className="button-primary" href={localizePath(locale, `/work/${project.slug}`)}>
          {locale === "zh" ? uiCopy.detailCta.zh : uiCopy.detailCta.en}
        </Link>
      </div>
    </article>
  );
}

export function ProjectList({ locale, projects }: ProjectListProps) {
  const featuredProjects = projects.filter((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
      <section className="space-y-6">
        <div className="border-b border-[var(--line-soft)] pb-4">
          <p className="mono-label">Featured</p>
          <h1 className="mt-3 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            {locale === "zh" ? "近期作品" : "Recent work"}
          </h1>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project) => renderProjectCard(locale, project, "featured"))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b border-[var(--line-soft)] pb-4">
          <p className="mono-label">Archive</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">
            {locale === "zh" ? "其他作品" : "Other work"}
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {secondaryProjects.map((project) => renderProjectCard(locale, project, "featured"))}
        </div>
      </section>
    </div>
  );
}
