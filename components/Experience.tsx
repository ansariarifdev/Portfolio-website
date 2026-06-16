"use client";

import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
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
import { fadeInUp, slideInLeft, viewportOnce } from "@/lib/motion";

const experiences = [
  {
    company: "Hands-on Experience",
    position: "Full-Stack Developer",
    period: "1+ Years",
    description:
      "Building real-time backend systems and scalable web applications. Focused on performance optimization, WebSocket integration, and robust authentication.",
    achievements: [
      "Built a real-time attendance system with TypeScript, Node.js, Express, MongoDB, and WebSockets — ~200% throughput improvement migrating to Bun.js",
      "Developed REST APIs with in-memory session handling and JWT-based RBAC",
      "Created chat backend with PostgreSQL, Prisma, and WebSockets — 5× higher throughput, 30–50 ms latency",
      "Designed database schemas with Zod validation and optimized event broadcasting",
      "Handled concurrent connections for real-time communication systems",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        label="Experience"
        title="Professional journey"
        description="Hands-on experience shipping real-time systems and production-ready applications."
      />

      <div className="relative">
        <div
          className="absolute top-6 bottom-6 left-[1.4375rem] hidden w-px bg-border sm:block"
          aria-hidden
        />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.position}
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-5 sm:gap-8"
            >
              <div className="relative z-10 flex shrink-0 flex-col items-center">
                <div className="flex size-12 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                  <Briefcase className="size-5 text-foreground/70" />
                </div>
              </div>

              <Card className="surface-card-hover flex-1 gap-0 py-0 shadow-none">
                <CardHeader className="space-y-3 px-6 py-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-lg font-semibold tracking-tight">
                        {experience.position}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-foreground/70">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="shrink-0 font-normal">
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5 border-t border-border/60 px-6 py-6 pt-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {experience.description}
                  </p>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement) => (
                      <motion.li
                        key={achievement}
                        variants={fadeInUp}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-foreground/40" />
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
