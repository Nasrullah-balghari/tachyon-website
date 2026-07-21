/**
 * Home page content — transcribed from the prototype's renderVals().
 * Asset paths point at /uploads/* (renamed to meaningful slugs on import).
 */

export const HERO_WORDS = ["AI Specialists", "Cloud Experts", "Software Teams"];

export const services = [
  {
    title: "Front-End Engineering",
    icon: "svc_frontend",
    tile: "#EA5B2C",
    desc: "Create modern web experiences that connect users with your product.",
    tags: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Redux"],
  },
  {
    title: "Back-End Engineering",
    icon: "svc_backend",
    tile: "#17150F",
    desc: "Build the services, APIs, and infrastructure behind every product experience.",
    tags: [".NET", "ASP.NET Core", "C#", ".NET MVC", "Web API", "Entity Framework", "Blazor", "Node.js", "Java", "Python", "Go", "SQL Server", "Microservices"],
  },
  {
    title: "AI & Machine Learning",
    icon: "svc_ai",
    tile: "#2563EB",
    desc: "Bring intelligence, automation, and data-driven decision making into your software.",
    tags: ["AI", "Machine Learning", "Deep Learning", "LLMs", "Generative AI", "Computer Vision", "NLP", "Data Science", "TensorFlow", "PyTorch", "Python"],
  },
  {
    title: "Mobile Engineering",
    icon: "svc_mobile",
    tile: "#2563EB",
    desc: "Deliver mobile applications designed for performance across iOS and Android.",
    tags: ["Mobile Applications", "iOS", "Android", "React Native", "Flutter", "Kotlin", "Swift"],
  },
  {
    title: "Product Design",
    icon: "svc_design",
    tile: "#158B84",
    desc: "Shape user experiences through thoughtful design, research, and prototyping.",
    tags: ["UX Design", "UI Design", "Figma", "Design Systems", "Prototyping", "Wireframing"],
  },
  {
    title: "Quality Assurance",
    icon: "svc_qa",
    tile: "#1F9D57",
    desc: "Ensure every feature performs as intended before it reaches production.",
    tags: ["Quality Assurance", "Automation Testing", "Selenium", "Manual Testing", "Cypress", "Performance Testing"],
  },
];

export const slides = [
  {
    pub: "Full Time Hiring",
    text: "We work with our clients in challenging scenarios in finding multiple options for any desired skill. Tachyon maintains a steady active resource pool and lines them up with customer requirements.",
  },
  {
    pub: "Contract Hiring",
    text: "For clients who have to face the huge load with a lean muscle, our highly skilled networked professionals deliver the job with ease. We wire the job to the consultant and to the customer till the job is done.",
  },
  {
    pub: "Staffing",
    text: "Sudden surges in business requirements, change of scope and unplanned exits get ahead of delivering complex projects. We rescue the Project Management Office of our clients with our skilled Human Capital service offerings in flexible hiring options.",
  },
];

export const reasons = [
  { title: "Vetted talent, always", desc: "A strict hiring bar means only skilled, AI-fluent engineers ever touch your project." },
  { title: "Sized to your build", desc: "One engineer or a full multi-team setup. You shape the team around the work, not the other way around." },
  { title: "Zero timezone drag", desc: "We are online when you are, communicating clearly in English from day one." },
  { title: "Ready when you are", desc: "Teams spin up the moment you need them, and scale up or down without the friction." },
];

export const badges = [
  { img: "/uploads/award-clutch.webp", title: "Top 100 on Clutch.co", desc: "Ranked among the best on the leading platform for B2B reviews and ratings." },
  { img: "/uploads/award-fortune500.webp", title: "Fortune 500 clients", desc: "Trusted to build for some of the biggest names in the world." },
  { img: "/uploads/award-50m-raised.webp", title: "$50M+ raised", desc: "Past clients used the web and mobile apps we built to raise over $50 million in funding." },
  { img: "/uploads/award-25-countries.webp", title: "25+ countries", desc: "Delivering innovative digital solutions to clients across the globe." },
  { img: "/uploads/award-16-years.webp", title: "16+ years", desc: "Proven expertise in building enterprise software, SaaS and AI solutions." },
];

export const roles = [
  { label: "Software developers", img: "/uploads/role-software-developers.webp" },
  { label: "QA engineers", img: "/uploads/role-qa-engineers.webp" },
  { label: "UX designers", img: "/uploads/role-ux-designers.webp" },
  { label: "Data scientists", img: "/uploads/role-data-scientists.webp" },
  { label: "Project managers", img: "/uploads/role-project-managers.webp" },
];

/** Decorative gray shapes behind each role figure — one per role, in order. */
export const roleShapes: React.CSSProperties[] = [
  { width: 172, height: 152, background: "#C7CCD1", borderRadius: "6px 62% 6px 62%", transform: "translateX(-50%)" },
  { width: 150, height: 150, background: "#C7CCD1", borderRadius: "14px", transform: "translateX(-52%) rotate(6deg)" },
  { width: 162, height: 162, background: "#C7CCD1", borderRadius: "50%", transform: "translateX(-50%)" },
  { width: 0, height: 0, borderLeft: "86px solid transparent", borderRight: "86px solid transparent", borderTop: "152px solid #C7CCD1", transform: "translateX(-50%)" },
  { width: 162, height: 162, background: "#C7CCD1", borderRadius: "62% 6px 62% 6px", transform: "translateX(-50%)" },
];

export const quotes = [
  {
    logo: "/uploads/client-emk3.webp",
    text: "Hiring them again was never a question. Their collaboration style built momentum fast, and we hit our goals sooner than planned. The kind of team you keep on speed dial.",
    name: "Michael Reyes",
    role: "VP of Engineering, eMK3",
  },
  {
    logo: "/uploads/client-perceptive.webp",
    text: "Tachyon gave us top-tier development and design talent, backed by account management that actually stayed on top of things. We shipped faster and cut costs at the same time.",
    name: "Sarah Lin",
    role: "Director of Product, Perceptive Navigation",
  },
  {
    logo: "/uploads/client-allpro.webp",
    text: "A trustworthy, sharp, and adaptable partner. They do not just take orders, they push back and ask the right questions when it matters. That is where the real value shows up.",
    name: "David Okafor",
    role: "Managing Partner, ALLPRO Consulting",
  },
];

export const steps = [
  {
    step: "STEP 1",
    icon: "phone",
    title: "Start with a call.",
    desc: "Tell us about your business on a quick discovery call. We cover team structure, success criteria, timeline, budget, and the skills you need.",
  },
  {
    step: "STEP 2",
    icon: "users",
    title: "Lock the plan and the team.",
    desc: "Within days, we finalize your project scope, agree on an engagement model, and hand-pick and onboard your team.",
  },
  {
    step: "STEP 3",
    icon: "zap",
    title: "Build and track.",
    desc: "Once milestones are set, we get to work right away. You get progress tracking, regular updates, and a team that adapts as your needs shift.",
  },
];

/** Tech marquee rows — duplicated at render time for seamless infinite scroll. */
export const techRow1 = ["Node.js", "Java", "React", ".NET", "C#", "Python", "Angular", "TypeScript", "SQL Server", "Go"];
export const techRow2 = ["TensorFlow", "PyTorch", "LangChain", "OpenAI", "Hugging Face", "Computer Vision", "NLP", "LLMs", "RAG", "Keras", "scikit-learn", "Vue.js"];
