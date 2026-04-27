import { site } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/50 px-4 py-8 dark:border-zinc-800/50 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-sm text-zinc-500 sm:flex-row dark:text-zinc-500">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p className="text-zinc-400 dark:text-zinc-600">Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
