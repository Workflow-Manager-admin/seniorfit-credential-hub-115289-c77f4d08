import React from "react";
import { Navbar } from "./Navbar";

// PUBLIC_INTERFACE
/**
 * AppLayout – Main skeleton for authenticated and main UI pages.
 * Integrates Navbar, provides skip-to-content, responsive content wrapper,
 * leaves space for main, footer, sidebar in future, and ensures a11y.
 *
 * Usage: Wrap pages in <AppLayout>...</AppLayout>
 */
export const AppLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    {/* Skip to content for keyboard accessibility */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-accent text-accent-contrast rounded px-4 py-2"
      tabIndex={0}
    >
      Skip to main content
    </a>
    <Navbar />
    <div
      className="pt-20 px-2 sm:px-8 max-w-7xl mx-auto min-h-screen"
      aria-label="Main content wrapper"
    >
      <main
        id="main-content"
        tabIndex={-1}
        className="focus:outline-none"
        aria-label="Page section"
      >
        {/* --- SCROLLABLE PAGE AREA --- */}
        {children}
      </main>
    </div>
    {/* Footer spot (future): <footer className="..."></footer> */}
  </>
);
