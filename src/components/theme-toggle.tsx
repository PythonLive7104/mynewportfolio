"use client";

import { useLayoutEffect, useState } from "react";
import { useTheme } from "next-themes";

function ThemeToggleButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 min-w-20 items-center justify-center gap-1.5 rounded-full border border-zinc-200/80 bg-white/60 px-3 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur transition hover:border-violet-300/60 hover:text-violet-800 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-300 dark:hover:border-violet-500/40 dark:hover:text-violet-200"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span aria-hidden className="text-sm">
        {isDark ? "☽" : "☀"}
      </span>
      {isDark ? "Dark" : "Light"}
    </button>
  );
}

/**
 * Renders a stable shell until the client has committed, then the real control.
 * Avoids hydration mismatches: `useTheme().resolvedTheme` is undefined on the server
 * and only matches the user’s theme after `next-themes` runs in the document.
 */
export function ThemeToggle() {
  const [ready, setReady] = useState(false);
  // Intentional: one paint after mount so server HTML and first client pass both use the same placeholder.
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- align with next-themes (theme only exists after client)
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div
        className="h-9 w-20 rounded-full border border-zinc-200/80 bg-zinc-100/80 dark:border-zinc-800 dark:bg-zinc-900/60"
        aria-hidden
      />
    );
  }

  return <ThemeToggleButton />;
}
