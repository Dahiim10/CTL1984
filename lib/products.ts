/**
 * Central source-of-truth for all CTL product specs.
 * Both the Products page and the homepage reference this file.
 */
import {
  Globe,
  MessageSquare,
  Check,
  Cpu,
  Smartphone,
  BarChart3,
  Mail,
  Code,
  Calendar,
  Phone,
  Shield,
} from "lucide-react"

export const products = [
  {
    id: "smart-agents",
    name: "AI Chatbots (Smart Agents)",
    version: "SmartAgent Chatbot Suite – (Client-tailored builds) · First release Dec 2024 · Rolling updates",
    owners: "Hamza Benthami (CEO) - Matt Zhukov (Technical Engineer)",
    overview:
      "Low-/no-code built conversational agents for e-commerce, government help-centres and real-estate lead capture. Built in Voiceflow and powered by OpenAI & Anthropic models; API connections let the bot read/write to any REST/GraphQL API.",
    capabilities: [
      { icon: Globe, text: "Multilingual (Arabic Darija, French, English, Arabic Classic, Spanish, etc.)" },
      { icon: MessageSquare, text: "Product or service search with dynamic carousels" },
      { icon: Check, text: "Order / case-status look-ups via secure API calls" },
      { icon: Cpu, text: "Conditional flows + slot filling" },
      { icon: Smartphone, text: "Human-agent hand-off dashboard (web-socket push)" },
      { icon: BarChart3, text: "Analytics panel (sessions, CSAT, conversion)" },
    ],
    targetUsers: "Retail CX teams, city administrations, real-estate listing portals, etc.",
    techStack:
      "Voiceflow Dialog Engine → HTTPS request blocks → OpenAI gpt-4o → Vector DB for session logs → ConvoCore front-end.",
    securityCompliance:
      "API keys scoped per client · Voiceflow SOC 2 & GDPR ready · EU-Central data residency on request.",
    hostingDeployment:
      "Voiceflow cloud runtime + single-line JS snippet or iframe on client site; typical go-live < 14 days.",
    roadmap: [
      { icon: Cpu, text: "GPT-4o Vision to process images (receipts, IDs)" },
      { icon: BarChart3, text: "Self-serve conversation analytics export" },
    ],
    knownLimits: [
      { text: "Depends on Voiceflow token pool" },
      { text: "Offline / on-prem not supported" },
      { text: "Custom code blocks limited to serverless 30 s" },
    ],
  },
  {
    id: "personal-ai-assistant",
    name: "Personal AI Assistant",
    version: "CTL Personal Assistant – (Private Beta)",
    owners: "Hamza Benthami - Matt Zhukov",
    overview:
      "Multi-agent workplace assistant that reads email & calendar, drafts messages, schedules meetings and can place outbound voice calls—all orchestrated without code in n8n.",
    capabilities: [
      { icon: MessageSquare, text: "Context-aware chat (web app & Telegram)" },
      { icon: Mail, text: "Auto-draft / send Gmail & Outlook messages" },
      { icon: Calendar, text: "Google Calendar, Notion & Sheets actions" },
      { icon: Code, text: "Custom tools connected via API" },
      { icon: Globe, text: "Web-search + summarisation" },
      { icon: Phone, text: "Voice call execution via Twilio + Vapi (planned)" },
      { icon: BarChart3, text: "KPI dashboard: tasks completed, time saved, efficiency score" },
    ],
    techStack: "React + Supabase auth → Webhooks → n8n cloud workflows → OpenAI gpt-4o → Google APIs, Tavily, Twilio.",
    securityCompliance: "Google OAuth least-privilege scopes · encrypted n8n vault · optional SAML SSO for enterprise.",
    performanceDeployment:
      "Avg task latency < 1.2 s · UI on Netlify, n8n self-hosted · white-label instances available.",
    roadmap: [
      { icon: Cpu, text: "Vector memory for long-term context" },
      { icon: Smartphone, text: "Mobile PWA" },
      { icon: MessageSquare, text: "Voice-only interaction mode" },
    ],
    knownLimits: [
      { text: "Works only online; no offline cache" },
      { text: "Requires user consent for mailbox access" },
    ],
  },
  {
    id: "cold-email-automation",
    name: "Personalized B2B Cold-Email Automation",
    version: "Lead Gen Personalized Emails Automation – v1.0 (Live)",
    owners: "Matt Zhukov - Hamza Benthami",
    overview:
      "End-to-end outreach engine that scrapes leads, enriches them, crafts hyper-personalised ice-breakers and sends sequenced campaigns from warmed-up mailboxes.",
    workflow: [
      "LinkedIn Sales Navigator export → Google Sheets",
      "Make.com/n8n: email-finder API → NeverBounce verify",
      "OpenAI crafts custom opener per lead",
      "Instantly.ai warms + sequences",
      "Stats pushed to Google Data Studio (optional custom dashboard)",
    ],
    techHighlights: [
      { text: "100% no-code (Make.com/n8n & Instantly)" },
      { text: "≈ 35 emails / mailbox / day" },
      { text: "Client spin-up 2 days (pre-warmed) or 14-21 days (new warm-up)" },
    ],
    complianceDeliverability: [
      { text: "SPF, DKIM, DMARC auto-checker" },
      { text: "Unsubscribe & GDPR forget-me webhooks" },
      { text: "Bounce guard, max 3 % threshold" },
    ],
    roadmap: [
      { icon: Check, text: "Native HubSpot / Close CRM push" },
      { icon: MessageSquare, text: "Multichannel (LinkedIn DM + email) sequences" },
      { icon: Globe, text: "Arabic/French ice-breaker model" },
    ],
    knownLimits: [
      { text: "Requires LinkedIn Premium for search" },
      { text: "Cold domains must warm 10–14 days first" },
    ],
  },
  {
    id: "web-custom-dashboards",
    name: "Web Sites & Custom Dashboards",
    version: "Lovable.dev Build-Suite – v2.2",
    owners: "Hamza Benthami – Matt Zhukov",
    overview:
      "Rapid delivery of marketing sites, client portals and analytics dashboards using a low-code builder plus lightweight custom React components.",
    coreOffering: [
      { text: "Pixel-perfect Tailwind pages" },
      { text: "Supabase / PostgreSQL back-end scaffolding" },
      { text: "Auth, RBAC & Stripe billing modules" },
      { text: "Embedded charts (Chart.js, Recharts)" },
      { text: "99.9 % uptime on Netlify edge" },
    ],
    typicalUseCases: "Landing sites, SaaS admin panels, partner portals, KPI dashboards.",
    buildPipeline: "Visual editor → GitHub Actions CI → Netlify Preview → Prod promote in one click.",
    securityData: [
      { text: "Supabase row-level security" },
      { text: "TLS edge certificates, AES-256 at rest" },
      { text: "GDPR & Moroccan CNDP alignment" },
    ],
    leadTimePricing: "MVP site in 1–3 days; subscription or fixed-bid.",
    roadmap: [
      { icon: Cpu, text: "One-click AI copywriter block" },
      { icon: Check, text: "Multi-tenant theming system" },
      { icon: Shield, text: "ISO 27001 hosting option (AWS eu-central-1)" },
    ],
    knownLimits: [
      { text: "Heavy real-time features need custom Next.js functions" },
      { text: "On-prem deployment not supported yet" },
    ],
  },
]
