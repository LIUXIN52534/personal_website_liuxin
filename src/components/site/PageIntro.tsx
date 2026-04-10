type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="section-frame mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-12 sm:px-8 sm:py-16">
      <p className="mono-label">{eyebrow}</p>
      <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.6fr)] lg:items-end">
        <h1 className="w-full max-w-[calc(100vw-2.75rem)] break-words text-[clamp(2.7rem,15vw,4.1rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[var(--text-primary)] sm:max-w-4xl sm:text-5xl sm:leading-[0.98]">
          {title}
        </h1>
        {description ? (
          <p className="w-full max-w-[calc(100vw-2.75rem)] text-base leading-7 text-[var(--text-secondary)] sm:max-w-xl">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
