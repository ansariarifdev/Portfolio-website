"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <Badge
        variant="secondary"
        className="mb-4 rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase"
      >
        {label}
      </Badge>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.header>
  );
}
