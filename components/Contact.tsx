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

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Get in touch</CardTitle>
              <CardDescription>
                Prefer email or connect on social — I typically respond within
                24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground">
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
                    className="block rounded-lg transition-colors hover:bg-muted/50 -mx-2 px-2 py-1"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/ansariarifdev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Send a message</CardTitle>
              <CardDescription>
                Share a bit about your project or opportunity.
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  <Send className="size-4" />
                </Button>

                {submitStatus === "success" && (
                  <p className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                    Message sent successfully. I&apos;ll get back to you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
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
