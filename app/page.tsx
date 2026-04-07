import { Analysis } from "@/components/sections/analysis";
import { ChatbotSection } from "@/components/sections/chatbot-section";
import { DecisionEngine } from "@/components/sections/decision-engine";
import { DashboardsPreview } from "@/components/sections/dashboards-preview";
import { Features } from "@/components/sections/features";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { IntelligenceSuite } from "@/components/sections/intelligence-suite";

export default function HomePage() {
  return (
    <main className="pb-16">
      <Header />
      <Hero />
      <Features />
      <Analysis />
      <IntelligenceSuite />
      <DecisionEngine />
      <ChatbotSection />
      <DashboardsPreview />
      <Impact />
    </main>
  );
}
