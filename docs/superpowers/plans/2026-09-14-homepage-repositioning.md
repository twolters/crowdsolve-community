# Homepage Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `landing/src/App.tsx` (the entire crowdsolve.eco site — it is a single-page app with no router) into a sector-agnostic, pricing-led homepage with 14 sections, one repeated primary CTA ("Join the cohort"), and visible TODO markers for every unspecified value — while reusing the existing design tokens and component patterns exactly as they are today.

**Architecture:** The current homepage is one 494-line `App.tsx` with every section defined as an unexported local `const` component. This plan splits each section into its own file under `landing/src/sections/`, extracts the handful of truly-reused pieces (Logo, primary CTA button, check-list item, TODO marker) into `landing/src/components/ui/`, and reduces `App.tsx` to a thin orchestrator. This is a structural split for maintainability only — it introduces no new visual design system, only reorganizes files. A new `/interest` "page" (no router library — a plain `window.location.pathname` check, since the app already has zero routing) hosts the existing lead form behind a low-emphasis link instead of as a hero CTA.

**Tech Stack:** React 19 + TypeScript, Vite, Tailwind v4 (CSS-first `@theme` config, no `tailwind.config.*` file), `lucide-react` for icons, `motion` (Framer Motion successor) for scroll-in animation, no test runner configured in this repo.

**Spec:** The full content/structure brief is the user's message that opened this task (repository has no separate spec file — the brief is reproduced inline in each task's copy below, verbatim).

## Global Constraints

- **Positioning:** Remove every climate-only signal — specifically the "next generation of climate companies" line in Tim's bio and all climate/sustainability framing in headlines and section copy. The `.eco` domain and factual biographical details (e.g. "clean energy" as a past exit) stay; editorializing about climate as CrowdSolve's mission does not.
- **Design tokens — reuse only, from `landing/src/index.css`:** `--color-brand-900:#064e3b` `--color-brand-800:#065f46` `--color-brand-700:#047857` `--color-brand-600:#059669` `--color-brand-500:#10b981` `--color-brand-400:#34d399` `--color-brand-200:#a7f3d0` `--color-brand-100:#d1fae5` `--color-brand-50:#f0fdf4` `--color-cream:#fdfbf7`; body text `text-slate-600` (`#475569`, Tailwind default, uncustomized); headings via `font-display` (Outfit); body via default `font-sans` (Inter). Do not add new colors, fonts, or a new component library.
- **Radii/spacing — reuse the existing scale (`rounded-2xl`, `rounded-full`, `px-6`, `py-28`, etc.).** The one exception: the brief explicitly specifies a 22px radius and a `#E7E4DD` border for the hero price card (Task 3) — honor that literal value since the brief calls it out by name; do not extend the exception anywhere else.
- **One primary CTA, "Join the cohort," reused everywhere via a single `JoinCohortButton` component** wired to the same Circle.so invite link the old "Get Started!" buttons used (`landing/src/lib/cohortLink.ts`). Leave an explicit code comment on that link flagging the "instant join" vs. "we're selective" contradiction as an open question for the team — do not resolve it.
- **No invented values.** Every `[SQUARE BRACKET]` placeholder in the brief becomes a visible `<Todo>` marker (Task 1) in the rendered output — never a made-up date, count, name, or URL. This also applies to a few real-world facts the brief references but doesn't supply (e.g. a login URL, a destination for "Sit in on a session") — treat those the same way: a visible TODO, not a guess.
- **No unlisted claims.** Do not write "unlimited," "cancel anytime," "no application fee," or any percentage figure about what other accelerators take. None of the task copy below contains these — do not add them during implementation.
- **Do not touch:** `landing/server.cjs`, the `/api/apply` route, `landing/src/ApplicationForm.tsx`'s internals (its `handleSubmit`, fields, and validation are copied over unchanged), or any login flow (none currently exists in this codebase — see Task 2's TODO on this).
- **Icons:** `lucide-react` only (already the installed icon system — its icons are stroke-only SVGs on a 24px grid by default, satisfying the brief's icon spec with zero new dependency). No emoji, no icon font, no hand-rolled SVGs.
- **Verification:** This repo has no test runner (`package.json` has no `test` script). Each task's "test cycle" is: (a) `npx tsc --noEmit` (the repo's `lint` script) must pass, and (b) after the final integration task, a visual check of the running dev server against the brief. This replaces unit-test steps in the tasks below.
- **Commands:** `npm run dev` (Vite on port 3000), `npm run build` (`vite build`), `npm run lint` (`tsc --noEmit`).

## File Structure

**Create:**
- `landing/src/lib/cohortLink.ts` — the shared invite-link constant + the open-question comment.
- `landing/src/components/ui/Todo.tsx` — visible inline placeholder marker.
- `landing/src/components/ui/Logo.tsx` — extracted from the current inline `Logo` const in `App.tsx`.
- `landing/src/components/ui/JoinCohortButton.tsx` — the one primary-CTA pill, used in nav/hero/pricing/final-CTA.
- `landing/src/components/ui/CheckItem.tsx` — shared checklist row (light/dark tone) used in the pricing card and pricing section.
- `landing/src/sections/Navbar.tsx`
- `landing/src/sections/Hero.tsx` (contains the price card as a local sub-component — used only once)
- `landing/src/sections/PartnerBand.tsx`
- `landing/src/sections/PricingBenefits.tsx`
- `landing/src/sections/Marvin.tsx`
- `landing/src/sections/Curriculum.tsx`
- `landing/src/sections/Cadence.tsx`
- `landing/src/sections/Testimonials.tsx`
- `landing/src/sections/Team.tsx`
- `landing/src/sections/Pricing.tsx`
- `landing/src/sections/FitCheck.tsx`
- `landing/src/sections/FAQ.tsx`
- `landing/src/sections/FinalCTA.tsx`
- `landing/src/sections/Footer.tsx`
- `landing/src/pages/Interest.tsx` — hosts the existing `ApplicationForm` behind `/interest`.

**Modify:**
- `landing/src/App.tsx` — replace entirely: import the 14 sections above in order, add the `/interest` pathname check.

**Do not modify:** `landing/src/ApplicationForm.tsx`, `landing/src/main.tsx`, `landing/server.cjs`, `landing/src/index.css`.

---

### Task 1: Shared primitives (Todo, Logo, JoinCohortButton, CheckItem, cohort link)

**Files:**
- Create: `landing/src/lib/cohortLink.ts`
- Create: `landing/src/components/ui/Todo.tsx`
- Create: `landing/src/components/ui/Logo.tsx`
- Create: `landing/src/components/ui/JoinCohortButton.tsx`
- Create: `landing/src/components/ui/CheckItem.tsx`

**Interfaces:**
- Produces: `COHORT_JOIN_URL: string` (from `cohortLink.ts`) — consumed directly by `JoinCohortButton` and nowhere else.
- Produces: `Todo({ children, className? })` — a `<span>` wrapper. Consumed by Tasks 3, 5, 8, 9, 10, 11, 12.
- Produces: `Logo({ className? })`. Consumed by Tasks 2 and 17 (Footer).
- Produces: `JoinCohortButton({ variant?: 'dark' | 'light', size?: 'sm' | 'lg', className?, children? })`. Consumed by Tasks 2, 3, 11, 13.
- Produces: `CheckItem({ children, tone?: 'light' | 'dark' })`, a `<li>`. Consumed by Task 11.

- [ ] **Step 1: Create the cohort link constant**

```ts
// landing/src/lib/cohortLink.ts

// The Circle.so invite link every "Join the cohort" CTA points to.
//
// OPEN QUESTION (flagged for the team, not resolved here): "Join the cohort" reads as
// instant, self-serve access, but the "This isn't for everyone" section on this page says
// CrowdSolve is selective about who it brings in. Decide whether joining should gate
// through an application/review step before landing here. For now every CTA points at the
// same instant-join link the old "Get Started!" buttons used.
export const COHORT_JOIN_URL =
  'https://www.crowdsolve.eco/join?invitation_token=5793eeadc83312725ac8e44da24cfdc20d98ac09-4770f5e6-2367-4eb7-8945-4bb822d5bfff';
```

- [ ] **Step 2: Create the Todo marker component**

```tsx
// landing/src/components/ui/Todo.tsx
import type { ReactNode } from 'react';

type TodoProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Visible, dev-only marker for copy the brief left as a [SQUARE BRACKET] placeholder.
 * Renders intentionally visible in every environment so the team can find it by sight or
 * by grepping "TODO:" in the rendered DOM — never replace this with an invented value.
 */
export default function Todo({ children, className = '' }: TodoProps) {
  return (
    <span
      className={`inline-flex flex-wrap items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[0.7em] font-bold uppercase tracking-wide bg-yellow-200 text-yellow-900 border border-dashed border-yellow-600 ${className}`}
    >
      TODO: {children}
    </span>
  );
}
```

- [ ] **Step 3: Extract the Logo component**

```tsx
// landing/src/components/ui/Logo.tsx
type LogoProps = {
  className?: string;
};

export default function Logo({ className = 'h-8' }: LogoProps) {
  return <img src="/images/crowdsolve-logo.png" alt="CrowdSolve" className={className} />;
}
```

- [ ] **Step 4: Create the JoinCohortButton component**

```tsx
// landing/src/components/ui/JoinCohortButton.tsx
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { COHORT_JOIN_URL } from '../../lib/cohortLink';

type JoinCohortButtonProps = {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'lg';
  className?: string;
  children?: ReactNode;
};

const SIZE_CLASSES: Record<NonNullable<JoinCohortButtonProps['size']>, string> = {
  sm: 'px-5 py-2.5 text-sm',
  lg: 'px-8 py-4 text-lg',
};

const VARIANT_CLASSES: Record<NonNullable<JoinCohortButtonProps['variant']>, string> = {
  dark: 'bg-brand-900 text-white hover:bg-brand-800 shadow-brand-900/20',
  light: 'bg-white text-brand-900 hover:bg-brand-50 shadow-black/20',
};

export default function JoinCohortButton({
  variant = 'dark',
  size = 'lg',
  className = '',
  children = 'Join the cohort',
}: JoinCohortButtonProps) {
  return (
    <a
      href={COHORT_JOIN_URL}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-bold shadow-xl transition-all ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </a>
  );
}
```

- [ ] **Step 5: Create the CheckItem component**

```tsx
// landing/src/components/ui/CheckItem.tsx
import type { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

type CheckItemProps = {
  children: ReactNode;
  tone?: 'light' | 'dark';
};

const TONE_CLASSES: Record<NonNullable<CheckItemProps['tone']>, { icon: string; text: string }> = {
  light: { icon: 'text-brand-600', text: 'text-slate-700' },
  dark: { icon: 'text-brand-400', text: 'text-brand-100' },
};

export default function CheckItem({ children, tone = 'light' }: CheckItemProps) {
  const t = TONE_CLASSES[tone];
  return (
    <li className={`flex items-start gap-3 ${t.text}`}>
      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${t.icon}`} />
      <span className="font-medium">{children}</span>
    </li>
  );
}
```

- [ ] **Step 6: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes with no errors (these 5 files aren't imported anywhere yet, so this only confirms they're individually well-typed).

- [ ] **Step 7: Commit**

```bash
git add landing/src/lib/cohortLink.ts landing/src/components/ui/Todo.tsx landing/src/components/ui/Logo.tsx landing/src/components/ui/JoinCohortButton.tsx landing/src/components/ui/CheckItem.tsx
git commit -m "feat: add shared homepage primitives (Todo, Logo, JoinCohortButton, CheckItem)"
```

---

### Task 2: Nav

**Files:**
- Create: `landing/src/sections/Navbar.tsx`

**Interfaces:**
- Consumes: `Logo` from `../components/ui/Logo`, `JoinCohortButton` from `../components/ui/JoinCohortButton`.
- Produces: default export `Navbar()`. Consumed by Task 15.

- [ ] **Step 1: Create the Navbar**

```tsx
// landing/src/sections/Navbar.tsx
import Logo from '../components/ui/Logo';
import JoinCohortButton from '../components/ui/JoinCohortButton';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-brand-900/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Logo className="h-10" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#how-it-works" className="hover:text-brand-900 transition-colors">How it works</a>
          <a href="#the-10-weeks" className="hover:text-brand-900 transition-colors">The 10 weeks</a>
          <a href="#marvin" className="hover:text-brand-900 transition-colors">Marvin</a>
          <a href="#pricing" className="hover:text-brand-900 transition-colors">Pricing</a>
          <a href="#for-programs" className="hover:text-brand-900 transition-colors">For programs</a>
        </div>
        <div className="flex items-center gap-6">
          {/* TODO: point at the real member login URL — no login destination was specified in the brief, and no login flow exists in this codebase today */}
          <a
            href="#"
            className="hidden sm:inline text-sm font-medium text-slate-500 hover:text-brand-900 transition-colors"
          >
            Log in
          </a>
          <JoinCohortButton size="sm" />
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add landing/src/sections/Navbar.tsx
git commit -m "feat: add repositioned nav section"
```

---

### Task 3: Hero + price card

**Files:**
- Create: `landing/src/sections/Hero.tsx`

**Interfaces:**
- Consumes: `JoinCohortButton`, `Todo`.
- Produces: default export `Hero()`. Consumed by Task 15. Contains a local, unexported `PriceCard` sub-component (used only here).

- [ ] **Step 1: Create the Hero section**

```tsx
// landing/src/sections/Hero.tsx
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import JoinCohortButton from '../components/ui/JoinCohortButton';
import Todo from '../components/ui/Todo';

const PRICE_CARD_ITEMS = [
  'The full 10-week curriculum',
  'Two live sessions every week',
  'Marvin, our AI, at every step',
  'Mentor office hours & expert AMAs',
  'A cohort of founders at your stage',
  'Pitch day in front of real investors',
];

function PriceCard() {
  return (
    <div className="rounded-[22px] bg-white border border-[#E7E4DD] shadow-xl shadow-brand-900/5 p-8">
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-5xl font-display font-extrabold text-brand-900">$100</span>
        <span className="text-slate-500 font-medium">/ month</span>
      </div>
      <div className="text-sm font-bold text-brand-700 mb-6">No equity. Ever.</div>
      <div className="h-px bg-brand-900/10 mb-6" />
      <ul className="space-y-4 mb-6">
        {PRICE_CARD_ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
      <div className="rounded-2xl bg-brand-50 p-5 text-sm text-brand-900 font-medium leading-relaxed">
        <Todo>N</Todo> of <Todo>COHORT SIZE</Todo> seats left in this cohort. Eligible for
        non-dilutive grant funding through <strong>1000 Gretas</strong>.
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Beta Cohort — Applications Open
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-900 leading-[1.1] mb-8">
              Ten weeks to turn your idea into something{' '}
              <br className="sm:hidden" />
              you can <em className="italic text-brand-600 font-light">prove</em>.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
              CrowdSolve takes first-time founders from a hunch to a tested problem
              statement, a validated market, and a pitch deck worth showing. Structured
              curriculum, two working sessions a week, mentors who have actually done it —
              and an AI named Marvin in your corner the whole way.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
              <JoinCohortButton size="lg" className="w-full sm:w-auto">
                Join the cohort — $100/mo
              </JoinCohortButton>
              <a
                href="#the-10-weeks"
                className="inline-flex items-center justify-center gap-2 border border-brand-900 text-brand-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-50 transition-all w-full sm:w-auto"
              >
                See the 10 weeks
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-slate-500">
              Starts <Todo>COHORT START DATE</Todo> · Applications close{' '}
              <Todo>DEADLINE</Todo> · No equity taken, ever
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5"
          >
            <PriceCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add landing/src/sections/Hero.tsx
git commit -m "feat: add pricing-led hero with price card"
```

---

### Task 4: Partner band

**Files:**
- Create: `landing/src/sections/PartnerBand.tsx`

**Interfaces:**
- Consumes: `Todo`.
- Produces: default export `PartnerBand()`. Consumed by Task 15.

- [ ] **Step 1: Create the PartnerBand section**

```tsx
// landing/src/sections/PartnerBand.tsx
import Todo from '../components/ui/Todo';

const PARTNERS = [
  { name: 'Colorado School of Mines', descriptor: 'Entrepreneurship Program' },
  { name: 'The Colorado Impact Challenge', descriptor: 'Statewide venture challenge' },
  { name: '1000 Gretas', descriptor: 'Non-dilutive grant making' },
  { name: 'New Venture Challenge', descriptor: 'University of Colorado' },
];

export default function PartnerBand() {
  return (
    <section className="py-16 bg-brand-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* emerald-300 (#6EE7B7) is the exact hex the brief specifies for this label; the
            custom brand-* scale skips 300, so this is the one spot using Tailwind's
            built-in emerald-300 rather than a brand-* token. */}
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-10 text-center">
          The launch platform behind
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {PARTNERS.map((p) => (
            <div key={p.name}>
              <div className="text-white font-semibold mb-1">{p.name}</div>
              <div className="text-brand-200 text-sm">{p.descriptor}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Todo>replace with real partner logos, knocked back to white on the dark band</Todo>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add landing/src/sections/PartnerBand.tsx
git commit -m "feat: add partner band section"
```

---

### Task 5: "What a hundred dollars a month actually buys"

**Files:**
- Create: `landing/src/sections/PricingBenefits.tsx`

**Interfaces:**
- Consumes: none of our own components (uses `lucide-react` and `motion` directly).
- Produces: default export `PricingBenefits()`. Consumed by Task 15.

- [ ] **Step 1: Create the PricingBenefits section**

```tsx
// landing/src/sections/PricingBenefits.tsx
import { BookOpen, CalendarClock, Bot, Handshake, UsersRound, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const CARDS = [
  {
    icon: BookOpen,
    title: 'A curriculum, not a course',
    desc: "Problem statement, solution hypothesis, market discovery, pitch deck — in the order they actually need to happen, with a deliverable at the end of every module.",
  },
  {
    icon: CalendarClock,
    title: 'Two live sessions a week',
    desc: "Accountability and execution, on the calendar, in sync with whatever module you're in. Momentum you don't have to generate by yourself on a Tuesday night.",
  },
  {
    icon: Bot,
    title: 'Marvin, our AI, on call',
    desc: 'Built into every step of the curriculum to help you form your ideas and pressure-test them — between sessions, when the real work happens.',
  },
  {
    icon: Handshake,
    title: 'Been there, done that mentors',
    desc: 'Operators who have built and sold companies, plus the connections that come with them. The boost that founders from money and founders on their second company already have.',
  },
  {
    icon: UsersRound,
    title: 'Founders at your exact stage',
    desc: 'A small cohort going through the same week you are. Not a Slack channel of 4,000 people posting links.',
  },
];

export default function PricingBenefits() {
  return (
    <section className="py-28 bg-cream textured-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-brand-900 mb-4">
            What a hundred dollars a month actually buys.
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Five things most first-time founders never get at this stage — because nobody
            sells them at this stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-8 rounded-2xl bg-white border border-brand-900/5"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border-2 border-brand-600">
                <c.icon className="w-6 h-6 text-brand-600" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{c.title}</h3>
              <p className="text-slate-600 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: CARDS.length * 0.08 }}
            className="p-8 rounded-2xl bg-brand-900 text-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-3">And no equity. Ever.</h3>
              <p className="text-brand-100 leading-relaxed mb-6">
                Programs that help founders at this stage usually want a piece of the
                company. We ask for a hundred dollars a month.
              </p>
            </div>
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 text-brand-200 font-semibold hover:text-white transition-colors"
            >
              See what's included
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add landing/src/sections/PricingBenefits.tsx
git commit -m "feat: add what-100-a-month-buys section"
```

---

### Task 6: Marvin

**Files:**
- Create: `landing/src/sections/Marvin.tsx`

**Interfaces:**
- Consumes: `Todo`.
- Produces: default export `Marvin()`, section `id="marvin"`. Consumed by Task 15.

- [ ] **Step 1: Create the Marvin section**

```tsx
// landing/src/sections/Marvin.tsx
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Todo from '../components/ui/Todo';

const CARDS = [
  {
    title: 'Helps you form the idea',
    desc: 'Turns the thing in your head into a problem statement and a solution hypothesis you can actually put in front of someone.',
  },
  {
    title: 'Helps you test it',
    desc: 'Pulls the assumptions out of your hypothesis, helps you design the discovery conversations that would prove them wrong, and makes sense of what you heard.',
  },
  {
    title: 'Every step, not just the first one',
    desc: 'Marvin runs through the whole ten weeks alongside the curriculum, so nothing you decided in week two gets quietly forgotten by week eight.',
  },
];

export default function Marvin() {
  return (
    <section id="marvin" className="py-28 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-4">
              The part nobody else has
            </div>
            <h2 className="text-4xl font-bold mb-6">Meet Marvin.</h2>
            <p className="text-brand-100 text-lg leading-relaxed mb-8">
              Marvin is the AI built into the CrowdSolve curriculum. He knows the module
              you're on, the problem statement you wrote, and the assumptions you said
              you'd test — so when you're stuck at eleven at night between sessions, you're
              not stuck alone.
            </p>
            {/* TODO: no destination was specified for this link — decide where "seeing Marvin work" should point */}
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-brand-200 font-semibold hover:text-white transition-colors"
            >
              See Marvin work through a problem statement
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="md:col-span-7 space-y-5">
            {CARDS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[7%] border border-brand-200/[22%]"
              >
                <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                <p className="text-brand-100 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
            <div className="text-sm">
              <Todo>
                a real screenshot or transcript snippet of Marvin would beat all three of
                these cards
              </Todo>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add landing/src/sections/Marvin.tsx
git commit -m "feat: add Marvin section"
```

---

### Task 7: "Ten weeks. Three things you walk out with."

**Files:**
- Create: `landing/src/sections/Curriculum.tsx`

**Interfaces:**
- Consumes: none of our own components.
- Produces: default export `Curriculum()`, section `id="the-10-weeks"`. Consumed by Task 15.

- [ ] **Step 1: Create the Curriculum section**

```tsx
// landing/src/sections/Curriculum.tsx
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const CARDS = [
  {
    eyebrow: 'Weeks 1–3 · Sharpen the idea',
    body: "Nail the problem you're actually solving, the solution you're betting on, and why you're the one to build it. Stop building on assumptions you've never said out loud.",
    items: [
      'A written problem statement',
      'A testable solution hypothesis',
      'An honest read on founder fit',
    ],
  },
  {
    eyebrow: 'Weeks 4–10 · Market discovery',
    body: "Take the hypothesis out of the building. Define who it's for, run real customer conversations, and find out which of your assumptions survive contact with the market.",
    items: [
      'A defined ICP, not a guess',
      'Evidence from real conversations',
      'The value props your MVP needs',
    ],
  },
  {
    eyebrow: 'Throughout → Pitch day · Your first real pitch',
    body: 'Build the deck as the evidence comes in, then present it to a panel of mentors, investors and peers. Walk away with real feedback — and proof you can tell the story.',
    items: [
      'An initial pitch deck',
      "A panel's honest reaction to it",
      'A path to non-dilutive funding',
    ],
  },
];

export default function Curriculum() {
  return (
    <section id="the-10-weeks" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-brand-900 mb-4">
            Ten weeks. Three things you walk out with.
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Not modules completed. Artifacts you can put in front of a customer or an
            investor.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-brand-900/5 border-t-4 border-t-brand-600 p-8 flex flex-col"
            >
              <div className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-3">
                {c.eyebrow}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">{c.body}</p>
              <div className="h-px bg-brand-900/10 mb-6" />
              <div className="text-xs font-bold text-brand-900 uppercase tracking-wider mb-4">
                You leave with
              </div>
              <ul className="space-y-3">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add landing/src/sections/Curriculum.tsx
git commit -m "feat: add ten-weeks curriculum section, including pitch deck deliverable"
```

---

### Task 8: "Twice a week, on the calendar."

**Files:**
- Create: `landing/src/sections/Cadence.tsx`

**Interfaces:**
- Consumes: none of our own components.
- Produces: default export `Cadence()`, section `id="how-it-works"`. Consumed by Task 15.

- [ ] **Step 1: Create the Cadence section**

```tsx
// landing/src/sections/Cadence.tsx
export default function Cadence() {
  return (
    <section id="how-it-works" className="py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold text-brand-900 mb-6 leading-snug">
              The single biggest difference between founders who finish and founders who
              drift is whether anyone is expecting them on Thursday.
            </h2>
            <p className="text-slate-600 text-lg font-medium">
              Roughly five hours a week total. Two of them are live, with other people.
            </p>
          </div>

          <div className="md:col-span-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-white border border-brand-900/5">
                <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
                  Session one
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">Execution</h3>
                <p className="text-slate-600 leading-relaxed">
                  Work through the module with Tim and the cohort. Workshop your answers out
                  loud, get unstuck in real time.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-brand-900/5">
                <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
                  Session two
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">Accountability</h3>
                <p className="text-slate-600 leading-relaxed">
                  A structured working hour. Show up, commit to one thing, get it done,
                  report back. Simple, and it works.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-brand-900/5 grid sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-brand-900 mb-2">Mentor office hours</h4>
                <p className="text-sm text-slate-600">
                  Deep-dive coaching, 2–3 founders per session.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-900 mb-2">Three expert AMAs</h4>
                <p className="text-sm text-slate-600">
                  Operators and investors on sourcing customers, validating demand,
                  positioning.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-900 mb-2">Pitch competition</h4>
                <p className="text-sm text-slate-600">Week ten, in front of a real panel.</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 bg-yellow-50 rounded-xl p-4 border border-dashed border-yellow-600">
              TODO: the live site currently advertises four session types — biweekly live
              sessions, biweekly office hours, weekly founder workouts, three AMAs. Confirm
              what's actually on the calendar and make this section match it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add landing/src/sections/Cadence.tsx
git commit -m "feat: add twice-a-week cadence section"
```

---

### Task 9: Testimonials (moved below the offer, plus one TODO card)

**Files:**
- Create: `landing/src/sections/Testimonials.tsx`

**Interfaces:**
- Consumes: `Todo`.
- Produces: default export `Testimonials()`. Consumed by Task 15.

- [ ] **Step 1: Create the Testimonials section**

```tsx
// landing/src/sections/Testimonials.tsx
import { motion } from 'motion/react';
import Todo from '../components/ui/Todo';

const TESTIMONIALS = [
  {
    name: 'Cody',
    role: 'Solo founder, clean energy',
    photo: '/images/cody.png',
    content:
      "I can get a little distracted by the next shiny object and so this forces me to sit down and go okay... I'm following a set of guidelines that is moving my business forward.",
  },
  {
    name: 'Mel',
    role: 'Founder, sustainable consumer goods',
    photo: '/images/mel.jpg',
    content:
      'It gets lonely. It gets really lonely. Just to look at what people are going through — their wins — that gives me energy.',
  },
  {
    name: 'Frank',
    role: 'Founder, climate infrastructure',
    photo: '/images/frank.jpg',
    content:
      "It's really the outside input, feedback, focusing on some of the important components that need to be in place to be successful.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">
            Founders who've been through it.
          </h2>
          <div className="w-20 h-1.5 bg-brand-500 rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-brand-900/5"
            >
              <p className="text-lg text-slate-800 italic leading-snug mb-8">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-brand-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="p-8 rounded-2xl bg-white border border-dashed border-yellow-600 flex items-center justify-center text-center">
            <Todo>
              real photo, last name and company for a non-climate founder — without one,
              the page still looks climate-only
            </Todo>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add landing/src/sections/Testimonials.tsx
git commit -m "feat: move testimonials below the offer, flag need for a non-climate quote"
```

---

### Task 10: Team (sector-agnostic bios + mentor bench)

**Files:**
- Create: `landing/src/sections/Team.tsx`

**Interfaces:**
- Consumes: `Todo`.
- Produces: default export `Team()`. Consumed by Task 15.

- [ ] **Step 1: Create the Team section**

```tsx
// landing/src/sections/Team.tsx
import { motion } from 'motion/react';
import Todo from '../components/ui/Todo';

const TEAM = [
  {
    name: 'Tim Wolters',
    title: 'Founder & CEO — runs the sessions and the coaching',
    photo: '/images/tim.png',
    bio: "Three-time founder with exits in enterprise SaaS, edtech and clean energy. Fifteen years taking companies from napkin sketch to acquisition, through Techstars, and advising for the Watson Institute and the New Venture Challenge. He designed the curriculum and he won't let you off the hook.",
  },
  {
    name: 'Patrick McHeyser',
    title: 'Co-Founder & COO — builds the platform you run on',
    photo: '/images/patrick.jpeg',
    bio: 'Software architect turned startup operator, with products shipped across fintech, proptech and developer tools. He builds the systems a cohort runs on, so the program stays the same for founder number fifty as it was for founder number five.',
  },
];

export default function Team() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brand-900 mb-4">
            Who you'll actually be working with.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {TEAM.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <img
                src={person.photo}
                alt={person.name}
                className="w-28 h-28 rounded-2xl object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-brand-900">{person.name}</h3>
                <div className="text-sm font-semibold text-brand-600 mb-3">
                  {person.title}
                </div>
                <p className="text-slate-600 leading-relaxed">{person.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl bg-brand-50 p-10">
          <h3 className="text-xl font-bold text-brand-900 mb-2">The mentor bench</h3>
          <p className="text-slate-600 mb-8">
            Founders, operators and investors who take office hours and sit on the pitch
            panel.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-dashed border-brand-900/20 flex items-center justify-center text-brand-900/30 text-xs font-bold">
                  ?
                </div>
                <Todo>mentor {i + 1}</Todo>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-6">
            <Todo>
              five real mentors with names and photos — "been there, done that mentorship"
              is a headline claim with no names attached today
            </Todo>
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add landing/src/sections/Team.tsx
git commit -m "feat: rewrite team section with sector-agnostic bios and mentor bench"
```

---

### Task 11: Pricing

**Files:**
- Create: `landing/src/sections/Pricing.tsx`

**Interfaces:**
- Consumes: `JoinCohortButton`, `CheckItem`, `Todo`.
- Produces: default export `Pricing()`, section `id="pricing"`, nested `id="for-programs"` and `id="sit-in"` anchors. Consumed by Task 15. The `id="for-programs"` anchor is what Task 2's nav link and Task 13's footer link point to; `id="sit-in"` is what Task 13's final-CTA small link points to.

- [ ] **Step 1: Create the Pricing section**

```tsx
// landing/src/sections/Pricing.tsx
import JoinCohortButton from '../components/ui/JoinCohortButton';
import CheckItem from '../components/ui/CheckItem';
import Todo from '../components/ui/Todo';

const INCLUDES = [
  'Full 10-week curriculum',
  'Two live sessions a week',
  'Marvin at every step',
  'Mentor office hours',
  'Three expert AMAs',
  'Pitch day with a real panel',
  'The founder community',
  '1000 Gretas grant eligibility',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7 rounded-2xl bg-brand-900 text-white p-10 md:p-14">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-6">
              The whole thing
            </div>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-6xl md:text-7xl font-display font-extrabold">$100</span>
              <span className="text-brand-200 text-xl font-medium">per month</span>
            </div>
            <p className="text-brand-100 text-lg leading-relaxed mb-10 max-w-xl">
              Programs that help founders at this stage usually want equity for it. We ask
              for a hundred dollars a month instead.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {INCLUDES.map((item) => (
                <CheckItem key={item} tone="dark">
                  {item}
                </CheckItem>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <JoinCohortButton variant="light" size="lg" />
              <Todo>terms — cancel/refund policy</Todo>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-8">
            <div id="for-programs" className="rounded-2xl bg-white border border-brand-900/5 p-8">
              <h3 className="text-xl font-bold text-brand-900 mb-3">Running a program?</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                CrowdSolve is the platform behind entrepreneurship programs, venture
                challenges and grant makers who need their founders to make real progress on
                a real clock.
              </p>
              <a
                href="mailto:patrick@crowdsolve.eco"
                className="font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                Talk to us about your cohort →
              </a>
            </div>

            <div id="sit-in" className="rounded-2xl bg-brand-50 p-8">
              <h3 className="text-xl font-bold text-brand-900 mb-1">Not sure yet?</h3>
              <p className="text-xs text-slate-500 mb-3">
                <Todo>only ship this card if you'll actually offer open sessions</Todo>
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Come to the next open session and see how a cohort actually runs before you
                pay anything.
              </p>
              {/* TODO: no destination was specified for signing up to sit in on a session */}
              <a
                href="#"
                className="font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                Sit in on a session →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add landing/src/sections/Pricing.tsx
git commit -m "feat: add pricing section with programs and sit-in-on-a-session cards"
```

---

### Task 12: "This isn't for everyone" + FAQ

**Files:**
- Create: `landing/src/sections/FitCheck.tsx`
- Create: `landing/src/sections/FAQ.tsx`

**Interfaces:**
- `FitCheck` consumes: none of our own components. Produces default export `FitCheck()`. Consumed by Task 15.
- `FAQ` consumes: `Todo`. Produces default export `FAQ()`. Consumed by Task 15.

- [ ] **Step 1: Create the FitCheck section**

```tsx
// landing/src/sections/FitCheck.tsx
import { CheckCircle2, XCircle } from 'lucide-react';

const FIT = [
  "You have an idea you're serious about pursuing",
  "You're pre-revenue, pre-product, or just getting started",
  'You can give it about five hours a week for ten weeks',
  'You want to be pushed, not just supported',
];

const NOT_FIT = [
  'You want a course you can do passively',
  'You already have a funded product in market',
  "You're not ready to put your idea in front of other people",
];

export default function FitCheck() {
  return (
    <section className="py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-brand-900">This isn't for everyone.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 rounded-2xl bg-white border border-brand-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-brand-900" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900">You're a fit if:</h3>
            </div>
            <ul className="space-y-6">
              {FIT.map((item) => (
                <li key={item} className="flex gap-4 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 rounded-2xl bg-white border border-brand-900/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                It's probably not for you if:
              </h3>
            </div>
            <ul className="space-y-6">
              {NOT_FIT.map((item) => (
                <li key={item} className="flex gap-4 text-slate-500">
                  <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create the FAQ section**

```tsx
// landing/src/sections/FAQ.tsx
import Todo from '../components/ui/Todo';

const FAQS = [
  {
    q: 'Do you take equity?',
    a: 'No. Not now, not later. A hundred dollars a month is the whole arrangement.',
  },
  {
    q: 'Does my idea have to be climate or sustainability?',
    a: "No. CrowdSolve works for any early-stage founder — software, services, hardware, consumer, B2B. The method is the same wherever you're pointed.",
  },
  {
    q: "What if I don't have a co-founder, a product, or a company yet?",
    a: 'Then you are exactly who this was built for. That is the stage the whole program is designed around.',
  },
  {
    q: 'How much time does it take?',
    a: 'About five hours a week. Two of those are live sessions; the rest is the work itself.',
  },
  {
    q: 'What do I actually walk out with?',
    a: "A tested problem statement, a defined ICP backed by real customer conversations, and an initial pitch deck you've presented to a panel.",
  },
];

export default function FAQ() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brand-900">
            Questions people actually ask.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {FAQS.map((item) => (
            <div key={item.q}>
              <h3 className="text-lg font-bold text-brand-900 mb-2">{item.q}</h3>
              <p className="text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-bold text-brand-900 mb-2">
              What happens after the ten weeks?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              <Todo>
                alumni community? a next stage? grant intros? This is the question that
                decides whether $100/mo keeps renewing.
              </Todo>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 4: Commit**

```bash
git add landing/src/sections/FitCheck.tsx landing/src/sections/FAQ.tsx
git commit -m "feat: add fit-check and FAQ sections, including sector-agnostic FAQ answer"
```

---

### Task 13: Final CTA + Footer

**Files:**
- Create: `landing/src/sections/FinalCTA.tsx`
- Create: `landing/src/sections/Footer.tsx`

**Interfaces:**
- `FinalCTA` consumes: `JoinCohortButton`, `Todo`. Links to `#sit-in` (produced by Task 11's `Pricing`). Produces default export `FinalCTA()`. Consumed by Task 15.
- `Footer` consumes: `Logo`. Links to `#how-it-works` (Task 8), `#pricing` (Task 11), `#for-programs` (Task 11), `/interest` (Task 14). Produces default export `Footer()`. Consumed by Task 15.

- [ ] **Step 1: Create the FinalCTA section**

```tsx
// landing/src/sections/FinalCTA.tsx
import JoinCohortButton from '../components/ui/JoinCohortButton';
import Todo from '../components/ui/Todo';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-brand-900 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Your idea deserves ten honest weeks.
        </h2>
        <p className="text-brand-200 text-lg font-medium mb-10">
          Starts <Todo>COHORT START DATE</Todo>. <Todo>N</Todo> seats left. A hundred
          dollars a month, and no equity, ever.
        </p>
        <JoinCohortButton variant="light" size="lg" className="mx-auto" />
        <div className="mt-4">
          <a
            href="#sit-in"
            className="text-sm text-brand-200 hover:text-white underline underline-offset-4 transition-colors"
          >
            Or sit in on a session first →
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create the Footer section**

```tsx
// landing/src/sections/Footer.tsx
import Logo from '../components/ui/Logo';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-brand-900/5 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <a href="/" className="flex items-center">
          <Logo className="h-8" />
        </a>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600">
          <a href="#how-it-works" className="hover:text-brand-900">How it works</a>
          <a href="#pricing" className="hover:text-brand-900">Pricing</a>
          <a href="#for-programs" className="hover:text-brand-900">For programs</a>
          {/* This is the "modest link near the bottom" the brief asks for, keeping the
              existing lead form's submit handler reachable without it being a headline CTA. */}
          <a href="/interest" className="hover:text-brand-900">Send us some info</a>
          {/* TODO: point at the real member login URL — no login destination was specified in the brief, and no login flow exists in this codebase today */}
          <a href="#" className="hover:text-brand-900">Log in</a>
        </div>
        <a
          href="mailto:patrick@crowdsolve.eco"
          className="text-slate-500 text-sm hover:text-brand-900"
        >
          patrick@crowdsolve.eco
        </a>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 4: Commit**

```bash
git add landing/src/sections/FinalCTA.tsx landing/src/sections/Footer.tsx
git commit -m "feat: add final CTA and footer sections"
```

---

### Task 14: /interest page (moved lead form)

**Files:**
- Create: `landing/src/pages/Interest.tsx`

**Interfaces:**
- Consumes: `ApplicationForm` (unchanged) from `../ApplicationForm`, `Logo` from `../components/ui/Logo`.
- Produces: default export `Interest()`. Consumed by Task 15's `App.tsx` pathname check.

- [ ] **Step 1: Create the Interest page**

```tsx
// landing/src/pages/Interest.tsx
import ApplicationForm from '../ApplicationForm';
import Logo from '../components/ui/Logo';

export default function Interest() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="pt-10 pb-6 px-6">
        <a href="/" className="inline-flex items-center">
          <Logo className="h-10" />
        </a>
      </header>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-brand-900 mb-4">Not ready yet?</h1>
            <p className="text-slate-600 text-lg font-medium">
              Send us some info and we'll be happy to chat about the next opportunity.
            </p>
          </div>
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 md:p-10 border border-brand-900/5 shadow-sm">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes.

- [ ] **Step 3: Commit**

```bash
git add landing/src/pages/Interest.tsx
git commit -m "feat: add /interest page hosting the existing lead form"
```

---

### Task 15: Rewrite App.tsx to orchestrate all sections + /interest routing

**Files:**
- Modify: `landing/src/App.tsx` (full replacement)

**Interfaces:**
- Consumes: all 14 section default exports from Tasks 2–13, plus `Interest` from Task 14.
- Produces: default export `App()`, unchanged signature — still mounted by `landing/src/main.tsx` with no changes needed there.

- [ ] **Step 1: Replace App.tsx**

```tsx
// landing/src/App.tsx
import Interest from './pages/Interest';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import PartnerBand from './sections/PartnerBand';
import PricingBenefits from './sections/PricingBenefits';
import Marvin from './sections/Marvin';
import Curriculum from './sections/Curriculum';
import Cadence from './sections/Cadence';
import Testimonials from './sections/Testimonials';
import Team from './sections/Team';
import Pricing from './sections/Pricing';
import FitCheck from './sections/FitCheck';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

export default function App() {
  // No router in this app — the Express fallback in server.cjs already serves index.html
  // for any path, so a plain pathname check is enough for this one extra "page".
  if (typeof window !== 'undefined' && window.location.pathname === '/interest') {
    return <Interest />;
  }

  return (
    <div className="min-h-screen selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <PartnerBand />
        <PricingBenefits />
        <Marvin />
        <Curriculum />
        <Cadence />
        <Testimonials />
        <Team />
        <Pricing />
        <FitCheck />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `cd landing && npm run lint`
Expected: passes with no errors. This is the first point where every new file is actually imported, so this is the real integration check.

- [ ] **Step 3: Build**

Run: `cd landing && npm run build`
Expected: succeeds with no errors.

- [ ] **Step 4: Visual smoke test**

Run: `cd landing && npm run dev` (background), then open `http://localhost:3000/` and `http://localhost:3000/interest` in a browser.
Expected: homepage renders all 14 sections in order with no console errors; `/interest` renders the lead form and submitting it still POSTs to `/api/apply` (check the Network tab — do not need to actually submit against production).

- [ ] **Step 5: Commit**

```bash
git add landing/src/App.tsx
git commit -m "feat: wire repositioned homepage sections into App.tsx with /interest route"
```

---

### Task 16: Responsive QA pass

**Files:**
- Modify: any section file from Tasks 2–13, only if a specific issue is found below (no changes expected if the grid choices already made hold up).

- [ ] **Step 1: Start the dev server**

Run: `cd landing && npm run dev` (background if not already running from Task 15).

- [ ] **Step 2: Check 1440px**

Using a browser at 1440×900, load `http://localhost:3000/` and verify against the brief:
- Hero is two columns (copy left, price card right).
- Partner band shows 4 columns.
- Section 4 shows a 3×2 grid.
- Marvin band shows the left column narrower than the right.
- Curriculum section shows 3 columns.
- Cadence section shows the intro column narrower than the two session cards.
- Pricing section shows the dark card wider than the stacked cards.

- [ ] **Step 3: Check 390px**

Using a browser at 390×844 (or Chrome DevTools device emulation), load `http://localhost:3000/` and verify:
- Every section is a single column.
- The hero H1 wraps with "prove" landing on the second line (the manual `<br className="sm:hidden" />` in `Hero.tsx` handles this — confirm it visually).
- Both hero CTAs are full-width and comfortably tappable.
- The partner band shows a 2×2 grid, not 1 or 4 columns.
- No horizontal scrollbar appears anywhere on the page (drag to the far right of the viewport to confirm, or check `document.documentElement.scrollWidth <= document.documentElement.clientWidth` in the console).

- [ ] **Step 4: Fix any deviation found**

If any check in Steps 2–3 fails, fix the responsive classes in the relevant section file (adjust breakpoint or grid-cols only — do not change copy or add new tokens), then re-run Steps 2–3 for that section.

- [ ] **Step 5: Commit (only if Step 4 made changes)**

```bash
git add landing/src/sections/<fixed-file>.tsx
git commit -m "fix: correct responsive layout for <section> at 390px/1440px"
```

---

### Task 17: Final TODO inventory

**Files:** none modified — this is a reporting-only task.

- [ ] **Step 1: Collect every TODO left in the rendered homepage**

Run: `cd landing && grep -rn "TODO" src/sections src/pages src/components/ui`
Expected output: a list of every `<Todo>` usage and `{/* TODO: ... */}` comment across the files created in Tasks 1–14, each with its file and line number.

- [ ] **Step 2: Report the inventory**

Present the grep output to the user as the final "every `[TODO]` placeholder, with its file and line" deliverable the brief asks for in its "When you're done" section. Group by section for readability (e.g. "Hero.tsx: cohort start date, deadline, seat counts" / "Marvin.tsx: link destination, screenshot suggestion" / etc.), and separately call out the two open questions that aren't `<Todo>` markers but code comments: the "Join the cohort" instant-access-vs-selective contradiction (`lib/cohortLink.ts`), and the un-sourced login URL (`Navbar.tsx`, `Footer.tsx`).
