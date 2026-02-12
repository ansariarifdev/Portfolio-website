"use client";

import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Hands-on Experience",
      position: "Full-Stack Developer",
      period: "1+ Years",
      description:
        "Building real-time backend systems and scalable web applications using modern technologies. Focused on performance optimization, WebSocket integration, and implementing robust authentication systems.",
      achievements: [
        "Built a real-time attendance system using TypeScript, Node.js, Express.js, MongoDB, and WebSockets, achieving 200% throughput improvement by migrating from Node.js to Bun.js",
        "Developed REST APIs for user and attendance management with in-memory session handling, implementing JWT-based authentication with role-based access control (RBAC)",
        "Created backend for real-time chat application using PostgreSQL, Prisma ORM, and WebSockets, achieving 5× higher throughput and reducing latency to 30–50 ms",
        "Designed database schemas, implemented Zod-based schema validation, and optimized real-time event broadcasting and unicasting",
        "Handled concurrent connections and optimized message broadcasting for real-time communication systems",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-4xl mx-auto">
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
              Experience
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Hands-on experience building real-time systems and scalable applications
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={item} className="relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-32 w-0.5 h-24 bg-gradient-to-b from-blue-500/50 to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="flex-shrink-0 mt-2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75" />
                    <div className="relative w-16 h-16 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-grow pb-8">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="border border-white/10 rounded-lg p-6 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {experience.position}
                      </h3>
                      <span className="text-sm text-blue-400 font-medium flex-shrink-0">
                        {experience.period}
                      </span>
                    </div>

                    <p className="text-white/60 mb-4">{experience.company}</p>
                    <p className="text-white/80 mb-4">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {experience.achievements.map(
                        (achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-white/70 text-sm"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-1.5" />
                            {achievement}
                          </motion.li>
                        ),
                      )}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
