export const siteConfig = {
  name: "Vladislav Simutin",
  callsign: "NORD_WINTER",
  slug: "nord-winter",
  title: "Platform Engineer",
  description:
    "Portfolio of Vladislav Simutin, Platform Engineer specializing in Go, GCP and Kubernetes",
  accentColor: "#00529b",
  services: [
    {
      unit: "UNIT-S1 // COST",
      name: "Infrastructure_Cost_Audit",
      pitch:
        "Cut cloud spend 40% by automating VM lifecycle and rightsizing compute on GCP. Most GCP bills carry waste nobody's looked at closely, this finds it and fixes it.",
      price: "On_Request",
      deliverables: [
        "Line-by-line audit of your current GCP bill",
        "Automated VM lifecycle rules (auto-suspend on idle)",
        "Written report ranking fixes by savings vs. effort",
      ],
      cta: "Request_Audit",
      mailSubject: "Infrastructure Cost Audit",
    },
    {
      unit: "UNIT-S2 // SCALE",
      name: "High_Load_Architecture_Review",
      pitch:
        "Built and operated systems sustaining 80K+ RPS in production. I stress-test your architecture before your users do.",
      price: "On_Request",
      deliverables: [
        "Load test against your actual traffic shape, not a synthetic one",
        "A ranked list of what breaks first and why",
        "Concrete fixes, not a slide deck of best practices",
      ],
      cta: "Book_Review",
      mailSubject: "Architecture Review",
    },
    {
      unit: "UNIT-S3 // SRE",
      name: "Platform_Reliability_Setup",
      pitch:
        "Maintained 97% uptime across production services with k6 and Grafana observability. That's the bar your stack gets held to.",
      price: "On_Request",
      deliverables: [
        "k6 load tests wired into your CI",
        "Grafana dashboards for the metrics that actually predict an outage",
        "Alerting that pages on signal, not noise",
      ],
      cta: "Start_Consultation",
      mailSubject: "Platform Reliability Consultation",
    },
    {
      unit: "UNIT-S4 // INFRA",
      name: "Personal_Infra_Setup",
      pitch:
        "Running a self-hosted stack at home (notes, monitoring, automation) behind a private network. If you or a small team want that kind of setup done properly, this is it.",
      price: "On_Request",
      deliverables: [
        "Self-hosted services picked for what you actually need, not everything",
        "Monitoring so you know it's broken before you notice by accident",
        "A setup you can maintain yourself after I leave",
      ],
      cta: "Ask_About_This",
      mailSubject: "Personal Infra Setup",
    },
  ],
  engagement: [
    { label: "Engagement", value: "Freelance / contract, invoiced directly" },
    { label: "Availability", value: "Open to new projects" },
    { label: "Hours", value: "Bangkok (UTC+7)" },
    { label: "Authorization", value: "On_Request" },
    { label: "Language", value: "English, Russian" },
  ],
  social: {
    email: "vladsimutin@gmail.com",
    linkedin: "https://www.linkedin.com/in/vladislav-simutin/",
    twitter: "",
    github: "https://github.com/nord-winter",
    telegramChannel: "https://t.me/n0lltxt",
    telegramPersonal: "https://t.me/s1ma_out",
    discord: "https://discord.gg/ya7fWTXGx",
    buyMeACoffee: "https://buymeacoffee.com/nord.winter",
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
    {
      label: "OFFENSIVE_SECURITY",
      text: "Daily HackTheBox practice, CTF PHDays 2019 Top 3 finish, TryHackMe and Cisco security certifications behind it, the same attacker mindset that goes into hardening what I build.",
    },
  ],
  manifesto: {
    quote:
      "This is our world now. The world of the electron and the switch; the beauty of the baud. We make use of a service already existing without paying for what could be dirt-cheap if it wasn't run by profiteering gluttons, and you call us criminals. We explore... and you call us criminals. We seek after knowledge... and you call us criminals. We exist without skin color, without nationality, without religious bias... and you call us criminals. You build atomic bombs, you wage wars, you murder, cheat, and lie to us and try to make us believe it's for our own good, yet we're the criminals. Yes, I am a criminal. My crime is that of curiosity. My crime is that of judging people by what they say and think, not what they look like. My crime is that of outsmarting you, something that you will never forgive me for. I am a hacker, and this is my manifesto. You may stop this individual, but you can't stop us all. After all, we're all alike.",
    citation: 'The Mentor, "The Conscience of a Hacker," 1986',
  },
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
  rig: {
    intro:
      "The terminal aesthetic on this site is modeled on my most common setup, not the only one I run.",
    stack: [
      { label: "OS", value: "NixOS / Qubes OS" },
      { label: "Shell", value: "fish" },
      { label: "Terminal", value: "kitty" },
      { label: "Theme", value: "Emerald_Black (custom)" },
      { label: "WM", value: "GNOME" },
    ],
    dotfilesUrl: "https://github.com/nord-winter/dotfiles",
    items: [
      {
        title: "Terminal",
        image: "/rig/terminal.png",
        caption: "kitty + fish, fastfetch on launch, custom Emerald_Black theme.",
      },
      {
        title: "Desktop",
        image: "/rig/desktop.png",
        caption: "Daily driver desktop, dock and workspace layout tuned for keyboard-first switching.",
      },
    ],
    extra:
      "Also running: a Raspberry Pi hosting a self-hosted notes setup with its own automation, kept on a private network, and a couple of NixOS configs for reproducible throwaway environments. Details on request. niri shows up separately in the Cyberdeck project below, that's a gamepad-driven tiling setup, not the daily driver.",
  },
  projects: [
    {
      name: "Showcase",
      slug: "showcase",
      description:
        "Runnable proof of how I build: concurrency patterns in Go, a full observability stack, GCP infra modules, Kubernetes manifests, an AI/RAG pipeline. Clone any piece and run it in minutes, no proprietary code involved.",
      link: "https://github.com/nord-winter/showcase",
      image: "",
      skills: ["Go", "Kubernetes", "Terraform", "GCP", "Prometheus"],
    },
    {
      name: "Avoid_AI",
      slug: "avoid-ai",
      description:
        "Strips AI-writing tells out of every response automatically, no config, no commands. Builds a personal voice profile so output sounds like you instead of a template.",
      link: "https://github.com/nord-winter/avoid-ai",
      image: "",
      skills: ["Node.js", "CLI", "Claude Code"],
    },
    {
      name: "Cyberdeck",
      slug: "cyberdeck",
      description:
        "A tiling Linux desktop (niri) ported to Nix and driven entirely by a gamepad. No keyboard needed to switch windows, resize, or launch anything, built for a handheld-first workflow.",
      link: "https://github.com/nord-winter/cyberdeck",
      image: "",
      skills: ["Nix", "niri", "Wayland", "Linux"],
      caseStudy: [
        {
          heading: "The_Problem",
          text: "A tiling window manager is built around keyboard shortcuts. Take the keyboard away, hand someone a gamepad instead, and the whole interaction model stops working.",
        },
        {
          heading: "The_Build",
          text: "Ported the setup to Nix so the whole environment is reproducible from one config, not a pile of manual steps. Mapped Steam Input to niri's window management, so joystick and buttons drive workspace switching, resizing, and launching instead of a keyboard.",
        },
        {
          heading: "Where_It_Stands",
          text: "This is what I actually use, not a demo that got abandoned after launch. Code's public, linked above.",
        },
      ],
    },
    {
      name: "Decky_Mobile_Mode",
      slug: "decky-mobile-mode",
      description:
        "Open source Decky Loader plugin that reflows KDE's desktop mode for touch input, so Steam Deck's desktop UI stops fighting the screen it actually runs on.",
      link: "https://github.com/nord-winter/decky-mobile-mode",
      image: "",
      skills: ["Decky Loader", "KDE Plasma", "SteamOS", "Linux"],
      caseStudy: [
        {
          heading: "The_Problem",
          text: "Steam Deck's desktop mode runs full KDE Plasma, built for a mouse and keyboard. Switch to the built-in touchscreen and the same UI turns into tiny hit targets and menus that expect a cursor that isn't there.",
        },
        {
          heading: "The_Build",
          text: "A Decky Loader plugin that reflows the desktop-mode layout for touch: bigger targets, touch-friendly navigation, without replacing KDE or forking it. Built to install like any other Decky plugin, no manual config editing.",
        },
        {
          heading: "Where_It_Stands",
          text: "Installed on my own deck right now, no separate test unit. Source is up top, linked.",
        },
      ],
    },
    {
      name: "Locpi",
      slug: "locpi",
      description:
        "A Raspberry Pi running my own notes and monitoring stack behind a private network. The same setup I'd build for you under Personal_Infra_Setup, running on my own hardware first.",
      link: "https://github.com/nord-winter/locpi",
      image: "",
      skills: ["Raspberry Pi", "Memos", "Prometheus", "Grafana"],
      caseStudy: [
        {
          heading: "The_Problem",
          text: "Notes apps that live in someone else's cloud stop being yours the moment their pricing or policy changes. Wanted something I fully own, on hardware I control.",
        },
        {
          heading: "The_Build",
          text: "Memos for the notes themselves, Prometheus and Grafana watching the box so a failure gets noticed before it becomes a lost week of notes, and a small Telegram bot that pulls content in without needing to open a browser.",
        },
        {
          heading: "Where_It_Stands",
          text: "In active use, kept off the public internet on purpose. The code is up there, infrastructure details like IPs, ports and access stay out of it deliberately.",
        },
      ],
    },
    {
      name: "Tender_Automation_Platform",
      slug: "",
      description:
        "Turns manual tender paperwork into a few clicks. Matches vendor line items automatically instead of someone doing it by hand, all day, in a spreadsheet.",
      link: "",
      image: "",
      skills: ["Go", "Python", "ML"],
    },
  ],
  experience: [
    {
      company: "AdTech & Affiliate Marketing Platform",
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
      company: "Ratings & Comparison Platform",
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
      company: "Digital Commerce Holding",
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
  certifications: [
    { name: "SEC0", issuer: "TryHackMe", year: "2026" },
    { name: "Google Cloud Professional Developer", issuer: "Google Cloud", year: "2025" },
    { name: "Technical & Information Security", issuer: "Cisco Networking Academy", year: "2023" },
    { name: "Software Design Patterns", issuer: "Udemy", year: "2023" },
    { name: "CTF PHDays 2019, Top 3", issuer: "Positive Technologies", year: "2019" },
  ],
};
