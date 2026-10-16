import Reveal from "@/components/ui/Reveal";
import { buildAreas } from "@/data/portfolio";

export default function Process() {
  return (
    <section id="what-i-build" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            What I build
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Software shaped around how businesses operate.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {buildAreas.map((item) => (
            <Reveal
              key={item.step}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                {item.step}
              </span>
              <h3 className="mt-8 font-display text-xl font-bold text-slate-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
