"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

interface SelectedProjectItem {
  slug: string;
  title: string;
  year: string;
  description: string;
  mainImageSrc: string | StaticImageData | null;
  subImageSrc: string | StaticImageData | null;
}

interface SelectedProjectsRevealGridProps {
  projects: SelectedProjectItem[];
}

interface RowRevealState {
  isVisible: boolean;
  reverse: boolean;
}

const revealTransition = "700ms cubic-bezier(0.2, 0.9, 0.2, 1)";
const desktopMediaQuery = "(min-width: 1024px)";
const rowInitialDelayMs = 500;
const rowStaggerDelayMs = 500;

export function SelectedProjectsRevealGrid({
  projects,
}: SelectedProjectsRevealGridProps) {
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollDirectionRef = useRef<"down" | "up">("down");
  const lastScrollYRef = useRef(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isDesktopLayout, setIsDesktopLayout] = useState(false);
  const [rowRevealStates, setRowRevealStates] = useState<
    Record<number, RowRevealState>
  >({});

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncPreference);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopMediaQuery);

    const syncLayout = () => {
      setIsDesktopLayout(mediaQuery.matches);
    };

    syncLayout();
    mediaQuery.addEventListener("change", syncLayout);

    return () => {
      mediaQuery.removeEventListener("change", syncLayout);
    };
  }, []);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const syncScrollDirection = () => {
      const nextScrollY = window.scrollY;

      if (nextScrollY === lastScrollYRef.current) {
        return;
      }

      scrollDirectionRef.current =
        nextScrollY > lastScrollYRef.current ? "down" : "up";
      lastScrollYRef.current = nextScrollY;
    };

    window.addEventListener("scroll", syncScrollDirection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", syncScrollDirection);
    };
  }, []);

  const rowSize = isDesktopLayout ? 2 : 1;
  const projectRows = useMemo(() => {
    const rows = [];

    for (let index = 0; index < projects.length; index += rowSize) {
      rows.push(projects.slice(index, index + rowSize));
    }

    return rows;
  }, [projects, rowSize]);

  useEffect(() => {
    rowRefs.current = rowRefs.current.slice(0, projectRows.length);

    const observers = rowRefs.current.map((rowNode, rowIndex) => {
      if (!rowNode) {
        return null;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry) {
            return;
          }

          setRowRevealStates((currentStates) => {
            const nextState: RowRevealState = entry.isIntersecting
              ? {
                  isVisible: true,
                  reverse: scrollDirectionRef.current === "up",
                }
              : {
                  isVisible: false,
                  reverse: currentStates[rowIndex]?.reverse ?? false,
                };

            const currentState = currentStates[rowIndex];

            if (
              currentState?.isVisible === nextState.isVisible &&
              currentState?.reverse === nextState.reverse
            ) {
              return currentStates;
            }

            return {
              ...currentStates,
              [rowIndex]: nextState,
            };
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px 12% 0px",
        },
      );

      observer.observe(rowNode);

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [projectRows]);

  return (
    <section
      aria-label="Selected works"
      className="bg-background px-5 py-16 text-foreground md:px-6 md:py-20"
    >
      <div className="space-y-10 md:space-y-12 lg:space-y-[10vh]">
        {projectRows.map((rowProjects, rowIndex) => (
          <div
            key={rowProjects.map((project) => project.slug).join("-")}
            ref={(node) => {
              rowRefs.current[rowIndex] = node;
            }}
            className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-2 lg:gap-x-4"
          >
            {rowProjects.map((project, cardIndex) => {
              const rowState = rowRevealStates[rowIndex];
              const isVisible = prefersReducedMotion
                ? rowState?.isVisible ?? false
                : rowState?.isVisible ?? false;
              const staggerIndex =
                rowState?.reverse && rowProjects.length > 1
                  ? rowProjects.length - 1 - cardIndex
                  : cardIndex;

              return (
                <article
                  key={project.slug}
                  className={`group flex min-h-[80vh] items-center transition-[opacity,transform] ${
                    isVisible
                      ? "translate-y-0 scale-100 opacity-100"
                      : "motion-safe:translate-y-14 motion-safe:scale-[0.94] motion-safe:opacity-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100"
                  }`}
                  style={{
                    transitionDuration: revealTransition,
                    transitionDelay:
                      isVisible && !prefersReducedMotion
                        ? `${rowInitialDelayMs + staggerIndex * rowStaggerDelayMs}ms`
                        : "0ms",
                  }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block w-full"
                  >
                    <div className="relative aspect-[10/9] w-full overflow-hidden bg-white">
                      {project.mainImageSrc ? (
                        <Image
                          src={project.mainImageSrc}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      ) : null}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative aspect-[5/4] w-[42%] overflow-hidden bg-white/95 opacity-0 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition-opacity duration-300 ease-out group-hover:opacity-100">
                          {project.subImageSrc ? (
                            <Image
                              src={project.subImageSrc}
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
                        <p className="mt-1 text-[14px] leading-[1.35] text-muted opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                          {project.description}
                        </p>
                      </div>
                      <p className="shrink-0 text-right text-[11px] font-medium tracking-[-0.02em] text-muted md:text-[12px]">
                        {project.year}
                      </p>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
