import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  indigo: "text-indigo-600 dark:text-indigo-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  sky: "text-sky-600 dark:text-sky-400",
  violet: "text-violet-600 dark:text-violet-400",
};

const cardBaseClass =
  "project-card group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] dark:border-slate-800 dark:bg-slate-900";

function ProjectImage({
  src,
  alt,
  wide = false,
}: {
  src: string;
  alt: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 ${
        wide ? "min-h-[260px] h-full" : "aspect-[16/10]"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="project-preview object-cover object-top transition duration-500"
        sizes={
          wide
            ? "(max-width: 1024px) 100vw, 50vw"
            : "(max-width: 1024px) 100vw, 40vw"
        }
      />
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const href = project.live || project.github;

  const meta = (
    <>
      <div className="flex items-start justify-between gap-5">
        <div>
          <p
            className={`text-xs font-bold uppercase tracking-[0.15em] ${categoryColors[project.categoryColor]}`}
          >
            {project.category}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold text-slate-950 dark:text-white">
            {project.title}
          </h3>
        </div>
        <span
          className="project-arrow text-2xl leading-none text-slate-400 transition-transform duration-300"
          aria-hidden
        >
          ↗
        </span>
      </div>
      <p
        className={`mt-4 leading-7 text-slate-600 dark:text-slate-400 ${project.layout === "wide" ? "max-w-xl" : ""}`}
      >
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium dark:border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (project.layout === "wide") {
    const content = (
      <div className={`${cardBaseClass} lg:col-span-2`}>
        <div className="grid lg:grid-cols-[1.05fr_.95fr]">
          <div className="order-2 p-7 sm:p-9 lg:order-1 lg:p-10">{meta}</div>
          <div className="order-1 lg:order-2">
            <ProjectImage
              src={project.image}
              alt={project.title}
              wide
            />
          </div>
        </div>
      </div>
    );

    return href ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : (
      content
    );
  }

  const content = (
    <div className={cardBaseClass}>
      <ProjectImage src={project.image} alt={project.title} />
      <div className="p-7 sm:p-8">{meta}</div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

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

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
