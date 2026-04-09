import Link from "next/link";

import { resumeProfile } from "@/content/resume";
import type { Locale, ResumeExperience, ResumeExperienceDetail } from "@/content/types";
import { uiCopy } from "@/content/site";

type ResumeOverviewProps = {
  locale: Locale;
};

function getDetailTitle(locale: Locale, detail: ResumeExperienceDetail) {
  return locale === "zh" ? detail.labelZh : detail.labelEn;
}

function getDetailBody(locale: Locale, detail: ResumeExperienceDetail) {
  return locale === "zh" ? detail.detailZh : detail.detailEn;
}

function getCompany(locale: Locale, item: ResumeExperience) {
  return locale === "zh" ? item.companyZh : item.companyEn ?? item.companyZh;
}

function getRole(locale: Locale, item: ResumeExperience) {
  return locale === "zh" ? item.roleZh : item.roleEn ?? item.roleZh;
}

function getLocation(locale: Locale, item: ResumeExperience) {
  return locale === "zh" ? item.locationZh : item.locationEn ?? item.locationZh;
}

export function ResumeOverview({ locale }: ResumeOverviewProps) {
  const copy = {
    profile: locale === "zh" ? "个人总结" : "Profile summary",
    focus: locale === "zh" ? "关注方向" : "Focus areas",
    experience: locale === "zh" ? "实习经历" : "Experience",
    education: locale === "zh" ? "教育" : "Education",
    skills: locale === "zh" ? "技能与工具" : "Skills and tools",
    extras: locale === "zh" ? "证书与兴趣" : "Certificates and interests",
    resume: locale === "zh" ? "简历下载" : "Resume download",
    featured: locale === "zh" ? "重点经历" : "Featured experience",
    certificates: locale === "zh" ? "证书" : "Certificates",
    interests: locale === "zh" ? "兴趣" : "Interests",
    hoverHint: locale === "zh" ? "悬浮条目查看细节" : "Hover an item for detail",
  };

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <article className="panel-surface relative z-20 flex flex-col gap-6 p-6">
          <div className="space-y-3">
            <p className="mono-label">{copy.profile}</p>
            <p className="leading-8 text-[var(--text-secondary)]">
              {locale === "zh" ? resumeProfile.introZh : resumeProfile.introEn}
            </p>
          </div>

          <div className="space-y-3 border-t border-[var(--line-soft)] pt-5">
            <p className="mono-label">{copy.focus}</p>
            <p className="leading-8 text-[var(--text-secondary)]">
              {locale === "zh" ? resumeProfile.focusZh : resumeProfile.focusEn}
            </p>
          </div>

          <div className="space-y-5 border-t border-[var(--line-soft)] pt-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="mono-label">{copy.experience}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                {copy.hoverHint}
              </p>
            </div>

            <div className="space-y-5">
              {resumeProfile.experience.map((item) => (
                <article
                  key={item.id}
                  className="relative overflow-visible rounded-[1rem] border border-[var(--line-soft)] bg-[rgba(12,12,18,0.5)] p-5"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                          {getCompany(locale, item)}
                        </h2>
                        <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent-cyan)]">
                          {getRole(locale, item)}
                        </p>
                      </div>

                      <div className="space-y-1 text-right text-sm text-[var(--text-secondary)]">
                        <div className="flex items-center justify-end gap-2">
                          {item.isFeatured ? (
                            <span className="rounded-full border border-[var(--line-strong)] px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--accent-cyan)]">
                              {copy.featured}
                            </span>
                          ) : null}
                          <p>
                            {item.start} - {item.end}
                          </p>
                        </div>
                        {getLocation(locale, item) ? <p>{getLocation(locale, item)}</p> : null}
                      </div>
                    </div>

                    {item.detailItems?.length ? (
                      <div className="space-y-3">
                        {item.detailItems.map((detail, index) => (
                          <div key={detail.id} className="group relative">
                            <button
                              className="w-full rounded-[0.9rem] border border-[var(--line-soft)] bg-[rgba(9,9,14,0.66)] px-4 py-3 text-left transition-colors hover:border-[var(--line-strong)] focus:border-[var(--accent-cyan)] focus:outline-none"
                              type="button"
                            >
                              <span className="block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span className="mt-2 block text-base font-semibold leading-7 text-[var(--text-primary)]">
                                {getDetailTitle(locale, detail)}
                              </span>
                            </button>

                            <div className="mt-3 rounded-[0.95rem] border border-[var(--line-soft)] bg-[rgba(10,10,13,0.94)] p-4 text-sm leading-7 text-[var(--text-secondary)] lg:pointer-events-none lg:absolute lg:left-[calc(100%+1rem)] lg:top-0 lg:z-20 lg:mt-0 lg:w-[25rem] lg:opacity-0 lg:shadow-[0_24px_60px_rgba(0,0,0,0.35)] lg:translate-y-1 lg:transition-all lg:duration-200 group-hover:lg:translate-y-0 group-hover:lg:opacity-100 group-focus-within:lg:translate-y-0 group-focus-within:lg:opacity-100">
                              {getDetailBody(locale, detail)}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
                        {(locale === "zh" ? item.highlightsZh : item.highlightsEn ?? item.highlightsZh).map((highlight) => (
                          <li key={highlight}>• {highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </article>

        <div className="relative z-10 flex flex-col gap-6">
          <article className="panel-surface flex flex-col gap-4 p-6">
            <p className="mono-label">{copy.education}</p>
            {resumeProfile.education.map((item) => (
              <div key={item.id} className="space-y-3">
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                  {locale === "zh" ? item.schoolZh : item.schoolEn ?? item.schoolZh}
                </h2>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
                  {locale === "zh" ? item.programZh : item.programEn ?? item.programZh}
                </p>
                <ul className="space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {(locale === "zh" ? item.detailsZh : item.detailsEn ?? item.detailsZh ?? []).map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>

          <article className="panel-surface flex flex-col gap-4 p-6">
            <p className="mono-label">{copy.skills}</p>
            {resumeProfile.skills.map((group) => (
              <div key={group.id} className="space-y-2">
                <h2 className="text-base font-semibold text-[var(--text-primary)]">
                  {locale === "zh" ? group.titleZh : group.titleEn}
                </h2>
                <p className="leading-7 text-[var(--text-secondary)]">{group.items.join(" / ")}</p>
              </div>
            ))}
          </article>

          <article className="panel-surface flex flex-col gap-4 p-6">
            <p className="mono-label">{copy.extras}</p>
            <div className="space-y-3">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
                  {copy.certificates}
                </p>
                <p className="mt-2 leading-7 text-[var(--text-secondary)]">
                  {(locale === "zh" ? resumeProfile.certificates : resumeProfile.certificatesEn ?? resumeProfile.certificates).join(" / ")}
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
                  {copy.interests}
                </p>
                <p className="mt-2 leading-7 text-[var(--text-secondary)]">
                  {(locale === "zh" ? resumeProfile.interests : resumeProfile.interestsEn ?? resumeProfile.interests).join(" / ")}
                </p>
              </div>
            </div>
          </article>

          <article className="panel-surface flex flex-col gap-4 p-6">
            <p className="mono-label">{copy.resume}</p>
            <p className="leading-7 text-[var(--text-secondary)]">
              {locale === "zh"
                ? "公开版 PDF 简历已经接入站点，可直接下载查看，用于更正式的简历投递和离线转发。"
                : "The public PDF resume is already wired into the site and available for direct download."}
            </p>
            <Link className="button-secondary self-start" href={resumeProfile.resumePdfPath}>
              {locale === "zh" ? uiCopy.downloadResume.zh : uiCopy.downloadResume.en}
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
