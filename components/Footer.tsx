"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="brick-pattern relative overflow-hidden bg-brand-navy px-6 py-14 sm:px-8 md:px-12 lg:px-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-5">
            <Link
              href="#home"
              className="inline-block text-xl font-bold tracking-tight text-white"
            >
              Arif<span className="text-brand-teal">.</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/65">
              Full-stack developer building scalable web applications with
              modern technologies.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon-sm"
                    asChild
                    className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
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

          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-1">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="my-10 bg-white/15" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/55">
            &copy; {currentYear} Arif Ansari. All rights reserved.
          </p>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#home" className="gap-2">
                Back to top
                <ArrowUp className="size-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
