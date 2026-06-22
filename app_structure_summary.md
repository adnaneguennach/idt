# Ideal Tax (IDT) — Complete App Structure Reference

**Workspace:** `/Users/adnane/Desktop/idt`
**Purpose:** Marketing + lead-gen website for Ideal Tax, a US tax relief company.
**Live domain:** `https://idealtax.com`

---

## Stack

| | |
|---|---|
| Framework | **Next.js 16.2.7** — App Router. Read `node_modules/next/dist/docs/` before touching Next.js APIs. |
| Language | TypeScript + React 19 |
| Styling | **Tailwind CSS v4** (`@tailwindcss/postcss`). Tokens exposed via `@theme inline` in `globals.css`. |
| Animations | **Framer Motion** `^12`, **Lenis** `^1.3` (smooth scroll) |
| Icons | `lucide-react ^1.17`, `react-icons ^5.6` |
| Theming | `next-themes ^0.4` — light/dark, `attribute="class"`, system default |
| HTTP | `axios ^1.18`, native `fetch` |
| HTML parse | `cheerio ^1.2` |
| OTP input | `input-otp ^1.4` |
| Font | **GT America** — local `.otf` trial files in `src/fonts/`, 4 weights: 300/400/500/700. CSS var: `--font-gt-america`, mapped to `--font-sans` in Tailwind theme. |

---

## Environment

**`.env.local`** (only two vars, used by `/api/reviews`):
```
GOOGLE_API_KEY=AIzaSyAGYAv6US3xDuqtk8qZZeyhZ-d33uY4uTw
GOOGLE_PLACE_ID=ChIJhdwBn1Un3YARTGsIHZuNabg
```

---

## Design System (`src/app/globals.css`)

Uses Tailwind v4's `@theme inline {}` block to expose CSS vars as Tailwind utilities.

### Color Tokens

| CSS Var | Tailwind Utility | Light | Dark |
|---|---|---|---|
| `--bg` | `bg-bg` / `text-bg` | `#FFFFFF` | `#0B1120` |
| `--bg2` | `bg-bg2` | `#F7F9FC` | `#111827` |
| `--bg3` | `bg-bg3` | `#EDF2F7` | `#1F2937` |
| `--bg4` | `bg-bg4` | `#E2E8F0` | `#374151` |
| `--border` | `border-border-main` / `bg-border` | `rgba(11,25,44,0.08)` | `rgba(255,255,255,0.08)` |
| `--border2` | `border-border2` | `rgba(11,25,44,0.16)` | `rgba(255,255,255,0.16)` |
| `--text` | `text-text-main` | `#0B192C` | `#F9FAFB` |
| `--text2` | `text-text2` | `#4A5568` | `#D1D5DB` |
| `--text3` | `text-text3` | `#718096` | `#9CA3AF` |
| `--blue` | `bg-blue-main` / `text-blue-main` | `#2563EB` | `#3B82F6` |
| `--bluedim` | `bg-bluedim` | `rgba(37,99,235,0.1)` | `rgba(59,130,246,0.15)` |

### Custom Classes (do not replace with ad-hoc Tailwind)

```
.container-custom       max-w-[1240px], auto margin, 48px inline padding
.btn                    base button: inline-flex, font-inherit, weight 500, transition
.btn-ghost              13.5px, 8px 16px pad, 7px radius, border, transparent bg
.btn-primary            13.5px, 8px 18px pad, 7px radius, white text, blue-main bg
.btn-lg                 16px, 13px 30px pad, 10px radius (modifier, stacks on above)
.anim                   scroll-reveal: opacity 0, translateY(40px), blur(10px) → all transition 1.4s cubic
.anim.in                reveals: opacity 1, translateY(0), blur(0)
.d1/.d2/.d3/.d4         transition-delay 0.1s / 0.2s / 0.3s / 0.4s (stagger helpers)
.no-scrollbar           hides scrollbar cross-browser
```

### Named Animations (used via `animate-*` Tailwind utilities)

| Utility | Duration | What it does |
|---|---|---|
| `animate-hglow` | 11s | Hero radial glow pulse (scale + opacity) |
| `animate-rwords` | 10s | Rotating word ticker (translateY between 4 phrases) |
| `animate-tick` | 36s | TrustTicker infinite marquee (translateX -50%) |
| `animate-liqShift` | 14s | Background gradient position shift |
| `animate-stipeMove` | 10s | Skew stripe movement |
| `animate-blobDrift` | 16s | Blob scale drift |
| `animate-carouselScroll` | 45s | ResultsCarousel infinite scroll (translateX calc(-50% - 8px)) |

---

## Root Layout (`src/app/layout.tsx`)

- Loads GT America font, sets CSS var `--font-gt-america`, mapped to `--font-sans`
- Full SEO metadata: title, description, keywords, OpenGraph, Twitter card, robots (index+follow), canonical
- Wraps everything: `<html>` → `<body>` → `<SmoothScrolling>` → `<ThemeProvider attribute="class" defaultTheme="system" enableSystem>`
- Body classes: `min-h-full flex flex-col font-sans font-light bg-bg text-text-main overflow-x-hidden`
- `suppressHydrationWarning` on both `<html>` and `<body>` (required for next-themes)

---

## File Tree

```
src/
├── app/
│   ├── layout.tsx                        ← Root layout, font, SEO, providers
│   ├── globals.css                       ← All tokens, custom classes, keyframes
│   ├── page.tsx                          ← Home page
│   ├── api/
│   │   └── reviews/route.ts              ← GET /api/reviews (Google Places)
│   ├── careers/page.tsx
│   ├── contact-us/page.tsx
│   ├── faq/page.tsx
│   ├── free-tax-consultation/page.tsx
│   ├── irs-fresh-start-program/page.tsx
│   ├── reviews/page.tsx
│   ├── survey/
│   │   ├── page.tsx                      ← Thin server wrapper
│   │   └── Client.tsx                    ← 7-step lead-gen form (435 lines)
│   ├── tax-debt-relief-irs-forgiveness-program/page.tsx
│   ├── tax-preparation-service/page.tsx
│   └── services/
│       ├── amending-tax-returns/page.tsx
│       ├── asset-protection/page.tsx
│       ├── back-taxes/page.tsx
│       ├── bank-levy/page.tsx
│       ├── currently-non-collectible-status/page.tsx
│       ├── ideal-tax-protection-plan/page.tsx
│       ├── innocent-spouse-tax-relief/page.tsx
│       ├── installment-agreements-irs-payment-plans/page.tsx
│       ├── offer-in-compromise/page.tsx
│       ├── penalty-abatement/page.tsx
│       ├── seizure/page.tsx
│       ├── tax-audits/page.tsx
│       ├── tax-lien-subordination/page.tsx
│       ├── trust-fund-recovery-penalty/page.tsx
│       └── wage-garnishments/page.tsx
├── components/                           ← All shared components (see below)
├── fonts/                                ← GT America .otf files
└── utils/
    ├── email.ts                          ← emailValidation()
    └── phone.ts                          ← sendVerificationSms(), validateOtp()
```

---

## Home Page (`src/app/page.tsx`)

Server component. Composes these in order:

```tsx
<ScrollObserver />   // Wires up IntersectionObserver for .anim → .anim.in
<Navbar />
<main>
  <Hero />
  <Process />
  <SplitFeature />
  <OurCompany />     // Internally renders: <TrustTicker />, <ResultsCarousel />, <Stats />
  <Team />
  <Testimonials />
  <CTA />
</main>
<Footer />
```

---

## Components (all in `src/components/`)

### `Navbar.tsx` — `"use client"`, 303 lines
Fixed top nav (`z-[100]`, `h-16`, `bg-bg/80 backdrop-blur-lg`).

**Desktop (≥lg):** Logo → nav links → mega Services dropdown → ThemeToggle → phone link → "Get Started" (`/survey`).

**Services Mega Dropdown:** 4 columns, animates on hover with `opacity` + `translateY` + scale. Columns:
- *Tax Relief:* IRS Fresh Start, Tax Debt Relief & IRS Forgiveness, Offer in Compromise, Penalty Abatement, Innocent Spouse, Currently Non-Collectible
- *Tax Services:* Free Consultation, Tax Preparation, Amending Returns, Tax Audits, Installment Agreements, Ideal Tax Protection Plan
- *Enforcement:* Bank Levy, Wage Garnishments, Seizure, Tax Lien Subordination, Trust Fund Recovery, Asset Protection
- *Back Taxes:* Back Taxes

Bottom bar of dropdown: "Get Started" button → `/survey`

**Mobile (<lg):** Hamburger → full-width overlay with collapsible Services list + CTAs.

State: `open` (mobile menu), `servicesOpen`/`dropdownVisible` (desktop dropdown), `mobileServicesOpen`. Close uses 150ms timer with `cancelClose()` pattern.

---

### `Hero.tsx` — `"use client"`, 102 lines
Full-height hero (`min-h-screen`), `bg-bg2`, centered content.

- **Radial glow** behind heading (`animate-hglow`)
- **H1:** "Tax relief for" + rotating words ticker (`animate-rwords`): "everyday Americans / working families / small businesses / self-employed pros"
- **Interactive search bar:** Shows selected tag as "Resolve your {promptText}" — links to `/survey` for "Free Consultation"
- **Tag pills:** Tax Debt / IRS Back Taxes / Wage Garnishments / Tax Liens / Offer in Compromise / Penalty Abatement — clicking updates `promptText`
- **Subheading:** "Resolve your tax problems..." + social proof: avatar stack of 4 initials + "Join 10,000+ Americans..."
- **CTA pair:** "Get Started Free" (`.btn-primary.btn-lg` → `/survey`) + "Call (877) 518-2860" (`.btn-ghost.btn-lg`)

---

### `Process.tsx` — `"use client"`, 116 lines
Two-column layout: left = tab list, right = sticky image panel.

3 tabs (clickable):
1. **Investigation** — IRS transcript review, image: `/process_investigation_1780671480237.png`
2. **Resolution** — IRS negotiation, image: `/process_resolution_1780671490414.png`
3. **Financial Freedom** — post-resolution, image: `/process_freedom_1780671501375.png`

Active tab expands body text (`max-h` transition). Right panel crossfades images with overlay gradient + icon badge.

---

### `SplitFeature.tsx` — `"use client"`, 64 lines
Two-column: left = copy + two feature mini-cards (Total Protection, Expert Representation) + CTA → `/survey`. Right = image (`/split_feature_office_1780671308396.png`) with floating "10,000+ Tax issues resolved" badge.

---

### `OurCompany.tsx` — server, 33 lines
Wrapper section that composes: description paragraph → `<TrustTicker />` → `<ResultsCarousel />` → `<Stats />`

---

### `TrustTicker.tsx` — server, 35 lines
Infinite marquee (`animate-tick`, pauses on hover). Items: BBB A+ / IRS Authorized ✓ / NAEA Member / Best Company Certified / 47 States Licensed / 15+ Years Experience / 10,000+ Clients Resolved / Irvine, California. Duplicated for seamless loop.

---

### `ResultsCarousel.tsx` — `"use client"`, 60 lines
Auto-scrolling image carousel (`animate-carouselScroll`, pauses on hover). 6 result cards duplicated for infinite loop. Each card: full-bleed image + gradient overlay + tag + headline + location. Cards are `540px` wide on desktop.

Results shown:
- OIC: $87k → $4,200 · Texas
- Wage Garnishment: stopped in 48h · Florida
- Penalty Abatement: $32k removed · California
- Installment: $140k resolved · New York
- Tax Lien: lifted, home sale unblocked · Georgia
- CNC: collections paused 2 years · Arizona

---

### `Stats.tsx` — server, 35 lines
4-column grid (responsive): **15+** Years experience / **A+** BBB Rating / **47** States licensed / **10k+** Happy clients. Each has `.anim` + stagger delay.

---

### `Team.tsx` — server, 44 lines
4-column grid. Members hardcoded:
- Faris Khatib — CEO
- Jaquelyn Stenbakken — Sales Operations
- Michelle Martinez — Case Manager Director
- Preciosa Vidal — Servicing Director

Each card: aspect-[4/5] image + floating role pill + quote + name. Images: `/team_ceo.png`, `/team_sales.png`, `/team_manager.png`, `/team_director.png`.

---

### `Testimonials.tsx` — `"use client"`, 116 lines
**Top block:** 2-column split — left: image (`/testimonial_owner_1780671369056.png`), right: featured quote from "Michael R., Small Business Owner · LA, CA" (IRS debt cut 90%).

**Bottom grid:** 3 review cards. Starts with 3 hardcoded fallback reviews, then **fetches `GET /api/reviews`** on mount. If Google returns reviews, replaces with up to 3 real 5-star reviews mapped from Google Places format. Shows opacity-50 while loading.

---

### `CTA.tsx` — server, 26 lines
Full-width card with `/glass.jpg` background image + dark overlay. Inner glassmorphic box (`bg-[rgba(15,25,35,0.65)] backdrop-blur-[10px]`). Heading: "Turn your tax debt into freedom." White button → `/survey`.

---

### `Footer.tsx` — server, 88 lines
4-column grid on desktop: Brand column (logo text `ideal`*tax*, description, social icons: Facebook / X / Instagram / LinkedIn) + Company links (About, Careers, Contact, Reviews, Blog) + Services links (Tax Debt Relief, OIC, Lien & Levy, Penalty Abatement, Installment Plans) + Legal links (Terms, Privacy, SMS Terms, Sales & Refunds, FAQ). Bottom bar: copyright + email `hello@idealtax.com` + phone.

> **Note:** About (`/about`) and Blog (`/blog`) are linked in the footer but **don't have page files yet**.

---

### `ScrollObserver.tsx` — `"use client"`, 25 lines
Renders nothing. `useEffect` runs once: `IntersectionObserver` with `threshold: 0.12` observes all `.anim` elements in the document. When one enters the viewport, adds `.in` class → CSS transition plays. Disconnects on unmount.

---

### `SmoothScrolling.tsx` — `"use client"`, 32 lines
Wraps children. Initializes Lenis on mount:
- `duration: 1.5` (Apple-style slow)
- easing: `Math.min(1, 1.001 - Math.pow(2, -10 * t))`
- `wheelMultiplier: 0.8`, `touchMultiplier: 2`
- Runs via `requestAnimationFrame` loop. Destroys on unmount.

---

### `ThemeProvider.tsx` — 289 bytes
Thin re-export: `export { ThemeProvider } from "next-themes"` with `"use client"` directive.

### `ThemeToggle.tsx` — `"use client"`, 991 bytes
Button that calls `useTheme()` to toggle between light/dark. Renders sun/moon icon.

### `FAQAccordion.tsx` — 2.1 KB
Collapsible FAQ items component. Used on the `/faq` page.

### `ServiceBlocks.tsx` — 235 lines
**Not used on the home page.** This is a reusable block library for the 15 service sub-pages. Exports 6 named components:

| Export | Purpose |
|---|---|
| `ServiceHero` | Full-width hero with badge, H1, subtitle, two CTAs (survey + phone) |
| `ServiceIntro` | Centered text intro block (`bg-bg2`) |
| `ServiceBento` | 3-column feature grid with icon cards |
| `ServiceSideContent` | Sticky left copy + scrolling right highlight cards |
| `ServiceChecklist` | Eligibility checklist with checkmark items |
| `ServiceCTA` | Blue full-width CTA block with "Get Started Now" + call button |
| `ServiceSEOArticle` | Long-form SEO prose section with h3 headings + paragraphs + lists |

All blocks use `.anim` / `.d1`–`.d4` for scroll reveals, `.container-custom` for width, and share the same color tokens.

---

## API Routes

### `GET /api/reviews` (`src/app/api/reviews/route.ts`)
Calls Google Places API: `place/details/json?place_id=...&fields=name,rating,reviews,user_ratings_total`
- Filters to only 5-star reviews
- Sorts by `time` descending (newest first)
- Returns `{ reviews: [...] }`
- Error responses: 500 if env vars missing, 400 if Google API returns non-OK status

### Missing API Routes (referenced in utils, not yet implemented)
- `GET /api/validate-email?email=...` (utils/email.ts falls back to regex)
- `POST /api/send-otp` with `{ phone }` body
- `POST /api/validate-otp` with `{ phone, otp }` body

---

## Survey Flow (`src/app/survey/`)

`page.tsx` is a thin server component that renders `<SurveyPage />` (client component from `Client.tsx`).

**7-step lead qualification form:**

| Step | Field | Validation |
|---|---|---|
| 1 | `taxDebt` | Select (ranges). Blocks progress if `under-5k` selected — shows orange warning |
| 2 | `state` | Select (all 50 US states) |
| 3 | `unfiledYears` | Select (0–12 years) |
| 4 | `taxType` | Card buttons: Personal / Business / Both |
| 5 | `firstName`, `lastName` | Text inputs, both required |
| 6 | `filingStatus` | Select (Single / HOH / Married Joint / Married Separate / Don't Know) |
| 7 | `email`, `phone` | email must include `@`, phone must be ≥10 chars |

**UX:**
- Fixed header with logo + phone number
- 3px progress bar below header (`transition-all duration-700`)
- Step counter "Step X of 7" + Back button (step > 0)
- Each step animates in with `surveySlideUp` keyframe (defined inline as `<style jsx global>`)
- Direction-aware: forward = from below, backward = from above
- Continue button disabled until step validates
- Final step: "Submit Application" button (dark bg, white text)

**On submit:** currently just `console.log(formData)` + shows success screen. **No backend call wired up.** Success screen shows "Application Received" + Return Home + Call Now buttons.

---

## Public Image Assets (`/public/`)

Referenced across components:

| File | Used in |
|---|---|
| `/logo.png` | Navbar, Survey header |
| `/og-image.png` | SEO meta (OpenGraph + Twitter) |
| `/glass.jpg` | CTA section background |
| `/process_investigation_1780671480237.png` | Process tab 1 |
| `/process_resolution_1780671490414.png` | Process tab 2 |
| `/process_freedom_1780671501375.png` | Process tab 3 |
| `/split_feature_office_1780671308396.png` | SplitFeature right column |
| `/testimonial_owner_1780671369056.png` | Testimonials left image |
| `/team_ceo.png` | Team — Faris Khatib |
| `/team_sales.png` | Team — Jaquelyn Stenbakken |
| `/team_manager.png` | Team — Michelle Martinez |
| `/team_director.png` | Team — Preciosa Vidal |
| `/carousel_oic_1780671633335.png` | ResultsCarousel card 1 |
| `/carousel_wage_1780671645286.png` | ResultsCarousel card 2 |
| `/carousel_penalty_1780671655676.png` | ResultsCarousel card 3 |
| `/carousel_installment_1780671670828.png` | ResultsCarousel card 4 |
| `/carousel_lien_1780671683359.png` | ResultsCarousel card 5 |
| `/carousel_cnc_1780671693727.png` | ResultsCarousel card 6 |

---

## Coding Conventions

1. **`"use client"`** only where interactivity is needed. Most layout/section components are server components.
2. **Never use ad-hoc colors** — always use token-based utilities (`bg-bg`, `text-text2`, `bg-blue-main`, etc.)
3. **Buttons** — always `.btn .btn-primary` or `.btn .btn-ghost`, optionally `.btn-lg`. Never arbitrary Tailwind for buttons.
4. **Layout width** — always `.container-custom` (not `max-w-* mx-auto px-*` inline)
5. **Scroll reveal** — add `.anim` class to any element. `ScrollObserver` handles the rest. Use `.d1`–`.d4` for stagger.
6. **Phone number:** `(877) 518-2860` / `tel:+18775182860` — used consistently across all CTAs.
7. **Primary CTA destination:** `/survey` — every major CTA points here.

---

## Infobip Scripts (Separate Project — `/Users/adnane/develop/infobip/`)

**Not part of the Next.js app.** Standalone Node.js tooling to configure Infobip SMS/voice numbers via API.

| File | Purpose |
|---|---|
| `add_keyword_infobip.js` | Adds keywords to specific phone numbers (latest version) |
| `add-keywords.js` | Earlier iteration of keyword registration |
| `add-default-forward.js` | Sets default forwarding destination on Infobip numbers |
| `check-config.js` | Reads and prints current number configuration |
| `.env` / `.env.example` | Infobip API key + base URL |

Dependencies: just `node-fetch` (or similar) — see `package.json` in that directory.
