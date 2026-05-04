"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "#featured-works", label: "Featured Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-wrap items-center gap-6 md:gap-12">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              className="text-[11px] font-semibold uppercase tracking-[0.02em] text-white transition-opacity duration-300 hover:opacity-70"
              href={pathname === "/" ? item.href : `/${item.href}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
