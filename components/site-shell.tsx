import { cn } from "@/lib/utils";

interface SiteShellProps {
  children: React.ReactNode;
  className?: string;
}

export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <div className="relative min-h-screen bg-muted/30">
      <div className="site-grid pointer-events-none fixed inset-0 opacity-40" />
      <div
        className={cn(
          "relative mx-auto min-h-screen w-full max-w-6xl border-x border-border/80 bg-background/95 shadow-sm backdrop-blur-sm",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "muted";
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[4.5rem] border-b border-border/60 px-6 py-24 sm:px-10 md:py-32",
        variant === "muted" && "bg-muted/40",
        className,
      )}
    >
      <div
        className={cn("mx-auto w-full max-w-4xl", containerClassName)}
      >
        {children}
      </div>
    </section>
  );
}
