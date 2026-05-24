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

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        label="Skills"
        title="Technical toolkit"
        description="Technologies and concepts I use to ship reliable, maintainable software."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {skillCategories.map((category) => (
          <motion.div key={category.category} variants={item}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="font-normal"
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
