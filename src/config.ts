export const siteConfig = {
  name: "Vladislav Simutin",
  title: "Cloud Backend Engineer",
  description:
    "Portfolio of Vladislav Simutin — Cloud Backend Engineer specializing in Go, GCP, Kubernetes and InfoSec",
  accentColor: "#1B4F8A",
  social: {
    email: "vladsimutin@gmail.com",
    linkedin: "https://www.linkedin.com/in/vladislav-simutin/",
    twitter: "",
    github: "https://github.com/nord-winter",
    showcase: "https://github.com/nord-winter/showcase",
  },
  aboutMe:
    "Platform & Backend Engineer with 6+ years across fintech and e-commerce. Build and operate distributed systems in Go on GCP — microservices, Kubernetes, Terraform, observability pipelines. Worked on high-load systems with AI pipelines in production. Information security background — education, production SecDevOps, security audit and hands-on offensive security.",
  skillGroups: [
    {
      category: "Platform & Infrastructure",
      skills: ["GCP", "Kubernetes", "Terraform", "Docker", "Kafka", "NGINX", "Linux"],
    },
    {
      category: "Backend",
      skills: ["Go", "Python", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "gRPC"],
    },
    {
      category: "Observability & CI/CD",
      skills: ["Prometheus", "Grafana", "k6", "GitHub Actions", "GitLab CI/CD"],
    },
    {
      category: "AI / LLM Infra",
      skills: ["RAG pipelines", "AI agents", "vLLM", "Qdrant", "MCP Servers", "GenKit"],
    },
    {
      category: "Security",
      skills: ["SecDevOps", "Vulnerability assessment", "Access controls", "Offensive security"],
    },
    {
      category: "Frontend",
      skills: ["TypeScript", "Vue.js 3", "Vite", "Feature-Sliced Design"],
    },
  ],
  projects: [
    {
      name: "Bidbase",
      description:
        "B2B SaaS tender automation platform. Hybrid item matching via sentence transformers + RapidFuzz. Automates parsing of tender specs from Excel/CSV into ERPNext. Built on Frappe framework.",
      link: "",
      skills: ["Go", "Python", "Frappe", "ERPNext", "ML"],
    },
    {
      name: "PocketPrice",
      description:
        "Service catalog sync platform for freelancers across multiple marketplaces. Go (Pocketbase) — API, sync logic, platform integrations. Vue 3 + Shadcn/Tailwind frontend.",
      link: "",
      skills: ["Go", "Vue.js", "Pocketbase", "TypeScript"],
    },
    {
      name: "Moscow Regional Duma Inventory System",
      description:
        "Secure inventory management for government buildings. Interactive floor plans, role-based access control, 1C integration, government-grade data security compliance.",
      link: "",
      skills: ["Go", "PostgreSQL", "1C"],
    },
  ],
  experience: [
    {
      company: "Ascender",
      title: "Tech Lead / AI Backend Engineer",
      dateRange: "Feb 2024 – Jan 2026",
      location: "Bangkok, Thailand",
      about: "Thailand's #2 digital marketing & technology company. Specialized in e-commerce online marketing and digital business solutions. Total combined monthly GMV of $1M+.",
      bullets: [
        "Reduced infrastructure costs by 40% by automating LLM compute VM lifecycle — auto-suspend on idle via Cloud Functions + Go scripts with Terraform-managed provisioning",
        "Designed and operated microservice architecture on GCP — platform reached $10K+ MRR within 6 months of MVP launch",
        "Optimized ATS telephony pipeline, reducing lost calls by 33% through queue management and failover automation — directly impacted sales conversion",
        "Built production RAG sales agent: full intent pipeline backed by vector DB + relational DB + external data sources via Genkit",
        "Deployed k6 + Grafana observability across internal services — tracked latency, error rates, SLA compliance; maintained 95% platform uptime",
        "Built versioned CI/CD pipeline: containerized services via S3-backed artifact storage with multi-environment support and automated rollback",
        "Automated logistics and reporting workflows in Go — eliminated 20+ hours/week of manual operations",
        "Scaled engineering team from 3 to 8; conducted 30+ technical interviews, made 5 hires",
      ],
    },
    {
      company: "BRLab · Metaratings",
      title: "Senior Backend Engineer",
      dateRange: "Sep 2021 – Aug 2023",
      location: "Russia / United Kingdom",
      about: "Leading international sports media & technology group (Skolkovo resident). Multi-brand platform with 5M+ monthly visits, proprietary payments, user accounts, and content services.",
      bullets: [
        "Architected and maintained 30+ microservices including personalized feed sustaining 80K+ RPS peak load",
        "Reduced SQL query overhead and source code by 30% — achieved 2x throughput improvement by eliminating data transfer redundancy",
        "Recovered 16,000 organic visits within 4 months via Web Archive content recovery pipeline with automated URL redirection",
        "Reduced task turnaround from 16 hours to 2 hours by automating internal development workflows",
        "Led deployment, refactoring and monitoring as acting Team Lead — accelerated development cycles 2x",
      ],
    },
    {
      company: "D-GRUPP Holding",
      title: "Full Stack Developer",
      dateRange: "Aug 2020 – Nov 2021",
      location: "Moscow",
      about: "Multi-agency marketing & tech holding — 7 agencies in media, digital, creative, and marketing automation. Market leader among Russian advertising industry rating agencies.",
      bullets: [
        "Built automated sales funnel — reduced request processing time by 60%, tripled conversion rate",
        "Increased search engine traffic by 30% through loading speed optimization and technical SEO",
        "Secured Linux-based infrastructure with access controls, vulnerability assessments and automated backups — maintained 99.9% uptime",
        "Integrated third-party systems and automated reporting processes while maintaining security protocols",
      ],
    },
    {
      company: "Freelance",
      title: "Full Stack Developer",
      dateRange: "Jan 2020 – Aug 2020",
      location: "Remote",
      bullets: [
        "Delivered 10+ MVPs for early-stage startups within 4–8 week timelines, $3K–10K per project",
        "Implemented authentication systems, payment integrations, and responsive APIs for mobile applications",
        "Provided technical advisory for non-technical founders — rapid prototyping and market validation focus",
      ],
    },
  ],
  education: [
    {
      school: "Perm Military University",
      degree: "Master's Degree · Application and Operation of Automated Systems",
      dateRange: "2016 – 2020",
      achievements: [
        "Specialization: Information Security and Automated Systems",
        "Full-time · Government-accredited program",
      ],
    },
  ],
  certifications: [
    { name: "SEC0", issuer: "TryHackMe", year: "2026" },
    { name: "Google Cloud Professional Developer", issuer: "Google Cloud", year: "2025" },
    { name: "Technical & Information Security", issuer: "Cisco Networking Academy", year: "2023" },
    { name: "Software Design Patterns", issuer: "Udemy", year: "2023" },
    { name: "CTF PHDays 2019, Top 3", issuer: "Positive Technologies", year: "2019" },
  ],
};
