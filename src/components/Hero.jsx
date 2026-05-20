import profileImage from '../images/me-portfolio.jpg';
import { calculateAge } from '../utils/age.js';

const currentAge = calculateAge('2001-09-24');

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Freelance web developer
          </p>
          <h1 className="text-4xl font-semibold tracking-normal text-ink sm:text-5xl lg:text-6xl">
            Jurgen Visser
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-ink sm:text-2xl sm:leading-9">
            Praktische websites, tools en digitale projecten — gebouwd om te blijven werken.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Van publieke websites tot slimme tools en projectplatforms: 
            alles wordt gebouwd met oog voor structuur, snelheid en onderhoudbaarheid.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center border border-accent bg-accent px-5 py-3 text-sm font-semibold text-white outline-none transition hover:bg-[#0b5f59] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
            >
              Bekijk Projecten
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center border border-ink/20 bg-transparent px-5 py-3 text-sm font-semibold text-ink outline-none transition hover:border-ink hover:bg-white focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
            >
              Neem Contact Op
            </a>
          </div>
        </div>

        <aside className="space-y-4 self-end lg:ml-auto lg:max-w-sm" aria-label="Jurgen Visser profile">
          <figure className="overflow-hidden border border-line bg-white shadow-soft">
            <img
              src={profileImage}
              alt="Jurgen Visser"
              className="aspect-[4/5] w-full object-cover object-center"
              decoding="async"
            />
          </figure>

          <div className="border-l-4 border-accent bg-white p-6 shadow-soft sm:p-7">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">Profiel</p>
            <p className="mt-4 text-2xl font-semibold text-ink">
              Nederland • {currentAge} jaar
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Betrouwbaar webwerk dat snel laadt, goed onderhouden wordt en meegroeit met het project.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
