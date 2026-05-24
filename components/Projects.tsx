"use client";

import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Section } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  accent: string;
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Course Selling Website",
    description:
      "CourseVault — a full-stack online courses marketplace where learners browse and purchase courses while creators publish content and track enrollments.",
    highlights: [
      "Role-based auth for learners and course creators",
      "PostgreSQL + Prisma for courses and enrollments",
      "Simulated checkout with lifetime access",
      "Zod validation across API and forms",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod"],
    accent: "from-amber-100 to-orange-50",
    github: "https://github.com/ansariarifdev/course-selling-website",
    demo: "https://course-selling-website-alpha-three.vercel.app/",
  },
  {
    title: "Bookmark Manager",
    description:
      "Bookmarker — a link manager with categories, debounced search, public sharing, and import/export for organized bookmark libraries.",
    highlights: [
      "Dashboard with category filters and instant search",
      "Public sharing with view analytics",
      "HTML import/export and keyboard shortcuts",
      "PostgreSQL + Prisma data modeling",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    accent: "from-emerald-100 to-teal-50",
    github: "https://github.com/ansariarifdev/bookmark-manager",
    demo: "https://bookmark-manager-kohl.vercel.app/",
  },
  {
    title: "Real-time Notification System",
    description:
      "Scalable backend for low-latency notification delivery via WebSockets with event-driven architecture.",
    highlights: [
      "Event-driven WebSocket communication",
      "Bun.js runtime for improved throughput",
      "JWT auth with RBAC",
      "PostgreSQL + Prisma ORM",
    ],
    tags: [
      "Node.js",
      "Express.js",
      "Bun.js",
      "PostgreSQL",
      "Prisma",
      "WebSockets",
      "TypeScript",
      "JWT",
    ],
    accent: "from-indigo-100 to-violet-50",
    github: "https://github.com/ansariarifdev/realtime-notification-system-",
  },
  {
    title: "Real-time Chat Application",
    description:
      "High-performance chat backend with WebSocket-based messaging, rooms, and persistent storage.",
    highlights: [
      "5× throughput vs long polling; ~30–50 ms latency",
      "PostgreSQL schema with Prisma migrations",
      "JWT + RBAC for chat rooms",
      "Optimized concurrent broadcasting",
    ],
    tags: [
      "Node.js",
      "Express.js",
      "Bun.js",
      "PostgreSQL",
      "Prisma",
      "WebSockets",
      "TypeScript",
      "JWT",
    ],
    accent: "from-purple-100 to-pink-50",
    github: "https://github.com/ansariarifdev/chat-application",
  },
  {
    title: "Live Attendance System",
    description:
      "Real-time attendance backend with WebSockets, session handling, and optimized event delivery.",
    highlights: [
      "~200% throughput gain migrating to Bun.js",
      "REST APIs with in-memory sessions",
      "JWT + RBAC on protected routes",
      "Zod validation and unicasting/broadcasting",
    ],
    tags: [
      "Node.js",
      "Express.js",
      "Bun.js",
      "PostgreSQL",
      "Prisma",
      "WebSockets",
      "TypeScript",
      "JWT",
      "Zod",
    ],
    accent: "from-sky-100 to-cyan-50",
    github:
      "https://github.com/ansariarifdev/realtime-attendance-system-backend",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Projects() {
  return (
    <Section id="projects" variant="muted" containerClassName="max-w-none">
      <SectionHeader
        label="Projects"
        title="Featured work"
        description="Full-stack applications and real-time backends — from marketplaces to WebSocket-driven systems."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <Card className="flex h-full flex-col overflow-hidden pt-0 transition-shadow hover:shadow-md">
              <div
                className={`bg-gradient-to-br ${project.accent} border-b border-border px-6 py-8`}
              >
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </div>

              <CardHeader className="pb-2">
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-4 pt-0">
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2 border-t pt-6">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="size-4" />
                      Live demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Separator className="mb-8" />
        <Button variant="outline" asChild>
          <a
            href="https://github.com/ansariarifdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all on GitHub
            <ExternalLink className="size-4" />
          </a>
        </Button>
      </motion.div>
    </Section>
  );
}
