import { gapSignals, journey, studentRoadmap } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Analysis() {
  return (
    <section id="analysis" className="container-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Core USP"
            title="The curriculum gap engine translates static syllabi into hiring readiness signals."
            description="EdGE extracts taught topics, maps them to job-role capability models and prioritizes the missing skills that have the biggest placement impact."
          />

          <div className="space-y-4">
            {journey.map((step) => (
              <div key={step.title} className="panel p-5">
                <p className="font-semibold">{step.title}</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="panel p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Gap matrix</p>
                <h3 className="mt-2 font-display text-3xl">Curriculum vs industry demand</h3>
              </div>
              <div className="rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success">
                Focus area: System Design
              </div>
            </div>
            <div className="mt-6 space-y-5">
              {gapSignals.map((item) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{item.skill}</span>
                    <span className="text-muted-foreground">
                      Curriculum {item.curriculum}% / Industry {item.industry}%
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-muted">
                    <div className="flex h-full">
                      <div className="h-full bg-accent" style={{ width: `${item.curriculum}%` }} />
                      <div
                        className="h-full bg-primary/70"
                        style={{ width: `${Math.max(item.industry - item.curriculum, 0)}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">AI learning path</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {studentRoadmap.map((item) => (
                <div key={item.week} className="rounded-[24px] border border-border/70 bg-background/70 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">{item.week}</p>
                  <h4 className="mt-2 font-semibold">{item.goal}</h4>
                  <p className="mt-3 text-sm text-muted-foreground">{item.tasks}</p>
                  <p className="mt-4 text-sm font-medium">Project: {item.project}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
