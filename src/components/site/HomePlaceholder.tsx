import type { CSSProperties } from "react";

import Image from "next/image";
import Link from "next/link";

import backgroundImage from "../../../background.jpg";

import { HeroInteractiveField } from "@/components/site/HeroInteractiveField";
import styles from "@/components/site/HomePlaceholder.module.css";
import { getFeaturedProjects } from "@/content/projects";
import { resumeProfile } from "@/content/resume";
import { siteConfig, uiCopy } from "@/content/site";
import type { Locale } from "@/content/types";
import { getLocalizedSiteCopy, localizePath } from "@/lib/i18n";

type HomePlaceholderProps = {
  locale: Locale;
};

const signalBands = [
  { top: "12%", left: "58%", width: "20%", delay: "0s" },
  { top: "38%", left: "68%", width: "14%", delay: "1.3s" },
  { top: "71%", left: "54%", width: "18%", delay: "2.4s" },
] satisfies Array<{ top: string; left: string; width: string; delay: string }>;

export function HomePlaceholder({ locale }: HomePlaceholderProps) {
  const siteCopy = getLocalizedSiteCopy(locale);
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const experienceEntries = resumeProfile.experience.slice(0, 2);
  const focusItems = resumeProfile.skills.flatMap((group) => group.items).slice(0, 5);
  const supportTitle = locale === "zh" ? "个人总结" : "Profile summary";

  return (
    <div className={styles.homeRoot}>
      <section className={styles.heroPoster} data-hero-poster="true">
        <div aria-hidden="true" className={styles.visualField}>
          <Image
            priority
            alt=""
            className={styles.visualImage}
            fill
            placeholder="blur"
            sizes="100vw"
            src={backgroundImage}
          />
          <HeroInteractiveField />
          <div className={styles.visualScrim} />
          <div className={styles.gridOverlay} />
          <div className={styles.scanlineOverlay} />
          <div className={styles.noiseLayer} />
          <div className={styles.signalField}>
            {signalBands.map((band) => (
              <span
                key={`${band.top}-${band.left}`}
                className={styles.signalBand}
                style={
                  {
                    "--band-top": band.top,
                    "--band-left": band.left,
                    "--band-width": band.width,
                    "--band-delay": band.delay,
                  } as CSSProperties
                }
              />
            ))}
          </div>
          <span className={styles.faultSliceOne} />
          <span className={styles.faultSliceTwo} />
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroGrid}>
            <div className={styles.copyBlock}>
              <p className={`${styles.signalText} ${styles.nameplate}`} data-text={siteConfig.nameEn.toUpperCase()}>
                {siteConfig.nameEn.toUpperCase()}
              </p>

              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleLine}>
                  <span className={styles.signalText} data-text={locale === "zh" ? "正在编织" : "Building a"}>
                    {locale === "zh" ? "正在编织" : "Building a"}
                  </span>
                </span>
                <span className={styles.heroTitleLine}>
                  <span className={styles.signalText} data-text={locale === "zh" ? "游戏梦" : "game dream"}>
                    {locale === "zh" ? "游戏梦" : "game dream"}
                  </span>
                </span>
              </h1>

              <p className={styles.heroSubtitle}>{siteCopy.subtitle || siteCopy.roleLine}</p>

              <div className={styles.ctaRow}>
                <Link className="button-primary" href={localizePath(locale, "/work")}>
                  {locale === "zh" ? uiCopy.heroCtaPrimary.zh : uiCopy.heroCtaPrimary.en}
                </Link>
                <Link className="button-secondary" href={localizePath(locale, "/about")}>
                  {locale === "zh" ? uiCopy.heroCtaSecondary.zh : uiCopy.heroCtaSecondary.en}
                </Link>
              </div>

              <div className={styles.contactSummary}>
                <span className="mono-label">
                  {locale === "zh" ? uiCopy.heroContactLabel.zh : uiCopy.heroContactLabel.en}
                </span>
                <a className={styles.contactValue} href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <aside className={styles.previewRail}>
              <div className={styles.railHeader}>
                <p className="mono-label">{locale === "zh" ? "精选作品" : "Selected work"}</p>
                <Link className={styles.inlineAction} href={localizePath(locale, "/work")}>
                  {locale === "zh" ? "查看全部" : "View archive"}
                </Link>
              </div>

              <div className={styles.previewList}>
                {featuredProjects.map((project, index) => (
                  <Link
                    key={project.slug}
                    className={styles.previewItem}
                    href={localizePath(locale, `/work/${project.slug}`)}
                  >
                    <div className={styles.previewIndex}>
                      <span className="mono-label">{String(index + 1).padStart(2, "0")}</span>
                      <span className={styles.previewYear}>{project.year}</span>
                    </div>
                    <div className={styles.previewBody}>
                      <p className={styles.previewTitle}>
                        {locale === "zh" ? project.titleZh : project.titleEn}
                      </p>
                      <p className={styles.previewSummary}>
                        {locale === "zh" ? project.summaryZh : project.summaryEn}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>

          <section className={styles.supportDeck}>
            <article className={styles.supportColumn}>
              <p className="mono-label">{supportTitle}</p>
              <p className={styles.supportLead}>
                {locale === "zh" ? resumeProfile.introZh : resumeProfile.introEn}
              </p>
              <p className={styles.supportBody}>
                {locale === "zh" ? resumeProfile.focusZh : resumeProfile.focusEn}
              </p>
            </article>

            <article className={styles.supportColumn}>
              <p className="mono-label">{locale === "zh" ? "近期经历" : "Recent experience"}</p>
              <div className={styles.resumeList}>
                {experienceEntries.map((item) => (
                  <div key={item.id} className={styles.resumeItem}>
                    <div className={styles.resumeItemHeader}>
                      <h2 className={styles.resumeItemTitle}>
                        {locale === "zh" ? item.companyZh : item.companyEn ?? item.companyZh}
                      </h2>
                      <span className={styles.resumeItemTime}>
                        {item.start} - {item.end}
                      </span>
                    </div>
                    <p className={styles.resumeItemBody}>
                      {(locale === "zh" ? item.highlightsZh : item.highlightsEn ?? item.highlightsZh)[0]}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className={styles.supportColumn}>
              <p className="mono-label">{locale === "zh" ? "方法与工具" : "Methods and tools"}</p>
              <div className={styles.tagList}>
                {focusItems.map((item) => (
                  <span key={item} className={styles.focusTag}>
                    {item}
                  </span>
                ))}
              </div>
              <Link className={styles.resumeAction} href={localizePath(locale, "/about")}>
                {locale === "zh" ? "查看完整公开履历" : "Open full public resume"}
              </Link>
            </article>
          </section>
        </div>
      </section>
    </div>
  );
}
