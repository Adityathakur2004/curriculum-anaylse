import { ChartCard } from "@/components/chart-card";
import { DashboardShell } from "@/components/dashboard-shell";
import { InsightCard } from "@/components/insight-card";
import { KPIGrid } from "@/components/kpi-grid";
import { dashboards } from "@/lib/data";

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
    </DashboardShell>
  );
}
