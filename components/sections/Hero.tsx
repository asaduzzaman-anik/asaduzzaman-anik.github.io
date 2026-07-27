"use client";

import Reveal from "@/components/ui/Reveal";
import {
  CheckIcon,
  ChevronRightIcon,
  CurrencyIcon,
  GithubIcon,
  LinkedinIcon,
  TrendUpIcon,
} from "@/components/icons";
import { siteConfig } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-10 lg:py-20">
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for selected projects
          </div>

          <p className="mb-4 text-base font-semibold text-indigo-600 dark:text-indigo-400">
            Hello, I&apos;m {siteConfig.name}
          </p>

          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            I build reliable{" "}
            <span className="text-gradient">digital products</span> for real
            businesses.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-400">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-700"
            >
              View my work
              <ChevronRightIcon />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:hover:border-slate-600"
            >
              Start a conversation
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3.5 py-1.5 font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3.5 py-1.5 font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
            <span className="hidden h-4 w-px bg-slate-300 sm:block dark:bg-slate-700" />
            <span>Based in Bangladesh · Working globally</span>
          </div>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:ml-auto">
          <div className="absolute -inset-10 -z-10 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/70 bg-white/75 p-3 shadow-[var(--shadow-soft)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/75">
            <div className="overflow-hidden rounded-[1.55rem] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-white/10">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-xs text-slate-500">anik.dev</span>
              </div>

              <div className="space-y-6 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Current focus
                    </p>
                    <h2 className="mt-2 font-display text-xl font-bold text-slate-950 dark:text-white">
                      Scalable business software
                    </h2>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                    <TrendUpIcon />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                    <p className="text-2xl font-bold text-slate-950 dark:text-white">4+</p>
                    <p className="mt-1 text-xs text-slate-500">Core technologies</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                    <p className="text-2xl font-bold text-slate-950 dark:text-white">12+</p>
                    <p className="mt-1 text-xs text-slate-500">Major modules built</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-950 dark:text-white">
                      Technology stack
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">
                      Active
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      ["Laravel", "Backend"],
                      ["Next.js + React", "Frontend"],
                      ["Tailwind CSS", "UI System"],
                    ].map(([tech, label]) => (
                      <div
                        key={tech}
                        className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 shadow-sm dark:bg-white/[0.04] dark:shadow-none"
                      >
                        <span className="text-sm text-slate-700 dark:text-slate-300">{tech}</span>
                        <span className="text-xs text-slate-500">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-400/20 dark:bg-indigo-400/10">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300">
                    <CheckIcon />
                  </div>
                  <p className="text-sm leading-6 text-indigo-900 dark:text-indigo-100">
                    Focused on maintainable architecture, thoughtful UX, and
                    measurable business value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -left-10 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[var(--shadow-soft)] sm:block dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                <CurrencyIcon />
              </div>
              <div>
                <p className="text-xs text-slate-500">Business impact</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Built for growth
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
