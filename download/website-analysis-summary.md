# 📺 Video Analysis — Website Recreation Brief

**Source:** `10.07.2026_14.35.09_REC.mp4` (13.45 sec, 1280×680)
**Extracted Frames:** 7 (every 2 seconds) → `frame_01.png` … `frame_07.png`
**Analysis Engine:** GLM-4.5V with thinking mode enabled

---

## 🎯 1. OVERALL SUMMARY

Ye ek **B2B Digital Agency ki Landing Page** hai — brand name **"Maxobiz"**.

Website ka goal: clients ko impress karna with social proof (Google/Clutch/Upwork ratings), stats (250+ automation, 99% satisfaction), services (n8n, Digital Marketing, Branding), aur final CTA ("Book a Meeting").

> ⚠️ **Note:** Aapne bola tha "3 pages" — lekin AI ke analysis ke mutabiq ye **ek hi landing page ke 4 sections** hain jo scroll hote hue dikhaye gaye. Possible interpretations:
> - **Option A:** Ye actually ek hi page hai (sections vertically scrolled hain)
> - **Option B:** 3 distinct pages hain (Home, Stats/About, Services+CTA) aur recording mein scroll/transitions se merge ho gaye
>
> Niche dono ke liye content ready hai — aap confirm kar dein ke kya banana hai.

---

## 🎨 2. DESIGN SYSTEM (applies to all sections)

| Property | Value |
|---|---|
| **Theme** | Light mode (white background) |
| **Primary color** | Blue `#007BFF` (buttons, accents) |
| **Darker accent** | `#0056D3` (text emphasis) |
| **Backgrounds** | `#FFFFFF` (most sections), `#F8F9FA` (Stats section) |
| **Headline text** | Black `#000000` |
| **Body/subtext** | Gray `#6C757D` |
| **Star ratings** | Yellow `#FFD700` |
| **Typography** | Sans-serif (Inter / similar) |
| **Corner radius** | Rounded (8–12px) for buttons & cards |
| **Shadows** | Subtle on cards |
| **Spacing** | Airy (large margins between sections) |

---

## 📑 3. SECTION-BY-SECTION BREAKDOWN

### 🔹 SECTION 1 — Hero + Social Proof (Frames 1–2)

**Navbar (top, white bg, fixed):**
- Logo: **Maxobiz** (black, bold, sans-serif, ~24px)
- Links: `Services ▾` (dropdown) · `Work` · `Case Studies` · `Blogs` · `Company ▾` (dropdown)
- Buttons (right side):
  - `Let's talk` — solid blue `#007BFF`, white text, rounded
  - `Free Website Audit` — white bg, blue border, blue text, rounded

**Hero content:**
- H1: **"Expert Digital Solutions for Every Business"** (~48px bold, "Digital Solutions" in blue)
- Subtext: "Real progress starts with smart execution… deliver results through expert strategy…" (gray, ~18px)

**Social proof — 5 rating cards in horizontal row:**
| # | Platform | Rating |
|---|---|---|
| 1 | Google | 4.9 ⭐ |
| 2 | Clutch | 5.0 ⭐ |
| 3 | Upwork | 5.0 ⭐ |
| 4 | Bark | 5.0 ⭐ |
| 5 | Trustpilot | 4.7 ⭐ |

Each card: platform logo + star rating + label like "Rating on Google".

---

### 🔹 SECTION 2 — Stats & Facts (Frames 3–4)

- **Background:** Light gray `#F8F9FA`
- **Subheadline:** "Stats & Facts" (gray, ~24px)
- **Paragraph:** "Results of our projects show the dedication and experience of our team… measurable outcomes…" (with blue accents on words like *dedication*, *experience*, *measurable*, *digital technology*, *hundreds*)

**4 stats cards in a row (grid):**
| # | Stat | Value | Description |
|---|---|---|---|
| 1 | Proven Automation | **250+** | (descriptive text) |
| 2 | Real Business Growth | **40%** | (descriptive text) |
| 3 | Happy Clients | **4,050+** | (descriptive text) |
| 4 | Customer Satisfaction | **99%** | (descriptive text) |

Each card: small blue dot · big bold black number (~36px) · gray description (~14px).

---

### 🔹 SECTION 3 — Services (Frame 5)

- **Headline:** "Services for Business Growth" ("Business Growth" in blue, ~36px)
- **Sub-headline (bottom):** "Using Modern Tech Stacks for Scalable Digital Products" ("Scalable Digital Products" in blue)

**3 service cards in a grid:**
| # | Service | Tech Stack shown |
|---|---|---|
| 1 | **n8n** | ReactJS · VueJS · NodeJS |
| 2 | **Digital Marketing** | SEO · React Native · FlutterJS · Kotlin |
| 3 | **Branding & Design** | Adobe Illustrator · Aftereffects · Photoshop |

Each card shows tech logos + tech names (gray, ~14px). One card has a small chart graphic (blue lines on gray bg — "Marketing Analysis").

---

### 🔹 SECTION 4 — CTA "From Idea to Impact" (Frames 6–7)

- **H2:** "From Idea to Impact: Start Now" ("Start Now" in blue, ~36px)
- **Paragraph:** "Thinking something big? We'll help you scale it… deliver the websites, apps, and brands that perform." (gray, ~18px)
- **CTA Button:** `Book a Meeting` — white bg, blue border, blue text, rounded

**3 preview cards on the right:**
1. Content Marketing — "Expand audience reach…"
2. SERP Visibility — "Build authority…"
3. SEO — "Optimize SEO…"

Each card: small image (laptop/phone/person) + plus icon (white on blue circle) + descriptive text.

---

## 🧭 4. NAVIGATION / FLOW

The recording shows the user **scrolling vertically** through the landing page. The "3 pages" you mentioned are most likely these 4 sections scrolling in sequence. No top-level page navigation was visible (no clicks on navbar links).

If you actually have 3 separate pages, please tell me:
- Page 1 = ?
- Page 2 = ?
- Page 3 = ?

Otherwise I'll build this as a single landing page with smooth scroll.

---

## 🛠️ 5. RECOMMENDED TECH STACK TO RECREATE

Based on the design (modern, modular, blue primary color, rounded cards):

| Layer | Recommendation |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | shadcn/ui (Button, Card, etc.) |
| **Icons** | lucide-react |
| **Fonts** | Inter (Google Fonts) |
| **Charts** | recharts (for the marketing chart) |
| **Animation** | framer-motion (optional, for scroll animations) |

---

## ✅ 6. RECREATE CHECKLIST (pixel-perfect)

- [ ] **Navbar** — Maxobiz logo + 5 nav links + 2 CTA buttons (Let's talk / Free Website Audit)
- [ ] **Hero** — H1 with blue-accented "Digital Solutions" + subtext + 5 rating cards row
- [ ] **Rating cards** — Google 4.9, Clutch 5.0, Upwork 5.0, Bark 5.0, Trustpilot 4.7 (with logos + stars)
- [ ] **Stats section** — light gray bg + 4 stat cards (250+ / 40% / 4,050+ / 99%)
- [ ] **Services section** — 3 service cards with tech stacks (n8n, Digital Marketing, Branding)
- [ ] **CTA section** — "From Idea to Impact: Start Now" + Book a Meeting button + 3 preview cards
- [ ] **Colors** — `#007BFF` primary, `#F8F9FA` alt bg, `#6C757D` gray text
- [ ] **Typography** — Inter font, sizes 48/36/24/18/16/14 px
- [ ] **Corner radius** — 8–12px on all interactive elements
- [ ] **Shadows** — subtle on cards
