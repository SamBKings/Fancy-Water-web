---
name: Fancy Water
description: Clinical-luxury storefront for the official VOL:TENA distributor in the Americas
colors:
  paper: "#F4F3EF"
  snow: "#FBFAF7"
  bone: "#ECEAE4"
  tinta: "#0E0E0E"
  navy: "#2D3147"
  ash: "#B7B4AC"
  grafito: "#7A7975"
  linea: "#D9D8D3"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(44px, 5.5vw, 80px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(30px, 3.5vw, 52px)"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "15px"
    fontWeight: 300
    lineHeight: 1.85
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "3px"
rounded:
  input: "8px"
  card: "10px"
  photo: "16px"
  panel: "20px"
  pill: "50px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "52px"
  section: "100px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "14px 36px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.grafito}"
    rounded: "{rounded.pill}"
    padding: "14px 36px"
  chip-filter:
    backgroundColor: "transparent"
    textColor: "{colors.ash}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
  card-product:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.input}"
    padding: "12px 16px"
---

# Design System: Fancy Water

## 1. Overview

**Creative North Star: "The Clinical Atelier"**

A couture workshop run with medical precision. The surface is paper and ink — warm editorial neutrals (Paper, Snow, Bone) separated by hairline rules — with a single signature color, Navy, carrying every accent: prices, italics, buttons, badges. Playfair Display speaks in the voice of a prestigious journal; Inter, set light and tracked-out in tiny uppercase labels, does the quiet administrative work around it. Density is low and deliberate: 100px section rhythm on desktop, generous line-height, one idea per section.

The system explicitly rejects everything PRODUCT.md rejects: gray-market pharma clutter (price badges everywhere, urgency tactics), generic pink-pastel beauty e-commerce, and interchangeable template landing pages. Restraint is the trust signal — the page must always read "official distributor," never "discount reseller." Dark sections (the Navy VOL:TENA showcase, the Tinta footer, the Navy newsletter band) are dramatic interludes in an otherwise light, airy composition.

**Key Characteristics:**
- Paper-and-ink editorial palette; Navy as the only voice of color
- Serif display (Playfair) + light humanist sans (Inter) pairing
- Hairline 1px borders (Línea) instead of shadows for structure
- Pill-shaped interactive elements throughout (buttons, chips, badges)
- Tiny tracked uppercase labels as the system's navigational whisper
- Mobile-first pragmatism: GPU-heavy effects disabled under 640px

## 2. Colors

A warm paper field, near-black ink, and one deep navy voice — everything else is silence.

### Primary
- **Navy** (#2D3147): The single accent. Prices, button fills, italic emphasis in headlines, icons, badges, focus borders, the dark showcase and newsletter sections. If something needs to matter, it's Navy.

### Neutral
- **Paper** (#F4F3EF): The body background; the default field of the whole site.
- **Snow** (#FBFAF7): The lighter surface — product sections, cards-on-paper, form panels, marquee band.
- **Bone** (#ECEAE4): The deepest light neutral — image wells, photo backgrounds, the "pedido" badge.
- **Tinta** (#0E0E0E): Ink. Headlines, primary text, the footer background, the "top" badge.
- **Grafito** (#7A7975): Secondary text — body copy, descriptions, ghost-button labels.
- **Ash** (#B7B4AC): Tertiary whisper — eyebrows, labels, placeholders, inactive chips. Decorative-label duty only.
- **Línea** (#D9D8D3): Hairline borders, dividers, scrollbar tracks.

### Named Rules
**The One Voice Rule.** Navy is the only chromatic color in the system. Never introduce a second accent; emphasis beyond Navy is achieved with Tinta weight or Playfair italics.

**The Ash Whisper Rule.** Ash is reserved for ≤12px uppercase labels and placeholders. It fails body-text contrast on Paper by design — running paragraphs must use Grafito or darker, never Ash.

**The Dark Interlude Rule.** Full-bleed dark sections (Navy or Tinta) appear at most as punctuation between light sections — showcase, newsletter, footer. On dark, text is white at graded opacities (.4 labels / .5–.6 body / 1.0 headlines), never gray hexes.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, serif)
**Body Font:** Inter (with system sans-serif)

**Character:** A prestige journal masthead over quiet laboratory labeling. Playfair carries all emotion — set at regular weight with italic Navy spans for emphasis; Inter stays light (300) and small, rising to 500–800 only for buttons, prices, and the brand wordmark.

### Hierarchy
- **Display** (400, clamp(44px, 5.5vw, 80px), 1.05): Hero headline only. Italic `em` spans in Navy for the emotional word.
- **Headline** (400, clamp(30px, 3.5vw, 52px), 1.2): Section titles, dark-section titles (up to clamp 80px in the VOL:TENA showcase).
- **Title** (400, 17px, 1.3): Product names, card titles — Playfair at small size keeps the catalog editorial.
- **Body** (300, 13–15px, 1.6–1.9): Inter light. Grafito on light surfaces; white at .5–.6 opacity on dark. Keep measure ≤ 70ch.
- **Label** (400–600, 9–12px, +2px to +5px tracking, UPPERCASE): Eyebrows, nav links, form labels, badges, buttons. The smaller the size, the wider the tracking.

### Named Rules
**The Italic Emphasis Rule.** Emphasis inside a headline is an italic Playfair span (Navy on light, reduced-opacity white on dark) — never bold, never a second color.

## 4. Elevation

Flat at rest. Structure comes from hairline Línea borders and tonal layering (Paper → Snow → Bone), not shadows. Shadows exist only as a response to state or floatation: a card lifting on hover, a fixed toast or chat FAB, a photograph sitting on a dark section. On mobile, large shadows and backdrop-filters are deliberately simplified for performance.

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 20px 48px rgba(45,49,71,.1)` + `translateY(-5px)`): Product cards on pointer devices only.
- **Button lift** (`box-shadow: 0 12px 32px rgba(45,49,71,.3)` + `translateY(-2px)`): Primary button hover.
- **Floating layer** (`box-shadow: 0 20px 60px rgba(14,14,14,.3)`): Toasts, chat FAB, fixed overlays.
- **Photo on dark** (`box-shadow: 0 40px 80px rgba(0,0,0,.4)`): Imagery inside Navy/Tinta sections.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest; a shadow always means "this is hovering or floating right now." Decorative resting shadows are prohibited.

## 5. Components

Refined and restrained: pill shapes, hairline borders, quiet transitions (.25–.4s), confidence through understatement.

### Buttons
- **Shape:** Full pill (50px radius)
- **Primary:** Navy fill, white uppercase Inter 12px +2px tracking, 14px 36px padding
- **Hover / Focus:** Lifts -2px with the Button-lift shadow; transitions .3s
- **Ghost:** Transparent with 1px Línea border, Grafito text; hover turns border and text Navy
- **On dark (newsletter):** Inverted — white fill, Navy text

### Chips (filters)
- **Style:** Transparent pill, 1px Línea border, Ash uppercase 11px text
- **State:** Active/hover → Navy border, Navy text, 5% Navy tint background; horizontally scrollable row on mobile

### Cards / Containers
- **Corner Style:** 10px (cards), 16px (form panels/photos), 20px (featured container)
- **Background:** Paper cards on Snow sections; Snow cards on Paper sections — always one tonal step apart
- **Shadow Strategy:** None at rest; hover lift on pointer devices only (see Elevation)
- **Border:** Always 1px Línea
- **Internal Padding:** 18–28px (cards), 36px (form panel), 56px (featured info)

### Inputs / Fields
- **Style:** Paper background, 1px Línea border, 8px radius, Inter 14px, 12px 16px padding
- **Focus:** Border shifts to Navy (.3s); no glow, no ring
- **Placeholder:** Ash
- **On dark:** White at 8% fill, white 15% border, pill-shaped (newsletter)

### Navigation
- **Style:** Fixed 72px bar, transparent at top; scrolled state gains 92% Paper + blur (solid on mobile) and a 1px Línea bottom rule
- **Links:** 12px uppercase +2px tracking Grafito; hover → Tinta with a 1px Navy underline scaling in from the left
- **CTA:** Compact Navy pill. Mobile: hamburger (three 1px lines) + cart button, slide-down menu

### Product Card (signature)
Snow image well (1:1, contained product photo with 20px padding), pill badges top-left (Nuevo = Navy, Top = Tinta, Pedido = Bone, KFDA = #E8F0FF/Navy), then: Ash uppercase category, Playfair 17px name, Grafito 12px description, and a footer rule with Navy 20px price (Inter 600) and a 36px circular add button (Línea border → Navy fill on hover). On mobile the grid becomes a center-snapping horizontal carousel of 78vw cards.

## 6. Do's and Don'ts

### Do:
- **Do** keep Navy (#2D3147) as the only accent — emphasis is Navy, italics, or Tinta weight, nothing else.
- **Do** separate surfaces with 1px Línea borders and one-step tonal shifts (Paper ↔ Snow ↔ Bone).
- **Do** use pill shapes (50px) for every interactive element: buttons, chips, badges, dark-section inputs.
- **Do** write body copy in Grafito (#7A7975) or darker; reserve Ash strictly for small uppercase labels.
- **Do** respect mobile performance doctrine: no backdrop-filter, no float animations, no Three.js canvas, simplified shadows under 640px — and keep touch targets ≥44px.
- **Do** keep section rhythm airy: 100px desktop / 52px mobile vertical padding.

### Don't:
- **Don't** look like a gray-market pharma shop — no urgency timers, no stacked discount badges, no fake trust seals (PRODUCT.md anti-reference).
- **Don't** drift into generic beauty e-commerce — no pinks, no pastels, no retail-skincare styling (PRODUCT.md anti-reference).
- **Don't** assemble template landing-page sections with stock icons — every section earns its custom layout (PRODUCT.md anti-reference).
- **Don't** add resting shadows to cards or decorative glows; flat at rest is doctrine.
- **Don't** use gradient text, side-stripe borders, or a second accent color under any circumstance.
- **Don't** set running text in Ash on Paper — it fails contrast; if it's more than a label, it's Grafito or darker.
