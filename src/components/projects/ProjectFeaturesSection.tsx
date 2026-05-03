import type { ProjectDetailPage } from "@/data/projects";

interface ProjectFeaturesSectionProps {
  project: ProjectDetailPage;
}

export function ProjectFeaturesSection({
  project,
}: ProjectFeaturesSectionProps) {
  const { featuresSection } = project;
  const headlineWithStyledWords = (featuresSection.scriptWords ?? []).reduce(
    (headline, word) =>
      headline.replace(
        word,
        `<span class="portfolio-script text-[0.88em] font-normal text-white/92 normal-case">${word}</span>`,
      ),
    featuresSection.headline,
  );

  return (
    <section className="bg-background px-5 py-20 text-foreground md:px-6 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1560px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[100px_minmax(0,1fr)] lg:gap-12">
          <div className="project-text-label text-secondary">
            {featuresSection.eyebrow}
          </div>

          <div className="space-y-10 text-right md:space-y-12 lg:space-y-16">
            <div className="w-full">
              <h2
                className="w-full text-[12vw] font-semibold uppercase leading-[0.9] tracking-[-0.07em] text-foreground sm:text-[9vw] md:text-[7vw] lg:text-[100px]"
                dangerouslySetInnerHTML={{ __html: headlineWithStyledWords }}
              />
            </div>

            <div className="grid grid-cols-1 gap-10 pt-2 text-left md:gap-12 lg:grid-cols-3 lg:gap-10">
              {featuresSection.columns.map((column) => (
                <div key={column.index} className="space-y-5">
                  <div className="space-y-3">
                    <p className="text-[13px] font-medium tracking-[-0.03em] text-foreground md:text-[14px]">
                      {column.index}
                    </p>
                    <h3 className="project-text-feature-title">
                      {column.title}
                    </h3>
                  </div>

                  <div className="space-y-5 border-t border-white/10 pt-5">
                    {column.items.map((item) => (
                      <div key={item.label} className="space-y-1.5">
                        <p className="project-text-feature-title">
                          {item.label}
                        </p>
                        <p className="project-text-feature-copy">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
