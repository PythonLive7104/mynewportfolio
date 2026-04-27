"use client";

import Link from "next/link";
import { site } from "@/data/site-content";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="shrink-0 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {site.name.split(" ")[0]}
          <span className="text-zinc-400 dark:text-zinc-500">.</span>
        </a>
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
      <nav
        className="flex border-t border-zinc-200/50 px-2 py-2 sm:hidden dark:border-zinc-800/50"
        aria-label="Primary mobile"
      >
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-2.5 py-1.5 text-xs text-zinc-600 dark:text-zinc-400"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
