import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Youssef Benali",
      company: "Marrakech Crafts",
      role: "E-commerce Owner",
      content:
        "CTLbot transformed our customer service. Our customers love chatting in Darija, and our response time improved by 90%.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Fatima Alaoui",
      company: "Casa Real Estate",
      role: "Real Estate Agent",
      content:
        "The multilingual support is incredible. We can now serve French, Arabic, and English clients seamlessly.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Ahmed Tazi",
      company: "Digital Morocco Agency",
      role: "Marketing Director",
      content:
        "CTLbot understands Moroccan culture and expressions perfectly. It's like having a local team member available 24/7.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-28 bg-moroccan-charcoal text-white">
      {" "}
      {/* Increased padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Trusted by Moroccan Businesses</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how CTLbot is helping Moroccan SMEs grow their business and improve customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 shadow-medium hover:bg-white/15 hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {" "}
              {/* Increased padding, updated shadow, added translateY on hover */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-moroccan-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-200 mb-8 leading-relaxed">"{testimonial.content}"</p>{" "}
              {/* Increased margin-bottom */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                  {" "}
                  {/* Increased avatar size */}
                  <span className="text-white font-semibold text-xl">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4> {/* Slightly larger name */}
                  <p className="text-gray-300 text-base">{testimonial.role}</p> {/* Slightly larger role */}
                  <p className="text-primary text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
