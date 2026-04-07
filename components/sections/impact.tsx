import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function Impact() {
  return (
    <section id="impact" className="container-shell py-20">
      <div className="panel overflow-hidden p-8 sm:p-10">
        <SectionHeading
          eyebrow="Why it matters"
          title="A sharper academic-to-placement feedback loop for emerging campuses."
          description="EdGE is designed for the colleges that need leverage most: limited industry feedback, fragmented placement prep and students who need a clearer path from classroom to offer letter."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] bg-[rgba(255,123,37,0.08)] p-5">
            <p className="text-4xl font-semibold text-primary">10x</p>
            <p className="mt-2 text-sm text-muted-foreground">Faster curriculum-to-role benchmarking for placement teams.</p>
          </div>
          <div className="rounded-[24px] bg-[rgba(42,154,195,0.09)] p-5">
            <p className="text-4xl font-semibold text-accent">1 view</p>
            <p className="mt-2 text-sm text-muted-foreground">Single readiness model shared by admins, faculty and students.</p>
          </div>
          <div className="rounded-[24px] bg-[rgba(39,174,96,0.08)] p-5">
            <p className="text-4xl font-semibold text-success">4 weeks</p>
            <p className="mt-2 text-sm text-muted-foreground">Typical sprint window for a targeted employability improvement plan.</p>
          </div>
        </div>
        <div
          id="contact"
          className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[28px] bg-[rgba(18,30,46,0.96)] px-6 py-6 text-white md:flex-row md:items-center"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Launch-ready concept</p>
            <h3 className="mt-2 font-display text-3xl">Turn this into a startup-grade platform.</h3>
          </div>
          <Button href="/dashboard/admin">Review Product Demo</Button>
        </div>
      </div>
    </section>
  );
}
