"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site-content";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden border-b border-zinc-200/50 px-4 pb-20 pt-28 dark:border-zinc-800/50 sm:px-6"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/10" />
        <div className="absolute -right-20 bottom-32 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.12),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_50%)]" />
      </div>
      <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
        <div className="order-2 min-w-0 lg:order-1">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 0.9, 0.28, 1] }}
          className="mb-3 text-sm font-medium text-violet-600 dark:text-violet-400"
        >
          {site.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 0.9, 0.28, 1] }}
          className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50"
        >
          {site.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 0.9, 0.28, 1] }}
          className="mt-2 text-lg text-violet-700/90 dark:text-violet-300/90"
        >
          {site.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 0.9, 0.28, 1] }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          {site.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 0.9, 0.28, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white shadow-sm transition hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-violet-200"
          >
            View projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300/80 bg-white/50 px-6 text-sm font-medium text-zinc-800 backdrop-blur transition hover:border-violet-400/60 hover:bg-violet-50/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:border-zinc-600 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:border-violet-500/40 dark:hover:bg-zinc-800/80"
          >
            Contact
          </Link>
        </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 0.9, 0.28, 1] }}
          className="order-1 mx-auto flex shrink-0 justify-center lg:order-2 lg:mx-0 lg:justify-end"
        >
          <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <div
              className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-violet-400/60 to-cyan-400/50 opacity-80 blur dark:from-violet-500/50 dark:to-cyan-500/30"
              aria-hidden
            />
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/80 bg-zinc-200 shadow-lg ring-2 ring-violet-500/15 dark:border-zinc-800/80 dark:bg-zinc-800">
              <Image
                src={site.profileImage}
                alt={`${site.name} — ${site.title}`}
                width={400}
                height={400}
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 1024px) 224px, 256px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
