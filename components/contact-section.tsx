"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-28 bg-gradient-to-br from-white to-moroccan-sand/20">
      {" "}
      {/* Increased padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today for a personalized demo and see how CTLbot can transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-12 shadow-medium">
            {" "}
            {/* Increased padding, updated shadow */}
            <h3 className="text-2xl font-semibold text-moroccan-charcoal mb-6">Get Your Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-lg p-3 text-base focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-lg p-3 text-base focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <Input
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="rounded-lg p-3 text-base focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <Textarea
                name="message"
                placeholder="Tell us about your business needs..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="rounded-lg p-3 text-base focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 text-lg font-semibold shadow-medium hover:shadow-strong hover:-translate-y-0.5"
              >
                Request Demo
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-12 shadow-medium">
              {" "}
              {/* Increased padding, updated shadow */}
              <h3 className="text-2xl font-semibold text-moroccan-charcoal mb-6">Contact Information</h3>
              <div className="space-y-5">
                {" "}
                {/* Adjusted spacing */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center shadow-subtle">
                    {" "}
                    {/* Increased size, added shadow */}
                    <Mail className="h-8 w-8 text-primary" /> {/* Increased icon size */}
                  </div>
                  <div>
                    <p className="font-semibold text-moroccan-charcoal text-lg">Email</p> {/* Increased font size */}
                    <p className="text-gray-600 text-base">hello@ctl.ma</p> {/* Increased font size */}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center shadow-subtle">
                    {" "}
                    {/* Increased size, added shadow */}
                    <Phone className="h-8 w-8 text-secondary" /> {/* Increased icon size */}
                  </div>
                  <div>
                    <p className="font-semibold text-moroccan-charcoal text-lg">Phone</p> {/* Increased font size */}
                    <p className="text-gray-600 text-base">+212 6XX XXX XXX</p> {/* Increased font size */}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-moroccan-sand rounded-lg flex items-center justify-center shadow-subtle">
                    {" "}
                    {/* Increased size, added shadow */}
                    <MapPin className="h-8 w-8 text-moroccan-charcoal" /> {/* Increased icon size */}
                  </div>
                  <div>
                    <p className="font-semibold text-moroccan-charcoal text-lg">Location</p> {/* Increased font size */}
                    <p className="text-gray-600 text-base">Casablanca, Morocco</p> {/* Increased font size */}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-white shadow-medium">
              {" "}
              {/* Increased padding, updated shadow */}
              <h3 className="text-2xl font-semibold mb-4">Why Choose CTL?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-white rounded-full flex-shrink-0"></span>{" "}
                  {/* Slightly larger bullet */}
                  <span className="text-base">Native Darija support</span> {/* Increased font size */}
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-white rounded-full flex-shrink-0"></span>
                  <span className="text-base">Built for Moroccan businesses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-white rounded-full flex-shrink-0"></span>
                  <span className="text-base">24/7 customer support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-white rounded-full flex-shrink-0"></span>
                  <span className="text-base">Easy integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
