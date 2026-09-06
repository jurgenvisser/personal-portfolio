export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">About me</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Web work that holds up.</h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
          <p>
            With a background in Software Development Web & Apps and years of hands-on experience, I know what it
            takes to make something truly work, not just at launch, but long after.
          </p>
          <p>
            Websites, web apps, integrations, and online tools all get built with clear structure, a clean responsive
            layout, and long-term maintainability in mind. Projects are made to be used, keep running smoothly, and
            stay easy to manage.
          </p>
          <p>
            On top of that: keeping webshops up to date, connecting form data to email workflows, setting up
            CRM-style systems, and supporting Discord communities with structure, rules, and custom bots.
          </p>
        </div>
      </div>
    </section>
  );
}
