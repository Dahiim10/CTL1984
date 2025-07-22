"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    message: "",
    demoType: "general",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Demo request submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      message: "",
      demoType: "general",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-moroccan-sand via-white to-moroccan-teal/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-moroccan-charcoal">
              Get Your <span className="gradient-text">Free Demo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See CTLbot in action and discover how it can transform your business. Schedule a personalized demo with
              our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Request Form */}
            <div className="bg-gradient-to-br from-white to-moroccan-sand/10 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-display font-bold text-moroccan-charcoal mb-6">Request Your Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-lg"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="company"
                    placeholder="Company Name *"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="rounded-lg"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select onValueChange={(value) => handleSelectChange("industry", value)}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="realestate">Real Estate</SelectItem>
                      <SelectItem value="agency">Digital Agency</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select onValueChange={(value) => handleSelectChange("demoType", value)}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Demo Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Overview</SelectItem>
                      <SelectItem value="technical">Technical Deep Dive</SelectItem>
                      <SelectItem value="integration">Integration Focus</SelectItem>
                      <SelectItem value="pricing">Pricing Discussion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Textarea
                  name="message"
                  placeholder="Tell us about your business needs and what you'd like to see in the demo..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="rounded-lg"
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 text-lg font-semibold"
                >
                  Schedule My Demo
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-moroccan-charcoal mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-moroccan-charcoal">Email</p>
                      <p className="text-gray-600">hello@ctl.ma</p>
                      <p className="text-gray-600">support@ctl.ma</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-moroccan-teal/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-moroccan-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-moroccan-charcoal">Phone</p>
                      <p className="text-gray-600">+212 6XX XXX XXX</p>
                      <p className="text-gray-600">+212 5XX XXX XXX</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-moroccan-sand rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-moroccan-charcoal" />
                    </div>
                    <div>
                      <p className="font-semibold text-moroccan-charcoal">Office</p>
                      <p className="text-gray-600">Casablanca, Morocco</p>
                      <p className="text-gray-600">Twin Center, Tour A</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-moroccan-charcoal">Business Hours</p>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">GMT+1 (Morocco Time)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-br from-primary to-moroccan-teal rounded-2xl p-8 text-primary-foreground">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageSquare className="h-8 w-8" />
                  <h3 className="text-2xl font-semibold">Quick Response Guarantee</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Demo scheduled within 24 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Personalized to your industry</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>No commitment required</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Available in Arabic, French, or English</span>
                  </li>
                </ul>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-moroccan-charcoal mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-moroccan-charcoal mb-2">How long does the demo take?</h4>
                    <p className="text-gray-600 text-sm">
                      Typically 30-45 minutes, depending on your specific needs and questions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-moroccan-charcoal mb-2">Can I see Darija support in action?</h4>
                    <p className="text-gray-600 text-sm">
                      We'll demonstrate real conversations in Darija and show how CTLbot understands local expressions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-moroccan-charcoal mb-2">Is there a free trial available?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes, we offer a 14-day free trial with full access to all features after your demo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
