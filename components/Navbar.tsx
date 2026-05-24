"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1HK9TQOc1tgKDViJy9Lf8sIAtoS0XM4m_/view?usp=drive_link",
    external: true,
  },
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <nav className="flex h-16 items-center justify-between px-6 sm:px-10">
        <Link
          href="#home"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          Arif Ansari
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              size="sm"
              asChild
              className="text-muted-foreground hover:text-foreground"
            >
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </a>
            </Button>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <div className="mr-2 flex items-center gap-1">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button key={social.label} variant="ghost" size="icon-sm" asChild>
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
          <Button size="sm" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="justify-start"
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </a>
                </Button>
              ))}
            </div>
            <Separator className="my-6" />
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button key={social.label} variant="outline" size="icon" asChild>
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
            <Button className="mt-6 w-full" asChild onClick={() => setOpen(false)}>
              <a href="#contact">Get in touch</a>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
