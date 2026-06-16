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
import { slideInLeft, viewportOnce } from "@/lib/motion";

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
    <Section id="experience" variant="white">
      <SectionHeader
        label="Experience"
        title="Professional journey"
        description="Hands-on experience shipping real-time systems and production-ready applications."
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
          >
            <Card className="surface-card-hover gap-0 overflow-hidden py-0 shadow-none">
              <div className="brick-pattern relative bg-brand-navy px-6 py-6 sm:px-8">
                <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-brand-purple/90 text-brand-navy">
                      <Briefcase className="size-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-white">
                        {experience.position}
                      </CardTitle>
                      <CardDescription className="mt-1 text-sm font-medium text-white/70">
                        {experience.company}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="shrink-0 rounded-full border-0 bg-white/15 font-normal text-white hover:bg-white/20">
                    {experience.period}
                  </Badge>
                </div>
              </div>

              <CardHeader className="px-6 py-5 sm:px-8">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {experience.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-3 border-t border-border/60 px-6 py-6 sm:px-8">
                {experience.achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-brand-teal" />
                    <span className="leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
