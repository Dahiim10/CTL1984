import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-moroccan-yellow text-moroccan-charcoal py-32 lg:py-56 overflow-hidden">
      {" "}
      {/* Increased padding */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 animate-fade-in">
          {/* Left Column: Prominent Logo */}

          {/* Right Column: Slogan and Intro */}
          <div className="flex-1 text-center space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight">
              {" "}
              {/* Adjusted tracking */}
              Your Digital Transformation <span className="gradient-text">Partner</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-display font-semibold text-moroccan-charcoal leading-snug">
              Talk Smart. Work Fast. The Moroccan Touch in AI
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mx-auto leading-relaxed">
              Revolutionize your business with CTLbot - the first AI chatbot platform designed specifically for Moroccan
              businesses, with native Darija support and seamless integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-5 text-lg font-semibold shadow-medium hover:shadow-strong hover:-translate-y-1"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Get a Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-10 py-5 text-lg font-semibold bg-transparent shadow-subtle hover:shadow-medium hover:-translate-y-1"
              >
                <Link href="/product">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
