import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>
          © {year} {siteConfig.fullName}. Designed and developed with care.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-slate-950 dark:hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-slate-950 dark:hover:text-white"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="#home"
            className="transition hover:text-slate-950 dark:hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
