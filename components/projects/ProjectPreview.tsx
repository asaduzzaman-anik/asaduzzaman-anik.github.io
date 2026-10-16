import Image from "next/image";
import type { Project } from "@/data/portfolio";

export const categoryColors: Record<string, string> = {
  indigo: "text-indigo-600 dark:text-indigo-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  sky: "text-sky-600 dark:text-sky-400",
  violet: "text-violet-600 dark:text-violet-400",
  rose: "text-rose-600 dark:text-rose-400",
};

type ProjectPreviewProps = {
  project: Project;
  sizes: string;
  priority?: boolean;
  /** Aspect ratio for the stack panel used when there is no screenshot. */
  fallbackAspect?: string;
};

// Screenshot when the project has one; otherwise a browser-window panel
// showing the repository and the core stack.
export default function ProjectPreview({
  project,
  sizes,
  priority = false,
  fallbackAspect = "aspect-[16/10]",
}: ProjectPreviewProps) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 ${project.image ? "aspect-[16/10]" : fallbackAspect}`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          priority={priority}
          className="project-preview object-cover object-top transition duration-500"
          sizes={sizes}
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
      {project.status === "private" && (
        <span className="absolute right-3 top-3 rounded-full border border-slate-200 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-300">
          In progress
        </span>
      )}
    </div>
  );
}
