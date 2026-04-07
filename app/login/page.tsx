import { ShieldCheck, School, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loginRoles } from "@/lib/data";

const roleIcons = {
  student: UserRound,
  university: School,
  admin: ShieldCheck
} as const;

type LoginPageProps = {
  searchParams?: {
    role?: string;
  };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  const activeRole =
    loginRoles.find((role) => role.key === searchParams?.role) || loginRoles[0];

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(255,156,83,0.08),transparent_22%),linear-gradient(125deg,rgba(42,154,195,0.08),transparent_38%)] py-8">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <section className="space-y-6">
            <div className="panel p-7">
              <span className="eyebrow">Secure role login</span>
              <h1 className="mt-4 font-display text-5xl leading-tight">Choose the access path that matches your role.</h1>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                This login surface is split by purpose so students, university admins and platform admins
                each land in the right workflow from the start.
              </p>
            </div>

            <div className="grid gap-4">
              {loginRoles.map((role) => {
                const Icon = roleIcons[role.key as keyof typeof roleIcons];
                const isActive = role.key === activeRole.key;

                return (
                  <a
                    key={role.key}
                    href={`/login?role=${role.key}`}
                    className={
                      isActive
                        ? "panel flex items-start gap-4 border-primary bg-primary/5 p-5"
                        : "panel flex items-start gap-4 p-5"
                    }
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">{role.title}</p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{role.purpose}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          <section className="panel p-7">
            <span className="eyebrow">{activeRole.title}</span>
            <h2 className="mt-4 font-display text-4xl">Welcome back</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{activeRole.purpose}</p>

            <form className="mt-8 space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Email</label>
                <input
                  type="email"
                  defaultValue={activeRole.email}
                  className="w-full rounded-[22px] border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Password</label>
                <input
                  type="password"
                  placeholder={activeRole.passwordHint}
                  className="w-full rounded-[22px] border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                />
              </div>

              <div className="rounded-[24px] bg-muted/70 p-5">
                <p className="font-semibold">This login unlocks</p>
                <div className="mt-3 space-y-2">
                  {activeRole.benefits.map((benefit) => (
                    <p key={benefit} className="text-sm text-muted-foreground">
                      {benefit}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href={activeRole.redirect} className="justify-center">
                  Enter {activeRole.title}
                </Button>
                <Button href="/" variant="secondary" className="justify-center">
                  Back to Home
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
