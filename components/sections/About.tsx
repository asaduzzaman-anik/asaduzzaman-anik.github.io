import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              About me
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Engineering with clarity, not complexity.
            </h2>
          </Reveal>

          <Reveal className="space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            <p>
              I am a full stack developer who enjoys turning real operational
              problems into clean, dependable software. My experience includes
              ERP systems, CRM and SRM modules, ecommerce workflows, REST APIs,
              and modern portfolio experiences.
            </p>
            <p>
              I care about more than getting features to work. I focus on
              understandable architecture, strong access control, polished
              interfaces, reliable validation, and code that remains maintainable
              as a product grows.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-bold text-slate-950 dark:text-white">
                  Product-minded
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  I connect technical decisions with user needs and business
                  goals.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-bold text-slate-950 dark:text-white">
                  Detail-focused
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  I refine edge cases, interactions, permissions, and visual
                  consistency.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
