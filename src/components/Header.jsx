const navItems = [
  { label: 'Over', href: '#over' },
  { label: 'Projecten', href: '#projecten' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="text-sm font-semibold tracking-wide text-ink outline-none transition hover:text-accent focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
        >
          jurgenbv.nl
        </a>

        <div className="flex flex-wrap justify-end gap-x-3 gap-y-2 text-[13px] text-muted sm:gap-x-5 sm:text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="outline-none transition hover:text-ink focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
