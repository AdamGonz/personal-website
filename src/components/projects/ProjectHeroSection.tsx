import Image from "next/image";
import type { StaticImageData } from "next/image";

import type { ProjectDetailPage } from "@/data/projects";

interface ProjectHeroSectionProps {
  project: ProjectDetailPage;
  heroImageSrc: string | StaticImageData | null;
  peekingImageSrc: string | StaticImageData | null;
}

export function ProjectHeroSection({
  project,
  heroImageSrc,
  peekingImageSrc,
}: ProjectHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="px-5 pt-28 pb-0 md:px-6 md:pt-32 lg:pt-36">
        <div className="mx-auto flex min-h-[92vh] w-full max-w-[1560px] flex-col justify-between gap-16">
          <div className="space-y-10">
            <div className="space-y-5 text-center">
              <p className="project-text-label text-secondary">
                {project.projectType}
              </p>
              <div className="space-y-3">
                <h1 className="mx-auto max-w-[16ch] text-[17vw] font-semibold uppercase leading-[0.84] tracking-[-0.09em] text-foreground sm:text-[13vw] md:text-[10vw] lg:text-[7.6vw]">
                  {project.hero.title}
                </h1>
                <p className="portfolio-script text-[16vw] leading-none tracking-[-0.06em] text-white/92 sm:text-[11vw] md:text-[8.5vw] lg:text-[6vw]">
                  ({project.timeline})
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-2 lg:grid-cols-[240px_minmax(0,1fr)_240px] lg:gap-10">
              <div className="space-y-2 text-left">
                <p className="project-text-label">Role / Services</p>
                <p className="project-text-meta text-foreground">{project.role}</p>
              </div>

              <div className="space-y-5 text-left lg:px-8">
                <p className="project-text-summary">{project.hero.intro}</p>
                {project.hero.statement ? (
                  <p className="project-text-body text-foreground">
                    {project.hero.statement}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2 text-left lg:text-right">
                <p className="project-text-label">Client</p>
                <p className="project-text-meta text-foreground">
                  {project.client}
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full overflow-hidden">
              <div className="relative aspect-[16/10] w-full">
                {heroImageSrc ? (
                  <Image
                    src={heroImageSrc}
                    alt={`${project.name} hero`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 100vw, (min-width: 768px) calc(100vw - 48px), calc(100vw - 40px)"
                    priority
                  />
                ) : peekingImageSrc ? (
                  <Image
                    src={peekingImageSrc}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 100vw, (min-width: 768px) calc(100vw - 48px), calc(100vw - 40px)"
                    priority
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-white px-6 text-center">
                    <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-black/60 md:text-[13px]">
                      Add the project screenshot here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
