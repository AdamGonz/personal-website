import { notFound } from "next/navigation";

import { Header } from "@/components/layout/Header";
import { ProjectFeaturesSection } from "@/components/projects/ProjectFeaturesSection";
import { ProjectHeroSection } from "@/components/projects/ProjectHeroSection";
import { ProjectSectionLead } from "@/components/projects/ProjectSectionLead";
import {
  getProjectDetailPage,
  getProjectDetailSlugs,
} from "@/data/projects";
import { resolveProjectImageSrc } from "@/lib/project-images";

export async function generateStaticParams() {
  return getProjectDetailSlugs();
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectDetailPage(slug);

  if (!project) {
    notFound();
  }

  const [heroImageSrc, peekingImageSrc] = await Promise.all([
    resolveProjectImageSrc(project.hero.mainImageFileName),
    resolveProjectImageSrc(project.hero.peekingImageFileName),
  ]);

  return (
    <div className="page-frame bg-background">
      <Header />
      <main className="flex-1">
        <ProjectHeroSection
          project={project}
          heroImageSrc={heroImageSrc}
          peekingImageSrc={peekingImageSrc}
        />
        <ProjectSectionLead project={project} />
        <ProjectFeaturesSection project={project} />
      </main>
    </div>
  );
}
