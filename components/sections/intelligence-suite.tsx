import {
  comparisonRows,
  intelligenceModules,
  marketSignals,
  mentorStories,
  roiCards,
  simulatorProfiles
} from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function IntelligenceSuite() {
  return (
    <section id="intelligence" className="container-shell py-20">
      <SectionHeading
        eyebrow="Intelligence suite"
        title="A decision platform built around career outcomes, not just course discovery"
        description="These product modules turn EdGE from a curriculum analyzer into a full decision system for students choosing careers, colleges, skills and next moves."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {intelligenceModules.map((module, index) => (
          <article key={module.id} className="panel p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Module {index + 1}</p>
            <h3 className="mt-4 font-display text-2xl">{module.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{module.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Career outcome simulator</p>
          <h3 className="mt-2 font-display text-3xl">See how different decisions could play out</h3>
          <div className="mt-6 space-y-4">
            {simulatorProfiles.map((profile) => (
              <div key={profile.student} className="rounded-[24px] border border-border/70 bg-background/70 p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <p className="font-semibold">{profile.student}</p>
                  <p className="text-sm font-medium text-primary">{profile.path}</p>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
                  <p>{profile.salary}</p>
                  <p>{profile.demand}</p>
                  <p>{profile.nextStep}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="panel p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Real-time market pulse</p>
            <div className="mt-5 space-y-4">
              {marketSignals.map((signal) => (
                <div key={signal.skill} className="flex items-center justify-between gap-4 rounded-[22px] bg-muted/70 px-5 py-4">
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
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Mentor & alumni connect</p>
            <div className="mt-5 space-y-4">
              {mentorStories.map((story) => (
                <div key={story.name} className="rounded-[22px] bg-[rgba(18,30,46,0.96)] px-5 py-5 text-white">
                  <p className="font-semibold">{story.name}</p>
                  <p className="mt-1 text-sm text-white/70">{story.role}</p>
                  <p className="mt-3 text-sm leading-7 text-white/85">{story.insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Course ROI calculator</p>
          <div className="mt-5 space-y-4">
            {roiCards.map((card) => (
              <div key={card.program} className="rounded-[24px] border border-border/70 bg-background/70 p-5">
                <p className="font-semibold">{card.program}</p>
                <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  <p>{card.fee}</p>
                  <p>{card.salary}</p>
                  <p className="font-medium text-foreground">{card.breakeven}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Global vs local study comparison</p>
          <div className="mt-5 overflow-hidden rounded-[24px] border border-border/70">
            <div className="grid grid-cols-[0.9fr_1fr_1fr] bg-muted px-4 py-3 text-sm font-semibold">
              <p>Factor</p>
              <p>India</p>
              <p>Abroad</p>
            </div>
            {comparisonRows.map((row) => (
              <div key={row.factor} className="grid grid-cols-[0.9fr_1fr_1fr] gap-3 border-t border-border/70 px-4 py-4 text-sm">
                <p className="font-semibold">{row.factor}</p>
                <p className="text-muted-foreground">{row.india}</p>
                <p className="text-muted-foreground">{row.abroad}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
