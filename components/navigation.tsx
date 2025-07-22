"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/product", label: "Products" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/corp-digital-transformation", label: "Digital Transformation" }, // New navigation item
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-moroccan-yellow shadow-medium sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {" "}
          {/* Increased height */}
          <Link href="/" className="flex items-center">
            <Image src="/images/ctl-logo.png" alt="CTL Logo" width={48} height={48} className="rounded-lg" />{" "}
            {/* Slightly larger logo */}
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-moroccan-charcoal hover:text-primary transition-colors duration-200 hover:-translate-y-0.5"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-lg font-semibold shadow-medium hover:shadow-strong hover:-translate-y-1"
            >
              <Link href="/contact">Get Demo</Link>
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />} {/* Larger icons for mobile */}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute inset-x-0 top-full bg-white border-t border-gray-100 shadow-medium">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-moroccan-charcoal hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full shadow-medium">
                  <Link href="/contact">Get Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
