"use client";

import { useEffect, useMemo, useState } from "react";

function formatSanJoseTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(date);
}

export function Footer() {
  const [now, setNow] = useState(() => new Date());
  const year = useMemo(() => now.getFullYear(), [now]);
  const sanJoseTime = useMemo(() => formatSanJoseTime(now), [now]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const handleBackToTop = () => {
    if (window.__portfolioLenis) {
      window.__portfolioLenis.scrollTo(0, {
        duration: 1.2,
      });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="bg-background px-5 pb-5 text-foreground md:px-6 md:pb-6"
    >
      <div className="w-full border-t border-white/10 pt-6 md:pt-8">
        <div className="grid grid-cols-1 gap-3 text-[13px] uppercase tracking-[0.06em] text-foreground md:grid-cols-3 md:items-center md:text-[14px]">
          <button
            type="button"
            onClick={handleBackToTop}
            className="w-fit cursor-pointer text-left transition-opacity duration-200 hover:opacity-70"
          >
            BACK TO TOP
          </button>

          <p className="text-left md:text-center">
            Copyright © AXTØP4NI {year}
          </p>

          <p className="text-left md:text-right">San Jose, CA {sanJoseTime}</p>
        </div>
      </div>

      <div className="-mx-5 overflow-hidden pt-4 md:-mx-6 md:pt-6">
        <div className="pl-5 md:pl-6">
          <p className="w-max origin-left scale-x-[1.03] text-[26vw] font-bold uppercase leading-[0.78] tracking-[-0.025em] text-foreground sm:text-[22vw] md:text-[19vw] lg:text-[18vw]">
            AXTØP4NI
          </p>
        </div>
      </div>
    </footer>
  );
}
