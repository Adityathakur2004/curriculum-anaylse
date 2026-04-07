import { ArrowRight, BrainCircuit, Building2, GraduationCap } from "lucide-react";
import { stats } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container-shell pb-20 pt-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-8">
          <div className="space-y-6">
            <span className="eyebrow">AI-powered readiness platform</span>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-5xl leading-[0.96] text-foreground sm:text-6xl lg:text-7xl">
                Build campus outcomes around what industry actually hires for.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                EdGE helps universities decode curriculum gaps, gives students an execution-ready learning plan,
                and turns placement teams into data-driven operators.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/dashboard/admin">
                Explore Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="secondary" href="#analysis">
                See Gap Engine
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="panel space-y-2 px-5 py-5">
                <p className="text-3xl font-semibold">{item.value}</p>
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel relative overflow-hidden px-6 py-6">
          <div className="absolute inset-0 bg-hero-grid bg-[size:42px_42px] opacity-50" />
          <div className="relative space-y-5">
            <div className="flex items-center justify-between rounded-[24px] bg-[rgba(18,30,46,0.92)] p-5 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Gap score</p>
                <p className="mt-2 text-5xl font-semibold">72</p>
                <p className="mt-2 text-sm text-white/70">High placement potential after system design and SQL uplift.</p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 p-4">
                <BrainCircuit className="h-8 w-8 text-[#ffb067]" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] bg-white p-5">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-primary" />
                  <p className="font-semibold">University View</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Curriculum covers programming fundamentals well, but projects and deployment exposure are underweight.
                </p>
              </div>
              <div className="rounded-[24px] bg-primary p-5 text-primary-foreground">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5" />
                  <p className="font-semibold">Student View</p>
                </div>
                <p className="mt-4 text-sm text-primary-foreground/85">
                  AI recommends a 4-week sprint: SQL, Git workflows, API design and one deployable capstone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
