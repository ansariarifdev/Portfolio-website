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
  accent: "teal" | "navy";
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
    accent: "teal",
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
    accent: "navy",
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
    accent: "teal",
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
    accent: "navy",
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
    accent: "teal",
  },
];

export default function Projects() {
  return (
    <Section id="projects" variant="muted">
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
              <div
                className={cn(
                  "brick-pattern relative px-6 py-8 text-white sm:px-8",
                  project.accent === "teal" ? "bg-brand-teal" : "bg-brand-navy",
                  index === 0 ? "md:w-[42%]" : "",
                )}
              >
                <div className="relative z-10">
                  <span className="font-mono text-xs text-white/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <CardTitle className="mt-2 text-xl font-bold text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mt-3 text-sm leading-relaxed text-white/75">
                    {project.description}
                  </CardDescription>
                </div>
              </div>

              <div
                className={cn(
                  "flex flex-1 flex-col bg-card",
                  index === 0 && "md:flex-1",
                )}
              >
                <CardContent className="flex-1 space-y-5 px-6 py-6">
                  <ul className="space-y-2.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span
                          className={cn(
                            "mt-[0.45rem] size-1.5 shrink-0 rounded-full",
                            project.accent === "teal"
                              ? "bg-brand-teal"
                              : "bg-brand-navy",
                          )}
                        />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={cn(
                          "rounded-full font-normal",
                          project.accent === "teal"
                            ? "border-brand-teal/25 bg-brand-teal/5"
                            : "border-brand-navy/15 bg-brand-navy/5",
                        )}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2 border-t border-border/60 px-6 py-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="rounded-full"
                  >
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
                    <Button
                      size="sm"
                      asChild
                      className={cn(
                        "rounded-full text-white",
                        project.accent === "teal"
                          ? "bg-brand-teal hover:bg-brand-teal-dark"
                          : "bg-brand-navy hover:bg-brand-navy-light",
                      )}
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live demo
                        <ArrowUpRight className="size-4" />
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
        <Button
          variant="outline"
          asChild
          className="group rounded-full border-brand-navy/20 px-6 hover:bg-brand-navy/5"
        >
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
