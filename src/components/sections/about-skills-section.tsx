import { about, site, type SkillCategory, skills } from "@/data/site-content";
import { MotionReveal } from "@/components/motion-reveal";

const order: SkillCategory[] = ["Frontend", "Backend", "Tools / DevOps"];

function groupSkills() {
  const map = new Map<SkillCategory, { name: string }[]>();
  for (const c of order) map.set(c, []);
  for (const s of skills) {
    map.get(s.category)!.push({ name: s.name });
  }
  return map;
}

export function AboutSkillsSection() {
  const grouped = groupSkills();

  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-zinc-200/50 px-4 py-20 dark:border-zinc-800/50 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <MotionReveal as="div">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">About</h2>
            <div className="mt-4 space-y-4 text-pretty text-zinc-600 leading-relaxed dark:text-zinc-400">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
              — {site.name}
            </p>
          </MotionReveal>
          <MotionReveal as="div" delay={0.08}>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">Skills</h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Grouped for a quick read; depth shows up in the projects.
            </p>
            <div className="mt-8 space-y-8">
              {order.map((cat) => (
                <div key={cat}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                    {cat}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {grouped.get(cat)!.map((s) => (
                      <li key={s.name}>
                        <span className="inline-block rounded-lg border border-zinc-200/90 bg-white/70 px-2.5 py-1 text-sm text-zinc-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200">
                          {s.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
