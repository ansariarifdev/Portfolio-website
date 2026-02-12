"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
        { label: "Blog", href: "#" },
        { label: "Resources", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/ansariarifdev", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ansariarif-dev/", label: "LinkedIn" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=ansariarif.dev@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 top-0">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50" />
              <div className="relative px-4 py-2 bg-black rounded-lg leading-none">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-lg">
                  AA
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-4">
              Building scalable web applications with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      {link.label}
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter/CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Get notified about new projects and posts.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 text-sm focus:border-blue-500 focus:outline-none transition-colors"
              />
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-sm hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Arif Ansari. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white opacity-0 hover:opacity-100 transition-opacity pointer-events-none hover:pointer-events-auto"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7-7m0 0l-7 7m7-7v12"
            />
          </svg>
        </motion.a>
      </div>
    </footer>
  );
}
