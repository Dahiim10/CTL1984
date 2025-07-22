import { Bot, Zap } from "lucide-react"

export function IntroFeaturesSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-moroccan-sand/30 to-white">
      {" "}
      {/* Increased padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1">
            {" "}
            {/* Increased padding, updated shadow, added translateY on hover */}
            <Bot className="h-16 w-16 text-primary mx-auto mb-8" />
            <h3 className="text-xl font-semibold text-moroccan-charcoal mb-2 text-center">CTLbot</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              AI-powered chatbot with Darija support for authentic Moroccan conversations
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1">
            {" "}
            {/* Increased padding, updated shadow, added translateY on hover */}
            <Zap className="h-16 w-16 text-secondary mx-auto mb-8" />
            <h3 className="text-xl font-semibold text-moroccan-charcoal mb-2 text-center">Real-time Automation</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Instant responses and seamless workflow automation for your business
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1">
            {" "}
            {/* Increased padding, updated shadow, added translateY on hover */}
            <div className="h-16 w-16 bg-moroccan-yellow rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-moroccan-charcoal font-bold text-3xl">🇲🇦</span>
            </div>
            <h3 className="text-xl font-semibold text-moroccan-charcoal mb-2 text-center">Moroccan-First</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Built by Moroccans, for Moroccan businesses and culture
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
