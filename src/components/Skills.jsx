import { skills } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Gefocused, praktische mogelijkheden.</h2>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Een praktische stack voor het bouwen van websites, het verbinden van tools, het onderhouden van storefronts, en
            het opzetten van nuttige digitale workflows.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {skills.map((group) => (
            <section key={group.category} className="border border-line bg-paper p-5">
              <h3 className="text-lg font-semibold text-ink">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line bg-white px-3 py-1.5 text-sm font-medium text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
