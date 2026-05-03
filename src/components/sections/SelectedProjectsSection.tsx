import { SelectedProjectsRevealGrid } from "@/components/sections/SelectedProjectsRevealGrid";
import { stackedProjectGallery } from "@/data/projects";
import { resolveProjectImageSrc } from "@/lib/project-images";

export async function SelectedProjectsSection() {
  const projects = await Promise.all(
    stackedProjectGallery.map(async (project) => ({
      ...project,
      mainImageSrc: await resolveProjectImageSrc(project.mainImageFileName),
      subImageSrc: await resolveProjectImageSrc(project.subImageFileName),
    })),
  );

  return <SelectedProjectsRevealGrid projects={projects} />;
}
