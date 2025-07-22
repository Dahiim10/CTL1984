import { HeroSection } from "@/components/hero-section"
import { IntroFeaturesSection } from "@/components/intro-features-section"
import { HomeProductsSection } from "@/components/home-products-section" // New import
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
// Import the FounderSection component
import { FounderSection } from "@/components/founder-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroFeaturesSection />
      <HomeProductsSection /> {/* Replaced FeaturesSection with HomeProductsSection */}
      <FounderSection /> {/* New section for the founder */}
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
