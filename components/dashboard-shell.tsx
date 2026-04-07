import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type DashboardShellProps = {
  role: string;
  title: string;
  description: string;
  nav: Array<{ label: string; href: string; active?: boolean }>;
  children: React.ReactNode;
};

export function DashboardShell({ role, title, description, nav, children }: DashboardShellProps) {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(255,156,83,0.08),transparent_22%),linear-gradient(125deg,rgba(42,154,195,0.08),transparent_38%)]">
      <div className="container-shell py-6">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="panel h-fit p-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-xl">EdGE</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{role}</p>
              </div>
            </Link>
            <div className="mt-8 space-y-2">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-sm font-medium transition",
                    item.active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>

          <section className="space-y-6">
            <div className="panel p-6">
              <span className="eyebrow">{role}</span>
              <h1 className="mt-4 font-display text-4xl">{title}</h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{description}</p>
            </div>
            {children}
          </section>
        </div>
      </div>
    </main>
  );
}
