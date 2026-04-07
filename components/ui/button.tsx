import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-glow hover:translate-y-[-1px]",
        secondary: "border border-border bg-card text-foreground hover:border-primary/40",
        ghost: "text-foreground hover:bg-muted"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  href?: string;
  children: React.ReactNode;
};

export function Button({ className, variant, href, children }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cn(buttonVariants({ variant }), className)}>
        {children}
      </Link>
    );
  }

  return <button className={cn(buttonVariants({ variant }), className)}>{children}</button>;
}
