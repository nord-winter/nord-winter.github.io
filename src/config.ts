export const siteConfig = {
  name: "Vladislav Simutin",
  callsign: "NORD_WINTER",
  title: "Platform Engineer",
  description:
    "Portfolio of Vladislav Simutin, Platform Engineer specializing in Go, GCP and Kubernetes",
  accentColor: "#00529b",
  social: {
    email: "vladsimutin@gmail.com",
    linkedin: "https://linkedin.com/in/vladislav-simutin",
    twitter: "",
    github: "https://github.com/nord-winter",
  },
  aboutMe:
    "Platform/Infrastructure Engineer with 5+ years building and operating production systems. Designed microservice architectures handling 80K+ RPS, automated GCP infrastructure lifecycle with Go and Terraform, reduced infrastructure costs by 40% through VM automation. Built production RAG agents and LLM integrations.",
  aboutHighlights: [
    {
      label: "PLATFORM_ENGINEERING",
      text: "GCP-native microservice architectures, Terraform-managed infrastructure, production-grade Kubernetes at scale.",
    },
    {
      label: "AI_INTEGRATION",
      text: "Production RAG agents and LLM-backed automation pipelines, from vector search to end-to-end sales workflows.",
    },
  ],
  metrics: [
    { label: "UPTIME", value: "95%" },
    { label: "COST_CUT", value: "40%" },
    { label: "PEAK_RPS", value: "80K+" },
  ],
  achievements: [
    "Designed microservice architecture on GCP, platform reached $10K+ MRR within 6 months of MVP launch",
    "Reduced infrastructure costs by 40% automating LLM compute VM lifecycle via Terraform-managed provisioning",
    "Architected and maintained 30+ microservices sustaining 80K+ RPS peak load",
    "Cut SQL query overhead 30%, doubled throughput by eliminating data transfer redundancy",
    "Recovered 16,000 organic visits in 4 months via automated content-recovery pipeline",
    "Maintained 95% platform uptime across telephony, payments and affiliate systems",
    "Secured Linux-based infrastructure, 99.9% uptime maintained under active threat monitoring",
    "Google Cloud Professional Developer Certification, 2025",
    "Specialist Degree, Information Security and Automated Systems, Perm Military University",
    "Certified good son, calls his parents back within 24 hours",
    "Undefeated at family game night since 2019, disputed but undefeated",
    "Waters the office plants without being asked, 100% survival rate",
  ],
  posts: [
    {
      date: "2026-08-09",
      title: "Blog and update log coming soon",
      tag: "META",
      status: "PLANNED",
    },
  ],
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
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAiPzaD-5bJtY_dAuAdLSHb6mmBwR-HQzcC_ecFjIQeBYbOLvhpbivuwwP4Sy1IPGZ470MLX1IMkDVNNCG8JFz3gOOchVmdaD-0QY6HnZhGEtyZSdwltXli0KGnluHJT9zMvxd2Zt4JuMGgI00tHYmCB2dE5VazY0cC5e_tV_4lsD7u_Kb5lJxdLje6O6ElFBJ1UNsAjqBqm7SbA7FxZj9LTh3yr74QlMOQzTxnljprtCLjibfxj6f_P1tYDwVX2lZi2y_nYJCkMOs",
      skills: ["Go", "Python", "Frappe", "ERPNext", "ML"],
    },
    {
      name: "PocketPrice",
      description:
        "Service catalog sync platform for freelancers across multiple marketplaces. Go (Pocketbase), API, sync logic, platform integrations. Vue 3 + Shadcn/Tailwind frontend.",
      link: "",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCeM6byvNBUo0r0XjeHL5Hzf91xMmRce5yzlHZ4w4tWGRle-E_7W_t0iCC2b0NyI43KTtJG00_PB2rsi8KIbEtC7sYeBc9Pi6WExH1Zweu0Rw4kYe2mxUNijZshusUU2xowSwL7IbwySc77d5cuB8xtfnwP_McPJX0XypiLid5HayIWoBwZ3nRHodb4nnSMxE5yWVHTUrZABaUl5g1U69xasDM7B-6VlUoMEk90RZBGqPXAlJYSl6wBb0B7rmjRwpfggu0WR78O-GM",
      skills: ["Go", "Vue.js", "Pocketbase", "TypeScript"],
    },
    {
      name: "Moscow Regional Duma Inventory System",
      description:
        "Secure inventory management for government buildings. Interactive floor plans, role-based access control, 1C integration, government-grade data security compliance.",
      link: "",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBa3lKMYUysrI2PnQskUGviWBfK7qDP5-D0T3_aTHi8k254ItNyZifUGNeZ6AzGp-1_yYnM9d6VlhHZYPptpmQuDuFTkftiL09KFL8Mb_SWgupKiOMFqCvMa750XGQMR0iJ6lnX0JdA0L_t6rpat5zAAmVABcP8wRB7u5h9gYGpJfthfYSRpccp2MNyMN6ahq5iv4EZ8On3HK8aWE5QxlVsYP9uQ7oxvcQHYviiDgCJWMfbTblgAU1509fXRR-b-xGSPlk5NviE9nA",
      skills: ["Go", "PostgreSQL", "1C"],
    },
  ],
  experience: [
    {
      company: "ASCENDER",
      title: "Platform Engineer / Technical Co-Founder",
      dateRange: "Feb 2024 - Jan 2026",
      bullets: [
        "Designed microservice architecture on GCP (Cloud Run, GKE, Cloud Functions, Compute Engine), platform reached $10K+ MRR within 6 months of MVP launch",
        "Reduced infrastructure costs by 40% by automating LLM compute VM lifecycle via Cloud Functions + Go scripts with Terraform-managed provisioning",
        "Optimized ATS telephony pipeline, reducing lost calls by 33% through queue management and failover automation",
        "Built production RAG sales agent with full intent pipeline backed by vector DB + relational DB + external data sources via Genkit",
        "Instrumented services with Prometheus/Grafana, maintained 95% platform uptime across telephony, payments and affiliate systems",
        "Built versioned CI/CD pipeline: containerized services via S3-backed artifact storage with multi-environment support and automated rollback",
      ],
    },
    {
      company: "Metaratings",
      title: "Senior Backend Engineer",
      dateRange: "Sep 2021 - Aug 2023",
      bullets: [
        "Architected and maintained 30+ microservices including personalized feed sustaining 80K+ RPS peak load across Go and PHP service layers",
        "Reduced SQL query overhead and source code by 30%, achieved 2x throughput improvement by eliminating data transfer redundancy",
        "Recovered 16,000 organic visits within 4 months via Web Archive content recovery pipeline with automated URL redirection",
        "Reduced task turnaround from 16 hours to 2 hours by automating internal development workflows",
        "Led deployment, refactoring and monitoring as acting Team Lead, accelerated development cycles 2x",
      ],
    },
    {
      company: "D-GRUPP Holding",
      title: "Full Stack Developer / System Administrator",
      dateRange: "Aug 2020 - Nov 2021",
      bullets: [
        "Built automated sales funnel, reduced request processing time by 60%, tripled conversion rate",
        "Increased search engine traffic by 30% through loading speed optimization and technical SEO",
        "Secured Linux-based infrastructure with access controls, vulnerability assessments and automated backups, maintained 99.9% uptime",
      ],
    },
  ],
  education: [
    {
      school: "Perm Military University",
      degree: "Specialist Degree · Information Security and Automated Systems",
      dateRange: "2016 - 2020",
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
