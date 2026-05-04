"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import worksDisplay01 from "@/assets/images/1-works-display.jpg";
import worksDisplay02 from "@/assets/images/2-works-display.jpg";
import worksDisplay03 from "@/assets/images/3-works-display.jpg";
import worksDisplay04 from "@/assets/images/4-works-display.jpg";
import worksDisplay05 from "@/assets/images/5-works-display.jpg";
import worksDisplay06 from "@/assets/images/6-works-display.jpg";
import worksDisplay07 from "@/assets/images/7-works-display.jpg";
import worksDisplay08 from "@/assets/images/8-works-display.jpg";
import worksDisplay09 from "@/assets/images/9-works-display.jpg";

const introColumns = [
  {
    label: "Focus",
    items: [
      "AI Systems",
      "Automation",
      "Full-Stack Development",
      "Product & Web Design",
    ],
  },
  {
    label: "Capabilities",
    items: [
      "RAG Systems",
      "Backend APIs",
      "Data Pipelines",
      "System Design",
      "Frontend Architecture",
      "UI/UX & Brand Design",
    ],
  },
  {
    label: "Timeline",
    items: ["2023 — Present"],
  },
];

const worksDisplayImages = [
  worksDisplay01,
  worksDisplay02,
  worksDisplay03,
  worksDisplay04,
  worksDisplay05,
  worksDisplay06,
  worksDisplay07,
  worksDisplay08,
  worksDisplay09,
];

const rotationIntervalMs = 500;

export function AiPortfolioIntroSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) =>
        currentIndex === worksDisplayImages.length - 1 ? 0 : currentIndex + 1,
      );
    }, rotationIntervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const activeImage = worksDisplayImages[activeImageIndex];

  return (
    <section
      id="featured-works"
      className="relative flex min-h-screen items-center overflow-hidden bg-background text-foreground"
    >
      <div className="absolute top-1/2 right-[10vw] hidden w-[40vw] max-w-[500px] -translate-y-1/2 lg:block">
        <div className="relative aspect-[8/9] overflow-hidden rounded-[16px]">
          <Image
            key={activeImage.src}
            src={activeImage}
            alt=""
            fill
            sizes="(min-width: 1024px) min(40vw, 500px), 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 w-full px-5 py-16 md:px-6 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1560px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-y-10">
            <div className="min-w-0 max-w-[880px]">
              <h2 className="text-[19vw] font-semibold uppercase leading-[0.82] text-foreground sm:text-[15vw] md:text-[11.8vw] lg:text-[8.15vw]">
                FEATURED
              </h2>
              <h2 className="text-[19vw] font-semibold uppercase leading-[0.82] text-foreground sm:text-[15vw] md:text-[11.8vw] lg:text-[8.15vw]">
                WORKS
              </h2>
            </div>
            <div className="min-w-0 max-w-[880px]">
              I design and build digital systems — from AI tools and data
              platforms to full-stack applications and brand-driven web
              experiences. My work focuses on combining engineering, design,
              and automation to create scalable, real-world solutions.
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,52vw)_minmax(0,1fr)] lg:items-start">
              <div className="grid max-w-[880px] grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-8">
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

            <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] sm:aspect-[5/6] lg:hidden">
              <Image
                key={`${activeImage.src}-mobile`}
                src={activeImage}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
