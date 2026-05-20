import { siteVersion } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} Jurgen Visser</p>
        <p>jurgenbv.nl • {siteVersion}</p>
      </div>
    </footer>
  );
}
