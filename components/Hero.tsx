"use client";

import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-[4.5rem] border-b border-border/60 px-6 py-28 sm:px-10 sm:py-36 md:py-44"
    >
      <motion.div
        className="mx-auto max-w-4xl"
        variants={staggerContainer(0.12, 0.08)}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-3">
          <Badge
            variant="outline"
            className="gap-2 rounded-full px-3 py-1 font-normal"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </Badge>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="font-mono text-sm tracking-wide text-muted-foreground"
        >
          Full-Stack Developer
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.08]"
        >
          Arif Ansari
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          I build scalable, production-ready web applications with the MERN
          stack and Next.js — from real-time backends to polished frontends
          with clean architecture and thoughtful UX.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Button size="lg" asChild className="group">
            <a href="#projects">
              View my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://drive.google.com/file/d/1HK9TQOc1tgKDViJy9Lf8sIAtoS0XM4m_/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download resume
            </a>
          </Button>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Separator className="my-12" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Based in Bangalore, India · Open to remote & on-site roles
            </p>
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon-sm"
                    asChild
                    className="rounded-full"
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
