export const siteConfig = {
  name: "Vladislav Simutin",
  title: "Platform Engineer",
  description:
    "Portfolio of Vladislav Simutin — Platform Engineer specializing in Go, GCP, Kubernetes and InfoSec",
  accentColor: "#1B4F8A",
  social: {
    email: "vladsimutin@gmail.com",
    linkedin: "https://linkedin.com/in/vladislav-simutin",
    twitter: "",
    github: "https://github.com/nord-winter",
  },
  aboutMe:
    "Platform/Infrastructure Engineer with 5+ years building and operating production systems. Designed microservice architectures handling 80K+ RPS, automated GCP infrastructure lifecycle with Go and Terraform, reduced infrastructure costs by 40% through VM automation. Built production RAG agents and LLM integrations. Background in information security (Perm Military University) — actively deepening toward Security Architecture.",
  skills: [
    "Go",
    "Kubernetes",
    "Terraform",
    "GCP",
    "Docker",
    "Prometheus",
    "PostgreSQL",
    "TypeScript",
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
      company: "ASCENDER",
      title: "Platform Engineer / Technical Co-Founder",
      dateRange: "Feb 2024 – Jan 2026",
      bullets: [
        "Designed microservice architecture on GCP (Cloud Run, GKE, Cloud Functions, Compute Engine) — platform reached $10K+ MRR within 6 months of MVP launch",
        "Reduced infrastructure costs by 40% by automating LLM compute VM lifecycle via Cloud Functions + Go scripts with Terraform-managed provisioning",
        "Optimized ATS telephony pipeline, reducing lost calls by 33% through queue management and failover automation",
        "Built production RAG sales agent with full intent pipeline backed by vector DB + relational DB + external data sources via Genkit",
        "Instrumented services with Prometheus/Grafana — maintained 95% platform uptime across telephony, payments and affiliate systems",
        "Built versioned CI/CD pipeline: containerized services via S3-backed artifact storage with multi-environment support and automated rollback",
      ],
    },
    {
      company: "Metaratings",
      title: "Senior Backend Engineer",
      dateRange: "Sep 2021 – Aug 2023",
      bullets: [
        "Architected and maintained 30+ microservices including personalized feed sustaining 80K+ RPS peak load across Go and PHP service layers",
        "Reduced SQL query overhead and source code by 30% — achieved 2x throughput improvement by eliminating data transfer redundancy",
        "Recovered 16,000 organic visits within 4 months via Web Archive content recovery pipeline with automated URL redirection",
        "Reduced task turnaround from 16 hours to 2 hours by automating internal development workflows",
        "Led deployment, refactoring and monitoring as acting Team Lead — accelerated development cycles 2x",
      ],
    },
    {
      company: "D-GRUPP Holding",
      title: "Full Stack Developer / System Administrator",
      dateRange: "Aug 2020 – Nov 2021",
      bullets: [
        "Built automated sales funnel — reduced request processing time by 60%, tripled conversion rate",
        "Increased search engine traffic by 30% through loading speed optimization and technical SEO",
        "Secured Linux-based infrastructure with access controls, vulnerability assessments and automated backups — maintained 99.9% uptime",
      ],
    },
  ],
  education: [
    {
      school: "Perm Military University",
      degree: "Specialist Degree · Information Security and Automated Systems",
      dateRange: "2016 – 2020",
      achievements: [
        "Specialization: Mathematical, software and information security of computer systems",
        "Full-time · Government-accredited program",
        "Foundation for current Security Architecture career vector",
      ],
    },
    {
      school: "Google Cloud",
      degree: "Professional Developer Certification",
      dateRange: "2025",
      achievements: [
        "GCP core services: Cloud Run, GKE, Cloud Functions, Cloud SQL, Storage, Terraform",
      ],
    },
  ],
};
