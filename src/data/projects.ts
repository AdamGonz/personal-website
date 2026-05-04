export interface FeaturedWorkContent {
  title: string;
  headline: string;
  summary: string;
  impact: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
}

export interface StackedProjectGalleryItem {
  slug: string;
  title: string;
  year: string;
  description: string;
  mainImageFileName: string;
  subImageFileName: string;
}

export interface ProjectDetailHeroContent {
  title: string;
  intro: string;
  statement?: string;
  summary: string;
  mainImageFileName: string;
  peekingImageFileName: string;
  mood: string;
}

export interface ProjectFeatureItem {
  label: string;
  description: string;
}

export interface ProjectFeatureColumn {
  index: string;
  title: string;
  items: ProjectFeatureItem[];
}

export interface ProjectFeaturesSection {
  eyebrow: string;
  headline: string;
  scriptWords?: string[];
  columns: ProjectFeatureColumn[];
}

export interface ProjectDetailPage {
  slug: string;
  name: string;
  timeline: string;
  client: string;
  role: string;
  projectType: string;
  hero: ProjectDetailHeroContent;
  links?: {
    live?: string;
    caseStudy?: string;
    github?: string;
  };
  sectionLead: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  featuresSection: ProjectFeaturesSection;
}

export const tochtliFeaturedWork: FeaturedWorkContent = {
  title: "Tochtli AI Studio",
  headline: "AI-powered Content & Knowledge Automation System",
  summary:
    "Tochtli AI Studio is an internal AI product designed to help a small cultural clothing brand create stronger social posts, newsletters, and campaign ideas faster by combining cultural reference materials, product context, historical brand content, and user feedback.",
  impact:
    "Designed to reduce manual planning and draft generation work by roughly 80-90% while preserving cultural accuracy and brand voice.",
  problem:
    "Small businesses rarely have the content, research, and marketing capacity of larger teams. Writing captions, planning campaigns, choosing what products to feature, and staying culturally accurate takes time they usually do not have.",
  solution:
    "The platform transforms books, brand history, product context, and feedback into a searchable AI knowledge layer that supports ideation, drafting, retrieval, and media recommendations inside one workflow.",
  keyFeatures: [
    "AI agent workflows that guide ideation, drafting, retrieval, and campaign planning inside one operational system.",
    "Cultural reference ingestion that turns books, source material, and prior brand content into searchable context for content creation.",
    "pgvector-powered retrieval that surfaces relevant knowledge quickly enough to support real brand operations instead of one-off prompts.",
    "Human-in-the-loop refinement so drafts improve over time through edits, review, and brand voice feedback.",
  ],
  techStack: [
    "AI agent orchestration",
    "Workflow design",
    "pgvector retrieval",
    "Semantic knowledge search",
  ],
};

export const stackedProjectGallery: StackedProjectGalleryItem[] = [
  {
    slug: "tochtli-ai-studio",
    title: "Work 01 — Tochtli AI Studio",
    year: "2026",
    description:
      "AI content system that turns cultural source material into grounded brand content.",
    mainImageFileName: "tochtli-ai-studio-main.jpg",
    subImageFileName: "tochtli-ai-studio-sub.jpg",
  },
  {
    slug: "cyber-risk-quantification-platform",
    title: "Work 02 — Cyber Risk Quantification Platform",
    year: "2026",
    description:
      "Cyber risk platform that prioritizes vulnerabilities using threat and business context.",
    mainImageFileName: "cyber-risk-quantification-platform-main.jpg",
    subImageFileName: "cyber-risk-quantification-platform-sub.jpg",
  },
  {
    slug: "vendor-management-dashboard",
    title: "Work 03 — Vendor Management Dashboard",
    year: "2025",
    description:
      "Vendor operations dashboard for managing outreach, scheduling, and event workflows.",
    mainImageFileName: "vendor-management-dashboard-main.jpg",
    subImageFileName: "vendor-management-dashboard-sub.jpg",
  },
  {
    slug: "groovo",
    title: "Work 04 — Groovo",
    year: "2025",
    description:
      "Social music platform for logging albums, sharing reviews, and discovering taste.",
    mainImageFileName: "groovo-main.jpg",
    subImageFileName: "groovo-sub.jpg",
  },
];

export const projectDetailPages: ProjectDetailPage[] = [
  {
    slug: "tochtli-ai-studio",
    name: "Tochtli AI Studio",
    timeline: "March 2026 — Present",
    client: "Tochtli",
    role: "AI Engineer / Full-Stack Developer / System Designer",
    projectType: "AI System / Content Automation Platform",
    hero: {
      title: "AI-Driven Content Built on Cultural Knowledge",
      intro:
        "I designed Tochtli AI Studio, an AI-powered content system that transforms cultural source material into structured, high-quality outputs. By combining retrieval-based generation with curated knowledge sources, the system produces content that is both context-aware and culturally grounded.",
      statement:
        "Not just generating content — preserving context.",
      summary:
        "AI-powered system for generating culturally grounded content using retrieval-based knowledge.",
      mainImageFileName: "tochtli-ai-studio-main.jpg",
      peekingImageFileName: "tochtli-ai-studio-sub.jpg",
      mood: "Editorial, clean, intelligent, system-focused with cultural undertones",
    },
    links: {
      live: "TBD",
      caseStudy: "TBD",
      github: "TBD",
    },
    sectionLead: {
      eyebrow: "AI Content System",
      heading: "Creating central knowledge bases to power content planning.",
      body:
        "Tochtli AI Studio is designed to automate content creation while maintaining cultural accuracy and depth. Instead of relying on generic generation, the system ingests curated materials such as books, PDFs, and visual references, converts them into embeddings, and retrieves relevant context during generation. This allows outputs to remain grounded in real knowledge while scaling content production for media, storytelling, and brand use.",
    },
    featuresSection: {
      eyebrow: "Core System",
      headline: "FROM KNOWLEDGE TO GENERATED content",
      scriptWords: ["content"],
      columns: [
        {
          index: "01.",
          title: "Knowledge Ingestion & Processing",
          items: [
            {
              label: "Document Ingestion Pipeline",
              description:
                "Processes PDFs, texts, and cultural sources into structured data for downstream use.",
            },
            {
              label: "Embedding Generation",
              description:
                "Converts content into vector embeddings for semantic search and retrieval.",
            },
            {
              label: "Curated Knowledge Base",
              description:
                "Maintains a controlled dataset to ensure outputs remain culturally accurate and relevant.",
            },
          ],
        },
        {
          index: "02.",
          title: "AI Generation System (RAG + LangChain)",
          items: [
            {
              label: "Retrieval-Augmented Generation (RAG)",
              description:
                "Combines retrieved context with language models to generate grounded responses.",
            },
            {
              label: "LangChain Workflow Orchestration",
              description:
                "Uses LangChain to manage prompt chaining, retrieval flow, and output structuring.",
            },
            {
              label: "Context-Aware Prompting",
              description:
                "Dynamically injects relevant knowledge into prompts to improve accuracy and depth.",
            },
          ],
        },
        {
          index: "03.",
          title: "Automation & Content Workflows",
          items: [
            {
              label: "Content Generation Pipelines",
              description:
                "Automates creation of posts, captions, and long-form content from source material.",
            },
            {
              label: "Brand-Aligned Output Formatting",
              description:
                "Structures outputs to match tone, style, and cultural identity of the brand.",
            },
            {
              label: "Scalable Content System",
              description:
                "Designed to support high-volume generation while maintaining consistency.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "cyber-risk-quantification-platform",
    name: "Cyber Risk Quantification Platform",
    timeline: "Jan 2026 — Present",
    client: "Brinqa (Industry-Sponsored Work)",
    role: "Full-Stack Engineer / Product Owner (Frontend, Backend, System Design, Data Modeling)",
    projectType: "Security Platform / Risk Intelligence System",
    hero: {
      title: "Prioritizing Risk, Not Just Vulnerabilities",
      intro:
        "I designed and built a full-stack cyber risk quantification platform that aggregates vulnerability data, enriches it with real-world threat intelligence, and prioritizes remediation based on actual risk. The system moves beyond raw CVE lists by combining scoring models with business context to surface what truly matters.",
      statement:
        "From thousands of findings to the few that actually matter.",
      summary:
        "Full-stack platform that prioritizes vulnerabilities using real-world risk scoring and business context.",
      mainImageFileName: "cyber-risk-quantification-platform-main.jpg",
      peekingImageFileName: "cyber-risk-quantification-platform-sub.jpg",
      mood: "Dark, data-dense, analytical, high-contrast, system-focused",
    },
    links: {
      live: "TBD",
      caseStudy: "TBD",
      github: "TBD",
    },
    sectionLead: {
      eyebrow: "Cyber Risk Platform",
      heading: "Turning raw vulnerability data into actionable risk.",
      body:
        "This platform ingests vulnerability data from multiple sources, enriches it with external threat intelligence, and applies a custom scoring model to prioritize risk. Instead of treating all vulnerabilities equally, the system evaluates exploitability, severity, and real-world exposure, then maps findings across business systems to provide context-aware prioritization.",
    },
    featuresSection: {
      eyebrow: "Core System",
      headline: "APPLYING Asset CONTEXT TO CREATE ACTIONABLE RISK Priorities.",
      scriptWords: ["Asset", "Priorities."],
      columns: [
        {
          index: "01.",
          title: "Data Ingestion & Enrichment",
          items: [
            {
              label: "Multi-Source Data Aggregation",
              description:
                "Ingested vulnerability data from scanners and structured it into a unified schema for processing.",
            },
            {
              label: "Threat Intelligence Integration",
              description:
                "Enriched findings with external data sources including CVSS, EPSS, and KEV to reflect real-world risk.",
            },
            {
              label: "Normalization Pipeline",
              description:
                "Transformed inconsistent raw data into standardized, queryable formats for downstream scoring.",
            },
          ],
        },
        {
          index: "02.",
          title: "Risk Scoring Engine",
          items: [
            {
              label: "Custom Risk Model",
              description:
                "Designed a scoring system combining severity (CVSS), exploit likelihood (EPSS), and known exploitation (KEV).",
            },
            {
              label: "Weighted Scoring Logic",
              description:
                "Applied tiered weighting to emphasize high-risk vulnerabilities and prevent low-risk noise.",
            },
            {
              label: "Risk Band Classification",
              description:
                "Categorized findings into critical, high, medium, and low bands for faster decision-making.",
            },
          ],
        },
        {
          index: "03.",
          title: "Full-Stack Platform & Visualization",
          items: [
            {
              label: "Interactive Risk Dashboard",
              description:
                "Built a frontend interface to explore, filter, and rank vulnerabilities across large datasets.",
            },
            {
              label: "Hierarchical Risk Mapping",
              description:
                "Connected findings to assets, applications, and business services for contextual prioritization.",
            },
            {
              label: "API & Data Layer",
              description:
                "Developed backend APIs to serve scoring data efficiently with pagination and filtering.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "vendor-management-dashboard",
    name: "Vendor Management Dashboard",
    timeline: "Oct 2025 — Dec 2025",
    client: "Calpulli Tonalehqueh",
    role: "Full-Stack Engineer (Backend, Frontend, System Design)",
    projectType: "Full-Stack System / Internal Tool",
    hero: {
      title: "Vendor Operations Platform for Live Events",
      intro:
        "I designed and built a full-stack dashboard to manage vendor registration, payments, and booth selection for a large cultural event. The system replaced manual spreadsheets with a centralized platform, improving coordination and reducing operational overhead.",
      statement:
        "Built to replace chaos with structure during high-volume event planning.",
      summary:
        "Full-stack system that automated vendor workflows and streamlined event operations.",
      mainImageFileName: "vendor-management-dashboard-page-main.jpg",
      peekingImageFileName: "vendor-management-dashboard-sub.jpg",
      mood: "Structured, operational, clean, data-driven",
    },
    links: {
      live: "TBD",
      caseStudy: "TBD",
      github: "TBD",
    },
    sectionLead: {
      eyebrow: "Work Overview",
      heading: "Built for organizers who needed clarity under pressure.",
      body:
        "This platform centralized vendor registration, payment tracking, and booth assignment into one operational system. It gave the team a cleaner way to manage live event logistics and created a strong base for the deeper case-study sections that will follow.",
    },
    featuresSection: {
      eyebrow: "Why It Worked",
      headline:
        "REDUCING MANUAL COORDINATION AND BRINGING Clarity TO THE VENDOR Process.",
      scriptWords: ["Clarity", "Process."],
      columns: [
        {
          index: "01.",
          title: "Vendor Management System",
          items: [
            {
              label: "Centralized Vendor Database",
              description:
                "Structured data model for storing vendor profiles, status, and event participation history.",
            },
            {
              label: "Vendor History & Persistence Layer",
              description:
                "Maintained long-term records to support repeat vendors and future event planning.",
            },
            {
              label: "Status & Lifecycle Management",
              description:
                "Managed vendor states with dynamic updates across the system.",
            },
          ],
        },
        {
          index: "02.",
          title: "Workflow Automation & Operations",
          items: [
            {
              label: "Automated Vendor Onboarding",
              description:
                "Streamlined registration flow with validated inputs and standardized data capture.",
            },
            {
              label: "Payment Tracking & State Management",
              description:
                "Backend logic to track payments and synchronize status updates in real time.",
            },
            {
              label: "Automated Email Communication",
              description:
                "Triggered follow-ups for confirmations, reminders, and updates to reduce manual coordination.",
            },
          ],
        },
        {
          index: "03.",
          title: "Real-Time Dashboard & Interaction",
          items: [
            {
              label: "Interactive Booth Assignment System",
              description:
                "Real-time booth selection with consistent state handling to prevent conflicts.",
            },
            {
              label: "Operational Dashboard Interface",
              description:
                "UI designed for quick scanning, filtering, and managing large vendor datasets.",
            },
            {
              label: "Live Data Visibility Layer",
              description:
                "Immediate updates across vendor status, payments, and assignments for full operational clarity.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "groovo",
    name: "Groovo",
    timeline: "Sept 2025 — Dec 2025",
    client: "Personal Work",
    role: "Full-Stack Developer (Frontend, API Integration, Product Design)",
    projectType: "Social Platform / Music Discovery App",
    hero: {
      title: "A Social Platform for Music Taste and Discovery",
      intro:
        "I designed and built Groovo, a social platform centered around music discovery, reviews, and shared taste. Inspired by platforms like Letterboxd, Groovo allows users to log albums, rate music, share opinions, and connect with others through their listening habits and interests.",
      statement:
        "Where music taste becomes a social experience.",
      summary:
        "Social platform for discovering, reviewing, and sharing music with others.",
      mainImageFileName: "groovo-page-main.jpg",
      peekingImageFileName: "groovo-sub.jpg",
      mood: "Modern, expressive, social, slightly playful but clean",
    },
    links: {
      live: "TBD",
      caseStudy: "TBD",
      github: "TBD",
    },
    sectionLead: {
      eyebrow: "Music Social Platform",
      heading: "Sharing music through taste, not just streaming.",
      body:
        "Groovo is a social platform that allows users to engage with music beyond passive listening. Instead of just streaming tracks, users can log albums, write reviews, rate music, and share their taste with others. The platform emphasizes identity through music, enabling users to build profiles, discover new artists, and connect with people who share similar listening habits both online and in real-world spaces like concerts and local events.",
    },
    featuresSection: {
      eyebrow: "Core Experience",
      headline: "CONNECTING PEOPLE THROUGH MUSIC taste",
      scriptWords: ["taste"],
      columns: [
        {
          index: "01.",
          title: "User Profiles & Identity",
          items: [
            {
              label: "Custom Music Profiles",
              description:
                "Users can build personalized profiles showcasing their favorite artists, albums, and overall music taste.",
            },
            {
              label: "Listening History & Activity Tracking",
              description:
                "Tracks user interactions such as reviews, ratings, and logged albums to create a dynamic profile.",
            },
            {
              label: "Taste-Based Identity Layer",
              description:
                "Represents users through their music preferences, making profiles feel expressive and unique.",
            },
          ],
        },
        {
          index: "02.",
          title: "Social & Review System",
          items: [
            {
              label: "Album Logging & Reviews",
              description:
                "Users can log albums, write reviews, and rate music, creating a structured history of their listening.",
            },
            {
              label: "Social Feed & Interaction",
              description:
                "Displays activity from other users including reviews, ratings, and discussions around music.",
            },
            {
              label: "Community Engagement",
              description:
                "Enables conversations around albums, artists, and trends within a social environment.",
            },
          ],
        },
        {
          index: "03.",
          title: "Discovery & Real-World Connection",
          items: [
            {
              label: "Music Discovery Engine",
              description:
                "Surfaces trending albums, user recommendations, and new music based on activity.",
            },
            {
              label: "Local Music & Event Connections",
              description:
                "Connects users with others in their area through shared music interests and live events like concerts.",
            },
            {
              label: "Artist & Album Exploration",
              description:
                "Allows users to browse and dive into music catalogs, expanding discovery beyond their current taste.",
            },
          ],
        },
      ],
    },
  },
];

export function getProjectDetailPage(slug: string) {
  return projectDetailPages.find((project) => project.slug === slug);
}

export function getProjectDetailSlugs() {
  return projectDetailPages.map((project) => ({ slug: project.slug }));
}
