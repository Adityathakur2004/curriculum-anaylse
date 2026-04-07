import { features } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Features() {
  return (
    <section id="features" className="container-shell py-20">
      <SectionHeading
        eyebrow="Platform pillars"
        title="A focused product stack for universities, placement teams and students"
        description="Everything is designed around one operating question: what should be taught, practiced and measured so placement outcomes improve with less guesswork?"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {features.map((feature, index) => (
          <article key={feature.title} className="panel p-7">
            <p className="text-sm font-semibold text-primary">0{index + 1}</p>
            <h3 className="mt-4 font-display text-2xl">{feature.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
