"use client";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

// PUBLIC_INTERFACE
/**
 * Home/Landing page for SeniorFit Credential Hub.
 * Welcoming platform summary and navigation, using accessible Cards/Buttons.
 * All major feature areas summarized and linked; visually senior-friendly and a11y.
 * Placeholders for future feature previews/quick actions are clearly commented.
 */

const FEATURES = [
  {
    name: "Dashboard",
    description:
      "Visual overview of your credentials, certification journey, and suggested next steps.",
    href: "/dashboard",
    cta: "Go to Dashboard",
    icon: "📊",
    ariaLabel: "Dashboard summary",
    color: "primary",
  },
  {
    name: "Courses",
    description:
      "Browse, enroll, and access comprehensive SeniorFit certification tracks.",
    href: "/courses",
    cta: "View Courses",
    icon: "🎓",
    ariaLabel: "Courses summary",
    color: "secondary",
  },
  {
    name: "Payments",
    description:
      "Manage subscriptions, invoices, and payment options securely (Stripe-powered).",
    href: "/payments",
    cta: "Payment Center",
    icon: "💳",
    ariaLabel: "Payments summary",
    color: "accent",
  },
  {
    name: "Assessments",
    description:
      "Complete quizzes, assignments, and case studies to earn credentials and badges.",
    href: "/assessments",
    cta: "Begin Assessments",
    icon: "📝",
    ariaLabel: "Assessments summary",
    color: "primary",
  },
  {
    name: "Library",
    description:
      "Search and explore a media-rich library of senior-safe exercises and guides.",
    href: "/library",
    cta: "Open Library",
    icon: "🏋️‍♂️",
    ariaLabel: "Library summary",
    color: "secondary",
  },
  {
    name: "Jobs",
    description:
      "Search and apply to roles for certified SeniorFit specialists. Track application progress.",
    href: "/jobs",
    cta: "Job Board",
    icon: "💼",
    ariaLabel: "Jobs summary",
    color: "accent",
  },
  {
    name: "Specializations",
    description:
      "Deepen expertise in niche tracks, such as arthritis, balance, cognitive health, and more.",
    href: "/specializations",
    cta: "See Tracks",
    icon: "🏅",
    ariaLabel: "Specializations summary",
    color: "primary",
  },
  {
    name: "Community",
    description:
      "Join forums, connect with peers, exchange advice, and find support in the SeniorFit network.",
    href: "/community",
    cta: "Go to Community",
    icon: "🗨️",
    ariaLabel: "Community summary",
    color: "secondary",
  },
  {
    name: "Events",
    description:
      "Participate in live webinars, training sessions, and upcoming SeniorFit events.",
    href: "/events",
    cta: "See Events",
    icon: "📅",
    ariaLabel: "Events summary",
    color: "accent",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen pt-8 pb-12 bg-background text-foreground flex flex-col items-center font-sans">
      {/* Welcome section */}
      <header className="w-full max-w-4xl px-4 mb-7 sm:mb-12 text-center flex flex-col items-center">
        <span className="text-4xl sm:text-5xl font-extrabold mt-2" aria-label="SeniorFit Logo" style={{ color: "var(--color-accent)" }}>
          🏋️ SeniorFit Credential Hub
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mt-4 mb-1">
          Empowering Fitness Professionals for Senior Wellness
        </h1>
        <p className="mt-2 max-w-2xl text-lg sm:text-xl mx-auto leading-relaxed">
          Your journey to expert certification, community, and career advancement begins here.
          <br />
          <span className="font-semibold text-accent">Designed for accessibility and easy navigation—for every age and ability.</span>
        </p>
      </header>
      {/* Card grid for features */}
      <section
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 px-3"
        aria-label="Main features and navigation"
      >
        {FEATURES.map((feature) => (
          <Card
            key={feature.name}
            ariaLabel={feature.ariaLabel}
            className={`flex flex-col min-h-[240px] justify-between gap-2 shadow-card transition-transform hover:scale-[1.025] focus-within:ring-2 focus-within:ring-accent outline-none`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-3xl mr-2"
                aria-hidden
                style={{
                  textShadow: "0 1px 4px #0002",
                  color: feature.color === "primary"
                    ? "var(--color-primary)"
                    : feature.color === "secondary"
                    ? "var(--color-secondary)"
                    : "var(--color-accent)",
                }}
              >
                {feature.icon}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold leading-tight" style={{
                color: feature.color === "primary"
                  ? "var(--color-primary)"
                  : feature.color === "secondary"
                  ? "var(--color-secondary)"
                  : "var(--color-accent)",
              }}>
                {feature.name}
              </h2>
            </div>
            <p
              className="flex-1 mb-3 text-base sm:text-lg leading-relaxed"
              style={{ fontSize: "1.1rem", minHeight: 58 }}
            >
              {feature.description}
              {/* TODO: Insert detailed {feature.name} preview or quick actions here (e.g., progress bar, new notifications, featured items). */}
            </p>
            <Link href={feature.href} tabIndex={-1} passHref legacyBehavior>
              <a className="w-full focus:outline-none">
                <Button
                  variant={feature.color === "primary"
                    ? "primary"
                    : feature.color === "secondary"
                    ? "secondary"
                    : "accent"}
                  className="w-full mt-auto py-3 text-lg"
                  ariaLabel={feature.cta}
                >
                  {feature.cta}
                </Button>
              </a>
            </Link>
          </Card>
        ))}
      </section>
      <footer className="w-full max-w-3xl mt-16 text-center text-base text-foreground/80 px-6 pt-7 border-0 border-t border-solid border-primary/15">
        SeniorFit Credential Hub &copy; {new Date().getFullYear()}. <span className="text-accent font-semibold">Your path to senior wellness leadership starts here.</span>
      </footer>
    </div>
  );
}
