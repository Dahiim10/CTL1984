import type { Metadata } from "next"
import { ShoppingCart, Home, Briefcase, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Use Cases - CTL | AI Solutions for Every Industry",
  description:
    "Discover how CTLbot transforms businesses across e-commerce, real estate, and agencies with AI-powered automation.",
}

export default function UseCasesPage() {
  const useCases = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      subtitle: "Boost Sales & Customer Support",
      description:
        "Automate order tracking, product recommendations, and customer support. Handle inquiries in Darija, Arabic, French, and English.",
      problems: [
        "High cart abandonment rates",
        "Overwhelming customer support tickets",
        "Language barriers with customers",
        "Manual order tracking inquiries",
      ],
      solutions: [
        "Automated cart recovery messages",
        "Instant order status updates",
        "Multilingual product recommendations",
        "24/7 customer support in local languages",
      ],
      results: [
        "40% reduction in cart abandonment",
        "60% fewer support tickets",
        "35% increase in customer satisfaction",
        "24/7 availability without extra staff",
      ],
      color: "primary",
    },
    {
      icon: Home,
      title: "Real Estate",
      subtitle: "Streamline Property Management",
      description:
        "Qualify leads, schedule viewings, and provide property information instantly. Perfect for Moroccan real estate professionals.",
      problems: [
        "Time-consuming lead qualification",
        "Missed opportunities outside business hours",
        "Repetitive property information requests",
        "Difficulty managing multiple inquiries",
      ],
      solutions: [
        "Automated lead qualification forms",
        "Instant property details and photos",
        "Automated viewing scheduling",
        "Multi-language property descriptions",
      ],
      results: [
        "50% faster lead qualification",
        "3x more qualified leads",
        "80% reduction in manual scheduling",
        "Increased conversion rates",
      ],
      color: "secondary",
    },
    {
      icon: Briefcase,
      title: "Digital Agencies",
      subtitle: "Scale Client Communication",
      description:
        "Manage multiple client accounts, automate reporting, and provide instant project updates. Built for Moroccan digital agencies.",
      problems: [
        "Managing multiple client communications",
        "Time-consuming status updates",
        "Language preferences across clients",
        "Scaling personalized service",
      ],
      solutions: [
        "Automated project status updates",
        "Multi-client dashboard management",
        "Personalized communication in preferred language",
        "Instant report generation and delivery",
      ],
      results: [
        "70% time saved on client updates",
        "Improved client satisfaction scores",
        "Ability to handle 3x more clients",
        "Reduced miscommunication incidents",
      ],
      color: "primary",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-moroccan-sand via-white to-moroccan-teal/10 py-28">
        {" "}
        {/* Increased padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-moroccan-charcoal">
              <span className="gradient-text">Use Cases</span> That Drive Results
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See how CTLbot transforms businesses across different industries with AI-powered automation and
              multilingual support.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-28 bg-white">
        {" "}
        {/* Increased padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {" "}
          {/* Increased space between use cases */}
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`${index % 2 === 1 ? "lg:flex-row-reverse" : ""} flex flex-col lg:flex-row items-center gap-16`}
            >
              {" "}
              {/* Increased gap */}
              {/* Content */}
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <div
                    className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-${useCase.color}/10 shadow-medium`}
                  >
                    {" "}
                    {/* Increased size, updated shadow */}
                    <useCase.icon className={`h-12 w-12 text-${useCase.color}`} /> {/* Increased icon size */}
                  </div>
                  <h2 className="text-4xl font-display font-bold text-moroccan-charcoal">{useCase.title}</h2>
                  <p className={`text-xl font-semibold text-${useCase.color}`}>{useCase.subtitle}</p>
                  <p className="text-lg text-gray-600 leading-relaxed text-base">{useCase.description}</p>{" "}
                  {/* Increased font size */}
                </div>

                <Button
                  asChild
                  className={`bg-${useCase.color} hover:bg-${useCase.color}/90 text-white rounded-full px-8 py-3 font-semibold shadow-medium hover:shadow-strong hover:-translate-y-0.5`}
                >
                  <Link href="/contact" className="flex items-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              {/* Problem-Solution Cards */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Problems */}
                <div className="bg-red-50 rounded-2xl p-10 shadow-medium">
                  {" "}
                  {/* Increased padding, updated shadow */}
                  <h3 className="text-lg font-semibold text-red-800 mb-4">Problems</h3>
                  <ul className="space-y-2">
                    {useCase.problems.map((problem, problemIndex) => (
                      <li key={problemIndex} className="text-red-700 text-sm flex items-start space-x-2">
                        <span className="w-2.5 h-2.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-base">{problem}</span> {/* Increased font size */}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className={`bg-${useCase.color}/10 rounded-2xl p-10 shadow-medium`}>
                  {" "}
                  {/* Increased padding, updated shadow */}
                  <h3 className={`text-lg font-semibold text-${useCase.color} mb-4`}>Solutions</h3>
                  <ul className="space-y-2">
                    {useCase.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className={`text-${useCase.color} text-sm flex items-start space-x-2`}>
                        <span className={`w-2.5 h-2.5 bg-${useCase.color} rounded-full mt-2 flex-shrink-0`}></span>
                        <span className="text-base">{solution}</span> {/* Increased font size */}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="bg-green-50 rounded-2xl p-10 shadow-medium">
                  {" "}
                  {/* Increased padding, updated shadow */}
                  <h3 className="text-lg font-semibold text-green-800 mb-4">Results</h3>
                  <ul className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-green-700 text-sm flex items-start space-x-2">
                        <span className="w-2.5 h-2.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-base">{result}</span> {/* Increased font size */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-moroccan-charcoal text-white">
        {" "}
        {/* Increased padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join businesses across Morocco who are already using CTLbot to automate their operations and improve
            customer satisfaction.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-5 text-lg font-semibold shadow-medium hover:shadow-strong hover:-translate-y-1"
          >
            <Link href="/contact">Schedule Your Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
