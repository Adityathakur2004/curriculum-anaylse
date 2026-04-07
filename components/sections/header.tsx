import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="container-shell pt-6">
      <div className="panel flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl">EdGE</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Education to industry</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          <a href="#features">Features</a>
          <a href="#analysis">Gap Analysis</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#decision">Decision Score</a>
          <a href="#login">Login</a>
          <a href="#chatbot">Chatbot</a>
          <a href="#dashboards">Dashboards</a>
          <a href="#impact">Impact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" href="/login">
            Login
          </Button>
          <Button href="/dashboard/student">Live Demo</Button>
        </div>
      </div>
    </header>
  );
}
