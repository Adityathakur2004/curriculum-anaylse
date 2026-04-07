type KPI = {
  label: string;
  value: string;
  delta: string;
};

export function KPIGrid({ items }: { items: KPI[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="panel p-5">
          <p className="text-sm text-muted-foreground">{item.label}</p>
          <p className="mt-3 text-3xl font-semibold">{item.value}</p>
          <p className="mt-3 text-sm font-medium text-success">{item.delta}</p>
        </div>
      ))}
    </div>
  );
}
