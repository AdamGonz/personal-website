import { Header } from "@/components/layout/Header";
import { AiPortfolioIntroSection } from "@/components/sections/AiPortfolioIntroSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SelectedProjectsSection } from "@/components/sections/SelectedProjectsSection";

export default function Home() {
  return (
    <div id="home" className="page-frame">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AiPortfolioIntroSection />
        <SelectedProjectsSection />
      </main>
    </div>
  );
}
