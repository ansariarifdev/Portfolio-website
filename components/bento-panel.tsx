import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: StatItem[];
  className?: string;
}

export function StatsBar({ stats, className }: StatsBarProps) {
  return (
    <div
      className={cn(
        "bento-curve brick-pattern relative overflow-hidden bg-brand-navy px-6 py-8 sm:px-10 sm:py-10",
        className,
      )}
    >
      <div className="relative z-10 grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/15">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center gap-4 sm:px-6 first:sm:pl-0 last:sm:pr-0"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple/90 text-brand-navy">
                <Icon className="size-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-sm leading-snug text-white/70">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface BentoPanelProps {
  variant: "teal" | "navy";
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  curve?: "default" | "alt";
}

export function BentoPanel({
  variant,
  title,
  description,
  children,
  className,
  curve = "default",
}: BentoPanelProps) {
  return (
    <div
      className={cn(
        "brick-pattern relative flex flex-col overflow-hidden p-8 sm:p-10",
        curve === "default" ? "bento-curve" : "bento-curve-alt",
        variant === "teal" && "bg-brand-teal text-white",
        variant === "navy" && "bg-brand-navy text-white",
        className,
      )}
    >
      <div className="relative z-10 flex flex-1 flex-col">
        <h3 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
          {description}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}

export function BentoTag({
  children,
  variant = "teal",
}: {
  children: React.ReactNode;
  variant?: "teal" | "navy";
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3.5 py-1.5 text-xs font-medium sm:text-sm",
        variant === "teal" && "bg-white text-brand-teal-dark",
        variant === "navy" && "bg-white/15 text-white ring-1 ring-white/20",
      )}
    >
      {children}
    </span>
  );
}
