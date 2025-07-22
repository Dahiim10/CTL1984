import Image from "next/image"

export function FounderSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-moroccan-sand/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Founder Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/images/hamza-benthami.jpeg"
              alt="Hamza Benthami, CTL Founder"
              width={400}
              height={400}
              className="rounded-2xl shadow-medium object-cover aspect-square"
            />
          </div>

          {/* Founder Quote and Info */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <blockquote className="text-3xl md:text-4xl font-display font-bold text-moroccan-charcoal leading-snug italic">
              {
                "“Digital transformation isn’t a choice — it’s the new language of progress. At CTL, we translate vision into velocity. CTL was born from a simple belief: Morocco deserves digital systems as bold and agile as its people. We’re here to make that real.”"
              }
            </blockquote>
            <p className="text-xl font-semibold text-primary">- Hamza Benthami</p>
            <p className="text-lg text-gray-600">Co-Founder & CEO, CTL</p>
          </div>
        </div>
      </div>
    </section>
  )
}
