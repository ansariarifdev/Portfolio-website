"use client";

import { motion } from "motion/react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C++", "JavaScript", "TypeScript"],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        "Node.js",
        "Bun.js",
        "Express.js",
        "React.js",
        "Next.js",
      ],
    },
    {
      category: "Databases & ORMs",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Prisma (ORM)",
      ],
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
      skills: [
        "Git",
        "GitHub",
        "WebSockets",
        "Docker",
        "Monorepo",
        "Turborepo",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit built through diverse project experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={item}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Card */}
              <div className="border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 h-full bg-black/50 backdrop-blur">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                  {category.category}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium border border-white/20 text-white/80 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 bg-white/5 hover:bg-blue-500/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
