"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      isExternal: true,
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

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-black/80 shadow-lg border-b border-white/10"
          : "bg-black/60"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link href="#home" className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
                <div className="relative px-4 py-2 bg-black/50 rounded-lg leading-none border border-white/20 backdrop-blur-sm">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-lg">
                    AA
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="text-white/80 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Links */}
            <div className="hidden lg:flex items-center gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all border border-transparent hover:border-white/20"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <button className="relative px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold text-sm transition-transform transform group-hover:scale-105 shadow-lg">
                Let's Talk
              </button>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-white transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-white/10"
        >
          <div className="px-2 pt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="text-white/80 hover:text-white block px-4 py-2 rounded-md text-base font-medium transition-colors hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all border border-white/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>

            <a
              href="#contact"
              className="text-white block px-4 py-3 rounded-lg text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-500 transition-transform transform hover:scale-105 shadow-lg mt-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
