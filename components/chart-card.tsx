"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";

type Point = {
  name: string;
  value: number;
};

export function ChartCard({
  title,
  subtitle,
  data
}: {
  title: string;
  subtitle: string;
  data: Point[];
}) {
  return (
    <div className="panel p-6">
      <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">{subtitle}</p>
      <h3 className="mt-2 font-display text-2xl">{title}</h3>
      <div className="mt-6 h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="fillArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2a9ac3" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(120,120,120,0.15)" />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#f97316" fill="url(#fillArea)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
