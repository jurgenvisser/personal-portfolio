import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return (
    <section id="projecten" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Projecten</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Actieve websites en tools.</h2>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Deze projecten zijn live, ontvangen dagelijkse bezoekers, en worden bijgewerkt wanneer nodig. Het werk
            varieert van portfolio- en communitysites tot storefronts, link hubs, tracking tools, en data viewers.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.url} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
