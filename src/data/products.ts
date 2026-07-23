/**
 * AI Agents / Products — content transcribed from the prototype product.html
 * (the ConvoSense product page) plus the header mega-menu product list.
 */

import { ROUTES } from "@/lib/theme";

/* ---- Header mega menu ---------------------------------------------------- */

/** Left "Product Overview" featured card. */
export const productOverview = {
  label: "Product Overview",
  href: ROUTES.aiAgents,
  blurb:
    "ConvoSense analyzes 100% of call recordings to generate accurate transcripts, sentiment analysis, compliance alerts, and risk indicators automatically.",
};

/** Right column rows. All three use their product logo image (not an icon). */
export const productMenu = [
  {
    name: "ConvoSense",
    logo: "/uploads/logo-convosense.webp",
    href: ROUTES.aiAgents,
    live: true,
  },
  {
    name: "Pathomation",
    logo: "/uploads/logo-pathomation.webp",
    href: ROUTES.aiAgents,
    live: false,
  },
  {
    name: "LeadSense",
    logo: "/uploads/logo-leadsense.webp",
    href: ROUTES.aiAgents,
    live: false,
  },
] as const;

/* ---- ConvoSense product page --------------------------------------------- */

export const convoHero = {
  badge: "AI Conversation Intelligence Platform",
  titleLead: "Upload Calls. Get",
  titleAccent: "Intelligence",
  titleTrail: "Instantly.",
  intro:
    "ConvoSense analyzes 100% of call recordings to generate accurate transcripts, sentiment analysis, compliance alerts, and risk indicators automatically.",
  trust: ["SOC 2 Type II", "HIPAA Compliant", "GDPR", "99% Accuracy"],
  img: "/products/product_hero.webp",
};

/** `num`/`suffix` drive the count-up animation; `num` is the target value. */
export const convoStats = [
  { num: 99, suffix: "%", t: "Transcription Accuracy", d: "Manual review catches less than 5% of calls. ConvoSense analyzes 100% with near-perfect accuracy automatically." },
  { num: 50, suffix: "+", t: "Languages Supported", d: "Global teams operate without language barriers. Every call is transcribed and analyzed regardless of region or dialect." },
  { num: 100, suffix: "%", t: "Compliance Coverage", d: "No call goes unmonitored. ConvoSense flags compliance violations, risks, and alerts across every single conversation." },
  { num: 24, suffix: "/7", t: "Automated Analysis", d: "Stop reacting to problems after the damage is done. Get real-time sentiment, lead scoring, and risk indicators around the clock." },
];

export const convoProblems = [
  { n: "1", t: "Manual Review is Impossible", d: "Your team can't listen to every call. Critical insights, compliance violations, and abuse slip through undetected.", img: "/products/product-img-1-v2.png" },
  { n: "2", t: "No Visibility Into Quality", d: "Without 100% call coverage, you're guessing about team performance, customer sentiment, and compliance risk.", img: "/products/product-img-2-v2.png" },
  { n: "3", t: "Reactive, Not Proactive", d: "By the time you discover issues (lost deals, compliance failures, employee burnout), it's too late to fix them.", img: "/products/product-img-3-v2.png" },
];

export const convoSteps = [
  { n: "1", t: "Upload Your Calls", d: "Drag and drop recordings or connect your phone system. Supports MP3, WAV, and all major formats." },
  { n: "2", t: "AI Analyzes Everything", d: "Our AI transcribes, analyzes sentiment, detects compliance issues, scores leads, and identifies risks, all automatically." },
  { n: "3", t: "Get Actionable Intelligence", d: "Access transcripts, sentiment graphs, compliance reports, and risk alerts in an intuitive dashboard." },
];

export const convoCapabilities = [
  { key: "Transcription", t: "Turn Speech Into Searchable, Actionable Text", d: "Get 99%+ accurate transcriptions with automatic speaker identification, timestamps, and multi-language support. Every word becomes searchable, analyzable data.", b: ["99%+ accuracy across 50+ languages", "Automatic speaker diarization", "Timestamp navigation to exact moments", "Industry-specific vocabulary (medical, legal, financial)", "Export as TXT, PDF, DOCX, SRT"], img: "/products/tab-img1.png", iw: 682, ih: 707 },
  { key: "Sentiment", t: "Understand How Customers Really Feel", d: "Track emotions throughout the conversation with real-time sentiment scoring. Detect frustration, excitement, confusion, and satisfaction.", b: ["Real-time positive/neutral/negative scoring", "Emotion detection (frustration, excitement, confusion)", "Visual sentiment timeline throughout call", "Customer satisfaction prediction", "Agent empathy and tone analysis"], img: "/products/tab-img2.png", iw: 682, ih: 707 },
  { key: "Compliance", t: "Protect Your Business from Violations and Liability", d: "Automatically detect sensitive data sharing, regulatory violations, and prohibited content. Get real-time alerts before small issues become major legal problems.", b: ["PII/PHI/PCI detection and automatic redaction", "GDPR, HIPAA, PCI-DSS compliance monitoring", "Discriminatory language and harassment flagging", "Audit-ready compliance reports", "Custom violation rules and alerts"], img: "/products/tab-img3.png", iw: 682, ih: 708 },
  { key: "Protection", t: "Monitor and Protect Your Team from Abuse", d: "Detect verbal abuse, threats, and agent stress in real time. Protect your employees and create a safer work environment.", b: ["Verbal abuse and aggression detection", "Agent stress level monitoring", "Real-time manager alerts for severe cases", "Pattern analysis for repeat offenders", "Wellbeing reports and support triggers"], img: "/products/tab-img4.png", iw: 682, ih: 707 },
  { key: "Sales Intelligence", t: "Convert Conversations Into Revenue Opportunities", d: "Automatically qualify leads with BANT analysis, score buying intent, and identify competitive threats.", b: ["Automatic BANT qualification (Budget, Authority, Need, Timeline)", "Interest level scoring (1-100 scale)", "Buying signal detection", "Competitive mentions tracking", "Deal risk and win probability prediction"], img: "/products/tab-img5.png", iw: 682, ih: 707 },
  { key: "Analytics", t: "Data-Driven Decisions Across Your Organization", d: "Get complete visibility into call performance, team metrics, and trends. Generate custom reports and track KPIs.", b: ["Team performance dashboards and leaderboards", "Talk-to-listen ratio and engagement metrics", "Custom reports (PDF, Excel, CSV)", "Trend analysis and pattern recognition", "API access for advanced integrations"], img: "/products/tab-img6.png", iw: 792, ih: 729 },
  { key: "Embeddable Bots", t: "Get Instant Answers Without Leaving Your Platform", d: "Embed ConvoSense Chat AI directly into your website or platform so you get instant answers about calls without logging into dashboard or switching between apps.", b: ["Ask questions about calls in real-time (no app login needed)", "Deploy in one line of code (works on any website)", "Search, filter, and analyze calls while staying on your platform", "Reduce time spent jumping between tools and dashboards", "Give your entire team instant access to call intelligence", "Deploy on your website, fully white-labeled and branded as your own product"], img: "/products/Embeddable-Bots.png", iw: 621, ih: 669 },
];

export const convoUseCases = [
  { icon: "trending_up", color: "#EA5B2C", t: "Sales Teams", tag: "Automatically qualify every lead", points: ["Score buying intent", "Track objections and winning responses", "Identify at-risk deals", "Coach reps with analytics"] },
  { icon: "support_agent", color: "#17150F", t: "Customer Support", tag: "Ensure quality on 100% of calls", points: ["Monitor every call without manual review", "Protect agents from abusive customers", "Track first-call resolution", "Measure satisfaction trends"] },
  { icon: "health_and_safety", color: "#2563EB", t: "Compliance & Legal", tag: "Detect violations in real-time", points: ["Monitor 100% of calls", "Detect PII/PHI sharing instantly", "Generate audit-ready docs", "Reduce risk company-wide"] },
  { icon: "model_training", color: "#158B84", t: "Quality Assurance", tag: "Automate QA without headcount", points: ["Score 100% of calls automatically", "Ensure script adherence", "Standardize quality metrics", "Scale without limits"] },
  { icon: "users", color: "#1F9D57", t: "Human Resources", tag: "Protect employees and culture", points: ["Monitor employee wellbeing", "Detect harassment early", "Document incidents properly", "Support performance decisions"] },
  { icon: "analytics", color: "#EA5B2C", t: "Executives", tag: "Complete business visibility", points: ["Company-wide sentiment metrics", "Risk exposure dashboards", "Revenue intelligence", "Strategic decision support"] },
];

export const convoMeta = {
  intelBadge: "Conversation Intelligence",
  intelHeading: [
    "ConvoSense clients turn every call",
    "into actionable business intelligence",
  ],
  splitTitle: "Complete Conversation Intelligence in One Platform",
  splitBody1:
    "ConvoSense transforms raw call recordings into comprehensive intelligence. Upload any conversation and instantly receive accurate transcriptions, sentiment analysis, compliance monitoring, lead scoring, and actionable insights, all powered by enterprise-grade AI.",
  splitBody2:
    "Unlike basic transcription tools, ConvoSense protects your business, your team, and your customers by analyzing 100% of calls for compliance violations, employee abuse, and business risks automatically.",
  splitImg: "/products/Complete-img.png",
  ctaTitle: "Ready to Transform Every Call Into Intelligence?",
  ctaBody:
    "Join enterprise teams using ConvoSense to ensure compliance, protect employees, and drive better decisions from every conversation.",
  ctaFine: "No credit card required • 14-day free trial • Full feature access • Cancel anytime",
};
