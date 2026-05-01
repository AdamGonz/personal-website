"use client";

import { useEffect, useState } from "react";
import { Nav } from "@/components/layout/Nav";

export function Header() {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsPastHero(window.scrollY > heroHeight - 96);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        isPastHero ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="relative px-5 py-4 md:px-6 md:py-4">
        <div className="grid grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
          <div className="justify-self-start">
            <Nav />
          </div>
          <a
            href="#home"
            aria-label="Go to home"
            className="pointer-events-auto justify-self-center text-[20px] font-bold uppercase tracking-[-0.06em] text-white transition-opacity duration-300 hover:opacity-70 md:absolute md:left-1/2 md:-translate-x-1/2 md:text-[24px]"
          >
            AXTØP4NI
          </a>
          <div className="hidden md:block" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
