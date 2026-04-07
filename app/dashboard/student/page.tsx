import { ChartCard } from "@/components/chart-card";
import { DashboardShell } from "@/components/dashboard-shell";
import { InsightCard } from "@/components/insight-card";
import { KPIGrid } from "@/components/kpi-grid";
import {
  curriculumComparisons,
  dashboards,
  decisionOptions,
  marketplaceProjects,
  marketSignals,
  roiCards,
  skillGapTargets,
  studentWorkspaceCards
} from "@/lib/data";

const momentumData = [
  { name: "Mon", value: 30 },
  { name: "Tue", value: 42 },
  { name: "Wed", value: 51 },
  { name: "Thu", value: 56 },
  { name: "Fri", value: 68 },
  { name: "Sat", value: 72 }
];

export default function StudentDashboardPage() {
  return (
    <DashboardShell
      role="Student Dashboard"
      title="Your AI-guided placement readiness plan"
      description="Understand what is missing, why it matters for your target roles and exactly what to learn next without wasting effort."
      nav={[
        { label: "Overview", href: "/dashboard/student", active: true },
        { label: "University", href: "/dashboard/university" },
        { label: "Admin", href: "/dashboard/admin" }
      ]}
    >
      <KPIGrid items={dashboards.student.kpis} />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ChartCard title="Weekly skill momentum" subtitle="Progress tracker" data={momentumData} />
        <div className="grid gap-6">
          <InsightCard
            tone="accent"
            title="Recommended next move"
            body="Prioritize SQL and API design this week. Completing one placement-style backend project could raise your readiness score by 6 to 8 points."
          />
          <InsightCard
            title="Learning path summary"
            body="You are strong in DSA fundamentals and JavaScript basics. The highest leverage improvements now are deployment confidence, Git collaboration and schema design."
          />
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Career outcome simulator</p>
          <h3 className="mt-2 font-display text-2xl">Projected path: Product Engineer</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] bg-muted/70 p-5">
              <p className="text-sm text-muted-foreground">Expected salary growth</p>
              <p className="mt-2 text-2xl font-semibold">6.5 LPA {"->"} 18 LPA</p>
            </div>
            <div className="rounded-[24px] bg-muted/70 p-5">
              <p className="text-sm text-muted-foreground">Demand signal</p>
              <p className="mt-2 text-2xl font-semibold text-success">High</p>
            </div>
            <div className="rounded-[24px] bg-muted/70 p-5">
              <p className="text-sm text-muted-foreground">Decision score</p>
              <p className="mt-2 text-2xl font-semibold text-primary">90/100</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Based on your interest in product building, strong frontend base, budget-conscious learning path and metro-city job preference, this route currently offers the best upside.
          </p>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Skill gap analyzer</p>
          <div className="mt-5 space-y-4">
            {skillGapTargets.map((item) => (
              <div key={item.skill} className="rounded-[24px] border border-border/70 bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{item.skill}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.current}% now {"->"} {item.target}% target
                  </p>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-primary" style={{ width: `${item.current}%` }} />
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Market dashboard</p>
          <div className="mt-5 space-y-4">
            {marketSignals.map((signal) => (
              <div key={signal.skill} className="flex items-center justify-between rounded-[22px] bg-muted/70 px-5 py-4">
                <div>
                  <p className="font-semibold">{signal.skill}</p>
                  <p className="text-sm text-muted-foreground">{signal.region}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold text-success">{signal.trend}</p>
                  <p className="text-muted-foreground">{signal.salary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Course ROI calculator</p>
          <div className="mt-5 space-y-4">
            {roiCards.map((card) => (
              <div key={card.program} className="rounded-[24px] bg-background/70 p-5">
                <p className="font-semibold">{card.program}</p>
                <p className="mt-2 text-sm text-muted-foreground">{card.fee}</p>
                <p className="mt-1 text-sm text-muted-foreground">{card.salary}</p>
                <p className="mt-3 text-sm font-medium">{card.breakeven}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-6">
          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Micro-internships marketplace</p>
            <div className="mt-5 space-y-4">
              {marketplaceProjects.map((item) => (
                <div key={item.project} className="rounded-[24px] border border-border/70 bg-background/70 p-5">
                  <p className="font-semibold">{item.project}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.company}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.duration}</p>
                  <p className="mt-3 text-sm font-medium">{item.outcome}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Personal workspace</p>
            <div className="mt-5 space-y-4">
              {studentWorkspaceCards.map((card) => (
                <div key={card.title} className="rounded-[24px] bg-muted/70 p-5">
                  <p className="font-semibold">{card.title}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Curriculum intelligence engine</p>
            <div className="mt-5 space-y-4">
              {curriculumComparisons.map((item) => (
                <div key={item.university} className="rounded-[24px] bg-muted/70 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold">{item.university}</p>
                    <p className="text-sm font-medium text-primary">Freshness {item.freshness}</p>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{item.coverage}</p>
                  <p className="mt-3 text-sm font-medium">{item.recommendation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Decision engine</p>
            <div className="mt-5 space-y-4">
              {decisionOptions.map((item) => (
                <div key={item.option} className="rounded-[24px] border border-border/70 bg-background/70 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold">{item.option}</p>
                    <p className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                      {item.score}/100
                    </p>
                  </div>
                  <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
                    <p className="text-muted-foreground">
                      Interest fit <span className="font-semibold text-foreground">{item.interestFit}</span>
                    </p>
                    <p className="text-muted-foreground">
                      Demand <span className="font-semibold text-foreground">{item.marketDemand}</span>
                    </p>
                    <p className="text-muted-foreground">
                      ROI <span className="font-semibold text-foreground">{item.roi}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
