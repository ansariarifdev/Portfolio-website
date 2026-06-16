"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { fadeInUp, viewportOnce } from "@/lib/motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.header
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <span
        className={cn(
          "mb-4 inline-block rounded-full bg-brand-teal/15 px-4 py-1 text-xs font-semibold tracking-wide text-brand-teal-dark uppercase",
          isCenter && "mx-auto",
        )}
      >
        {label}
      </span>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.header>
  );
}
