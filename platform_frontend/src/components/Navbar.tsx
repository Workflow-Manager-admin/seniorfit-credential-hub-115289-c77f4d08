"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation items definition
const navLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Courses", href: "/courses" },
  { name: "Payments", href: "/payments" },
  { name: "Assessments", href: "/assessments" },
  { name: "Library", href: "/library" },
  { name: "Jobs", href: "/jobs" },
  { name: "Specializations", href: "/specializations" },
  { name: "Community", href: "/community" },
  { name: "Events", href: "/events" },
];

// PUBLIC_INTERFACE
/**
 * SeniorFit Navbar component for main navigation.
 * Uses high-contrast, large-click targets, keyboard navigation,
 * and is responsive for senior accessibility.
 *
 * Highlights active section, collapses on small screens.
 */
export const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Close menu on nav (for a11y)
  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav
      aria-label="Primary navigation"
      className="w-full bg-primary text-white shadow-card fixed z-40 top-0 left-0"
      tabIndex={0}
    >
      <div className="flex flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-8 h-16">
        <Link
          href="/dashboard"
          className="flex items-center font-bold text-xl gap-2 focus-visible:ring-2 focus-visible:ring-accent"
          tabIndex={0}
          aria-label="Go to Dashboard"
        >
          <span role="img" aria-label="SeniorFit Logo" className="text-accent text-2xl">🏋️</span>
          <span>SeniorFit</span>
        </Link>
        {/* Desktop navigation */}
        <ul className="hidden md:flex flex-row gap-2 lg:gap-3 items-center">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className={`
                  px-4 py-2 rounded-lg font-semibold text-lg
                  transition bg-transparent outline-none
                  ${pathname.startsWith(href)
                    ? "bg-accent text-accent-contrast"
                    : "hover:bg-accent/80 hover:text-white"}
                  focus-visible:ring-2 focus-visible:ring-accent
                `}
                aria-current={pathname.startsWith(href) ? "page" : undefined}
                tabIndex={0}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Open menu"
          aria-controls="main-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Open navigation menu</span>
          {/* Icon */}
          <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
            <rect width="28" height="4" y="4" rx="2" fill="currentColor" />
            <rect width="28" height="4" y="12" rx="2" fill="currentColor" />
            <rect width="28" height="4" y="20" rx="2" fill="currentColor" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <ul
          id="main-menu"
          className="md:hidden flex flex-col bg-primary text-white gap-2 p-4 font-lg"
          role="menu"
        >
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className={`
                  w-full block px-4 py-3 rounded-lg text-lg font-semibold
                  ${pathname.startsWith(href)
                    ? "bg-accent text-accent-contrast"
                    : "hover:bg-accent/80 hover:text-white"}
                  focus-visible:ring-2 focus-visible:ring-accent
                `}
                aria-current={pathname.startsWith(href) ? "page" : undefined}
                tabIndex={0}
                role="menuitem"
                onClick={handleNavClick}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
