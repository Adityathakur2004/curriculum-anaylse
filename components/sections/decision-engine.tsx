import { decisionOptions, futureRiskSignals, studentWorkspaceCards } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function DecisionEngine() {
  return (
    <section id="decision" className="container-shell py-20">
      <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Final recommendation layer"
            title="Combine ROI, demand, fit and risk into one decision score"
            description="Instead of leaving students with scattered graphs and articles, EdGE can rank real options and explain the tradeoffs behind each recommendation."
          />

          <div className="grid gap-4">
            {studentWorkspaceCards.map((card) => (
              <div key={card.title} className="panel p-5">
                <p className="font-semibold">{card.title}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Decision score engine</p>
            <div className="mt-5 space-y-4">
              {decisionOptions.map((item) => (
                <div key={item.option} className="rounded-[24px] border border-border/70 bg-background/70 p-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <p className="font-semibold">{item.option}</p>
                    <div className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                      Final score: {item.score}/100
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm">
                    <p className="text-muted-foreground">Interest fit: <span className="font-semibold text-foreground">{item.interestFit}</span></p>
                    <p className="text-muted-foreground">Market demand: <span className="font-semibold text-foreground">{item.marketDemand}</span></p>
                    <p className="text-muted-foreground">ROI: <span className="font-semibold text-foreground">{item.roi}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Future risk indicator</p>
            <div className="mt-5 space-y-4">
              {futureRiskSignals.map((signal) => (
                <div key={signal.role} className="rounded-[24px] bg-muted/70 p-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <p className="font-semibold">{signal.role}</p>
                    <div className="flex gap-2 text-xs uppercase tracking-[0.16em]">
                      <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                        Risk {signal.risk}
                      </span>
                      <span className="rounded-full bg-success/10 px-3 py-1 font-semibold text-success">
                        Stability {signal.stability}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{signal.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
