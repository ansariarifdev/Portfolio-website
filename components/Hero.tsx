"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  FolderKanban,
  Users,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatsBar } from "@/components/bento-panel";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/ansariarifdev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ansariarif-dev/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ansariarif.dev@gmail.com",
    label: "Email",
  },
];

const heroStats = [
  {
    icon: FolderKanban,
    value: "5+",
    label: "Production projects shipped",
  },
  {
    icon: Clock,
    value: "1+",
    label: "Years hands-on experience",
  },
  {
    icon: Users,
    value: "10+",
    label: "Developers collaborated with",
  },
];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-[4.5rem]">
      <div className="mx-auto max-w-6xl px-6 pt-12 sm:px-8 sm:pt-16 md:px-12 md:pt-20 lg:px-16">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge
                variant="outline"
                className="gap-2 rounded-full border-brand-teal/30 bg-brand-teal/10 px-4 py-1.5 font-normal text-brand-teal-dark"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-teal opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand-teal" />
                </span>
                Available for opportunities
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            >
              Building scalable, production-ready web applications
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Hi, I&apos;m{" "}
              <span className="font-semibold text-foreground">Arif Ansari</span>
              . Full-stack developer specializing in MERN stack and Next.js —
              from real-time backends to polished frontends with clean
              architecture.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                asChild
                className="group h-12 rounded-full bg-brand-navy px-7 hover:bg-brand-navy-light"
              >
                <a href="#projects">
                  View my work
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 rounded-full border-foreground/15 px-7 hover:bg-muted"
              >
                <a
                  href="https://drive.google.com/file/d/1HK9TQOc1tgKDViJy9Lf8sIAtoS0XM4m_/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex items-center gap-3"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    asChild
                    className="size-10 rounded-full border-foreground/10 hover:border-brand-teal/40 hover:bg-brand-teal/5"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="size-4" />
                    </a>
                  </Button>
                );
              })}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="bento-curve-alt relative aspect-square overflow-hidden bg-brand-navy sm:aspect-[4/3.5]">
              <div className="brick-pattern absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-light/40 to-transparent" />

              {/* Decorative rings */}
              <div className="absolute -right-8 top-8 size-48 rounded-full border border-white/10" />
              <div className="absolute -right-4 top-12 size-36 rounded-full border border-white/10" />

              {/* Code badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-8 top-8 flex size-14 items-center justify-center rounded-full bg-white shadow-lg"
              >
                <Code2 className="size-6 text-brand-navy" />
              </motion.div>

              {/* Center content */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="flex size-24 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
                  <span className="font-mono text-3xl font-bold text-white">
                    AA
                  </span>
                </div>
                <p className="mt-6 text-lg font-semibold text-white">
                  Full-Stack Developer
                </p>
                <p className="mt-2 text-sm text-white/65">
                  MERN · Next.js · TypeScript
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mt-14 sm:mt-16"
        >
          <StatsBar stats={heroStats} />
        </motion.div>
      </div>
    </section>
  );
}
