import { cn } from "@/lib/utils";

interface SiteShellProps {
  children: React.ReactNode;
  className?: string;
}

export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <div className={cn("min-h-screen bg-muted/50", className)}>{children}</div>
  );
}

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "muted" | "white";
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
        "scroll-mt-[4.5rem] px-6 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16",
        variant === "muted" && "bg-muted/60",
        variant === "white" && "bg-background",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-6xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
