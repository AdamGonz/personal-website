import Image from "next/image";

import accentImage from "@/assets/images/tochtli-ai-studio-sub.jpg";

const bodyParagraphs = [
  "I started out building small projects and quickly became interested in how systems actually work in real-world environments. Over time, I moved beyond just writing code and began focusing on how tools impact the people using them — how workflows can be simplified, how data can be made more useful, and how good design can reduce friction.",
  "I’ve worked across full-stack applications, internal tools, and AI-driven systems, including a cyber risk platform built with real-world data and a vendor management system used in live event operations. In these projects, I focused on making complex processes more efficient and easier to manage through better system design and user experience.",
  "Alongside engineering, I also explore design and branding through projects like Tochtli, where I combine cultural storytelling with modern digital tools. I’m especially interested in practical AI — building systems that automate repetitive work, generate useful content, and help small teams operate more efficiently.",
  "Right now, I’m focused on building tools that are not just technically strong, but actually useful — systems that people can rely on to do their work faster, clearer, and with less friction.",
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About my work"
      className="bg-background text-foreground"
    >
      <div className="px-5 pt-18 pb-12 md:px-6 md:pt-24 md:pb-14 lg:pt-28 lg:pb-16">
        <div className="mx-auto flex w-full max-w-[1560px] items-start">
          <div className="grid w-full grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.38fr)_minmax(320px,0.62fr)] lg:items-end lg:gap-16 xl:gap-20">
            <div className="space-y-10 lg:space-y-12">
              <div className="space-y-1">
                <h2 className="max-w-[9ch] text-[15vw] font-semibold uppercase leading-[0.8] tracking-[-0.095em] text-foreground sm:text-[12vw] md:text-[10vw] lg:max-w-none lg:text-[7.3vw] xl:text-[7.1vw]">
                  FULL-STACK ENGINEER
                </h2>
                <p className="portfolio-script text-[14.5vw] leading-[0.76] text-foreground sm:text-[11.2vw] md:text-[8.8vw] lg:text-[8.4vw] xl:text-[8vw]">
                  Driven
                </p>
              </div>

              <p className="max-w-[58ch] text-[15px] leading-[1.8] text-secondary md:text-[16px] lg:max-w-[56ch]">
                Hey, I’m Adam. I’m a full-stack engineer and product builder
                focused on AI systems, data platforms, and real-world tools. I
                build systems that simplify workflows, improve decision-making,
                and make complex processes easier to use — with a strong focus
                on clean, intuitive user experience.
              </p>
            </div>

            <div className="flex items-start justify-start lg:justify-end">
              <div className="w-full max-w-[1000px]">
                <div className="flex flex-col items-start gap-5 md:gap-6 lg:items-end lg:pt-6">
                  <div className="relative h-[52px] w-[84px] shrink-0 overflow-hidden bg-surface sm:h-[64px] sm:w-[108px] md:h-[76px] md:w-[128px] lg:h-[88px] lg:w-[146px]">
                    <Image
                      src={accentImage}
                      alt="Tochtli AI Studio detail"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 146px, (min-width: 768px) 108px, 84px"
                    />
                  </div>
                  <div className="min-w-0 text-right">
                    <h2 className="max-w-[12ch] text-[13.2vw] font-semibold uppercase leading-[0.82] tracking-[-0.09em] text-foreground sm:text-[10vw] md:text-[8.1vw] lg:text-[5.8vw] xl:text-[5.1vw]">
                      TO CREATE TOOLS THAT SIMPLIFY COMPLEX WORKFLOWS
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pt-8 pb-18 md:px-6 md:pt-10 md:pb-24 lg:pt-12 lg:pb-28">
        <div className="mx-auto flex w-full max-w-[1560px] items-start">
          <div className="grid w-full grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[150px_minmax(0,1fr)_minmax(320px,480px)] lg:pt-14">
            <div className="project-text-label text-foreground lg:pt-1">
              PERSONAL STORY
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="text-[11.5vw] font-semibold uppercase leading-[0.88] tracking-[-0.075em] text-foreground sm:text-[8.6vw] md:text-[6.6vw] lg:text-[5vw]">
                  FROM BUILDING PROJECTS TO
                </span>
                <span className="portfolio-script text-[11.2vw] leading-[0.78] text-foreground sm:text-[8.4vw] md:text-[6.8vw] lg:text-[8vw]">
                  Designing
                </span>
              </div>
              <h3 className="max-w-[12ch] text-[11.5vw] font-semibold uppercase leading-[0.88] tracking-[-0.075em] text-foreground sm:text-[8.6vw] md:text-[6.6vw] lg:text-[5vw]">
                SYSTEMS THAT MAKE WORK EASIER
              </h3>
            </div>

            <div className="space-y-6 self-end">
              {bodyParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="project-text-body max-w-none"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
