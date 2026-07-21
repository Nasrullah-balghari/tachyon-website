/**
 * Inner-page content — transcribed from the prototype's renderVals().
 */

export const competencies = [
  { icon: "dns", t: "ASP.NET & Web APIs", d: "MVC apps and REST services with fast, modern HTML5 front ends." },
  { icon: "smartphone", t: "Cross-platform Mobile", d: "Native-quality apps that feel right on every device." },
  { icon: "desktop_windows", t: "WPF Smart-Client", d: "Rich, responsive desktop software for demanding workflows." },
  { icon: "bar_chart", t: "SQL Server BI", d: "SSRS and SSIS pipelines that turn data into decisions." },
  { icon: "cloud", t: "Azure Cloud & SaaS", d: "Cloud-native delivery and SaaS built to scale with you." },
  { icon: "smart_toy", t: "AI, ML & Computer Vision", d: "Agents, model training, and vision systems built right into your software." },
];

export const servicesPage = [
  {
    num: "01",
    icon: "layers",
    t: "Technical & Consulting",
    d: "Complex Microsoft-stack applications, engineered to enterprise standards from the very first line of code.",
    points: ["Architecture", "Full builds", ".NET & Azure"],
  },
  {
    num: "02",
    icon: "diversity_3",
    t: "Hire Our Developers",
    d: "Bring our senior engineers onto your team full-time or on contract. On-site, offshore, or near-shore, matched to your stack and your pace.",
    points: ["Full-time", "Contract", "On / near / offshore"],
  },
  {
    num: "03",
    icon: "health_and_safety",
    t: "PMO Rescue",
    d: "Sudden surges, shifting scope, unplanned exits. We step in, stabilize the program, and get delivery back on track.",
    points: ["Surge cover", "Scope change", "Stabilize"],
  },
];

export const aiStats = [
  { icon: "layers", n: "Full-stack AI", d: "Model to cloud, one team" },
  { icon: "lock", n: "Self-hosted", d: "Your data stays yours" },
  { icon: "smart_toy", n: "8+ agents", d: "Built and running in production" },
  { icon: "public", n: "6 industries", d: "Health, legal, SaaS and more" },
];

export const whatWeDo = [
  { n: "01", icon: "smart_toy", t: "Agentic AI", d: "Autonomous agents built on RAG and MCP that do real work." },
  { n: "02", icon: "visibility", t: "Computer Vision", d: "Detection, segmentation, and VLMs, running to the edge." },
  { n: "03", icon: "model_training", t: "Model Training", d: "Fine-tuning, DPO, and honest evals you can trust." },
  { n: "04", icon: "dns", t: "Inference & Cloud", d: "Self-hosted serving, on-prem or in your cloud." },
];

export const legacySteps = [
  { n: "01", t: "Audit", d: "We learn the system exactly as it runs today." },
  { n: "02", t: "Re-architect", d: "We design the target cleanly, with no surprises." },
  { n: "03", t: "Migrate safely", d: "We move it across without breaking what works." },
  { n: "04", t: "Modernize & own", d: "We bring it current and keep it running." },
];

export const whyUs = [
  { icon: "model_training", k: "MODEL", d: "We train and fine-tune it." },
  { icon: "construction", k: "SYSTEM", d: "We build the engine around it." },
  { icon: "rocket_launch", k: "SERVE", d: "We put it live and keep it fast." },
  { icon: "cloud", k: "CLOUD", d: "We deploy and maintain it." },
];

export const aiAgents = [
  { icon: "support_agent", t: "Customer Support", d: "Resolves tickets and answers questions around the clock." },
  { icon: "trending_up", t: "Sales Development", d: "Qualifies leads and books meetings while you sleep." },
  { icon: "analytics", t: "Data Analysis", d: "Turns raw data into clear answers on demand." },
  { icon: "description", t: "Document Processing", d: "Extracts, classifies, and routes documents at scale." },
  { icon: "mic", t: "Voice", d: "Natural voice agents for calls and support lines." },
  { icon: "search", t: "Research", d: "Gathers, synthesizes, and cites across sources." },
  { icon: "terminal", t: "Coding", d: "Ships code, reviews pull requests, and fixes bugs." },
  { icon: "account_tree", t: "Workflow Automation", d: "Wires your tools together and removes the busywork." },
];

export const selectedWork = [
  { logo: "/uploads/logo-pathomation.webp", sector: "Healthcare · Vision", name: "Pathomation", problem: "Pathology imaging at scale", built: "A detection and segmentation pipeline for whole-slide images.", tags: ["YOLO", "SAM", "PyTorch", "ONNX"] },
  { logo: "/uploads/logo-tuscamind.webp", sector: "Telehealth", name: "TuscaMind", problem: "Clinical session records", built: "Session capture with consent and FHIR-native storage.", tags: ["Session capture", "Consent", "FHIR"] },
  { logo: "/uploads/logo-convosense.webp", sector: "Call Centers", name: "ConvoSense", problem: "Understanding every call", built: "Transcription, diarization, and semantic search over calls.", tags: ["WhisperX", "pyannote", "pgvector"] },
  { logo: "/uploads/logo-leadsense.webp", sector: "Operations", name: "LeadSense", problem: "Lead triage overload", built: "Agentic lead routing built on vector search.", tags: ["LangGraph", "MCP", "Vector search"] },
  { logo: "/uploads/logo-guardian-medical.webp", sector: "Healthcare Data", name: "Guardian Medical", problem: "Records too dense to read", built: "A FHIR-backed API serving concise LLM summaries.", tags: ["FHIR", "FastAPI", "LLM summaries"] },
  { logo: "/uploads/logo-projul.webp", sector: "Enterprise SaaS", name: "Projul", problem: "Scaling under load", built: "A high-concurrency architecture with aggressive caching.", tags: ["High-concurrency", "Caching"] },
];

export const stackGroups = [
  { icon: "forum", t: "Language & Agents", items: ["GPT-4o", "Llama", "vLLM", "LiteLLM", "LangGraph", "MCP", "pgvector", "rerankers"] },
  { icon: "visibility", t: "Vision & Multimodal", items: ["Qwen3-VL", "InternVL3", "YOLOv11", "SAM", "Detectron2", "SigLIP 2", "TensorRT", "Jetson"] },
  { icon: "graphic_eq", t: "Speech & Audio", items: ["WhisperX", "pyannote", "wav2vec2", "silero-vad", "Vapi", "Retell"] },
  { icon: "dns", t: "Training, Data & Cloud", items: ["PyTorch", "PEFT", "DPO", "Qdrant", "Pinecone", "FastAPI", "Celery", "Docker", "Azure", "AWS"] },
];

export const contractTypes = [
  { icon: "event_available", t: "Full-Time Permanent" },
  { icon: "schedule", t: "Part-Time" },
  { icon: "gavel", t: "Director's Service Agreement" },
  { icon: "event", t: "Fixed-Term" },
];

export const aboutStats = [
  { n: "120+", d: "Companies served" },
  { n: "650+", d: "Projects delivered" },
  { n: "300+", d: "Developers placed in client teams" },
  { n: "2.5 yr", d: "Average client partnership" },
];

export const aboutValues = [
  { icon: "health_and_safety", t: "A hiring bar we never lower", d: "Only skilled, AI-fluent engineers ever touch your project. Every hire clears a strict technical review before we put them forward." },
  { icon: "layers", t: "One team, the whole build", d: "Architecture, engineering, QA, and cloud sit under one roof. No handoffs, no finger-pointing, one team accountable end to end." },
  { icon: "schedule", t: "Working when you are", d: "Clear English, real overlap with your hours, and progress updates you never have to chase." },
];

export const CONTACT = {
  email: "administrator@tachionconsultants.com",
  web: "www.tachionconsultants.com",
};
