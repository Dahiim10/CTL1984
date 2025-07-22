import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, MessageSquare, Mail, Code } from "lucide-react"

import { products } from "@/lib/products"

export function HomeProductsSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-moroccan-sand/20 to-white">
      {" "}
      {/* Increased padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-4">Our Core Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the innovative AI and development solutions CTL offers to transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-12 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {" "}
              {/* Increased padding, updated shadow, added translateY on hover */}
              <div className="flex items-center space-x-4 mb-6">
                {" "}
                {/* Increased margin-bottom */}
                {/* Dynamic icon based on product type, or a default */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="sr-only">{product.name} icon</span>
                  {product.id === "smart-agents" && <MessageSquare className="h-8 w-8 text-primary" />}
                  {product.id === "personal-ai-assistant" && <Cpu className="h-8 w-8 text-secondary" />}
                  {product.id === "cold-email-automation" && <Mail className="h-8 w-8 text-primary" />}
                  {product.id === "web-custom-dashboards" && <Code className="h-8 w-8 text-secondary" />}
                </div>
                <h3 className="text-2xl font-semibold text-moroccan-charcoal">{product.name}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">{product.overview}</p> {/* Increased margin-bottom */}
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-3 font-semibold bg-transparent shadow-subtle hover:shadow-medium hover:-translate-y-1"
              >
                <Link href={`/product#${product.id}`} className="flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          {" "}
          {/* Increased margin-top */}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-5 text-lg font-semibold shadow-medium hover:shadow-strong hover:-translate-y-1"
          >
            <Link href="/product">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
