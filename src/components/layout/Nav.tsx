const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
];

export function Nav() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-wrap items-center gap-6 md:gap-12">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              className="text-[11px] font-semibold uppercase tracking-[0.02em] text-white transition-opacity duration-300 hover:opacity-70"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
