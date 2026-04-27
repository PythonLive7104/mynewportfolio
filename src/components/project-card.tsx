"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/site-content";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 0.9, 0.28, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/60 shadow-sm backdrop-blur transition hover:border-violet-300/50 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:hover:border-violet-500/30"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-200/50 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-900/50">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 48rem"
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded border border-violet-200/60 bg-violet-50/50 px-2 py-0.5 text-[11px] text-violet-800 dark:border-violet-500/20 dark:bg-violet-950/50 dark:text-violet-200"
            >
              {s}
            </span>
          ))}
        </div>
        <details className="group/details mt-4 rounded-lg border border-zinc-200/80 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30">
          <summary className="cursor-pointer list-none px-3 py-2.5 text-sm font-medium text-zinc-800 outline-none transition hover:text-violet-700 dark:text-zinc-200 dark:hover:text-violet-300 [&::-webkit-details-marker]:hidden">
            <span className="inline-flex w-full items-center justify-between gap-2">
              Case study
              <span
                className="text-zinc-400 transition group-open/details:rotate-180 dark:text-zinc-500"
                aria-hidden
              >
                ▼
              </span>
            </span>
          </summary>
          <div className="space-y-3 border-t border-zinc-200/60 px-3 py-3 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            <p>
              <span className="font-medium text-zinc-800 dark:text-zinc-300">Problem. </span>
              {project.problem}
            </p>
            <p>
              <span className="font-medium text-zinc-800 dark:text-zinc-300">Approach. </span>
              {project.approach}
            </p>
            <p>
              <span className="font-medium text-zinc-800 dark:text-zinc-300">Impact. </span>
              {project.value}
            </p>
          </div>
        </details>
        <div className="mt-5 flex flex-wrap gap-2 border-t border-zinc-200/50 pt-4 dark:border-zinc-800/50">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 px-4 text-xs font-medium text-white transition hover:bg-violet-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-violet-200"
          >
            Live demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-full border border-zinc-300/80 bg-transparent px-4 text-xs font-medium text-zinc-800 transition hover:border-violet-400 dark:border-zinc-600 dark:text-zinc-200 dark:hover:border-violet-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
