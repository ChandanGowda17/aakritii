import Hero from "./components/Hero";
import CommunitySection from "./components/CommunitySection";
import ProgrammesSection from "./components/ProgrammeSection";
import OurImpact from "./components/OurImpact";
import ImpactShowcase from "./components/ImpactShowcase";
import Education from "./components/Education";

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <CommunitySection />
      <OurImpact />
      
      <ProgrammesSection />
      
      <ImpactShowcase />
    </main>
  );
}