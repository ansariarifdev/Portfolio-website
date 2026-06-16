"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { Section } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { fadeInUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ansariarif.dev@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=ansariarif.dev@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    link: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" variant="muted">
      <SectionHeader
        label="Contact"
        title="Let's work together"
        description="I'm open to new projects, collaborations, and full-time opportunities."
      />

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Card className="surface-card-hover h-full gap-0 overflow-hidden py-0 shadow-none">
            <div className="brick-pattern relative bg-brand-teal px-6 py-8 sm:px-8">
              <div className="relative z-10">
                <CardTitle className="text-xl font-bold text-white">
                  Get in touch
                </CardTitle>
                <CardDescription className="mt-2 text-sm leading-relaxed text-white/75">
                  Prefer email or connect on social — I typically respond within
                  24 hours.
                </CardDescription>
              </div>
            </div>
            <CardContent className="space-y-1 px-6 py-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4 px-3 py-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-purple/80 text-brand-navy">
                      <Icon className="size-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {info.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );

                return info.link ? (
                  <a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl transition-colors hover:bg-muted/60"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info.label} className="rounded-xl">
                    {content}
                  </div>
                );
              })}

              <div className="flex gap-2 px-3 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-full"
                >
                  <a
                    href="https://github.com/ansariarifdev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-full"
                >
                  <a
                    href="https://www.linkedin.com/in/ansariarif-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ delay: 0.08 }}
        >
          <Card className="surface-card-hover gap-0 py-0 shadow-none">
            <CardHeader className="px-6 py-6">
              <CardTitle className="text-base font-semibold">
                Send a message
              </CardTitle>
              <CardDescription className="leading-relaxed">
                Share a bit about your project or opportunity.
              </CardDescription>
            </CardHeader>
            <CardContent className="border-t border-border/60 px-6 py-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="rounded-xl bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="rounded-xl bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="min-h-[120px] resize-none rounded-xl bg-background"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-brand-navy hover:bg-brand-navy-light"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  <Send className="size-4" />
                </Button>

                {submitStatus === "success" && (
                  <p
                    className={cn(
                      "rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800",
                    )}
                    role="status"
                  >
                    Message sent successfully. I&apos;ll get back to you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    role="alert"
                  >
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
