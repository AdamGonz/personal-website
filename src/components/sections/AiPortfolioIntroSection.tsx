const introColumns = [
  {
    label: "Focus",
    items: ["AI Systems", "Automation", "Full-Stack Development"],
  },
  {
    label: "Capabilities",
    items: ["RAG Systems", "Backend APIs", "Data Pipelines", "Product Design"],
  },
  {
    label: "Timeline",
    items: ["2025 — Present"],
  },
];

export function AiPortfolioIntroSection() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center overflow-hidden bg-background text-foreground"
    >
      <div className="absolute top-1/2 right-[10vw] hidden w-[40vw] max-w-[500px] -translate-y-1/2 lg:block">
        <div className="aspect-[8/9] overflow-hidden rounded-[16px] bg-[#ff1208]" />
      </div>

      <div className="relative z-10 w-full px-5 py-16 md:px-6 md:py-20 lg:py-24">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-y-10">
            <div className="min-w-0 lg:w-[52vw] lg:max-w-[880px]">
              <h2 className="text-[19vw] font-semibold uppercase leading-[0.82] text-foreground sm:text-[15vw] md:text-[11.8vw] lg:text-[8.15vw]">
                FEATURED
              </h2>
              <h2 className="text-[19vw] font-semibold uppercase leading-[0.82] text-foreground sm:text-[15vw] md:text-[11.8vw] lg:text-[8.15vw]">
                WORKS
              </h2>
            </div>
            <div className="min-w-0 lg:w-[52vw] lg:max-w-[880px]">
              I build AI systems that help businesses work smarter — automating
                workflows, improving decisions, and making complex tasks scalable.
                My focus is on practical applications that bring real value,
                especially for smaller teams.
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,52vw)_minmax(0,1fr)] lg:items-start">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-8 lg:w-[52vw] lg:max-w-[880px]">
                {introColumns.map((column) => (
                  <div key={column.label} className="space-y-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                      {column.label}
                    </p>
                    <div className="space-y-1.5">
                      {column.items.map((item) => (
                        <p
                          key={item}
                          className="text-[13px] leading-[1.45] text-[#f3efe7] md:text-[14px]"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[16px] bg-[#ff1208] aspect-[4/5] sm:aspect-[5/6] lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
