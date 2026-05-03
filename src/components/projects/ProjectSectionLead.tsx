import type { ProjectDetailPage } from "@/data/projects";

interface ProjectSectionLeadProps {
  project: ProjectDetailPage;
}

export function ProjectSectionLead({ project }: ProjectSectionLeadProps) {
  return (
    <section className="bg-background px-5 py-20 text-foreground md:px-6 md:py-24">
      <div className="mx-auto grid w-full max-w-[1560px] grid-cols-1 gap-10 pt-10 md:gap-12 lg:grid-cols-[100px_minmax(0,1fr)_minmax(320px,480px)] lg:pt-14">
        <div className="project-text-label text-secondary">01.</div>

        <div className="space-y-4">
          <p className="project-text-label">{project.sectionLead.eyebrow}</p>
          <h2 className="max-w-[12ch] text-[12vw] font-semibold uppercase leading-[0.9] tracking-[-0.07em] text-foreground sm:text-[9vw] md:text-[7vw] lg:text-[5vw]">
            {project.sectionLead.heading}
          </h2>
        </div>

        <div className="space-y-4 self-end">
          <p className="project-text-label">About This Project</p>
          <p className="project-text-body">{project.sectionLead.body}</p>
        </div>
      </div>
    </section>
  );
}
