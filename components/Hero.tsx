"use client";

import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex justify-center"
        >
          <motion.div
            className="relative inline-flex rounded-full p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-gradient-shift animate-border-flow"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="flex items-center gap-1.5 rounded-full bg-black/85 px-3 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
              <span className="size-1.5 shrink-0 rounded-full bg-emerald-400/90" />
              Welcome to My Portfolio
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Arif Ansari
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed">
            Full-stack developer building{" "}
            <span className="text-white font-semibold">
              scalable, high-performance
            </span>{" "}
            web applications with{" "}
            <span className="text-white font-semibold">MERN</span> stack and{" "}
            <span className="text-white font-semibold">Next.js</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-white/60 max-w-2xl mx-auto mb-12 text-sm sm:text-base leading-relaxed"
        >
          I specialize in translating product ideas into reliable,
          production-ready systems with clean architecture and user-centric
          design. From real-time systems to containerized deployments, I deliver
          solutions that scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="#projects" className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <button className="relative px-8 py-3 bg-black rounded-lg text-white font-semibold transition-transform transform group-hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
              View My Work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/20 rounded-lg text-white font-semibold hover:border-white/50 hover:bg-white/5 transition-colors w-full sm:w-auto"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8"
        >
          <motion.a
            href="https://github.com/ansariarifdev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="text-white/60 hover:text-white transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ansariarif-dev/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="text-white/60 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ansariarif.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="text-white/60 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs">Scroll to explore</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
