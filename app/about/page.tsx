import type { Metadata } from "next"
import { Target, Eye, Heart, Globe, Users, Lightbulb } from "lucide-react"
import { FounderSection } from "@/components/founder-section" // Import the new component

export const metadata: Metadata = {
  title: "About Us - CTL | Conversational Technology Lab",
  description: "Learn about CTL's mission, vision, and the team behind Morocco's leading AI chatbot platform.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Globe,
      title: "Localization First",
      description: "We believe AI should speak your language, understand your culture, and respect your local context.",
      color: "text-primary",
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "Every feature we build serves a real need for Moroccan businesses and their customers.",
      color: "text-secondary",
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "We listen to our users and build solutions that truly serve the Moroccan business community.",
      color: "text-primary",
    },
  ]

  const team = [
    {
      name: "Hamza Benthami",
      role: "Co-Founder & CEO",
      bio: "AI researcher with 8+ years in conversational AI. Former Google AI team member, passionate about bringing AI to Morocco.",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Adnane Loukili",
      role: "Co-Founder & CTO",
      bio: "Full-stack engineer and AI specialist. Expert in NLP and multilingual systems, with deep knowledge of Arabic dialects.",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "William Anderson",
      role: "Head of Product",
      bio: "Product strategist with 10+ years in SaaS. Focused on creating intuitive AI solutions for business growth.",
      avatar: "/placeholder.svg?height=200&width=200",
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
              About <span className="gradient-text">CTL</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to democratize AI for Moroccan businesses, making advanced conversational technology
              accessible, affordable, and culturally relevant.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-28 bg-white">
        {" "}
        {/* Increased padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center space-y-6">
              <div className="w-28 h-28 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                {" "}
                {/* Increased size, updated shadow */}
                <Target className="h-14 w-14 text-primary" /> {/* Increased icon size */}
              </div>
              <h2 className="text-3xl font-display font-bold text-moroccan-charcoal">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {" "}
                {/* Increased font size */}
                To empower Moroccan businesses with AI technology that understands their language, culture, and unique
                needs, helping them grow and serve their customers better.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center space-y-6">
              <div className="w-28 h-28 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                {" "}
                {/* Increased size, updated shadow */}
                <Eye className="h-14 w-14 text-secondary" /> {/* Increased icon size */}
              </div>
              <h2 className="text-3xl font-display font-bold text-moroccan-charcoal">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {" "}
                {/* Increased font size */}
                To become the leading AI platform in North Africa, setting the standard for culturally-aware,
                multilingual business automation across the region.
              </p>
            </div>

            {/* Values */}
            <div className="text-center space-y-6">
              <div className="w-28 h-28 bg-moroccan-yellow rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                {" "}
                {/* Increased size, updated shadow */}
                <Heart className="h-14 w-14 text-moroccan-charcoal" /> {/* Increased icon size */}
              </div>
              <h2 className="text-3xl font-display font-bold text-moroccan-charcoal">Our Values</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {" "}
                {/* Increased font size */}
                We believe in putting Moroccan businesses first, building with integrity, and creating technology that
                brings people together rather than replacing them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Core Values Detail */}
      <section className="py-28 bg-gradient-to-br from-moroccan-sand/20 to-white">
        {" "}
        {/* Increased padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">These principles guide everything we do at CTL</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-12 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1"
              >
                {" "}
                {/* Increased padding, updated shadow, added translateY on hover */}
                <div className="w-20 h-20 bg-gradient-to-br from-moroccan-sand to-white rounded-2xl flex items-center justify-center mb-6 shadow-subtle">
                  {" "}
                  {/* Increased size, added shadow */}
                  <value.icon className={`h-10 w-10 ${value.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-moroccan-charcoal mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{value.description}</p>{" "}
                {/* Increased font size */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 bg-white">
        {" "}
        {/* Increased padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The passionate individuals behind CTL's success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-gradient-to-br from-white to-moroccan-sand/10 rounded-2xl p-12 shadow-medium hover:shadow-strong transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                {" "}
                {/* Increased padding, updated shadow, added translateY on hover */}
                <div className="w-40 h-40 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center shadow-subtle">
                  {" "}
                  {/* Increased size, added shadow */}
                  <span className="text-5xl font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-moroccan-charcoal mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4 text-base">{member.role}</p> {/* Increased font size */}
                <p className="text-gray-600 leading-relaxed text-base">{member.bio}</p> {/* Increased font size */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-moroccan-charcoal text-white">
        {" "}
        {/* Increased padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Join Our Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're a business looking to grow or a talented individual wanting to make an impact, we'd love to
            hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-medium hover:shadow-strong">
              {" "}
              {/* Increased padding, updated shadow, added translateY on hover */}
              Get Started Today
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-moroccan-charcoal px-10 py-5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-subtle hover:shadow-medium">
              {" "}
              {/* Increased padding, updated shadow, added translateY on hover */}
              Join Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
