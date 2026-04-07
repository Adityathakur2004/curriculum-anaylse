import { ChartCard } from "@/components/chart-card";
import { DashboardShell } from "@/components/dashboard-shell";
import { InsightCard } from "@/components/insight-card";
import { KPIGrid } from "@/components/kpi-grid";
import { dashboards } from "@/lib/data";

const growthData = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1680 },
  { name: "Mar", value: 2140 },
  { name: "Apr", value: 2980 },
  { name: "May", value: 3520 },
  { name: "Jun", value: 4210 }
];

export default function AdminDashboardPage() {
  return (
    <DashboardShell
      role="Admin Dashboard"
      title="System-wide command center"
      description="Manage university onboarding, monitor macro platform adoption and identify where EdGE is creating the biggest placement-readiness lift."
      nav={[
        { label: "Overview", href: "/dashboard/admin", active: true },
        { label: "Universities", href: "/dashboard/university" },
        { label: "Students", href: "/dashboard/student" }
      ]}
    >
      <KPIGrid items={dashboards.admin.kpis} />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ChartCard title="User growth trajectory" subtitle="Platform analytics" data={growthData} />
        <div className="grid gap-6">
          <InsightCard
            tone="dark"
            title="AI system health"
            body="3,204 analyses processed this week with an average response time of 2.4s. No anomaly spikes detected in curriculum ingestion or role-matching pipelines."
          />
          <InsightCard
            tone="accent"
            title="Approval queue"
            body="18 universities are pending approval. 7 have complete placement records, while 11 need curriculum mapping before activation."
          />
        </div>
      </div>
    </DashboardShell>
  );
}
