import { tochtliFeaturedWork } from "@/data/projects";
import { ImagePanel } from "@/components/ui/ImagePanel";

export function TochtliFeaturedWorkSection() {
  return (
    <section className="bg-transparent text-foreground">
      <div className="w-full px-5 pt-12 pb-14 md:px-6 md:pt-14 md:pb-20">
        <div className="space-y-8 md:space-y-12">
          <div className="w-full space-y-2 md:space-y-3">
            <h2 className="w-full text-[16vw] font-semibold leading-[0.92] tracking-[-0.08em] text-foreground sm:text-[12vw] md:text-[8.2vw] lg:text-[8vw]">
              {tochtliFeaturedWork.title}.
            </h2>
            <p className="w-full text-[9vw] font-semibold leading-[0.98] tracking-[-0.06em] text-foreground sm:text-[7vw] md:text-[48px] lg:text-[40px]">
              {tochtliFeaturedWork.headline}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
            <div className="min-w-0 overflow-hidden">
              <ImagePanel
                title="Tochtli AI Studio placeholder"
                aspectRatio="aspect-[4/3] md:aspect-[16/10] lg:aspect-auto"
                className="h-full min-h-[420px] w-full border-0 shadow-none lg:min-h-[700px]"
              />
            </div>

            <div className="flex h-full min-w-0 justify-center">
              <div className="flex h-full w-full max-w-2xl flex-col justify-between gap-6 text-left">
                <div className="space-y-12">
                  <div>
                    <p className="w-full text-[14px] leading-6 text-secondary md:text-[14px]">
                      <span className="font-semibold text-foreground">
                        Tochtli AI Studio
                      </span>{" "}
                      is an internal AI product designed to help a small cultural
                      clothing brand create stronger social posts, newsletters, and
                      campaign ideas faster by combining cultural reference
                      materials, product context, historical brand content, and
                      user feedback.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground">
                        Problem
                      </p>
                      <p className="text-[12px] leading-6 text-secondary md:text-[12px]">
                        {tochtliFeaturedWork.problem}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground">
                        Solution
                      </p>
                      <p className="text-[12px] leading-6 text-secondary md:text-[12px]">
                        {tochtliFeaturedWork.solution}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground">
                        Impact
                      </p>
                      <p className="text-[12px] leading-6 text-secondary md:text-[12px]">
                        {tochtliFeaturedWork.impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
                  <div className="min-w-0 space-y-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-foreground">
                      Key Features
                    </p>
                    <div className="space-y-3">
                      {tochtliFeaturedWork.keyFeatures.map((feature) => (
                        <p
                          key={feature}
                          className="text-[12px] leading-6 text-secondary md:text-[12px]"
                        >
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="min-w-0 self-start lg:justify-self-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground">
                      Tech Stack
                    </p>
                    <div className="mt-3 space-y-1">
                      {tochtliFeaturedWork.techStack.map((item) => (
                        <p
                          key={item}
                          className="text-[12px] leading-6 text-secondary md:text-[12px]"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
