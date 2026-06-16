"use client";

import { motion } from "motion/react";
import { Server, Zap, Shield } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Section } from "@/components/site-shell";
import { BentoPanel, BentoTag } from "@/components/bento-panel";
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

const skillTags = [
  "Full Stack Development",
  "Real-World Projects",
  "WebSockets & Real-time",
  "Production Ready",
  "DevOps & Deployment",
  "TypeScript & Next.js",
];

const features = [
  {
    icon: Server,
    title: "Scalable backend systems",
    description:
      "High-performance server-side applications with Node.js, Bun, and modern frameworks.",
    tech: ["Node.js", "Bun", "Hono", "Microservices"],
  },
  {
    icon: Zap,
    title: "Real-time infrastructure",
    description:
      "Event-driven architectures — WebSockets, pub/sub, and low-latency pipelines.",
    tech: ["WebSockets", "Socket.io", "Redis", "Pub/Sub"],
  },
  {
    icon: Shield,
    title: "Data & security",
    description:
      "Type-safe schemas, secure auth, RBAC, and containerized deployments.",
    tech: ["PostgreSQL", "Prisma", "JWT", "Docker"],
  },
];

export default function About() {
  return (
    <>
      <Section id="about" className="pt-8 md:pt-12">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 lg:grid-cols-2"
        >
          <motion.div variants={fadeInUp}>
            <BentoPanel
              variant="teal"
              title="Production-ready skills that matter"
              description="Master development through real-world applications, not tutorials — building systems that scale."
            >
              <div className="flex flex-wrap gap-2">
                {skillTags.map((tag) => (
                  <BentoTag key={tag} variant="teal">
                    {tag}
                  </BentoTag>
                ))}
              </div>
            </BentoPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <BentoPanel
              variant="navy"
              curve="alt"
              title="Engineering reliable systems end to end"
              description="Backend-focused full-stack developer building APIs, real-time features, and user-facing products with clean architecture and thoughtful UX."
            />
          </motion.div>
        </motion.div>
      </Section>

      <Section variant="muted">
        <SectionHeader
          label="About"
          title="What I bring to the table"
          description="I translate product requirements into maintainable code — robust validation, role-based access, and optimized messaging."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 md:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card
                  className={cn(
                    "surface-card surface-card-hover h-full gap-0 overflow-hidden py-0 shadow-none",
                  )}
                >
                  <CardHeader className="space-y-4 px-6 py-6">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-brand-purple/80 text-brand-navy">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-base font-semibold">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="border-t border-border/60 px-6 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {feature.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="rounded-full border-brand-navy/15 bg-brand-navy/5 font-normal text-brand-navy"
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
      </Section>
    </>
  );
}
