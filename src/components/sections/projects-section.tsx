import { projects } from "@/data/site-content";
import { MotionReveal } from "@/components/motion-reveal";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-zinc-200/50 bg-zinc-50/30 px-4 py-20 dark:border-zinc-800/50 dark:bg-zinc-950/20 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <MotionReveal as="div" className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Selected work
          </h2>
          <p className="mt-3 text-pretty text-zinc-600 dark:text-zinc-400">
            A few problems I have shaped end to end, from the data model to the experience on the page. Swap in your own
            projects in <code className="rounded bg-zinc-200/60 px-1 text-sm dark:bg-zinc-800">src/data/site-content.ts</code>
            .
          </p>
        </MotionReveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
