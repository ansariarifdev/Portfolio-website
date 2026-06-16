"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/section-header";
import { Section } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["C++", "JavaScript", "TypeScript"],
    accent: "teal" as const,
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Node.js", "Bun.js", "Express.js", "React.js", "Next.js"],
    accent: "navy" as const,
  },
  {
    category: "Databases & ORMs",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma (ORM)"],
    accent: "teal" as const,
  },
  {
    category: "Core Concepts",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
      "SQL",
    ],
    accent: "navy" as const,
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "WebSockets", "Docker", "Monorepo", "Turborepo"],
    accent: "teal" as const,
  },
];

export default function Skills() {
  return (
    <Section id="skills" variant="white">
      <SectionHeader
        label="Skills"
        title="Technical toolkit"
        description="Technologies and concepts I use to ship reliable, maintainable software."
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.category}
            variants={fadeInUp}
            className={cn(
              index === skillCategories.length - 1 &&
                "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-lg",
            )}
          >
            <Card className="surface-card surface-card-hover h-full gap-0 overflow-hidden py-0 shadow-none">
              <CardHeader
                className={cn(
                  "px-5 py-4",
                  category.accent === "teal"
                    ? "bg-brand-teal/10"
                    : "bg-brand-navy/5",
                )}
              >
                <CardTitle className="text-sm font-semibold tracking-tight">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 py-4">
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={cn(
                        "rounded-full font-normal",
                        category.accent === "teal"
                          ? "border-brand-teal/30 bg-brand-teal/5 text-brand-teal-dark"
                          : "border-brand-navy/15 bg-brand-navy/5 text-brand-navy",
                      )}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
