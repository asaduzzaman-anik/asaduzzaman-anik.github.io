"use client";

import { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { RedirectIcon } from "@/components/icons";
import { projects, projectStacks, siteConfig } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  indigo: "text-indigo-600 dark:text-indigo-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  sky: "text-sky-600 dark:text-sky-400",
  violet: "text-violet-600 dark:text-violet-400",
  rose: "text-rose-600 dark:text-rose-400",
};

type StackFilter = (typeof projectStacks)[number]["id"];

// The active tab lives in the URL (?stack=django) so filtered views can be
// shared as links. The page prerenders with "all" and syncs after hydration.
const STACK_CHANGE_EVENT = "projectstackchange";

function readStack(): StackFilter {
  const value = new URLSearchParams(window.location.search).get("stack");
  return projectStacks.find((stack) => stack.id === value)?.id ?? "all";
}

function subscribeToStack(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener(STACK_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(STACK_CHANGE_EVENT, onChange);
  };
}

function selectStack(stack: StackFilter) {
  const url = new URL(window.location.href);
  if (stack === "all") {
    url.searchParams.delete("stack");
  } else {
    url.searchParams.set("stack", stack);
  }
  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event(STACK_CHANGE_EVENT));
}

export default function Projects() {
  const activeStack = useSyncExternalStore(
    subscribeToStack,
    readStack,
    () => "all" as const,
  );
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const visibleProjects =
    activeStack === "all"
      ? projects
      : projects.filter((project) => project.stack === activeStack);

  const countFor = (stack: StackFilter) =>
    stack === "all"
      ? projects.length
      : projects.filter((project) => project.stack === stack).length;

  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = projectStacks.length - 1;
    const next =
      event.key === "ArrowRight"
        ? index === last ? 0 : index + 1
        : event.key === "ArrowLeft"
          ? index === 0 ? last : index - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;

    if (next === null) return;
    event.preventDefault();
    selectStack(projectStacks[next].id);
    tabRefs.current[next]?.focus();
  };

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

        <div
          role="tablist"
          aria-label="Filter projects by backend stack"
          className="mt-12 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 dark:border-slate-700 dark:bg-slate-900/70"
        >
          {projectStacks.map((stack, index) => {
            const isActive = activeStack === stack.id;

            return (
              <button
                key={stack.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={`projects-tab-${stack.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="projects-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectStack(stack.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {stack.label}
                <span
                  className={`ml-1.5 text-xs ${
                    isActive ? "opacity-70" : "text-slate-400 dark:text-slate-500"
                  }`}
                >
                  {countFor(stack.id)}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="projects-panel"
          role="tabpanel"
          aria-labelledby={`projects-tab-${activeStack}`}
          className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {visibleProjects.map((project) => {
            const isPrivate = project.status === "private";
            const hasLinks = Boolean(project.live || project.github);

            return (
              <Reveal key={project.title} className="h-full">
                <article className="project-card flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] dark:border-slate-800 dark:bg-slate-900">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="project-preview object-cover object-top transition duration-500"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    ) : (
                      <div
                        aria-hidden
                        className="project-preview absolute inset-0 flex flex-col bg-gradient-to-br from-slate-50 to-indigo-50 transition duration-500 dark:from-slate-900 dark:to-indigo-950/50"
                      >
                        <div className="absolute inset-0 bg-hero-grid bg-[size:28px_28px]" />
                        <div className="relative flex items-center gap-3 border-b border-slate-200 px-4 py-3 dark:border-white/10">
                          <div className="flex shrink-0 gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-rose-400" />
                            <span className="h-2 w-2 rounded-full bg-amber-400" />
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          </div>
                          <span className="truncate font-mono text-[11px] text-slate-500">
                            {project.github.replace("https://", "")}
                          </span>
                        </div>
                        <div className="relative flex flex-1 flex-wrap content-center justify-center gap-2 px-6">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2 font-mono text-sm font-semibold text-slate-800 shadow-sm dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {isPrivate && (
                      <span className="absolute right-3 top-3 rounded-full border border-slate-200 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-300">
                        In progress
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p
                      className={`text-[11px] font-bold uppercase tracking-[0.15em] ${categoryColors[project.categoryColor]}`}
                    >
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {project.problem}
                    </p>
                    <p className="mt-3 text-xs font-medium leading-5 text-slate-500 dark:text-slate-500">
                      {project.role}
                    </p>

                    <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
                        {project.status === "live" ? "Key results" : "Case study highlights"}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {project.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex gap-2 text-sm leading-5 text-slate-600 dark:text-slate-400"
                          >
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500"
                              aria-hidden
                            />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {hasLinks ? (
                      <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                          >
                            Live site
                            <RedirectIcon />
                          </a>
                        ) : null}
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                          >
                            GitHub
                            <RedirectIcon />
                          </a>
                        ) : null}
                      </div>
                    ) : (
                      <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-500 dark:border-slate-800">
                        Demo and source are private. Highlights available on
                        request.
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* On the 3-column grid, only show this card when it fills a gap in the last row. */}
          <Reveal
            className={`h-full ${visibleProjects.length % 3 === 0 ? "lg:hidden" : ""}`}
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full min-h-48 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 p-6 text-center transition hover:-translate-y-1 hover:border-indigo-400 dark:border-slate-700 dark:hover:border-indigo-500"
            >
              <span className="font-display text-lg font-bold text-slate-950 dark:text-white">
                More on GitHub
              </span>
              <span className="text-sm text-slate-500">
                Source for Django, Laravel, and React projects.
              </span>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {siteConfig.github.replace("https://", "")}
                <RedirectIcon />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
