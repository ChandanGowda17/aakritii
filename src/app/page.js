import Hero from "./components/Hero";
import CommunitySection from "./components/CommunitySection";
import ProgrammesSection from "./components/ProgrammeSection";
import OurImpact from "./components/OurImpact";
import SupportSection from "./components/SupportSection";
import PressRelease from "./components/PressRelease";

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <CommunitySection />
      <OurImpact />
      
      <ProgrammesSection /> 
      
      <SupportSection />

      <PressRelease />

       <section className="bg-[#F8F1E6] py-20 md:py-28"><br/> <br/><br/> <br/><br/> <br/>
        <div className="site-container text-center">
          <blockquote className="mx-auto max-w-7xl font-serif text-3xl italic leading-snug text-[#7A4724] md:text-5xl">
            &quot;When individuals are empowered, communities flourish.
            <br className="hidden md:block" />
            When communities flourish, society progresses.&quot;
          </blockquote>
 <br/> <br/>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.45em] text-[#D46C32]">
            Aakritii&apos;s Core Belief
          </p>
 <br/> <br/>
          <a
            href="/join"
            className="mt-10 h-10 w-50 inline-flex items-center justify-center rounded-md bg-[#D46C32] px-9 py-4 text-lg font-bold text-white transition hover:bg-[#B85A28]"
          >
            Join the movement
          </a>
        </div>
        <br/> <br/> <br/> <br/><br/> <br/>
      </section>
      
    </main>
  );
}