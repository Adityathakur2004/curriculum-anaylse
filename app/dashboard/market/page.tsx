import { DashboardShell } from "@/components/dashboard-shell";
import { InsightCard } from "@/components/insight-card";
import {
  marketAutomationRisk,
  marketCollegeTiers,
  marketCourseCareerMap,
  marketIndustryInsights,
  marketInternshipTrends,
  marketJobDemand,
  marketKeyTerms,
  marketLocationInsights,
  marketPredictionCards,
  marketSalaryInsights,
  marketSkillsTracker
} from "@/lib/data";

export default function MarketDashboardPage() {
  return (
    <DashboardShell
      role="Market Dashboard"
      title="Actionable career market intelligence for faster decisions"
      description="This dashboard explains what the market means for students in practical terms: which careers are growing, what skills to learn, how salaries differ, and what to do next."
      nav={[
        { label: "Overview", href: "/dashboard/market", active: true },
        { label: "Student", href: "/dashboard/student" },
        { label: "University", href: "/dashboard/university" },
        { label: "Admin", href: "/dashboard/admin" }
      ]}
    >
      <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Job Market Demand</p>
          <div className="mt-5 space-y-4">
            {marketJobDemand.map((item) => (
              <div key={item.career} className="rounded-[24px] bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{item.career}</p>
                  <p className="rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">
                    {item.demand}
                  </p>
                </div>
                <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  <p>{item.growth}</p>
                  <p>{item.location}</p>
                  <p className="font-medium text-foreground">{item.insight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Salary Insights</p>
          <div className="mt-5 space-y-4">
            {marketSalaryInsights.map((item) => (
              <div key={item.role} className="rounded-[24px] bg-muted/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{item.role}</p>
                  <p className="text-sm font-medium text-primary">{item.city}</p>
                </div>
                <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  <p>Entry: {item.entry}</p>
                  <p>Mid: {item.mid}</p>
                  <p>Senior: {item.senior}</p>
                  <p className="font-medium text-foreground">{item.tier}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.96fr_1.04fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Skills Demand Tracker</p>
          <div className="mt-5 space-y-4">
            {marketSkillsTracker.map((item) => (
              <div key={item.skill} className="rounded-[24px] border border-border/70 bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{item.skill}</p>
                  <p className={item.trend === "Up" ? "text-sm font-semibold text-success" : "text-sm font-semibold text-danger"}>
                    {item.trend}
                  </p>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-primary" style={{ width: `${item.score}%` }} />
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.insight}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Course vs Career Mapping</p>
          <div className="mt-5 space-y-4">
            {marketCourseCareerMap.map((item) => (
              <div key={item.course} className="rounded-[24px] bg-muted/70 p-5">
                <p className="font-semibold">{item.course}</p>
                <p className="mt-2 text-sm font-medium text-primary">{item.careers}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">College Tier Comparison</p>
          <div className="mt-5 space-y-4">
            {marketCollegeTiers.map((item) => (
              <div key={item.tier} className="rounded-[24px] bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{item.tier}</p>
                  <p className="text-sm font-medium text-primary">{item.salary}</p>
                </div>
                <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  <p>Placement rate: {item.placementRate}</p>
                  <p>Top recruiters: {item.recruiters}</p>
                  <p className="font-medium text-foreground">{item.roi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Industry Insights</p>
          <div className="mt-5 space-y-4">
            {marketIndustryInsights.map((item) => (
              <div key={item.industry} className="rounded-[24px] bg-muted/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{item.industry}</p>
                  <p className={item.trend === "Growing" ? "text-sm font-semibold text-success" : "text-sm font-semibold text-danger"}>
                    {item.trend} {item.growth}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Automation Risk Indicator</p>
          <div className="mt-5 space-y-4">
            {marketAutomationRisk.map((item) => (
              <div key={item.role} className="rounded-[24px] border border-border/70 bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{item.role}</p>
                  <p className={item.risk === "Low" ? "text-sm font-semibold text-success" : "text-sm font-semibold text-danger"}>
                    Risk {item.risk}
                  </p>
                </div>
                <p className="mt-2 text-sm font-medium text-primary">{item.safeAlternative}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.insight}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Location-Based Opportunities</p>
          <div className="mt-5 space-y-4">
            {marketLocationInsights.map((item) => (
              <div key={item.city} className="rounded-[24px] bg-muted/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{item.city}</p>
                  <p className="text-sm font-medium text-primary">{item.salary}</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.roleFit}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.takeaway}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.98fr_1.02fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Internship & Fresher Trends</p>
          <div className="mt-5 space-y-4">
            {marketInternshipTrends.map((item) => (
              <div key={item.role} className="rounded-[24px] bg-background/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{item.role}</p>
                  <p className="text-sm font-medium text-success">{item.demand}</p>
                </div>
                <p className="mt-2 text-sm text-primary">{item.fresherFit}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {marketPredictionCards.map((item, index) => (
            <InsightCard
              key={item.title}
              tone={index === 0 ? "accent" : index === 1 ? "default" : "dark"}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </div>

      <div className="panel p-6">
        <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Key Market Terms</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {marketKeyTerms.map((term) => (
            <span
              key={term}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
            >
              {term}
            </span>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
