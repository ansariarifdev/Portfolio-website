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
  { number: "5+", label: "Projects" },
  { number: "10+", label: "Collaborated" },
  { number: "1+", label: "Years hands-on" },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function About() {
  return (
    <Section id="about" variant="muted">
      <SectionHeader
        label="About"
        title="Engineering reliable systems end to end"
        description="Backend-focused developer with a strong full-stack toolkit — building APIs, real-time features, and user-facing products."
        align="left"
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
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

          <dl className="grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {stat.number}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={cardVariants}>
                <Card className="transition-shadow hover:shadow-md">
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <CardTitle className="text-base">{feature.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-[4.5rem] pt-0">
                    <div className="flex flex-wrap gap-2">
                      {feature.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-normal">
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
