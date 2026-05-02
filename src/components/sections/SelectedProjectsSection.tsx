import fs from "node:fs";
import path from "node:path";

import Image from "next/image";

import { stackedProjectGallery } from "@/data/projects";

function getProjectImageSrc(fileName: string) {
  const diskPath = path.join(
    process.cwd(),
    "public",
    "images",
    "projects",
    fileName,
  );

  return fs.existsSync(diskPath) ? `/images/projects/${fileName}` : null;
}

export function SelectedProjectsSection() {
  return (
    <section
      aria-label="Selected projects"
      className="bg-background px-5 py-16 text-foreground md:px-6 md:py-20"
    >
      <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-[10vh]">
        {stackedProjectGallery.map((project) => {
          const mainImageSrc = getProjectImageSrc(project.mainImageFileName);
          const subImageSrc = getProjectImageSrc(project.subImageFileName);

          return (
            <article
              key={project.slug}
              className="group flex min-h-[80vh] items-center"
            >
              <div className="w-full">
              <div className="relative aspect-[10/9] w-full overflow-hidden bg-white">
                {mainImageSrc ? (
                  <Image
                    src={mainImageSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                ) : null}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/18" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative aspect-[5/4] w-[42%] overflow-hidden bg-white/95 opacity-0 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 motion-safe:scale-[0.94]">
                    {subImageSrc ? (
                      <Image
                        src={subImageSrc}
                        alt={`${project.title} detail`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 17vw, 34vw"
                      />
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <h3 className="text-[18px] font-medium leading-tight tracking-[-0.04em] text-foreground md:text-[22px]">
                    {project.title}
                  </h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-[14px] leading-[1.35] text-muted opacity-0 transition-all duration-300 ease-out group-hover:max-h-10 group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>
                <p className="shrink-0 text-right text-[11px] font-medium tracking-[-0.02em] text-muted md:text-[12px]">
                  {project.year}
                </p>
              </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
