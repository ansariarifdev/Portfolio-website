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
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1lbc9c-D-Rc4yAaV0_xhCdlTmIzuo7b2X/view?usp=drive_link",
    external: true,
    id: "resume",
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

const sectionIds = navItems
  .filter((item) => !item.external)
  .map((item) => item.id);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    const homeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveSection("home");
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 },
    );

    const home = document.getElementById("home");
    if (home) {
      homeObserver.observe(home);
      observers.push(homeObserver);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-lg"
          : "bg-background/80 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16">
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight text-foreground"
        >
          Arif<span className="text-brand-teal">.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                !item.external && activeSection === item.id
                  ? "text-brand-navy"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
              {!item.external && activeSection === item.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-teal"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.label}
                variant="ghost"
                size="icon-sm"
                asChild
                className="rounded-full text-muted-foreground hover:text-brand-navy"
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
          <Button
            size="sm"
            asChild
            className="rounded-full bg-brand-navy px-5 hover:bg-brand-navy-light"
          >
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
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-1">
              <Button
                variant="ghost"
                className="justify-start"
                asChild
                onClick={() => setOpen(false)}
              >
                <a href="#home">Home</a>
              </Button>
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
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
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
            <Button
              className="mt-6 w-full rounded-full bg-brand-navy hover:bg-brand-navy-light"
              asChild
              onClick={() => setOpen(false)}
            >
              <a href="#contact">Get in touch</a>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
