# SeniorFit Frontend Structure & Onboarding

Welcome to the SeniorFit Credential Hub frontend! This guide outlines the main directory structure, navigation, and how to get started working with the main modules.

---

## 📁 Main Folders

```
platform_frontend/
│
├─ src/
│  ├─ app/
│  │   ├─ dashboard/
│  │   │   └─ page.tsx
│  │   ├─ courses/
│  │   │   └─ page.tsx
│  │   ├─ payments/
│  │   │   └─ page.tsx
│  │   ├─ assessments/
│  │   │   └─ page.tsx
│  │   ├─ library/
│  │   │   └─ page.tsx
│  │   ├─ jobs/
│  │   │   └─ page.tsx
│  │   ├─ specializations/
│  │   │   └─ page.tsx
│  │   ├─ community/
│  │   │   └─ page.tsx
│  │   ├─ events/
│  │   │   └─ page.tsx
│  │   ├─ layout.tsx   # Root Next.js layout, do NOT edit for main navigation
│  │   └─ page.tsx     # Landing page (does NOT use AppLayout)
│  ├─ components/
│  │   ├─ Navbar.tsx       # Navbar with all major sections, desktop+mobile
│  │   ├─ AppLayout.tsx    # Wraps content with navbar, skip-to-content, etc
│  │   └─ ui/              # Foundational UI kit (Button, Card, Input, Modal)
│  │
│  └─ globals.css      # Brand theme, accessibility, font, tailwind setup
│
├─ ONBOARDING_STRUCTURE.md  # ← This file!
└─ README.md
```

---

## 🧭 Navigation & Layout

- **Navbar** (`components/Navbar.tsx`): Persistent top bar with all primary module links. Senior-friendly; works with keyboard, screen reader, and adapts for mobile/tablet.
- **AppLayout** (`components/AppLayout.tsx`): Wraps all protected module pages. Handles skip link, layout padding, and future sidebar/footer if needed.
- **Module Pages** (`app/[module]/page.tsx`): Each high-level feature (Dashboard, Courses, Payments, etc) has its own directory under `app/` with a `page.tsx`. These use `<AppLayout>` and a `<Card>` with placeholder text.
  - **Implement here**: For functionality in any module (e.g. add cards to dashboard), expand the relevant `page.tsx` and/or add new components in `components/`.

---

## 🏗️ How to Scaffold a New Feature

1. **Add a folder** under `src/app/[new-feature]`.
2. **Create** a `page.tsx` inside:
   ```tsx
   import { AppLayout } from "@/components/AppLayout";
   import { Card } from "@/components/ui/Card";
   // ...
   export default function NewFeaturePage() {
     // ...auth logic
     return (
       <AppLayout>
         <Card>
           <h1>New Feature</h1>
           {/* TODO: feature content */}
         </Card>
       </AppLayout>
     );
   }
   ```
3. **Update the Navbar** (`Navbar.tsx`) to add a link, if it's a top-level section.

---

## 🔒 Route Protection
- Stubs for authentication checks ("TODO" comments) in every main module page.
- Insert logic as user/session handling is implemented (top of page before render).

---

## ♿ Accessibility Principles

- All UI uses readable font sizes (>18px), high-contrast text/background.
- Keyboard navigation: skip link, focus outlines, menu.
- Aria-labels present on main sections and controls.

---

## 🚀 Next Steps

- Implement authentication and user/session context/provider.
- Flesh out each module UI/logic per the Product Requirements Doc (see `kavia-docs/PRD_SeniorFit_Credential_Hub.md`).
- Use / extend Button, Card, Input, Modal from `components/ui` for rapid, consistent iteration.

---

_This structure ensures the platform is easy to extend, maintain, and is inclusive for senior users._
