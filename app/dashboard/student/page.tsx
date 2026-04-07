import { ChartCard } from "@/components/chart-card";
import { DashboardShell } from "@/components/dashboard-shell";
import { InsightCard } from "@/components/insight-card";
import { KPIGrid } from "@/components/kpi-grid";
import { Button } from "@/components/ui/button";
import {
  curriculumComparisons,
  dashboards,
  decisionOptions,
  marketplaceProjects,
  marketSignals,
  roiCards,
  skillGapTargets,
  studentActionTasks,
  studentCareerMatches,
  studentCareerReport,
  studentCourseRecommendations,
  studentMentorConnect,
  studentNotifications,
  studentProfileSummary,
  studentRoadmapPlan,
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
        { label: "Login", href: "/login?role=student" },
        { label: "University", href: "/dashboard/university" },
        { label: "Admin", href: "/dashboard/admin" }
      ]}
    >
      <KPIGrid items={dashboards.student.kpis} />

      <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Profile + Goal</p>
          <h3 className="mt-2 font-display text-3xl">{studentProfileSummary.name}</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] bg-muted/70 p-5">
              <p className="text-sm text-muted-foreground">{studentProfileSummary.program}</p>
              <p className="mt-2 text-lg font-semibold">{studentProfileSummary.goal}</p>
              <p className="mt-2 text-sm text-muted-foreground">{studentProfileSummary.location}</p>
            </div>
            <div className="rounded-[24px] bg-primary p-5 text-primary-foreground">
              <p className="text-sm text-primary-foreground/80">Profile strength</p>
              <p className="mt-2 text-lg font-semibold">{studentProfileSummary.profileStrength}</p>
              <p className="mt-3 text-sm text-primary-foreground/80">
                Progress tracker: {studentProfileSummary.progress}% of current roadmap completed
              </p>
            </div>
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Career Recommendations</p>
          <div className="mt-5 space-y-4">
            {studentCareerMatches.map((item) => (
              <div key={item.role} className="rounded-[24px] border border-border/70 bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{item.role}</p>
                  <p className="rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">
                    {item.fit}% fit
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Career Roadmap</p>
          <div className="mt-5 space-y-4">
            {studentRoadmapPlan.map((item) => (
              <div key={item.phase} className="rounded-[24px] bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm font-medium text-primary">{item.phase}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.tasks}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Skill Gap Analyzer</p>
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
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Recommended Courses & Colleges</p>
          <div className="mt-5 space-y-4">
            {studentCourseRecommendations.map((card) => (
              <div key={card.name} className="rounded-[24px] bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{card.name}</p>
                  <p className="text-sm font-medium text-primary">{card.fit}</p>
                </div>
                <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  <p>{card.fee}</p>
                  <p>{card.roi}</p>
                  <p>{card.placement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Market Insights</p>
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
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Tasks / Action Plan</p>
          <div className="mt-5 space-y-4">
            {studentActionTasks.map((task) => (
              <div key={task.title} className="flex items-center justify-between rounded-[24px] bg-background/70 px-5 py-4">
                <div>
                  <p className="font-semibold">{task.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{task.type}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {task.status}
                  </span>
                  <div className="h-5 w-5 rounded border border-border bg-background" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <ChartCard title="Progress Tracker" subtitle="Weekly momentum" data={momentumData} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-6">
          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Mentor / Guidance</p>
            <div className="mt-5 space-y-4">
              {studentMentorConnect.map((mentor) => (
                <div key={mentor.name} className="rounded-[24px] bg-background/70 p-5">
                  <p className="font-semibold">{mentor.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{mentor.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{mentor.help}</p>
                  <p className="mt-3 text-sm font-medium text-primary">{mentor.availability}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Downloadable Career Report</p>
            <h3 className="mt-2 font-display text-2xl">{studentCareerReport.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{studentCareerReport.description}</p>
            <p className="mt-4 text-sm font-medium">{studentCareerReport.sections}</p>
            <div className="mt-5 flex gap-3">
              <Button href="/dashboard/student">Download PDF</Button>
              <Button href="/login?role=student" variant="secondary">
                Share Report
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Notifications</p>
            <div className="mt-5 space-y-4">
              {studentNotifications.map((item) => (
                <div key={item} className="rounded-[24px] bg-muted/70 p-5 text-sm leading-7 text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Settings</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-background/70 p-5">
                <p className="font-semibold">Edit profile</p>
                <p className="mt-2 text-sm text-muted-foreground">Update name, program, year, budget and city preference.</p>
              </div>
              <div className="rounded-[24px] bg-background/70 p-5">
                <p className="font-semibold">Update goals</p>
                <p className="mt-2 text-sm text-muted-foreground">Change target roles, higher study plans and career priorities.</p>
              </div>
              <div className="rounded-[24px] bg-background/70 p-5">
                <p className="font-semibold">Privacy settings</p>
                <p className="mt-2 text-sm text-muted-foreground">Control mentor visibility, saved preferences and data sharing.</p>
              </div>
              <div className="rounded-[24px] bg-background/70 p-5">
                <p className="font-semibold">Alerts</p>
                <p className="mt-2 text-sm text-muted-foreground">Choose reminders for tasks, deadlines and opportunity updates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-6">
          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Course ROI</p>
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

          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Micro-Internships</p>
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
        </div>

        <div className="grid gap-6">
          <InsightCard
            tone="accent"
            title="Recommended next move"
            body="Complete your backend placement tracker, book one mentor session, and finish 5 internship applications this week to keep momentum high."
          />
          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Decision Engine</p>
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

          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Personal Workspace</p>
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
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Career Outcome Snapshot</p>
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
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Curriculum Intelligence</p>
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
      </div>
    </DashboardShell>
  );
}
