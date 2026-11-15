# Design System Specification: GDG Riga Hackathon ("Sticker Playground")

> **Specification Version**: 1.0.0  
> **Target Reference**: https://hack.gdgriga.com/  
> **Source Artifacts**: `/static/css/app.css?v=5`, Live DOM Inspection at Desktop (1440px) and Mobile (375px)  
> **Design Codename**: *Concept B: Sticker Playground* with *Concept E: M3 Expressive Springs*  
> **Status**: Verified Production Specification  

---

## 1. Design Philosophy

The GDG Riga Hackathon web platform adheres to a distinctive, tactile physical design metaphor: **"Sticker Playground"**. 

Rather than relying on modern hyper-minimalist SaaS styling (subtle grays, borderless cards, and diffuse gaussian blurs), the design evokes physical vinyl laptop stickers, die-cut badges, and printed cards placed over architectural millimeter-grid paper.

### Core Tenets

1. **Physicality & Tactility (The Vinyl Sticker Rule)**
   - Elements behave like physical vinyl stickers slap-cut onto paper or ink canvas.
   - Interactive components feature a **triple-layer edge**: a saturated fill, an inner/outer solid **2px dark ink stroke**, a **4px white kiss-cut outline** (`--die`), and an unblurred, hard-offset **6px drop shadow** (`--drop`).
   - *"One card, one button, one tag, one heading scale. Shapes never change on hover: they lift and tilt."*

2. **Deliberate Anti-Sterility (The Hand-Tilted Angle)**
   - Components sit at slight resting rotations (`-3deg`, `+0.8deg`, `-0.6deg`, `+1.2deg`) as if placed by hand on a laptop lid.
   - On hover, components do not morph or resize; they **lift** (reducing drop distance) and **tilt** (dynamic spring-based counter-rotation).

3. **Dual Technical Canvas (Paper Grid vs. Ink Grid)**
   - **Paper Grid** (Light Theme): `#f0f0f0` base overlaid with 1px `#e2e2e2` rules at 40px repetition.
   - **Ink Grid** (Dark Theme): `#1f1f1f` base overlaid with 1px `#2a2a2a` rules at 40px repetition.
   - Contrast is kept crisp and graphic, reminiscent of engineering graph paper and blueprints.

4. **Expressive Bouncy Springs (M3 Physics)**
   - State changes use an exaggerated cubic-bezier spring (`cubic-bezier(0.34, 1.56, 0.64, 1)`), producing authentic tactile overshoot when hovering buttons, flipping cards, or opening accordions.

5. **Self-Contained Architectural Purity**
   - Zero reliance on external CSS utility frameworks (no Tailwind, Bootstrap, or emotion/styled-components). The design system is 100% authored in handcrafted CSS using standard CSS Custom Properties organized into five architectural tiers:
     `Tokens -> Base -> Shell -> Components -> Areas`.

---

## 2. Color Palette & Design Tokens

All tokens are defined in CSS custom properties. Values marked **[Verified]** are measured directly from the live DOM and `/static/css/app.css?v=5`.

### 2.1 Surfaces & Neutrals
| Token | Verified Value | Role & Usage |
|---|---|---|
| `--night` | `#1f1f1f` | [Verified] Primary dark canvas background (Hero, Dark sections, Appbar) |
| `--night-grid` | `#2a2a2a` | [Verified] 1px millimeter grid line rule on dark surfaces |
| `--night-2` | `#262626` | [Verified] Elevated dark surface (Timeline lane, dark card backings) |
| `--paper` | `#f0f0f0` | [Verified] Primary light canvas background (Public body sections) |
| `--paper-grid` | `#e2e2e2` | [Verified] 1px millimeter grid line rule on light surfaces |
| `--white` | `#ffffff` | [Verified] Solid card faces, button surfaces, kiss-cut die borders |
| `--surface-2` | `#f5f5f5` | [Verified] Subtle recessed neutral surface (toggle tracks, table row alts) |
| `--outline` | `#d6d6d6` | [Verified] Low-contrast dividers and subtle borders |
| `--outline-strong`| `#1e1e1e` | [Verified] High-contrast structural boundaries (`var(--ink)`) |

### 2.2 Typography & Ink Roles
| Token | Verified Value | Contrast / Role |
|---|---|---|
| `--ink` | `#1e1e1e` | [Verified] Primary high-contrast text and 2px component strokes |
| `--ink-2` | `#4a4f55` | [Verified] Secondary body text (7.6:1 WCAG AAA on paper) |
| `--on-night` | `#e8eaed` | [Verified] Primary high-contrast text on dark surfaces |
| `--on-night-2` | `#a8adb3` | [Verified] Muted secondary text on dark surfaces |

### 2.3 Google Brand Core Palette
| Token | Verified Value | Usage |
|---|---|---|
| `--blue` | `#4285f4` | [Verified] Google brand blue, hero text accent, gradient stop 1 |
| `--red` | `#ea4335` | [Verified] Google brand red, critical badges, gradient stop 2 |
| `--yellow` | `#fbbc04` | [Verified] Google brand yellow, highlight accents, gradient stop 3 |
| `--green` | `#34a853` | [Verified] Google brand green, positive badges, gradient stop 4 |

### 2.4 Saturated Sticker Tiles (Bento & Cards)
| Token | Verified Value | Usage |
|---|---|---|
| `--t-blue` | `#57caff` | [Verified] Cyan/Sky sticker face (Challenge Card 1) |
| `--t-pink` | `#ff7daf` | [Verified] Bubblegum pink sticker face, hero `+` accent, FAQ open badge |
| `--t-yellow` | `#ffd427` | [Verified] Golden yellow sticker face, update ticket, digital clock digits |
| `--t-green` | `#5cdb6d` | [Verified] Vivid lime green sticker face (Challenge Card 2) |

### 2.5 Pastel Accents & Containers
| Token | Verified Value | Usage |
|---|---|---|
| `--p-blue` | `#c3ecf6` | [Verified] Soft cyan container background, tonal button base |
| `--p-green` | `#ccf6c5` | [Verified] Soft green container background, candidate seat dot |
| `--p-yellow` | `#ffe7a5` | [Verified] Soft yellow container background, FAQ closed badge |
| `--p-red` | `#f8d8d8` | [Verified] Soft coral/red container background, error toast base |

### 2.6 Interactive, Status & Functional Tokens
| Token | Verified Value | Role |
|---|---|---|
| `--cta` | `#196bfe` | [Verified] High-energy primary action button blue |
| `--link-light` | `#1558d6` | [Verified] Hyperlink color on light paper |
| `--link-dark` | `#8ab4f8` | [Verified] Hyperlink color on dark night |
| `--ok` | `#188038` | [Verified] Success state stroke, team open vacancy indicator |
| `--err` | `#c5221f` | [Verified] Form validation error border |
| `--danger` | `#b3261e` | [Verified] Destructive button background |
| `--focus` | `#1558d6` | [Verified] Accessibility focus ring outline color |

### 2.7 Signature Gradients
```css
/* Google 4-Color Rainbow Stripe (Underlines, dividers, footer top-stripe) */
--g-gradient: linear-gradient(
  90deg,
  var(--blue) 0 25%,
  var(--red) 25% 50%,
  var(--yellow) 50% 75%,
  var(--green) 75% 100%
);
--u4: var(--g-gradient);
```

---

## 3. Typography Hierarchy & Font System

### 3.1 Font Stacks & Licensing
- **Headings & Body Font Stack**:
  ```css
  --font: "Google Sans", "Product Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  ```
  *Font File Assets*: Self-hosted variable `.woff2` (`400 700` weight range).
- **Monospace & Code Font Stack**:
  ```css
  --font-mono: "Google Sans Code", "Roboto Mono", ui-monospace, Menlo, Consolas, monospace;
  ```
  *Font File Assets*: Self-hosted variable `.woff2` (`400 500` weight range). Used for kickers, brackets, timestamps, counters, badges, and the live countdown clock.

### 3.2 Type Scale Hierarchy

| Element / Class | Family | Size Clamp / Computed | Weight | Line Height | Letter Spacing | Styling & Special Roles |
|---|---|---|---|---|---|---|
| **Display Hero Title** (`.hero h1`) | `--font` | `clamp(46px, 8vw, 136px)` | 400 | `0.94` | `-0.035em` | Ink/Night canvas; `.l2` has weight 700, color `--blue`, and Google rainbow underline `--u4` |
| **Hero Floater** (`.hero .plus`) | `--font` | `0.5em` | 400 | — | `-0.01em` | Color `--t-pink`, rotated `-4deg`, vertical-align `0.32em` |
| **Poster Heading** (`.h2`) | `--font` | `clamp(2.25rem, 1.2rem + 4.2vw, 5rem)` | 400 (b/strong: 700) | `0.98` | `-0.035em` | Prominent public section titles |
| **Page Header** (`.page-header h1`) | `--font` | `clamp(2.25rem, 1.4rem + 3vw, 3.75rem)` | 400 | `1.0` | `-0.035em` | Max-width `20ch` |
| **H1 (Default)** | `--font` | `clamp(2rem, 1.3rem + 3vw, 3.25rem)` | 700 | `1.1` | `-0.035em` | Content headers, margin-bottom `var(--s3)` |
| **H2 (Default)** | `--font` | `1.5rem (24px)` | 700 | `1.1` | `-0.02em` | Section sub-headings |
| **H3 (Default)** | `--font` | `1.1875rem (19px)` | 700 | `1.1` | `-0.02em` | Card headers and container titles |
| **Kicker / Eyebrow** (`.brace`, `.kicker`) | `--font-mono` | `clamp(0.9375rem, 0.85rem + 0.35vw, 1.125rem)` | 400 | `1.3` | `0` | Prefixed with programmatic `{` glyph (`2.1em/1 var(--font)`) |
| **Lede / Subtitle** (`.lede`, `.sub`) | `--font` | `clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)` | 500 | `1.45` | `0` | Max-width `52ch`, margin `18px 0 0`, color `--ink-2` |
| **Body Regular** (`body`) | `--font` | `1rem (16px)` | 400 | `1.5` | `0` | Primary reading copy, color `--ink` |
| **Body Muted / Small** (`.muted`, `small`) | `--font` | `0.875rem (14px)` | 400 | `1.4` | `0` | Secondary metadata, color `--ink-2` / `--on-night-2` |
| **Chip / Tag** (`.chip`, `.tag`) | `--font-mono` | `0.8125rem (13px)` | 500 | `1.2` | `0` | Monospace tags, status pills, filter options |
| **Digital Clock** (`.clock`) | `--font-mono` | `clamp(64px, 10vw, 160px)` | 500 | `0.9` | `-0.05em` | Color `--t-yellow`, tabular figures, strict monospaced tracking |
| **Pill Counter** (`.badge`) | `--font` | `0.6875rem (11px)` | 700 | `18px` | `0` | 18px circular indicator, white on `--red` |

---

## 4. Spacing System & Grid Scale

The spacing system relies on an 8-point base scale with 4px micro-increments.

### 4.1 Spacing Scale Tokens
```css
:root {
  --s1: 4px;   /* Micro gap, subtle border offsets */
  --s2: 8px;   /* Tight button gap, icon spacing, chip padding */
  --s3: 12px;  /* Field padding, card interior micro gaps */
  --s4: 16px;  /* Standard component interior padding, container gut */
  --s5: 24px;  /* Card padding (mobile), component stack separation */
  --s6: 32px;  /* Card padding (desktop), grid gap */
  --s7: 48px;  /* Section rhythm, bento vertical spacing */
  --s8: 64px;  /* Major section vertical breaks */

  --gap: 8px;
  --pad: clamp(16px, 4.2vw, 64px);
  --container: 1240px;
  --appbar-h: 108px; /* Mobile; shifts to 68px at >= 960px */
}
```

---

## 5. Layout System & Technical Canvases

### 5.1 Technical Graph-Paper Canvases
The backdrop is never plain white or gray. It consists of two technical grid patterns:

```css
/* Light Technical Paper (Default Body Canvas) */
body, .theme-paper {
  background-color: var(--paper); /* #f0f0f0 */
  background-image: 
    linear-gradient(to right, var(--paper-grid) 1px, transparent 1px),
    linear-gradient(to bottom, var(--paper-grid) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Dark Technical Ink (Hero, Appbar, Dark Sections) */
.hero, .theme-night {
  background-color: var(--night); /* #1f1f1f */
  background-image: 
    linear-gradient(to right, var(--night-grid) 1px, transparent 1px),
    linear-gradient(to bottom, var(--night-grid) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

### 5.2 Container Geometry
- **Global Max Container Width**: `1240px` (Public content), `1440px` (Navbar frame).
- **Responsive Inset**: `margin-inline: auto; padding-inline: var(--pad);`
- **Section Vertical Flow**: `padding-block: clamp(48px, 8vw, 96px);`

### 5.3 Bento Grid Layout
A 12-column asymmetric grid housing the interactive cards:
```css
.bento {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 18px;
}

/* Card 1: 7 Columns, Cyan, Tilted -0.6deg */
.bento .c1 { grid-column: 1 / span 7; --bg-c: var(--t-blue); transform: rotate(-0.6deg); }

/* Card 2: 5 Columns, Lime, Tilted +0.8deg */
.bento .c2 { grid-column: 8 / span 5; --bg-c: var(--t-green); transform: rotate(0.8deg); }

/* Card 3: 5 Columns, Yellow, Tilted +0.5deg */
.bento .c3 { grid-column: 1 / span 5; --bg-c: var(--t-yellow); transform: rotate(0.5deg); }

/* Card 4: 7 Columns, Bubblegum Pink, Tilted -0.4deg */
.bento .c4 { grid-column: 6 / span 7; --bg-c: var(--t-pink); transform: rotate(-0.4deg); }
```

---

## 6. Components Breakdown & Specifications

### 6.1 Navigation Bar (`.app-bar`)
- **Positioning**: Sticky header (`position: sticky; top: 0; z-index: 40;`)
- **Surface**: Solid `--night` (`#1f1f1f`), bottom stroke `2px solid #000`.
- **Dimensions**: Desktop height `68px`, Mobile height `108px` (2 rows).
- **Layout**:
  - Desktop (`>= 960px`): `3-column grid (auto 1fr auto)` mapping to `"brand nav actions"`.
  - Mobile (`< 960px`): `2-row grid` mapping to `"brand actions"` and `"nav nav"`.
- **Brand Lockup** (`.brand`):
  - Height: 34px (desktop), 28px (mobile).
  - Divider: `1px solid #5f6368` separating GDG logo and campus sub-brand.
- **Nav Links** (`.nav a`):
  - Pill shape: `min-height: 40px; padding: 0 14px; border-radius: var(--radius-full); font: 500 0.9375rem/1 var(--font); color: var(--on-night);`
  - Hover: `background: rgba(255, 255, 255, 0.08);`
  - Active page (`[aria-current="page"]`): `background: #ffffff; color: var(--ink);`
  - Mobile behavior: Horizontal scrollable swipe strip with hidden scrollbars (`scrollbar-width: none; overflow-x: auto;`).

### 6.2 Buttons (`.btn`)
Buttons represent the foundational tactile vinyl sticker.
- **Base Style Rules**:
  ```css
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 52px;
    padding: 0 24px;
    border-radius: var(--radius-full); /* 999px */
    border: var(--stroke);            /* 2px solid #1e1e1e */
    font: 700 1rem/1.1 var(--font);
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    text-decoration: none;
    background-color: var(--bg, #ffffff);
    color: var(--fg, var(--ink));
    
    /* Physical Vinyl Die-Cut + Drop Shadow */
    box-shadow: var(--die), var(--drop); /* 0 0 0 4px #fff, 0 6px 0 2px rgb(0 0 0 / .45) */
    
    /* Tactile Springs */
    transition: 
      transform 0.16s var(--spring), 
      box-shadow 0.16s var(--ease), 
      background-color 0.2s var(--ease);
  }

  /* Hover Lift & Tilt */
  .btn:hover {
    transform: translateY(-2px) rotate(-1.5deg);
  }

  /* Pressed Depress */
  .btn:active {
    transform: translateY(3px);
    box-shadow: var(--die), 0 2px 0 2px rgb(0 0 0 / .45);
  }
  ```
- **Button Variants**:
  - **Primary / Filled** (`.btn--filled`): `--bg: var(--cta) (#196bfe); --fg: #ffffff;`
  - **Ink Dark** (`.btn--ink`): `--bg: var(--ink) (#1e1e1e); --fg: #ffffff;`
  - **Tonal Pastel** (`.btn--tonal`): `--bg: var(--p-blue) (#c3ecf6); --fg: var(--ink);`
  - **Outlined White** (`.btn--outlined`): `--bg: #ffffff; --fg: var(--ink);`
  - **Ghost** (`.btn--ghost`): `--bg: transparent; --fg: var(--ink); box-shadow: none;` (Hover: `background: rgba(0,0,0,0.05); transform: none;`)
  - **Text Action** (`.btn--text`): Borderless, shadowless, padding `0 12px`, underline on hover.
  - **Danger** (`.btn--danger`): `--bg: var(--danger) (#b3261e); --fg: #ffffff;`
- **Button Sizing Scale**:
  - Small (`.btn--small`): `min-height: 44px; padding: 0 18px; font-size: 0.9375rem;`
  - Regular (Default): `min-height: 52px; padding: 0 24px; font-size: 1.0rem;`
  - Large (`.btn--lg`): `min-height: 58px; padding: 0 30px; font-size: 1.0625rem;`
  - Block (`.btn--block`): `width: 100%;`

### 6.3 3D Flip Bento Cards (`.flip`, `.face`)
Interactive challenge/theme bento boxes with true 3D flip physics:
- **Perspective Setup**:
  ```css
  .flip {
    perspective: 1600px;
    cursor: pointer;
  }
  .flip .faces {
    display: grid;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.7s var(--spring);
  }
  .flip.on .faces {
    transform: rotateY(180deg);
  }
  ```
- **Front Face** (`.face.front`):
  - Background: Color-coded sticker hue (`--bg-c`)
  - Border: `2px solid var(--ink)`
  - Border Radius: `var(--radius-l)` (28px)
  - Padding: `clamp(22px, 2.4vw, 36px)`
  - `backface-visibility: hidden;`
  - Stamp: 84px circular white icon badge with `2px solid var(--ink)`.
- **Back Face** (`.face.back`):
  - Background: `--ink` (`#1e1e1e`) with `--on-night` (`#e8eaed`) typography.
  - Border: `2px solid var(--ink)`, Border Radius `28px`.
  - Transform: `rotateY(180deg);`
  - `backface-visibility: hidden;`
- **Trigger Pill** (`.turn`): Capsule button, `font: 700 0.9375rem/1`, padding `12px 16px`, background `#ffffff`, border `2px solid var(--ink)`. Hover: `transform: rotate(-3deg) scale(1.04);`

### 6.4 Pinned Hero Update Ticket (`.hero-news`)
A punched event announcement ticket pinned directly to the hero section:
- **Geometry & Metaphor**:
  - Tilted at resting angle: `transform: rotate(-3deg);`
  - Background: `--t-yellow` (`#ffd427`), color `--ink`.
  - Border: `2px solid var(--ink)`, radius `26px`.
  - Shadow: `var(--die), 0 14px 0 -2px rgb(0 0 0 / .45)`.
- **Ticket Cutouts**:
  - Circular punched side-notches via `::before` and `::after`:
    `26px x 26px`, `border-radius: 50%`, background `var(--night)` (`#1f1f1f`), border `2px solid var(--ink)`.
- **Micro-Interaction**:
  - Hover: Untilts to `transform: rotate(0) scale(1.03);`
  - Integrated 46px circular arrow badge translates right `translateX(6px)` on hover.
  - Idle Attention Nudge: Shakes periodically every 7 seconds via `@keyframes hero-news-nudge`.

### 6.5 Interactive Timeline / Agenda & Scrubber (`.clock`, `.blocks`, `.scrub`)
- **Large Digital Readout**: `.clock` font `500 clamp(64px, 10vw, 160px)/0.9 var(--font-mono); color: var(--t-yellow); tabular-nums`.
- **Timeline Lane**: `.blocks` 96px height strip, background `--night-2` (`#262626`), border `2px solid #5f6368`, border-radius `18px`.
- **Active Event Block** (`.blk.on`): `filter: none; box-shadow: inset 0 0 0 4px #ffffff;`
- **Scrubber Knob**: Sits inside interactive slider lane (`.scrub`); `--t-yellow` capsule pill (`60px x 38px`), border `2px solid var(--ink)`, kiss-cut die outline.

### 6.6 Team & Squad Cards (`.team-card`, `.seats`)
- **Surface**: Solid `#ffffff`, border `2px solid var(--ink)`, border radius `28px`, padding `clamp(20px, 2.4vw, 32px)`.
- **Open Status Variant** (`.team-card--open`):
  - Border: `2px solid var(--ok)` (`#188038`)
  - Accent Ring: `box-shadow: inset 0 0 0 2px var(--ok);`
- **Seat Availability Circles** (`.seats__dots i`):
  - Filled seat: `22px x 22px` circle, background `--ink`, border `2px solid var(--ink)`.
  - Open vacant seat: `border: 2px dashed #8a9099; background: #ffffff;`
  - Next candidate seat: `border: 2px solid var(--ok); background: var(--p-green);`

### 6.7 Filter Chips (`.chip-filter`)
- **Geometry**: Min-height `44px`, padding `0 16px`, pill radius (`999px`), background `#ffffff`, border `1.5px solid var(--ink)`, font `500 0.8125rem var(--font-mono)`.
- **States**:
  - Hover: `background: var(--p-blue) (#c3ecf6);`
  - Checked / Active: `background: var(--ink); color: #ffffff;`

### 6.8 Morphing Accordion / FAQ (`.qa details`, `.qa summary`)
- **Layout**: Two columns (`0.8fr 1.4fr`) with sticky category heading on left.
- **Row Separation**: `border-top: 2px solid var(--ink);` with final item `border-bottom: 2px solid var(--ink);`
- **Summary Header**: Min-height `64px`, padding `18px 0`, font `700 clamp(1.0625rem, 1rem + 0.45vw, 1.375rem)/1.25`.
- **Morphing Icon Mechanism** (`summary::after`):
  - Closed state: `34px x 34px` circle, border `2px solid var(--ink)`, background `--p-yellow` (`#ffe7a5`). Crossed plus drawn via two 14px x 2px linear gradients.
  - Open state (`details[open] summary::after`):
    `transform: rotate(135deg); background-color: var(--t-pink) (#ff7daf);`
    *Smoothly morphs from a yellow `+` to a bubblegum pink `×`.*

### 6.9 Forms, Fields & Switches
- **Container** (`.field`): Vertical flex column, 6px gap, font-weight 600 for labels.
- **Text Inputs & Textareas**:
  - `min-height: 52px; padding: 12px 16px; border: 2px solid var(--ink); border-radius: var(--radius-s) (14px); background: #ffffff; color: var(--ink);`
  - Focus state: `outline: 3px solid var(--focus) (#1558d6); outline-offset: 2px;`
  - Error state (`.field--error`): `border-color: var(--danger) (#b3261e) !important;`
- **Tactile Toggle Switch** (`input.switch`):
  - Pill Track: `width: 52px; height: 32px; border: 2px solid var(--ink); border-radius: 999px; background: var(--surface-2);`
  - Circular Thumb: `16px x 16px` circle (`border-radius: 50%`), transitions via `transform 200ms ease`.
  - Checked state: `background: var(--primary); border-color: var(--primary);` with thumb translating `translateX(20px)`.

### 6.10 Mobile Bottom Quick-Action Dock (`.dock`)
- **Trigger**: Hidden on desktop; displays only at `@media (max-width: 719px)`.
- **Geometry**: `position: fixed; left: 0; right: 0; bottom: 0; z-index: 50; padding: 10px 16px calc(10px + env(safe-area-inset-bottom)); background: rgb(31 31 31 / 0.97); border-top: 2px solid #3a3a3a; backdrop-filter: blur(8px);`
- **Dynamic Scroll & Form Ducking**:
  - Hidden on initial hero entrance: `transform: translateY(110%);`
  - Slides in when scrolled past hero: `.hero-passed .dock { transform: none; transition: transform 0.25s var(--ease); }`
  - **Auto-duck on Virtual Keyboard**: Automatically retreats offscreen when typing:
    ```css
    body:has(input:focus, textarea:focus, select:focus) .dock {
      transform: translateY(110%);
    }
    ```

### 6.11 Global Footer (`.foot`)
- **Top Edge**: Continuous 4-color Google rainbow strip:
  ```css
  .foot {
    border-top: 4px solid transparent;
    border-image: var(--u4) 1;
  }
  ```
- **Structure**: 3-column layout (`1.2fr 1.4fr 1fr`), gap `32px 40px`, max-width `1240px`.
- **Pill Channels** (`.channels a`): Capsule pills, min-height `44px`, padding `0 16px`, border `1.5px solid var(--on-night)`. Hover: `transform: translateY(-2px); background: #ffffff; color: var(--ink);`

---

## 7. Borders, Shadows and Surface Treatments

### 7.1 Border Radius Scale
```css
:root {
  --radius-s:    14px;  /* Inputs, small alerts, inner chips */
  --radius:      22px;  /* Standard content cards, modals */
  --radius-l:    28px;  /* Bento boxes, team cards, large containers */
  --radius-xl:   28px;  /* Section wrappers */
  --radius-full: 999px; /* Buttons, badges, tabs, filter pills */
}
```

### 7.2 The Physical Sticker Stroke & Shadow System
Every interactive element adheres to strict physical tokens:
```css
:root {
  /* 2px Solid Dark Ink Perimeter Stroke */
  --stroke: 2px solid var(--ink);

  /* 4px White Kiss-Cut Die Perimeter (Simulates vinyl sticker border) */
  --die: 0 0 0 4px #ffffff;

  /* 6px Hard Drop Shadow (Unblurred, offset down) */
  --drop: 0 6px 0 2px rgb(0 0 0 / 0.45);

  /* Lifted Card Shadow (Reduced blur, elevated offset) */
  --lift: 0 10px 0 -2px rgb(0 0 0 / 0.35);

  /* Pop State Shadow */
  --pop: 0 6px 0 -1px var(--ink);
}
```

### 7.3 Surface Treatment Guidelines
- **No Soft Diffuse Shadows**: Standard web shadows like `box-shadow: 0 10px 25px rgba(0,0,0,0.1)` are strictly avoided. All shadows have 0px blur radius with crisp offsets.
- **Kiss-Cut White Boundary**: When placing dark, saturated, or colored buttons on colored backgrounds, the `--die` outline prevents visual color contamination.

---

## 8. Interactive States & Motion Physics

### 8.1 State Transitions
| State | Visual Treatment | CSS Property / Transform |
|---|---|---|
| **Resting** | Slight hand tilt angle, full drop shadow | `transform: rotate(var(--deg, -0.6deg)); box-shadow: var(--die), var(--drop);` |
| **Hover** | Element lifts vertically and tilts into dynamic counter-rotation | `transform: translateY(-2px) rotate(-1.5deg);` |
| **Active / Pressed**| Element physically pushes down, shadow collapses | `transform: translateY(3px); box-shadow: var(--die), 0 2px 0 2px rgb(0 0 0 / 0.45);` |
| **Focus-Visible** | High-contrast accessible focus ring | `outline: 3px solid var(--focus); outline-offset: 2px;` |
| **Disabled** | Dimmed, flattened, unreactive | `opacity: 0.45; cursor: not-allowed; pointer-events: none; box-shadow: none; transform: none;` |

### 8.2 Spring Physics & Easing Functions
```css
:root {
  /* Primary Tactile Spring (Exaggerated overshoot) */
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --spring-d: 420ms;

  /* Fast Snappy Spring (Buttons, small micro-interactions) */
  --spring-fast: cubic-bezier(0.34, 1.56, 0.64, 1);
  --spring-fast-d: 200ms;

  /* Smooth Standard Easing */
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --dur-1: 120ms;
  --dur-2: 200ms;
  --dur-3: 320ms;
  --dur-4: 600ms;
}
```

---

## 9. Keyframes & Animation Inventory

All animations are verified directly from stylesheet extraction:

```css
/* 1. Dropdown Menu Entrance */
@keyframes menu-in {
  from { opacity: 0; transform: scale(0.92) translateY(-6px); }
  to   { opacity: 1; transform: none; }
}

/* 2. Badge & Sticker Pop-In */
@keyframes pop {
  0%   { transform: scale(0.4) rotate(-12deg); opacity: 0; }
  100% { transform: none; opacity: 1; }
}

/* 3. Hero News Ticket Periodic Nudge */
@keyframes hero-news-nudge {
  0%, 88%, 100% { transform: rotate(-3deg); }
  91%           { transform: rotate(-1deg) scale(1.02); }
  94%           { transform: rotate(-5deg) scale(1.02); }
  97%           { transform: rotate(-2deg); }
}

/* 4. Ambient Bob Floating */
@keyframes bob {
  to { transform: translateY(-6px); }
}

/* 5. Tab / Pane Crossfade */
@keyframes swap {
  0%   { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: none; }
}

/* 6. Join Code 3D Tile Flip */
@keyframes flipx {
  0%   { transform: rotateX(90deg) scale(0.8); }
  100% { transform: none; }
}

/* 7. Live Pulse Beacon (Status Dots) */
@keyframes ping {
  70%  { box-shadow: 0 0 0 8px rgb(234 67 53 / 0); }
  100% { box-shadow: 0 0 0 0 rgb(234 67 53 / 0); }
}

/* 8. AI Processing Wobble */
@keyframes wobble {
  to { border-radius: 50%; transform: rotate(90deg) scale(0.8); }
}

/* 9. Skeleton Loading Shimmer */
@keyframes shimmer {
  to { background-position: -200% 0; }
}

/* 10. Ambient Physics Sticker Drift */
@keyframes drift {
  from { transform: translateY(80px) rotate(var(--r0, -8deg)); }
  to   { transform: translateY(-120px) rotate(var(--r1, 14deg)); }
}

/* 11. Toast Notifications */
@keyframes toast-in {
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}
@keyframes toast-out {
  from { transform: translateY(0); opacity: 1; }
  to   { transform: translateY(100%); opacity: 0; }
}

/* Accessibility: Full Reduced Motion Override */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 10. Responsive Breakpoint Matrix & Layout Adaptation

The design scales smoothly between a dense mobile phone experience and wide 1440px desktop workstations through eight documented thresholds:

| Breakpoint | Target Surface | Key Layout Adaptations |
|---|---|---|
| **`>= 1200px`** | Large Desktop | Bento cards maintain expansive 18px gaps; Hero news ticket spans `clamp(420px, 36vw, 620px)`. |
| **`<= 1100px`** | Small Desktop / Tablet Landscape | Hero news ticket reorders above CTA buttons (`order: -1`). Bento 4-span layout collapses into stacked blocks. FAQ, Voting, and Detail sections collapse from 2 columns to 1 column. |
| **`>= 960px`** | Standard Desktop | Appbar switches to 3-column inline layout (`--appbar-h: 68px`). Sub-brand campus text reveals (`display: block`). Split prose panels switch to 2 columns (`2fr 1fr`). |
| **`<= 899px`** | Tablet Portrait | Finder filters become non-sticky; filter chips switch to horizontally scrollable swipe row (`overflow-x: auto; flex-wrap: nowrap`). |
| **`>= 840px`** | Tablet Landscape | Profile layout becomes 2 columns (`300px minmax(0, 680px)`), with sticky sidebar. Team detail view switches to `2fr 1fr`. |
| **`<= 719px / 720px`** | Standard Mobile Phone | **Mobile Bottom Dock (`.dock`) activates**. Hero H1 title scales down to `clamp(42px, 12.6vw, 72px)`. 3D Flip Bento cards collapse to single-column full-width tiles (`grid-column: 1 / -1`). Comparison bars and now/next strips collapse vertically. |
| **`<= 640px`** | Compact Mobile | Door cards and match action buttons expand to 100% full width. All grid columns reset to `minmax(0, 1fr)`. |
| **`<= 420px`** | Small Mobile Phone | Top appbar "Register" CTA is hidden (`.app-bar__signup { display: none; }`) to prevent header clipping. |

---

## 11. Iconography and Visual Asset Treatment

### 11.1 Icon Specifications
- **Style**: Geometric outline SVGs (Google Material Symbols / Lucide style).
- **Stroke**: Consistent `2px` stroke weight, matching `--stroke`.
- **Corner Caps**: `stroke-linecap="round"; stroke-linejoin="round";`
- **Sizing Tokens**:
  - `16px x 16px`: Micro badges, inline text arrows.
  - `20px x 20px`: Form input icons, chip indicators.
  - `24px x 24px`: Standard button icons, navigation links.
  - `32px x 32px`: Card header icons.
  - `84px x 84px`: Stamp badge circles inside 3D flip card front faces.

### 11.2 Circular Stamp Containers
Prominent illustrations and challenge icons are housed inside physical circular stamp plates:
```css
.stamp-icon {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid var(--ink);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 0 0 var(--ink);
}
```

### 11.3 Image Treatments
- **Border Radius**: Match card radii (`var(--radius)` or `var(--radius-l)`).
- **Perimeter**: Always enclosed in a crisp `2px solid var(--ink)`.
- **Filters**: No desaturation or colorization filters; images maintain crisp, punchy contrast.

---

## 12. Implementation Guidelines & Reusable Rules

To apply this design system to another website or application, follow these concrete rules:

### Rule 1: Import the CSS Tokens Exactly
Copy the complete `:root` token block (Section 2 & 7) into your global stylesheet. Ensure you establish `--font` and `--font-mono`.

### Rule 2: Apply the Technical Canvas Background
Set the base body background to the 40px paper grid, and use the 40px ink grid for prominent dark sections (hero, appbar, dark footers):
```css
/* Light page */
body {
  background-color: var(--paper);
  background-image: 
    linear-gradient(to right, var(--paper-grid) 1px, transparent 1px),
    linear-gradient(to bottom, var(--paper-grid) 1px, transparent 1px);
  background-size: 40px 40px;
  color: var(--ink);
  font-family: var(--font);
}
```

### Rule 3: The 4-Part Sticker Formula
Every button, card, and interactive tag must follow the 4-part sticker formula:
1. Solid vibrant background color (`--cta`, `--white`, `--t-blue`, etc.).
2. Dark 2px ink stroke: `border: 2px solid #1e1e1e;`
3. White kiss-cut border: `0 0 0 4px #ffffff` inside `box-shadow`.
4. Hard drop shadow: `0 6px 0 2px rgb(0 0 0 / 0.45)` inside `box-shadow`.

### Rule 4: Resting Rotation & Spring Lift
Give key cards a slight resting tilt (`transform: rotate(-0.5deg)` or `rotate(1deg)`). On hover, transition with `--spring` (`cubic-bezier(0.34, 1.56, 0.64, 1)`):
```css
.card {
  border: var(--stroke);
  border-radius: var(--radius);
  background: var(--white);
  transform: rotate(var(--resting-deg, -0.6deg));
  transition: transform 0.2s var(--spring), box-shadow 0.2s var(--ease);
}
.card:hover {
  transform: translateY(-3px) rotate(calc(var(--resting-deg, -0.6deg) - 1deg));
  box-shadow: var(--lift);
}
```

### Rule 5: Accessible Monospace Kickers
Precede major headings with a monospace eyebrow bracket:
```html
<p class="kicker"><span>Track 01</span></p>
<h2 class="h2">Artificial Intelligence</h2>
```
```css
.kicker {
  font-family: var(--font-mono);
  font-size: 0.9375rem;
  color: var(--ink-2);
  display: flex;
  align-items: center;
  gap: 6px;
}
.kicker::before {
  content: "{";
  font-family: var(--font);
  font-size: 1.8em;
  line-height: 1;
  color: var(--blue);
}
```

### Rule 6: Google 4-Color Accents
Use `--u4` sparingly for maximum impact:
- Underline a key word in the hero title.
- Apply as a 4px top border along the footer.
- Use as an active tab indicator bar.

### Rule 7: Avoid These Anti-Patterns
- ❌ **Do NOT use blurred soft drop shadows** (`box-shadow: 0 10px 30px rgba(0,0,0,0.1)`). All shadows must have zero blur radius.
- ❌ **Do NOT change border-radius on hover**. Shapes never change geometry; they only lift and tilt.
- ❌ **Do NOT use low-contrast text**. Maintain `--ink` (`#1e1e1e`) or `--ink-2` (`#4a4f55`) on light surfaces, and `--on-night` (`#e8eaed`) on dark surfaces.
- ❌ **Do NOT use glassmorphism** with low opacity. Surfaces are solid, opaque physical vinyl.

---

## 13. Practical Component HTML & CSS Reference Snippets

### Snippet A: Primary Interactive Button
```html
<button class="btn btn--filled">
  <span>Register Team</span>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
</button>
```

### Snippet B: Bento Sticker Card
```html
<div class="bento-card bento-card--cyan">
  <div class="stamp-icon">
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1e1e1e" stroke-width="2">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  </div>
  <p class="kicker"><span>Theme 01</span></p>
  <h3>FinTech Innovations</h3>
  <p class="desc">Create decentralized solutions empowering local businesses.</p>
  <button class="turn-btn">Flip Details &rarr;</button>
</div>
```

### Snippet C: FAQ Collapsible Row
```html
<details class="qa-item">
  <summary>Who can participate in the hackathon?</summary>
  <div class="qa-content">
    <p>Anyone over 18 years old including developers, designers, product managers, and entrepreneurs.</p>
  </div>
</details>
```
```css
.qa-item {
  border-top: 2px solid var(--ink);
}
.qa-item:last-of-type {
  border-bottom: 2px solid var(--ink);
}
.qa-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  padding: 18px 0;
  font-weight: 700;
  font-size: 1.1875rem;
  cursor: pointer;
  list-style: none;
}
.qa-item summary::-webkit-details-marker {
  display: none;
}
.qa-item summary::after {
  content: "";
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid var(--ink);
  background-color: var(--p-yellow);
  background-image: 
    linear-gradient(var(--ink), var(--ink)),
    linear-gradient(var(--ink), var(--ink));
  background-size: 14px 2px, 2px 14px;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.3s var(--spring), background-color 0.2s var(--ease);
}
.qa-item[open] summary::after {
  transform: rotate(135deg);
  background-color: var(--t-pink);
}
.qa-content {
  padding-bottom: 24px;
  color: var(--ink-2);
  line-height: 1.5;
}
```
