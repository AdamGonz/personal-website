"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __portfolioLenis?: Lenis;
  }
}

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: {
        offset: -96,
      },
    });

    window.__portfolioLenis = lenis;

    return () => {
      delete window.__portfolioLenis;
      lenis.destroy();
    };
  }, []);

  return null;
}
