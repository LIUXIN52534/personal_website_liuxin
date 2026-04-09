type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="section-frame mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-12 sm:px-8 sm:py-16">
      <p className="mono-label">{eyebrow}</p>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.6fr)] lg:items-end">
        <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] text-[var(--text-primary)] sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)]">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
