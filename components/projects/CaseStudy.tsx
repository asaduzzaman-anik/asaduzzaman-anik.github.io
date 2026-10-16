import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { CheckIcon, RedirectIcon } from "@/components/icons";
import ProjectPreview, { categoryColors } from "@/components/projects/ProjectPreview";
import { siteConfig, type Project, type ProjectLink } from "@/data/portfolio";

const statusLabels: Record<Project["status"], string> = {
  live: "Live",
  source: "Source available",
  private: "In progress",
};

type CaseStudyProps = {
  project: Project;
  previous: Project;
  next: Project;
};

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white">
      {children}
    </h2>
  );
}

function projectLinks(project: Project): (ProjectLink & { primary: boolean })[] {
  return [
    ...(project.live ? [{ label: "Live site", url: project.live, primary: true }] : []),
    ...(project.github
      ? [{ label: project.githubLabel ?? "Source code", url: project.github, primary: !project.live }]
      : []),
    ...(project.caseStudy.extraLinks ?? []).map((link) => ({ ...link, primary: false })),
  ];
}

export default function CaseStudy({ project, previous, next }: CaseStudyProps) {
  const { caseStudy } = project;
  const links = projectLinks(project);

  return (
    <article>
      <header id="home" className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 lg:px-10 lg:pt-16">
          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              <span aria-hidden>←</span>
              All projects
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <p
                className={`text-xs font-bold uppercase tracking-[0.17em] ${categoryColors[project.categoryColor]}`}
              >
                {project.category}
              </p>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {caseStudy.type}
              </span>
            </div>

            <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-400">
              {caseStudy.overview}
            </p>

            {links.length > 0 && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      link.primary
                        ? "inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-700"
                        : "inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:hover:border-slate-600"
                    }
                  >
                    {link.label}
                    <RedirectIcon />
                  </a>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal className="mt-14">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/70 bg-white/75 p-3 shadow-[var(--shadow-soft)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/75">
              <div className="overflow-hidden rounded-[1.55rem] border border-slate-200 dark:border-slate-800">
                <ProjectPreview
                  project={project}
                  sizes="(max-width: 1100px) 100vw, 1000px"
                  priority
                  fallbackAspect="aspect-[16/9] sm:aspect-[3/1]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <div className="border-y border-slate-200/80 bg-white/60 dark:border-slate-800 dark:bg-slate-900/20">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_320px] lg:gap-16 lg:px-10 lg:py-24">
          <div className="min-w-0 space-y-16">
            <Reveal>
              <section aria-labelledby="cs-problem">
                <SectionHeading id="cs-problem">The problem</SectionHeading>
                <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                  {project.problem}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="cs-role">
                <SectionHeading id="cs-role">My role</SectionHeading>
                <p className="mt-5 text-base font-semibold text-indigo-600 dark:text-indigo-400">
                  {project.role}
                </p>
                <ul className="mt-5 space-y-3 text-base leading-7 text-slate-600 dark:text-slate-400">
                  {caseStudy.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="cs-features">
                <SectionHeading id="cs-features">Key features</SectionHeading>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {caseStudy.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                    >
                      <h3 className="text-base font-bold text-slate-950 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {caseStudy.gallery && caseStudy.gallery.length > 0 && (
              <Reveal>
                <section aria-labelledby="cs-screens">
                  <SectionHeading id="cs-screens">Screens</SectionHeading>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {caseStudy.gallery.map((shot) => (
                      <figure key={shot.src}>
                        <a
                          href={shot.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] dark:border-slate-800 dark:bg-slate-800"
                        >
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            width={1440}
                            height={900}
                            className="h-auto w-full"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                          />
                          <span className="sr-only"> (opens full size in a new tab)</span>
                        </a>
                        <figcaption className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                          {shot.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            <Reveal>
              <section aria-labelledby="cs-highlights">
                <SectionHeading id="cs-highlights">Technical highlights</SectionHeading>
                <ol className="mt-6 space-y-4">
                  {caseStudy.highlights.map((highlight, index) => (
                    <li
                      key={highlight.title}
                      className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                    >
                      <span
                        aria-hidden
                        className="font-display text-sm font-bold text-indigo-600 dark:text-indigo-400"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-slate-950 dark:text-white">
                          {highlight.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                          {highlight.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="cs-outcomes">
                <SectionHeading id="cs-outcomes">Outcomes</SectionHeading>
                <ul className="mt-6 space-y-4">
                  {project.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex gap-3 text-base leading-7 text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          <aside aria-label="Project summary" className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-slate-500">
                At a glance
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  ["Type", caseStudy.type],
                  ["Timeline", caseStudy.timeline],
                  ["Status", statusLabels[project.status]],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <dt className="text-slate-500">{label}</dt>
                    <dd className="text-right font-medium text-slate-900 dark:text-slate-100">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 space-y-5 border-t border-slate-100 pt-6 dark:border-slate-800">
                {caseStudy.stack.map((group) => (
                  <div key={group.group}>
                    <p className="text-xs font-semibold text-slate-500">{group.group}</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium dark:border-slate-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {links.length > 0 && (
                <ul className="mt-6 space-y-2 border-t border-slate-100 pt-6 dark:border-slate-800">
                  {links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        {link.label}
                        <RedirectIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </aside>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <nav aria-label="More case studies" className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Previous project", project: previous, align: "" },
            { label: "Next project", project: next, align: "sm:text-right" },
          ].map((item) => (
            <Link
              key={item.label}
              href={`/projects/${item.project.slug}/`}
              className={`group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-[var(--shadow-soft)] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50 ${item.align}`}
            >
              <span className="text-xs font-bold uppercase tracking-[0.17em] text-slate-500">
                {item.label}
              </span>
              <span className="mt-2 block font-display text-lg font-bold text-slate-950 transition group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                {item.project.title}
              </span>
            </Link>
          ))}
        </nav>

        <Reveal className="mt-16 rounded-[2rem] border border-slate-200 bg-white px-6 py-12 text-center shadow-[var(--shadow-soft)] sm:px-10 dark:border-slate-800 dark:bg-slate-950 dark:shadow-[var(--shadow-glow)]">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Building something similar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            I&apos;m open to full-stack roles and selected freelance work.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-700"
            >
              Get in touch
            </Link>
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:hover:border-slate-600"
            >
              View Resume
              <RedirectIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
