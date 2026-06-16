"use client";

import { motion } from "motion/react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
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
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
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
    github:
      "https://github.com/ansariarifdev/realtime-attendance-system-backend",
  },
];

export default function Projects() {
  return (
    <Section id="projects" variant="muted" containerClassName="max-w-5xl">
      <SectionHeader
        label="Projects"
        title="Featured work"
        description="Full-stack applications and real-time backends — from marketplaces to WebSocket-driven systems."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={fadeInUp}
            className={cn(index === 0 && "md:col-span-2")}
          >
            <Card
              className={cn(
                "surface-card-hover group h-full gap-0 overflow-hidden py-0 shadow-none",
                index === 0 && "md:flex md:flex-row",
              )}
            >
              <CardHeader
                className={cn(
                  "space-y-3 px-6 py-6",
                  index === 0 && "md:flex-1 md:border-r md:border-border/60",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <CardTitle className="text-lg font-semibold tracking-tight">
                      {project.title}
                    </CardTitle>
                  </div>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-all hover:border-foreground/20 hover:text-foreground"
                      aria-label={`Open ${project.title} live demo`}
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <div
                className={cn(
                  "flex flex-1 flex-col",
                  index === 0 && "md:max-w-md",
                )}
              >
                <CardContent className="flex-1 space-y-5 px-6 py-5 pt-0 md:pt-5">
                  <ul className="space-y-2.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-foreground/40" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-md font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2 border-t border-border/60 px-6 py-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-4" />
                      Source
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
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 flex justify-center"
      >
        <Button variant="outline" asChild className="group">
          <a
            href="https://github.com/ansariarifdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all on GitHub
            <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>
      </motion.div>
    </Section>
  );
}
