"use client";

import { motion } from "motion/react";
import { Server, Zap, Shield } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Section } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Server,
    title: "Scalable backend systems",
    description:
      "Architecting high-performance server-side applications with Node.js, Bun, and modern frameworks — from monoliths to modular services.",
    tech: ["Node.js", "Bun", "Hono", "Microservices"],
  },
  {
    icon: Zap,
    title: "Real-time infrastructure",
    description:
      "Event-driven architectures for live interaction — WebSockets, pub/sub messaging, and low-latency data pipelines at scale.",
    tech: ["WebSockets", "Socket.io", "Redis", "Pub/Sub"],
  },
  {
    icon: Shield,
    title: "Data & security",
    description:
      "Type-safe database schemas, secure auth flows, RBAC, SQL optimization, and containerized deployments.",
    tech: ["PostgreSQL", "Prisma", "JWT", "Docker"],
  },
];

const stats = [
  { number: "5+", label: "Projects shipped" },
  { number: "10+", label: "Collaborators" },
  { number: "1+", label: "Years experience" },
];

export default function About() {
  return (
    <Section id="about" variant="muted">
      <SectionHeader
        label="About"
        title="Engineering reliable systems end to end"
        description="Backend-focused developer with a strong full-stack toolkit — building APIs, real-time features, and user-facing products."
        align="left"
      />

      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-8"
        >
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-foreground/90">
              I build scalable backends and APIs with TypeScript, Node.js, and
              modern runtimes. My focus spans real-time systems, clean REST
              contracts, and performance — from WebSockets to databases and auth.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I translate product requirements into maintainable code: robust
              validation, role-based access, and optimized messaging. Throughput,
              latency, and long-term maintainability guide every decision.
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="surface-card surface-card-hover rounded-lg p-4"
              >
                <dt className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {stat.number}
                </dt>
                <dd className="mt-1.5 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card
                  className={cn(
                    "surface-card-hover gap-0 py-0 shadow-none",
                    "group overflow-hidden",
                  )}
                >
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0 px-5 py-5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-foreground transition-colors group-hover:border-primary/20 group-hover:bg-primary/5">
                      <Icon className="size-[1.125rem]" />
                    </div>
                    <div className="min-w-0 space-y-1.5">
                      <CardTitle className="text-base font-semibold">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="border-t border-border/60 px-5 py-4 pl-[4.25rem]">
                    <div className="flex flex-wrap gap-1.5">
                      {feature.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-md font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
