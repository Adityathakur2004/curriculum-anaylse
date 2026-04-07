import { ArrowRight, ShieldCheck, School, UserRound } from "lucide-react";
import { loginRoles } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const roleIcons = {
  student: UserRound,
  university: School,
  admin: ShieldCheck
} as const;

export function LoginHub() {
  return (
    <section id="login" className="container-shell py-20">
      <SectionHeading
        eyebrow="Role-based access"
        title="Log in through the section built for your job to be done"
        description="Students, university teams and platform admins each need a different entry point. EdGE gives every role a focused login path tied to the right workflow."
        align="center"
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {loginRoles.map((role) => {
          const Icon = roleIcons[role.key as keyof typeof roleIcons];

          return (
            <article key={role.key} className="panel flex h-full flex-col p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{role.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{role.purpose}</p>
              <div className="mt-5 flex-1 space-y-3">
                {role.benefits.map((benefit) => (
                  <p key={benefit} className="text-sm text-muted-foreground">
                    {benefit}
                  </p>
                ))}
              </div>
              <Button href={`/login?role=${role.key}`} variant="secondary" className="mt-6 w-fit">
                Open Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
