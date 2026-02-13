"use client";

import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Live Attendance System",
      description:
        "Built a real-time attendance system using TypeScript, Node.js, Express.js, MongoDB, and WebSockets for low-latency communication.",
      highlights: [
        "Improved throughput by approximately 200% by switching the runtime from Node.js to Bun.js",
        "Designed REST APIs for user and attendance management with in-memory session handling for live sessions",
        "Implemented token-based authentication using JSON Web Tokens (JWT) with enforced role-based access control (RBAC)",
        "Added Zod-based schema validation with robust error handling and optimized real-time event unicasting and broadcasting",
      ],
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "WebSockets",
        "TypeScript",
        "JWT",
        "Bun.js",
        "Zod",
      ],
      image: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500",
      github: "#",
      demo: "#",
    },
    {
      title: "Real-time Chat App (Backend)",
      description:
        "Built the backend of a real-time chat application using TypeScript, Node.js, Express.js, PostgreSQL, Prisma, and WebSockets.",
      highlights: [
        "Achieved up to 5× higher throughput and reduced latency to 30–50 ms (vs. 100–300 ms with long polling) by using WebSockets for real-time communication",
        "Designed the PostgreSQL schema and used Prisma ORM for type-safe database access and migrations",
        "Implemented cookie-based authentication with role-based access control (RBAC), along with chat rooms and message persistence",
        "Handled concurrent connections and optimized real-time message broadcasting",
      ],
      tags: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "WebSockets",
        "TypeScript",
        "RBAC",
      ],
      image: "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500",
      github: "#",
      demo: "#",
    },
    {
      title: "Valentine's Proposal App",
      description:
        "A highly interactive and romantic proposal application featuring custom animations, playful user interactions, and a responsive mobile-first design.",
      highlights: [
        "Engineered a dynamic 'evasive button' mechanism using advanced event handling and collision detection logic",
        "Implemented smooth, complex entry and exit animations using Framer Motion for an immersive user experience",
        "Designed a fully responsive UI with Tailwind CSS, ensuring seamless performance across all device sizes",
        "Optimized component rendering and state management in Next.js for fluid interactivity",
      ],
      tags: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      image: "bg-gradient-to-br from-rose-500 via-red-500 to-pink-600",
      github: "https://github.com/ansariarifdev/be-my-valentine",
      demo: "https://be-my-valentine-bay-delta.vercel.app/",
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
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-blue-900/5 to-black overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
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
              Featured Projects
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Showcasing real-time backend systems with WebSocket integration,
            performance optimization, and scalable architecture
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full"
            >
              {/* Card */}
              <div className="relative h-full border border-white/10 rounded-xl overflow-hidden bg-black/50 backdrop-blur hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Image/Gradient Area */}
                <div
                  className={`h-48 ${project.image} opacity-90 group-hover:opacity-100 transition-opacity duration-300 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col">
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="mb-6 space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlightIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: highlightIndex * 0.1,
                            duration: 0.3,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-white/70 text-sm"
                        >
                          <span className="text-blue-400 mt-1.5 flex-shrink-0">
                            •
                          </span>
                          <span className="leading-relaxed">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tagIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 rounded-md text-xs font-medium border border-white/20 text-white/80 bg-white/5 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-200"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-white/10 mt-auto">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium group/link"
                    >
                      <Github
                        size={16}
                        className="group-hover/link:rotate-12 transition-transform duration-300"
                      />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium group/link"
                    >
                      <ExternalLink
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform duration-300"
                      />
                      Demo
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="#" className="group relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300" />
            <button className="relative px-8 py-3 bg-black rounded-lg text-white font-semibold transition-transform transform group-hover:scale-105 border border-white/20 group-hover:border-white/50">
              View All Projects
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
