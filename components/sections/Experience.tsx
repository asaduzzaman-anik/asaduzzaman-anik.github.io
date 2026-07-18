import Reveal from "@/components/ui/Reveal";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Experience
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Building systems that solve operational problems.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Selected experience across ERP, ecommerce, backend APIs, and
              product-focused web development.
            </p>
          </Reveal>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <Reveal
                key={`${exp.company}-${exp.duration}`}
                className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.role}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{exp.location}</p>
                  </div>
                  <span className="h-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {exp.duration}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
