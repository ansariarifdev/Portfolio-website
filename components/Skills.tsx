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
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Node.js", "Bun.js", "Express.js", "React.js", "Next.js"],
  },
  {
    category: "Databases & ORMs",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma (ORM)"],
  },
  {
    category: "Core Concepts",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
      "SQL",
    ],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "WebSockets", "Docker", "Monorepo", "Turborepo"],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
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
          <motion.div key={category.category} variants={fadeInUp}>
            <Card
              className={cn(
                "surface-card-hover h-full gap-0 py-0 shadow-none",
                index === skillCategories.length - 1 && "sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full",
              )}
            >
              <CardHeader className="border-b border-border/60 px-5 py-4">
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
                      className="rounded-md font-normal"
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
