import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products"

export const metadata: Metadata = {
  title: "Our Products - CTL | Advanced AI Solutions",
  description:
    "Explore CTL's range of AI chatbots, personal assistants, cold email automation, and custom web development services.",
}

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-moroccan-sand via-white to-moroccan-teal/10 py-28">
        {" "}
        {/* Increased padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-moroccan-charcoal">
              Explore Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              CTL offers a suite of cutting-edge AI and development solutions tailored to empower your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-5 text-lg font-semibold shadow-medium hover:shadow-strong hover:-translate-y-1"
              >
                <Link href="/contact">Schedule a Consultation</Link>
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

      {/* Products Section */}
      <section className="py-28 bg-white">
        {" "}
        {/* Increased padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col rounded-2xl p-12 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1 ${
                index % 2 === 0 ? "bg-white" : "bg-moroccan-sand/10"
              }`}
            >
              {" "}
              {/* Increased padding, updated shadow, added translateY on hover */}
              <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-4">{product.name}</h2>
              <p className="text-lg text-gray-600 mb-6">{product.version}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-moroccan-charcoal mb-4">Overview</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-base">{product.overview}</p>{" "}
                  {/* Increased font size */}
                  {product.owners && (
                    <p className="text-gray-700 font-medium text-base">
                      {" "}
                      {/* Increased font size */}
                      <span className="text-moroccan-charcoal">Product Owners:</span> {product.owners}
                    </p>
                  )}
                  {product.targetUsers && (
                    <p className="text-gray-700 font-medium mt-2 text-base">
                      {" "}
                      {/* Increased font size */}
                      <span className="text-moroccan-charcoal">Target Users:</span> {product.targetUsers}
                    </p>
                  )}
                </div>

                <div>
                  {product.capabilities && (
                    <>
                      <h3 className="text-2xl font-semibold text-moroccan-charcoal mb-4">Key Capabilities</h3>
                      <ul className="space-y-3">
                        {product.capabilities.map((cap, capIndex) => (
                          <li key={capIndex} className="flex items-start space-x-3 text-gray-700 text-base">
                            {" "}
                            {/* Increased font size */}
                            {cap.icon && <cap.icon className="h-6 w-6 text-primary flex-shrink-0" />}
                            <span>{cap.text}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {product.workflow && (
                    <>
                      <h3 className="text-2xl font-semibold text-moroccan-charcoal mt-8 mb-4">Workflow</h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700 text-base">
                        {" "}
                        {/* Increased font size */}
                        {product.workflow.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ol>
                    </>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-2xl font-semibold text-moroccan-charcoal mb-4">Technical Details</h3>
                  {product.techStack && (
                    <p className="text-gray-600 leading-relaxed mb-4 text-base">
                      {" "}
                      {/* Increased font size */}
                      <span className="font-semibold">Technical Stack:</span> {product.techStack}
                    </p>
                  )}
                  {product.securityCompliance && (
                    <p className="text-gray-600 leading-relaxed mb-4 text-base">
                      {" "}
                      {/* Increased font size */}
                      <span className="font-semibold">Security & Compliance:</span> {product.securityCompliance}
                    </p>
                  )}
                  {product.securityData && (
                    <>
                      <p className="font-semibold text-moroccan-charcoal mb-2 text-base">Security / Data:</p>{" "}
                      {/* Increased font size */}
                      <ul className="space-y-2 text-gray-700 text-base">
                        {" "}
                        {/* Increased font size */}
                        {product.securityData.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <Check className="h-5 w-5 text-moroccan-teal flex-shrink-0" />
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {product.hostingDeployment && (
                    <p className="text-gray-600 leading-relaxed mt-4 text-base">
                      {" "}
                      {/* Increased font size */}
                      <span className="font-semibold">Hosting & Deployment:</span> {product.hostingDeployment}
                    </p>
                  )}
                  {product.performanceDeployment && (
                    <p className="text-gray-600 leading-relaxed mt-4 text-base">
                      {" "}
                      {/* Increased font size */}
                      <span className="font-semibold">Performance & Deployment:</span> {product.performanceDeployment}
                    </p>
                  )}
                  {product.buildPipeline && (
                    <p className="text-gray-600 leading-relaxed mt-4 text-base">
                      {" "}
                      {/* Increased font size */}
                      <span className="font-semibold">Build Pipeline:</span> {product.buildPipeline}
                    </p>
                  )}
                  {product.techHighlights && (
                    <>
                      <p className="font-semibold text-moroccan-charcoal mt-4 mb-2 text-base">Tech Highlights:</p>{" "}
                      {/* Increased font size */}
                      <ul className="space-y-2 text-gray-700 text-base">
                        {" "}
                        {/* Increased font size */}
                        {product.techHighlights.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <Check className="h-5 w-5 text-moroccan-teal flex-shrink-0" />
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {product.complianceDeliverability && (
                    <>
                      <p className="font-semibold text-moroccan-charcoal mt-4 mb-2 text-base">
                        Compliance & Deliverability:
                      </p>{" "}
                      {/* Increased font size */}
                      <ul className="space-y-2 text-gray-700 text-base">
                        {" "}
                        {/* Increased font size */}
                        {product.complianceDeliverability.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <Check className="h-5 w-5 text-moroccan-teal flex-shrink-0" />
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {product.coreOffering && (
                    <>
                      <p className="font-semibold text-moroccan-charcoal mt-4 mb-2 text-base">Core Offering:</p>{" "}
                      {/* Increased font size */}
                      <ul className="space-y-2 text-gray-700 text-base">
                        {" "}
                        {/* Increased font size */}
                        {product.coreOffering.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <Check className="h-5 w-5 text-moroccan-teal flex-shrink-0" />
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {product.typicalUseCases && (
                    <p className="text-gray-600 leading-relaxed mt-4 text-base">
                      {" "}
                      {/* Increased font size */}
                      <span className="font-semibold">Typical Use-Cases:</span> {product.typicalUseCases}
                    </p>
                  )}
                  {product.leadTimePricing && (
                    <p className="text-gray-600 leading-relaxed mt-4 text-base">
                      {" "}
                      {/* Increased font size */}
                      <span className="font-semibold">Lead Time & Pricing:</span> {product.leadTimePricing}
                    </p>
                  )}
                </div>

                <div>
                  {product.roadmap && (
                    <>
                      <h3 className="text-2xl font-semibold text-moroccan-charcoal mb-4">Roadmap</h3>
                      <ul className="space-y-3">
                        {product.roadmap.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3 text-gray-700 text-base">
                            {" "}
                            {/* Increased font size */}
                            {item.icon && <item.icon className="h-6 w-6 text-secondary flex-shrink-0" />}
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {product.knownLimits && (
                    <>
                      <h3 className="text-2xl font-semibold text-moroccan-charcoal mt-8 mb-4">Known Limits</h3>
                      <ul className="space-y-3">
                        {product.knownLimits.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3 text-gray-700 text-base">
                            {" "}
                            {/* Increased font size */}
                            <X className="h-6 w-6 text-red-500 flex-shrink-0" />
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
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
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Elevate Your Business with CTL?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your specific needs and find the perfect AI solution for you.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-5 text-lg font-semibold shadow-medium hover:shadow-strong hover:-translate-y-1"
          >
            <Link href="/contact">Get a Personalized Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
