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
    title: "Project 01 — Tochtli AI Studio",
    year: "2025",
    description: "AI system for generating content from cultural sources.",
    mainImageFileName: "tochtli-ai-studio-main.jpg",
    subImageFileName: "tochtli-ai-studio-sub.jpg",
  },
  {
    slug: "cyber-risk-quantification-platform",
    title: "Project 02 — Cyber Risk Quantification Platform",
    year: "2025",
    description: "Risk scoring system for prioritizing vulnerabilities.",
    mainImageFileName: "cyber-risk-quantification-platform-main.jpg",
    subImageFileName: "cyber-risk-quantification-platform-sub.jpg",
  },
  {
    slug: "vendor-management-dashboard",
    title: "Project 03 — Vendor Management Dashboard",
    year: "2024",
    description: "Tool for automating vendor and event workflows.",
    mainImageFileName: "vendor-management-dashboard-main.jpg",
    subImageFileName: "vendor-management-dashboard-sub.jpg",
  },
  {
    slug: "groovo",
    title: "Project 04 — Groovo",
    year: "2024",
    description: "Music analytics app using Spotify data.",
    mainImageFileName: "groovo-main.jpg",
    subImageFileName: "groovo-sub.jpg",
  },
];
