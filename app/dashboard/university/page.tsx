import { ChartCard } from "@/components/chart-card";
import { DashboardShell } from "@/components/dashboard-shell";
import { InsightCard } from "@/components/insight-card";
import { KPIGrid } from "@/components/kpi-grid";
import { dashboards } from "@/lib/data";

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
      title="Placement operations for academic teams"
      description="See where your curriculum is ahead, where it lags industry demand and which interventions will lift student outcomes fastest."
      nav={[
        { label: "Overview", href: "/dashboard/university", active: true },
        { label: "Admin", href: "/dashboard/admin" },
        { label: "Student View", href: "/dashboard/student" }
      ]}
    >
      <KPIGrid items={dashboards.university.kpis} />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ChartCard title="Readiness progression" subtitle="Semester signal" data={readinessData} />
        <div className="grid gap-6">
          <InsightCard
            title="Curriculum alert"
            body="The biggest employability gap sits in SQL, Git workflows and project deployment. These three skills account for 46% of the readiness deficit for software roles."
          />
          <InsightCard
            tone="dark"
            title="Placement pulse"
            body="Product-based recruiters show the strongest conversion when students complete two applied projects and a mock interview sprint before the final semester."
          />
        </div>
      </div>
    </DashboardShell>
  );
}
