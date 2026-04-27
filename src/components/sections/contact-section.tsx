"use client";

import { useState } from "react";
import { site } from "@/data/site-content";
import { MotionReveal } from "@/components/motion-reveal";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function clearFeedback() {
    if (status === "success" || status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setErrorMessage("Network error. Check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <MotionReveal as="div">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Let’s build something together
          </h2>
          <p className="mt-3 text-pretty text-zinc-600 dark:text-zinc-400">
            The fastest way to reach me is email. I also read LinkedIn and GitHub.
          </p>
        </MotionReveal>
        <MotionReveal as="div" className="mt-10" delay={0.06}>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <a
              className="font-medium text-violet-700 underline decoration-violet-300 underline-offset-4 hover:decoration-violet-500 dark:text-violet-300 dark:decoration-violet-500/50"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <span className="text-zinc-300 dark:text-zinc-600" aria-hidden>
              |
            </span>
            <a
              className="font-medium text-zinc-800 hover:text-violet-700 dark:text-zinc-200 dark:hover:text-violet-300"
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="font-medium text-zinc-800 hover:text-violet-700 dark:text-zinc-200 dark:hover:text-violet-300"
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </MotionReveal>
        <MotionReveal as="div" className="mt-10 text-left" delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-200/80 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/40"
          >
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
              Send a message here. I read every note and reply as soon as I can.
            </p>
            {status === "success" && (
              <p className="mt-4 rounded-lg border border-emerald-200/80 bg-emerald-50/90 px-3 py-2 text-center text-sm text-emerald-800 dark:border-emerald-800/50 dark:bg-emerald-950/40 dark:text-emerald-200" role="status">
                Thanks — your message was sent. I will get back to you soon.
              </p>
            )}
            {status === "error" && errorMessage && (
              <p className="mt-4 rounded-lg border border-red-200/80 bg-red-50/90 px-3 py-2 text-center text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200" role="alert">
                {errorMessage}
              </p>
            )}
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    clearFeedback();
                    setName(e.target.value);
                  }}
                  autoComplete="name"
                  disabled={status === "loading"}
                  className="mt-1.5 w-full rounded-lg border border-zinc-200/90 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    clearFeedback();
                    setEmail(e.target.value);
                  }}
                  autoComplete="email"
                  required
                  disabled={status === "loading"}
                  className="mt-1.5 w-full rounded-lg border border-zinc-200/90 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    clearFeedback();
                    setMessage(e.target.value);
                  }}
                  rows={4}
                  required
                  minLength={10}
                  disabled={status === "loading"}
                  className="mt-1.5 w-full resize-y rounded-lg border border-zinc-200/90 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex h-11 min-w-[7.5rem] items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-violet-200"
              >
                {status === "loading" ? "Sending…" : "Get in touch"}
              </button>
            </div>
          </form>
        </MotionReveal>
      </div>
    </section>
  );
}
