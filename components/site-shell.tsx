import { cn } from "@/lib/utils";

interface SiteShellProps {
  children: React.ReactNode;
  className?: string;
}

export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-muted/40">
      <div
        className={cn(
          "relative mx-auto min-h-screen w-full max-w-5xl border-x border-border bg-background shadow-sm",
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
        "scroll-mt-20 px-6 py-20 sm:px-10 md:py-28",
        variant === "muted" && "bg-muted/50",
        className,
      )}
    >
      <div
        className={cn("mx-auto w-full max-w-3xl", containerClassName)}
      >
        {children}
      </div>
    </section>
  );
}
