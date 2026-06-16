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
        "mb-14 md:mb-20",
        isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <div
        className={cn(
          "mb-5 flex items-center gap-3",
          isCenter && "justify-center",
        )}
      >
        <span className="font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
          {label}
        </span>
        <span
          className={cn(
            "h-px bg-border",
            isCenter ? "w-12" : "flex-1 max-w-24",
          )}
          aria-hidden
        />
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
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
