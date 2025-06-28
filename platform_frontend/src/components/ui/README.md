# SeniorFit UI Components

This directory contains foundational and shared UI elements for the SeniorFit Credential Hub platform, including:

- **Button**: For primary/secondary calls to action, accent highlights, or minimal "ghost" actions. Uses accessible color contrast, transitions, and large font for seniors.
- **Input**: Labeled, large, highly-readable text field with strong border and visible state, optimized for forms and login flows.
- **Card**: For sectioning dashboards and content. Gentle shadow, large padding, and readable font for summaries, progress indicators, and resource highlights.
- **Modal**: Standard modal with keyboard accessibility, focus trap, and clear close action. Ensures content is readable, and screen reader support is present.

## Global Theme & Palette

- **Primary:** #1976d2 (authoritative blue)
- **Secondary:** #43a047 (positive green)
- **Accent:** #fbc02d (optimistic yellow)
- All colors and styles are set for WCAG 2.1 AA and automatic light/dark adaptation.

## Accessibility & UX Principles

- All interactive elements are focus-visible, keyboard navigable, and use readable font sizes (`min 18px`).
- Color palette and contrast ratios exceed 4.5:1 for text/background where required.
- Forms and headings utilize labels and ARIA tags for assistive technology support.
- Font family: Geist Sans (with Arial, sans-serif fallback).

## Usage

Import and use components from `src/components/ui/` for consistent UI and rapid iteration.

_Update UI README and components if organizational design guidelines update or as senior audience feedback is incorporated._
