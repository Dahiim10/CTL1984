import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
})

export const metadata: Metadata = {
  title: "CTL - Conversational Technology Lab | Moroccan AI Solutions",
  description:
    "Talk Smart. Work Fast. The Moroccan Touch in AI. CTL provides multilingual AI chatbots with Darija support for Moroccan businesses.",
  keywords: "AI, chatbot, Morocco, Darija, multilingual, automation, CRM integration",
  authors: [{ name: "CTL Team" }],
  openGraph: {
    title: "CTL - Conversational Technology Lab",
    description: "The Moroccan Touch in AI - Multilingual chatbots with Darija support",
    url: "https://ctl.ma",
    siteName: "CTL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTL - Conversational Technology Lab",
    description: "The Moroccan Touch in AI - Multilingual chatbots with Darija support",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-background-texture">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
