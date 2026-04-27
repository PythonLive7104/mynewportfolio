/**
 * Central place for your portfolio copy and links. Replace with your own details.
 *
 * - Hero, nav logo, about, contact links: edit `site` below and `about` / `projects` / `skills` in this file.
 * - Contact form email delivery: set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and optional `RESEND_FROM` in `.env.local` (see `.env.example`).
 */
export const site = {
  name: "Your Name",
  title: "Full-Stack Developer",
  location: "Remote · Open to relocation",
  tagline: "I build clear, fast web products and care about the details that make teams ship with confidence.",
  /** Profile/hero image under `public/images/`. */
  profileImage: "/images/linkedin-image.png",
  email: "hello@youremail.com",
  social: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/yourhandle",
  },
} as const;

export type SkillCategory = "Frontend" | "Backend" | "Tools / DevOps";

export type Skill = {
  name: string;
  category: SkillCategory;
};

export const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Git", category: "Tools / DevOps" },
  { name: "Docker", category: "Tools / DevOps" },
  { name: "Vercel / CI", category: "Tools / DevOps" },
];

export type Project = {
  id: string;
  title: string;
  blurb: string;
  problem: string;
  approach: string;
  value: string;
  stack: string[];
  tags: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    id: "saas-dashboard",
    title: "SaaS Team Dashboard",
    blurb: "A focused analytics surface that helps small teams see retention without drowning in charts.",
    problem: "The client’s support team was exporting CSVs from three tools to answer simple questions about usage and churn.",
    approach: "I modeled the core events once, added role-based views, and shipped incremental loads so the UI stays fast on large accounts.",
    value: "Cut weekly reporting from hours to minutes and became the first screen leadership opens in the morning.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    tags: ["SaaS", "Frontend", "Data"],
    image: "/projects/saas.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "api-integrations",
    title: "Integration Gateway API",
    blurb: "A small service layer that standardizes webhooks and retries across partner APIs.",
    problem: "Each integration was a one-off script, failures were hard to trace, and idempotency was inconsistent.",
    approach: "I introduced a single pipeline with structured logs, dead-lettering, and a thin mapping layer so new partners ship in days, not weeks.",
    value: "Improved deliverability and made on-call noise drop because failures became actionable.",
    stack: ["Node.js", "Express", "Redis", "Docker"],
    tags: ["Backend", "APIs"],
    image: "/projects/api.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "content-app",
    title: "Content Authoring App",
    blurb: "A lightweight editor and preview path for marketing pages without touching code.",
    problem: "Marketing had to file tickets for tiny copy and asset swaps, which clogged engineering.",
    approach: "I shipped a block-based editor with strict schemas, draft previews, and permissioned publishing.",
    value: "Reduced turnaround for content updates and kept the site’s performance budget intact.",
    stack: ["React", "Next.js", "MDX", "Vercel"],
    tags: ["Frontend", "CMS"],
    image: "/projects/content.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "auth-library",
    title: "Session & Auth Module",
    blurb: "Reusable sign-in, magic links, and org switching for internal tools.",
    problem: "Every internal app reimplemented auth with slight differences, creating security and UX drift.",
    approach: "I extracted shared flows, centralized session policy, and documented extension points for SSO later.",
    value: "New internal apps ship with consistent auth in hours instead of a sprint.",
    stack: ["TypeScript", "Node.js", "Web Crypto"],
    tags: ["Security", "DX"],
    image: "/projects/auth.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];

export const about = {
  paragraphs: [
    "I’m a full-stack developer who likes turning fuzzy requirements into software that is easy to operate and easy to change.",
    "Most of my work lives at the edge of product and platform: data models, UI that stays fast, and the glue between services. I care about code review culture, small deploys, and writing so the next person isn’t lost.",
    "Outside of work I tinker with tooling, read about systems design, and keep my side projects small and honest.",
  ],
} as const;
