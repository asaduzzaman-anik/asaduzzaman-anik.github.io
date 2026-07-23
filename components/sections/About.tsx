import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { aboutContent, siteConfig } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="absolute -inset-8 -z-10 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 shadow-[var(--shadow-soft)] dark:border-slate-800">
              <Image
                src="/me.png"
                alt={siteConfig.fullName}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 360px"
                priority
              />
            </div>
          </Reveal>

          <Reveal className="space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                About me
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                {aboutContent.headline}
              </h2>
            </div>

            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {aboutContent.traits.map((trait) => (
                <div
                  key={trait.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <p className="text-sm font-bold text-slate-950 dark:text-white">
                    {trait.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {trait.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
