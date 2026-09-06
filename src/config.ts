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
    "Backend and platform engineer with 6+ years across fintech and e-commerce, contributor to open source. Build and operate distributed systems with Go on GCP. Production experience on high-load systems and AI pipelines shipped to production. Open to remote Platform, Backend and SRE roles at Series B/C companies and lean startups.",
  aboutHighlights: [
    {
      label: "PLATFORM_ENGINEERING",
      text: "GCP-native distributed systems (GKE, Cloud Run, Cloud Functions, Pub/Sub), Terraform-managed infrastructure, Kubernetes and Helm at production scale.",
    },
    {
      label: "AI_INTEGRATION",
      text: "RAG pipelines and AI agents in production, vLLM, Qdrant, MCP servers and GenKit, from vector search to end-to-end automation.",
    },
  ],
  metrics: [
    { label: "UPTIME", value: "97%" },
    { label: "COST_CUT", value: "40%" },
    { label: "PEAK_RPS", value: "80K+" },
  ],
  achievements: [
    "Built microservices architecture on GCP as scaling foundation for marketing and affiliate program, revenue growth to $60K within 6 months",
    "Reduced infrastructure costs by 40% automating LLM compute VM lifecycle via Terraform-managed provisioning",
    "Architected and maintained 30+ microservices sustaining 80K+ RPS peak load",
    "Cut SQL query overhead 30%, doubled throughput by eliminating data transfer redundancy",
    "Reverse-engineered and restored a lost resource, driving 16,000 visits per month while modernizing for monetization",
    "Maintained 97% platform uptime across 6 internal services via k6 and Grafana observability",
    "Migrated CRM to a new platform with ERP integration, cutting manual logistics and reporting by 20+ hours per week per employee",
    "Scaled engineering team from 3 to 8, ran 30+ technical interviews, made 5 hires",
    "Secured Linux-based infrastructure, 99.9% uptime maintained under active threat monitoring",
    "Google Cloud Professional Developer Certification, 2025",
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
    "GCP",
    "Kubernetes",
    "Terraform",
    "gRPC",
    "Kafka",
    "PostgreSQL",
    "Docker",
    "Prometheus",
    "TypeScript",
  ],
  projects: [
    {
      name: "Bidbase",
      description:
        "B2B SaaS tender automation platform. Hybrid item matching via sentence transformers + RapidFuzz. Automates parsing of tender specs from Excel/CSV into ERPNext. Built on Frappe framework.",
      link: "",
      image: "",
      skills: ["Go", "Python", "Frappe", "ERPNext", "ML"],
    },
    {
      name: "PocketPrice",
      description:
        "Service catalog sync platform for freelancers across multiple marketplaces. Go (Pocketbase), API, sync logic, platform integrations. Vue 3 + Shadcn/Tailwind frontend.",
      link: "",
      image: "",
      skills: ["Go", "Vue.js", "Pocketbase", "TypeScript"],
    },
    {
      name: "Moscow Regional Duma Inventory System",
      description:
        "Secure inventory management for government buildings. Interactive floor plans, role-based access control, 1C integration, government-grade data security compliance.",
      link: "",
      image: "",
      skills: ["Go", "PostgreSQL", "1C"],
    },
  ],
  experience: [
    {
      company: "Ascender",
      title: "Principal Backend Engineer",
      location: "Bangkok, Thailand",
      dateRange: "Feb 2024 - Jan 2026",
      bullets: [
        "Reduced infrastructure costs by 40%, measured by monthly GCP billing, by automating LLM compute VM lifecycle (auto-suspend on idle via Cloud Functions and Go scripts with Terraform-managed provisioning)",
        "Built a microservices architecture on GCP as a foundation for scaling marketing and the affiliate program, revenue growth to $60K within 6 months",
        "Cut lost calls by 33%, directly improving sales conversion, by optimizing the ATS telephony pipeline through queue management and failover automation",
        "Delivered a production RAG sales agent (intent pipeline through CTA) integrating a vector database, relational database and external data sources via GenKit",
        "Maintained 97% platform uptime across 6 internal services with a k6 + Grafana observability stack tracking latency, error rates and SLA compliance",
        "Designed and implemented an ERP system, migrated CRM to a new platform with complex data structure transformation and ERP integration, cutting manual logistics and reporting by 20+ hours per week per employee",
        "Scaled the engineering team from 3 to 8 by running 30+ technical interviews and making 5 hires",
      ],
      tech: [
        "Go",
        "gRPC",
        "GCP",
        "Terraform",
        "Kubernetes",
        "k6",
        "Grafana",
        "GenKit",
        "AI agents",
      ],
    },
    {
      company: "BRLab / Metaratings",
      title: "Senior Backend Engineer",
      location: "Russia / United Kingdom",
      dateRange: "Sep 2021 - Aug 2023",
      bullets: [
        "Support for 30+ microservices, including a personalized feed system with a peak load of 80K+ RPS",
        "Reduced SQL query overhead and source code size by 30% through targeted refactoring, achieved a two-fold increase in throughput by eliminating data transfer redundancy",
        "Reverse-engineered and restored the business logic of a lost resource, driving 16,000 visits per month while modernizing the structure for further monetization",
        "Implemented automated end-to-end testing with metrics for coverage, execution status and bug severity via Prometheus/Grafana, reducing testing time from 16 to 2 hours",
        "Managed the setup of a CI/CD pipeline with automated deployment, refactoring and monitoring, accelerating the release cycle by 40%",
      ],
      tech: ["Go", "gRPC", "PHP", "Kafka", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Docker", "Kubernetes"],
    },
    {
      company: "D-GRUPP Holding",
      title: "Full Stack Developer",
      location: "Moscow, Russia",
      dateRange: "Aug 2020 - Sep 2021",
      bullets: [
        "Tripled conversion rate and cut request processing time by 60% by building an automated sales funnel with UX redesign",
        "Increased search engine traffic by 30% by optimizing loading speed and technical SEO",
        "Maintained 99.9% uptime by securing Linux-based infrastructure through access controls, vulnerability assessments and automated backups",
      ],
      tech: ["PHP", "Python", "TypeScript", "Vue 3", "RabbitMQ", "MySQL", "keyDB/Redis", "Docker", "Vagrant", "Linux"],
    },
    {
      company: "Freelance",
      title: "Full Stack Developer",
      location: "Remote",
      dateRange: "Jan 2020 - Aug 2020",
      bullets: [
        "Delivered 10+ MVPs for early-stage startups within 4-8 week timelines, at $3K-10K per project, including authentication systems and payment integrations",
      ],
      tech: ["PHP", "Python", "TypeScript", "Vue 3", "RabbitMQ", "Nginx", "MySQL", "keyDB/Redis", "Docker", "SSL/TLS", "JWT", "WAF", "Linux"],
    },
  ],
  education: [
    {
      school: "Perm Military University",
      degree: "Master's Degree, Information Security and Automated Systems",
      dateRange: "2016 - 2020",
      achievements: [
        "Specialization: Mathematical, software and information security of computer systems",
        "Full-time, government-accredited program",
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
