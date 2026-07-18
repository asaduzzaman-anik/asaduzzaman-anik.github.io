import Reveal from "@/components/ui/Reveal";
import { trustStats } from "@/data/portfolio";

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-200/80 bg-white/50 dark:border-slate-800 dark:bg-slate-900/20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:grid-cols-4 sm:px-8 lg:px-10">
        {trustStats.map((stat) => (
          <Reveal key={stat.label} className="px-4 py-8 text-center">
            <p className="font-display text-3xl font-extrabold text-slate-950 dark:text-white">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
