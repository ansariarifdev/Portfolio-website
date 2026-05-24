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
    <footer className="border-t border-border bg-background px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-4">
            <Link
              href="#home"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              Arif Ansari
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Full-stack developer building scalable web applications with
              modern technologies.
            </p>
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

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Arif Ansari. All rights reserved.
          </p>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button variant="outline" size="sm" asChild>
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
