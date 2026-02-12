"use client";

import { motion } from "motion/react";
import { Server, Zap, Shield } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Server,
      title: "Scalable Backend Systems",
      description:
        "Architecting high-performance server-side applications. Specialist in migrating legacy monolithic systems to modern, modular microservices using Node.js, Bun, and Hono.",
      tech: ["Node.js", "Bun", "Hono", "Microservices"],
    },
    {
      icon: Zap,
      title: "Real-Time Infrastructure",
      description:
        "Building event-driven architectures for live interaction. Expert in handling high-concurrency WebSocket connections, pub/sub messaging, and low-latency data pipelines.",
      tech: ["WebSockets", "Socket.io", "Redis", "Pub/Sub"],
    },
    {
      icon: Shield,
      title: "Data & Security",
      description:
        "Designing robust, type-safe database schemas and secure auth flows. Implementing advanced RBAC, complex SQL optimization, and containerized deployments.",
      tech: ["PostgreSQL", "Prisma", "JWT", "Docker"],
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-black via-blue-900/10 to-black overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-3">
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg">
            Backend-focused developer building reliable, real-time systems
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-white/85 text-base sm:text-lg leading-relaxed">
              I build scalable backends and APIs with TypeScript, Node.js, and
              modern runtimes. I focus on real-time systems, clean APIs, and
              performance—from REST and WebSockets to databases and auth.
            </p>
            <p className="text-white/75 text-base leading-relaxed">
              I turn product requirements into maintainable code: robust
              validation, role-based access, and optimized real-time messaging.
              I care about throughput, latency, and long-term maintainability.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { number: "5+", label: "Projects" },
                { number: "10+", label: "Collaborated" },
                { number: "1+", label: "Years Hands-on" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-white/55 text-xs sm:text-sm mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="group border border-white/10 rounded-xl p-5 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-linear-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/25 group-hover:to-purple-500/25 transition-all shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-white/55 text-xs sm:text-sm leading-relaxed mb-3">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
