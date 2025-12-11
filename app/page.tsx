import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HistorySection } from "@/components/history-section"
import { GuidesSection } from "@/components/guides-section"
import { PartsSection } from "@/components/parts-section"
import { WorkshopStories } from "@/components/workshop-stories"
import { LibrarySection } from "@/components/library-section"
import { PassionSection } from "@/components/passion-section"
import { CommunitySection } from "@/components/community-section"
import { ToolsSection } from "@/components/tools-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-smoked overflow-x-hidden">
      <Header />
      <HeroSection />
      <HistorySection />
      <GuidesSection />
      <PartsSection />
      <WorkshopStories />
      <LibrarySection />
      <PassionSection />
      <CommunitySection />
      <ToolsSection />
      <Footer />
    </main>
  )
}
