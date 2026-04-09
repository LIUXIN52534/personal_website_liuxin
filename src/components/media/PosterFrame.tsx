import type { Locale, ProjectDetailEntry } from "@/content/types";

type PosterFrameProps = {
  locale: Locale;
  project: ProjectDetailEntry;
  priority?: "featured" | "secondary";
};

export function PosterFrame({
  locale,
  project,
  priority = "secondary",
}: PosterFrameProps) {
  const title = locale === "zh" ? project.titleZh : project.titleEn;
  const summary = locale === "zh" ? project.summaryZh : project.summaryEn;

  return (
    <div
      className={`relative isolate overflow-hidden border border-[var(--line-soft)] bg-[rgba(11,12,15,0.94)] ${
        priority === "featured" ? "aspect-[16/10] rounded-[1.35rem]" : "aspect-[4/3] rounded-[1.1rem]"
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,241,234,0.02),transparent_38%),linear-gradient(90deg,rgba(119,247,255,0.06),transparent_22%,transparent_74%,rgba(119,247,255,0.04))]" />
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(244,241,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(244,241,234,0.04)_1px,transparent_1px)] [background-size:100%_7px,54px_100%]" />
      <div className="absolute inset-x-[8%] top-[15%] h-px bg-[linear-gradient(90deg,transparent,rgba(244,241,234,0.28),transparent)]" />
      <div className="absolute left-[10%] top-[24%] h-[1px] w-[32%] bg-[linear-gradient(90deg,rgba(119,247,255,0.5),transparent)]" />
      <div className="absolute right-[10%] top-[18%] flex items-center gap-2">
        <span className="mono-label text-[10px] text-[var(--text-muted)]">{project.year}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-cyan)]" />
      </div>
      <div className="absolute bottom-[14%] right-[10%] h-[18%] w-[34%] border border-[rgba(244,241,234,0.08)]" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="mono-label text-[10px]">
              {project.featured ? "Featured / Case" : "Archive / Case"}
            </p>
            <p className="mono-label text-[10px] text-[var(--accent-cyan)]">
              {project.medium} / {project.platform}
            </p>
          </div>
          <span className="rounded-full border border-[var(--line-soft)] px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--text-muted)]">
            {project.visibility}
          </span>
        </div>

        <div className="max-w-[84%] space-y-3">
          <h3 className="text-2xl font-semibold leading-tight text-[var(--text-primary)] sm:text-[2rem]">
            {title}
          </h3>
          <p className="line-clamp-3 text-sm leading-6 text-[var(--text-secondary)] sm:text-[15px]">
            {summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--line-soft)] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
