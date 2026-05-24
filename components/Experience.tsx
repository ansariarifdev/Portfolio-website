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

      <div className="relative space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.position}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/5 text-primary">
                <Briefcase className="size-5" />
              </div>
              <div className="mt-2 w-px flex-1 bg-border" />
            </div>

            <Card className="flex-1 transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <CardTitle className="text-lg">{experience.position}</CardTitle>
                  <Badge variant="secondary">{experience.period}</Badge>
                </div>
                <CardDescription className="font-medium text-foreground/80">
                  {experience.company}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {experience.description}
                </p>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
