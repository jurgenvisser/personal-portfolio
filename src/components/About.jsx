export default function About() {
  return (
    <section id="over" className="scroll-mt-24 border-b border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Over mij</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Webwerk dat blijft staan.</h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
          <p>
            Met een achtergrond in Software Development Web & Apps en jarenlange praktijkervaring weet 
            wat er nodig is om iets écht te laten werken — niet alleen bij de lancering, maar ook daarna.
          </p>
          <p>
            Websites, webapps, integraties en online tools — allemaal met de focus op duidelijke structuur, 
            een nette responsive layout en onderhoud op de lange termijn. Projecten worden gebouwd zodat 
            ze écht gebruikt worden, goed blijven draaien en eenvoudig bij te houden zijn.
          </p>
          <p>
            Daar bovenop: webshops up-to-date houden, formulierdata koppelen aan mailworkflows, 
            CRM-achtige systemen opzetten en Discord-communities ondersteunen met structuur, 
            regels en maatwerk bots.
          </p>
        </div>
      </div>
    </section>
  );
}
