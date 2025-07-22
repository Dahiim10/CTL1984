import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  User,
  MessageSquare,
  Settings,
  CheckCircle,
  Zap,
  BarChart2,
  FileText,
  ClipboardList,
  Lightbulb,
  Shield,
  RefreshCw,
  TrendingUp,
  BookOpen,
  ArrowRight,
} from "lucide-react"
import { Users } from "lucide-react" // Import Users icon

export const metadata: Metadata = {
  title: "Corporate Digital Transformation Procedure - CTL",
  description: "Explore CTL's comprehensive flowchart for corporate digital transformation, from onboarding to growth.",
}

const flowchartData = [
  {
    id: 1,
    title: "Client On-boarding & alignment",
    items: [
      { text: "Product Proposal", icon: FileText },
      { text: "Overall efficiency seeking", icon: CheckCircle },
      { text: "Product IDEA or Transformation mapping", icon: Lightbulb },
      { text: "Kickoff Meetings & Stakeholder mapping", icon: Users },
      { text: "Strategic Validation", icon: Shield },
    ],
  },
  {
    id: 2,
    title: "Discovery",
    items: [
      {
        heading: "Stakeholder Interviews",
        content: "Across departments to gather pain points, needs, and internal dynamics",
        icon: User,
      },
      {
        heading: "Data & Process Audit",
        content: "Identify inefficiencies, redundancies, tech gaps, customer complaints",
        icon: ClipboardList,
      },
      {
        heading: "Problem Framing",
        content: "Synthesize findings into clear challenge statements",
        icon: MessageSquare,
      },
    ],
  },
  {
    id: 3,
    title: "Ideation",
    items: [
      {
        heading: "Design Thinking Sprints",
        content: "Cross-functional teams generate potential solutions",
        icon: Lightbulb,
      },
      {
        heading: "Expert Review & Feasibility Check",
        content: "→ Evaluate technical & operational viability\n→ Consider existing systems, budget, timeline",
        icon: CheckCircle,
      },
      {
        heading: "Submission of Shortlisted Ideas",
        content: "→ Documented solutions ready for assessment",
        icon: FileText,
      },
    ],
  },
  {
    id: 4,
    title: "Validation",
    items: [
      {
        heading: "Solution Scoping",
        content: "→ Define MVP, KPIs, and resource requirements",
        icon: Settings,
      },
      {
        heading: "Project Risk Identification (PRI)",
        content: "Map possible tech, legal, financial, change management",
        icon: Shield,
      },
      {
        heading: "Project Risk Assessment (PRA)",
        content: "→ Prioritize or refine based on impact/probability\n→ Business case creation",
        icon: BarChart2,
      },
    ],
  },
  {
    id: 5,
    title: "Co-Creation Checkpoint",
    items: [
      {
        heading: "Client Review & Approval",
        content: "→ Confirm alignment, resource commitment, and sponsorship\n→ Proceed to build phase",
        icon: CheckCircle,
      },
    ],
  },
  {
    id: 6,
    title: "Deployment",
    items: [
      {
        heading: "MVP Build & Rollout",
        content: "→ Agile implementation of solution\n→ Pilot deployment with real users",
        icon: Zap,
      },
      {
        heading: "Testing & Iteration Loop",
        content: "→ User feedback collection\n→ Adjustments before full-scale release",
        icon: RefreshCw,
      },
    ],
  },
  {
    id: 7,
    title: "GROWTH & MONITORING",
    items: [
      {
        heading: "Performance Tracking",
        content: "→ Monitor KPIs, usage, user satisfaction\n→ Continuous improvements",
        icon: BarChart2,
      },
      {
        heading: "Scaling Strategy",
        content: "If Internal: Cross-department rollout\nIf External: Product packaging & commercialization",
        icon: TrendingUp,
      },
      {
        heading: "Knowledge Transfer & Handover",
        content: "→ Train internal teams\n→ Document learning for future reuse",
        icon: BookOpen,
      },
    ],
  },
]

export default function CorpDigitalTransformationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-moroccan-sand via-white to-moroccan-teal/10 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-moroccan-charcoal">
              Our <span className="gradient-text">Digital Transformation</span> Procedure
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A clear, step-by-step approach to guide your business through successful digital evolution with CTL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-5 text-lg font-semibold shadow-medium hover:shadow-strong hover:-translate-y-1"
              >
                <Link href="/contact">Start Your Transformation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-10 py-5 text-lg font-semibold bg-transparent shadow-subtle hover:shadow-medium hover:-translate-y-1"
              >
                <Link href="/about">Learn About CTL</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-8">
              CTL Corporate Digital Transformation Flowchart
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Our proven methodology ensures a smooth and effective journey from initial concept to sustained growth.
            </p>
          </div>
          {/* Flowchart Container with Frame */}
          <div className="bg-white rounded-2xl p-8 shadow-medium border border-gray-100">
            <div className="relative overflow-x-auto pb-8">
              <div className="flex space-x-12 lg:space-x-20 justify-center min-w-max">
                {flowchartData.map((phase, index) => (
                  <div key={phase.id} className="relative flex flex-col items-center group">
                    {/* Phase Number Circle */}
                    <div className="w-20 h-20 bg-moroccan-charcoal text-white rounded-full flex items-center justify-center font-bold text-3xl shadow-strong z-10">
                      {phase.id}
                    </div>

                    {/* Horizontal Connector (between phases) */}
                    {index < flowchartData.length - 1 && (
                      <div className="absolute top-1/2 left-[calc(100%+1rem)] w-12 lg:w-20 h-1.5 bg-moroccan-charcoal -translate-y-1/2 z-0 group-last:hidden"></div>
                    )}

                    {/* Phase Title Box */}
                    <div className="bg-moroccan-charcoal text-white rounded-lg p-5 mt-8 text-center font-semibold text-xl shadow-medium w-72 flex items-center justify-center h-24">
                      {phase.title}
                    </div>

                    {/* Vertical Line from Title Box */}
                    <div className="w-1.5 h-12 bg-moroccan-charcoal mt-4"></div>

                    {/* Items */}
                    <div className="flex flex-col items-center space-y-6 mt-4">
                      {phase.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="relative">
                          {/* Vertical Line between items (if not first) */}
                          {itemIndex > 0 && (
                            <div className="absolute top-[-1.5rem] left-1/2 w-1.5 h-6 bg-moroccan-charcoal -translate-x-1/2"></div>
                          )}
                          <div className="bg-white text-moroccan-charcoal rounded-lg p-6 shadow-medium hover:shadow-strong hover:-translate-y-0.5 transition-all duration-300 text-base text-center w-72 min-h-[100px] flex flex-col justify-center items-center border border-gray-200">
                            {item.heading && (
                              <h4 className="font-semibold mb-1 text-lg flex items-center justify-center gap-2">
                                {item.icon && <item.icon className="h-5 w-5 text-primary" />}
                                {item.heading}
                              </h4>
                            )}
                            <p className="leading-relaxed whitespace-pre-line text-sm">{item.text || item.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Scroll hint overlay */}
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>
            </div>
            {/* Explicit scroll instruction for all screens with arrow */}
            <p className="text-center text-moroccan-charcoal text-lg font-bold mt-8 flex items-center justify-center gap-2">
              Scroll right to view the full flowchart{" "}
              <ArrowRight className="h-6 w-6 text-moroccan-teal flex-shrink-0" />
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-moroccan-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how CTL's structured approach can drive your digital success.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-5 text-lg font-semibold shadow-medium hover:shadow-strong hover:-translate-y-1"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
