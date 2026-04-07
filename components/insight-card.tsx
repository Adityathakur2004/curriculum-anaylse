type InsightCardProps = {
  title: string;
  body: string;
  tone?: "default" | "dark" | "accent";
};

export function InsightCard({ title, body, tone = "default" }: InsightCardProps) {
  const tones = {
    default: "bg-card text-card-foreground",
    dark: "bg-[rgba(18,30,46,0.96)] text-white",
    accent: "bg-primary text-primary-foreground"
  } as const;

  return (
    <div className={`panel p-6 ${tones[tone]}`}>
      <p className="font-display text-2xl">{title}</p>
      <p className="mt-4 text-sm leading-7 opacity-90">{body}</p>
    </div>
  );
}
