import Image from "next/image";
import heroImage from "@/assets/images/BE Hero.jpg";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      <Image
        src={heroImage}
        alt="Black and white hero portrait"
        fill
        priority
        className="object-cover object-center grayscale"
      />
      <div className="absolute inset-0 bg-black/28" />
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 md:px-6 md:pb-6">
        <div className="space-y-1 md:space-y-2">
          <h1 className="font-sans text-[22vw] font-semibold uppercase leading-[0.82] tracking-[-0.08em] text-white md:text-[18vw]">
            AXTOPANI
          </h1>
          <div className="flex flex-wrap justify-start gap-x-[100px] gap-y-2 text-[10px] font-semibold uppercase tracking-[0.04em] text-white">
            <span>Software Engineer</span>
            <span>AI Builder</span>
            <span>Designer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
