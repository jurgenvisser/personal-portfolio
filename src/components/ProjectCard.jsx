export default function ProjectCard({ project }) {
  const displayUrl = project.url.replace(/^https?:\/\//, '');

  return (
    <article className="flex min-h-64 flex-col border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-medium text-accent">{project.category}</p>
        <span className="shrink-0 border border-accent/30 bg-[#e6f4f1] px-2.5 py-1 text-xs font-semibold text-accent">
          Active
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-ink">{project.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted">{project.description}</p>

      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 break-words text-sm font-semibold text-ink outline-none transition hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-white"
        aria-label={`Open ${project.name} in a new tab`}
      >
        {displayUrl}
      </a>
    </article>
  );
}
