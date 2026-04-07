import { ArrowRight, ShieldCheck, School, UserRound } from "lucide-react";
import { LineChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Admin command center",
    icon: ShieldCheck,
    href: "/dashboard/admin",
    description: "Track total users, university approvals, platform health and macro growth."
  },
  {
    title: "University operations hub",
    icon: School,
    href: "/dashboard/university",
    description: "Own curriculum coverage, placement analytics and student performance uplift."
  },
  {
    title: "Student growth cockpit",
    icon: UserRound,
    href: "/dashboard/student",
    description: "See your gap score, weekly plan, role fit and AI-guided skill momentum."
  },
  {
    title: "Market intelligence hub",
    icon: LineChart,
    href: "/dashboard/market",
    description: "Track job demand, salary signals, skill trends and college-tier outcomes in one place."
  }
];

export function DashboardsPreview() {
  return (
    <section id="dashboards" className="container-shell py-20">
      <SectionHeading
        eyebrow="Role-based product"
        title="Three dashboards, one shared source of truth"
        description="Each interface is purpose-built, but every insight rolls up to the same readiness model so teams can act faster together."
        align="center"
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card.title} className="panel flex h-full flex-col p-7">
            <card.icon className="h-10 w-10 text-primary" />
            <h3 className="mt-6 font-display text-2xl">{card.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{card.description}</p>
            <Button href={card.href} variant="secondary" className="mt-6 w-fit">
              Open Preview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
