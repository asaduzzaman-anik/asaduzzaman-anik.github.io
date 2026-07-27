import Reveal from "@/components/ui/Reveal";
import {
  BackendIcon,
  FrontendIcon,
  UiSystemIcon,
} from "@/components/icons";
import { skillCategories } from "@/data/portfolio";

const iconColors: Record<string, string> = {
  rose: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
  sky: "bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400",
  violet: "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
};

const skillIcons = {
  backend: BackendIcon,
  frontend: FrontendIcon,
  ui: UiSystemIcon,
} as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-slate-200/80 bg-white/60 py-24 dark:border-slate-800 dark:bg-slate-900/20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Capabilities
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            A practical, modern technology stack.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Tools selected for maintainability, performance, and excellent
            developer experience.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((skill) => {
            const Icon = skillIcons[skill.icon];

            return (
              <Reveal
                key={skill.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] dark:border-slate-800 dark:bg-slate-900"
              >
                <div
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${iconColors[skill.iconColor]}`}
                >
                  <Icon />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-slate-950 dark:text-white">
                  {skill.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {skill.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium dark:bg-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
