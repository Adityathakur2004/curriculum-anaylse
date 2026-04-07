import { ChartCard } from "@/components/chart-card";
import { DashboardShell } from "@/components/dashboard-shell";
import { InsightCard } from "@/components/insight-card";
import { KPIGrid } from "@/components/kpi-grid";
import { Button } from "@/components/ui/button";
import {
  dashboards,
  universityAdminCards,
  universityApplications,
  universityCommunications,
  universityCompetitors,
  universityCoursePerformance,
  universityDemandSupply,
  universityLeads,
  universityMarketInsights,
  universityOverviewMetrics,
  universityPricingInsights,
  universityProfile,
  universityProfileFields,
  universityPromotions,
  universityReviews,
  universityStudentMatches,
  universityNotifications
} from "@/lib/data";

const readinessData = [
  { name: "Sem 1", value: 42 },
  { name: "Sem 2", value: 47 },
  { name: "Sem 3", value: 53 },
  { name: "Sem 4", value: 58 },
  { name: "Sem 5", value: 64 },
  { name: "Sem 6", value: 68 }
];

export default function UniversityDashboardPage() {
  return (
    <DashboardShell
      role="University Dashboard"
      title="Student acquisition, analytics and course intelligence"
      description="Use EdGE as a university growth console: manage your profile, track leads, improve applications, benchmark demand and act on what students actually want."
      nav={[
        { label: "Overview", href: "/dashboard/university", active: true },
        { label: "Login", href: "/login?role=university" },
        { label: "Admin", href: "/dashboard/admin" },
        { label: "Student View", href: "/dashboard/student" }
      ]}
    >
      <div className="panel p-6">
        <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">University Profile</p>
        <h2 className="mt-2 font-display text-3xl">{universityProfile.name}</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{universityProfile.overview}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {universityProfileFields.map((field) => (
            <div key={field.label} className="rounded-[24px] bg-muted/70 p-5">
              <p className="text-sm text-muted-foreground">{field.label}</p>
              <p className="mt-2 font-semibold">{field.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button href="/dashboard/university">Edit Profile</Button>
          <Button href="/dashboard/university" variant="secondary">
            Upload Brochure
          </Button>
          <Button href="/dashboard/university" variant="secondary">
            Add Scholarship Banner
          </Button>
        </div>
      </div>

      <KPIGrid items={dashboards.university.kpis} />
      <KPIGrid items={universityOverviewMetrics} />

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <ChartCard title="Student Analytics" subtitle="Views, interest and conversion" data={readinessData} />
        <div className="grid gap-6">
          <InsightCard
            title="Lead funnel pulse"
            body="AI/ML and CSE programs are driving the highest intent. The biggest leakage is between fee review and application start, especially for out-of-state students."
          />
          <InsightCard
            tone="dark"
            title="Revenue lens"
            body="Featured course promotions and scholarship campaigns are your strongest monetizable levers. They directly improve visibility, lead quality and conversion."
          />
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Lead Management</p>
          <div className="mt-5 space-y-4">
            {universityLeads.map((lead) => (
              <div key={lead.name} className="rounded-[24px] bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{lead.name}</p>
                  <p className="text-sm font-medium text-primary">{lead.action}</p>
                </div>
                <div className="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-3">
                  <p>{lead.location}</p>
                  <p>{lead.budget}</p>
                  <p>{lead.interest}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Student Matching System</p>
          <div className="mt-5 space-y-4">
            {universityStudentMatches.map((match) => (
              <div key={match.student} className="rounded-[24px] border border-border/70 bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{match.student}</p>
                  <p className="rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">
                    {match.fit}
                  </p>
                </div>
                <p className="mt-2 text-sm font-medium">{match.course}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{match.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Market Demand Insights</p>
          <div className="mt-5 space-y-4">
            {universityMarketInsights.map((item) => (
              <div key={item.topic} className="rounded-[24px] bg-muted/70 p-5">
                <p className="font-semibold">{item.topic}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Course Performance Analysis</p>
          <div className="mt-5 space-y-4">
            {universityCoursePerformance.map((course) => (
              <div key={course.course} className="rounded-[24px] bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{course.course}</p>
                  <p className="text-sm font-medium text-danger">Drop-off {course.dropoff}</p>
                </div>
                <div className="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                  <p>Views: {course.views}</p>
                  <p>Applications: {course.applications}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{course.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.96fr_1.04fr]">
        <div className="grid gap-6">
          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">ROI & Pricing Insights</p>
            <div className="mt-5 space-y-4">
              {universityPricingInsights.map((item) => (
                <div key={item.course} className="rounded-[24px] bg-background/70 p-5">
                  <p className="font-semibold">{item.course}</p>
                  <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                    <p>Your fee: {item.fee}</p>
                    <p>Competitor range: {item.competitorRange}</p>
                    <p className="font-medium text-foreground">{item.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Promotion & Advertisement Panel</p>
            <div className="mt-5 space-y-4">
              {universityPromotions.map((item) => (
                <div key={item.title} className="rounded-[24px] bg-muted/70 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm font-medium text-primary">{item.status}</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
                  <p className="mt-3 text-sm font-medium">{item.result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Communication Tools</p>
            <div className="mt-5 space-y-4">
              {universityCommunications.map((item) => (
                <div key={item} className="rounded-[24px] bg-background/70 p-5 text-sm leading-7 text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Application Management</p>
            <div className="mt-5 space-y-4">
              {universityApplications.map((application) => (
                <div key={application.student} className="flex items-center justify-between rounded-[24px] bg-muted/70 px-5 py-4">
                  <div>
                    <p className="font-semibold">{application.student}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{application.course}</p>
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {application.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Reviews & Reputation Management</p>
          <div className="mt-5 space-y-4">
            {universityReviews.map((review) => (
              <div key={review.author} className="rounded-[24px] bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm font-medium text-primary">{review.rating}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{review.response}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Competitor Comparison</p>
          <div className="mt-5 space-y-4">
            {universityCompetitors.map((competitor) => (
              <div key={competitor.name} className="rounded-[24px] bg-muted/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{competitor.name}</p>
                  <p className="text-sm font-medium text-primary">{competitor.position}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{competitor.comparison}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Demand vs Supply Gap</p>
          <div className="mt-5 space-y-4">
            {universityDemandSupply.map((item) => (
              <div key={item.course} className="rounded-[24px] border border-border/70 bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{item.course}</p>
                  <p className="text-sm font-medium text-primary">{item.gap}</p>
                </div>
                <div className="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                  <p>Demand: {item.demand}</p>
                  <p>Seats: {item.seats}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.recommendation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Notifications</p>
            <div className="mt-5 space-y-4">
              {universityNotifications.map((item) => (
                <div key={item} className="rounded-[24px] bg-muted/70 p-5 text-sm leading-7 text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Settings & Admin</p>
            <div className="mt-5 space-y-4">
              {universityAdminCards.map((card) => (
                <div key={card.title} className="rounded-[24px] bg-background/70 p-5">
                  <p className="font-semibold">{card.title}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
