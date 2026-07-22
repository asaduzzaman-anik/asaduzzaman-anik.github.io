import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  indigo: "text-indigo-600 dark:text-indigo-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  sky: "text-sky-600 dark:text-sky-400",
  violet: "text-violet-600 dark:text-violet-400",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-slate-200/80 bg-white/60 py-24 dark:border-slate-800 dark:bg-slate-900/20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Selected work
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Projects designed around real outcomes.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
          >
            Discuss a project →
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const href = project.live || project.github;
            const card = (
              <div className="project-card group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] dark:border-slate-800 dark:bg-slate-900">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="project-preview object-cover object-top transition duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p
                        className={`text-[11px] font-bold uppercase tracking-[0.15em] ${categoryColors[project.categoryColor]}`}
                      >
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-bold leading-snug text-slate-950 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                    <span
                      className="project-arrow shrink-0 text-xl leading-none text-slate-400 transition-transform duration-300"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );

            return (
              <Reveal key={project.title} className="h-full">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
