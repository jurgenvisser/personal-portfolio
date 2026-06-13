const contactLinks = [
  {
    label: 'Algemenen vragen',
    email: 'contact@jurgenbv.nl',
    description: 'Voor project vragen, onderhoud, en algemeen contact.',
  },
  {
    label: 'Website bestellingen of zakelijke vragen',
    email: 'business@jurgenbv.nl',
    description: 'Voor nieuwe website verzoeken, zakelijke werkzaamheden, en bestelaanvragen.',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Duidelijke manieren om contact op te nemen.</h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Stuur een directe e-mail voor algemene vragen, website werk, of zakelijke inquiries.
            </p>
          </div>

          <div className="grid gap-4">
            {contactLinks.map((item) => (
              <article key={item.email} className="border border-line bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">{item.label}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                <a
                  href={`mailto:${item.email}`}
                  className="mt-5 inline-flex break-all text-base font-semibold text-accent outline-none transition hover:text-[#0b5f59] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-white"
                >
                  {item.email}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
