const resumeFilePath = "/Adam-Gonzales-Apr-2026-CV.pdf";
const linkedInUrl = "https://www.linkedin.com/in/adam-axtopani-gonzales/";

export function ContactCardSection() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="bg-background px-5 py-12 text-foreground md:px-6 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1560px]">
        <div className="rounded-[28px] bg-white px-6 py-8 text-black sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-end lg:gap-12">
            <div className="space-y-6 md:space-y-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black/50">
                Contact
              </p>
              <div className="space-y-3">
                <h2 className="max-w-[12ch] text-[13vw] font-semibold uppercase leading-[0.84] tracking-[-0.08em] text-black sm:text-[10vw] md:text-[8vw] lg:text-[5.6vw]">
                  Drop Me A Line
                </h2>
                <p className="max-w-[46ch] text-[15px] leading-[1.55] text-black/70 md:text-[16px] lg:max-w-[52ch] lg:text-[18px]">
                  Reach out by phone or email for projects, collaborations, or
                  product work.
                </p>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <a
                  href="tel:+16692914111"
                  className="block text-[11vw] font-semibold leading-[0.92] tracking-[-0.07em] text-black transition-colors duration-200 hover:text-accent-electric sm:text-[8vw] md:text-[6.4vw] lg:text-[4.2vw]"
                >
                  669 291 4111
                </a>
                <a
                  href="mailto:adamurlnum2@gmail.com"
                  className="block break-all text-[7vw] font-semibold leading-[0.94] tracking-[-0.06em] text-black transition-colors duration-200 hover:text-accent-electric sm:text-[5.2vw] md:text-[3.9vw] lg:text-[2.3vw]"
                >
                  adamurlnum2@gmail.com
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-3">
                  <a
                    href={resumeFilePath}
                    download
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-black bg-white px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-black transition-colors duration-200 hover:border-accent-electric hover:bg-accent-electric hover:text-white focus-visible:border-accent-electric focus-visible:bg-accent-electric focus-visible:text-white focus-visible:outline-none"
                  >
                    Download Resume
                  </a>
                  <p className="text-[12px] uppercase tracking-[0.08em] text-black/50">
                    PDF
                  </p>
                </div>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-black bg-white px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-black transition-colors duration-200 hover:border-accent-electric hover:bg-accent-electric hover:text-white focus-visible:border-accent-electric focus-visible:bg-accent-electric focus-visible:text-white focus-visible:outline-none"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
