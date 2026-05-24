"use client";

import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 border-b border-border px-6 py-24 sm:px-10 sm:py-32 md:py-40"
    >
      <motion.div
        className="mx-auto max-w-3xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item}>
          <Badge variant="secondary" className="mb-6 rounded-full px-3 py-1">
            Available for opportunities
          </Badge>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.1]"
        >
          Full-stack developer building scalable, production-ready web
          applications.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Hi, I&apos;m{" "}
          <span className="font-medium text-foreground">Arif Ansari</span>. I
          specialize in MERN stack and Next.js — from real-time backends to
          polished frontends with clean architecture and thoughtful UX.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Button size="lg" asChild>
            <a href="#projects">
              View my work
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Contact me</a>
          </Button>
        </motion.div>

        <motion.div variants={item}>
          <Separator className="my-10" />
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Connect</span>
            <div className="flex gap-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon-sm"
                    asChild
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
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
