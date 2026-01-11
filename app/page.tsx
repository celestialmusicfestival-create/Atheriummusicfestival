import { HeroSection } from "@/components/hero-section"
import { PortalSystem } from "@/components/portal-system"
import { NoiseOverlay } from "@/components/noise-overlay"
import { Footer } from "@/components/footer"
import { SignupModal } from "@/components/signup-modal"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030303] text-white antialiased selection:bg-rose-500 selection:text-white cursor-crosshair overflow-x-hidden">
      <NoiseOverlay />
      <PortalSystem />
      <div className="relative z-10">
        <HeroSection />
        <Footer />
      </div>
      <SignupModal />
    </main>
  )
}
