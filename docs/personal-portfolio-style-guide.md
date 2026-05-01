# Personal Portfolio Website Style Guide

## Purpose

This portfolio should feel like a high-end architectural studio website translated into a software, AI, machine learning, and design portfolio. The experience should read as editorial, minimal, image-led, and structured.

## Mood

- Minimal
- Architectural
- Editorial
- Futuristic
- Professional
- Slightly experimental
- Premium but readable

## Core Visual Rules

- Use a black page background as the default site canvas.
- Any content that is not placed on its own light surface should render in white text.
- Light editorial spreads may still exist, but they must explicitly define their own background and switch their text back to black.
- Keep all corners sharp.
- Use thin borders throughout the interface.
- Prefer uppercase micro-labels for navigation, categories, and metadata.
- Let imagery and layout provide the drama instead of bright color.
- Keep motion subtle: fades, small scale shifts, and small tracking changes.

## Color Palette

### Primary

- Site background: `#000000`
- Primary text on dark canvas: `#FFFFFF`
- Dark sections / outer frame: `#1C1C1C`
- Light editorial surface: `#FFFFFF`
- Primary text on light surfaces: `#111111`

### Secondary

- Secondary text on dark canvas: `#C8C8C2`
- Muted text on dark canvas: `#9A9A94`
- Secondary text on light surfaces: `#4A4A46`
- Borders on dark canvas: `rgba(255, 255, 255, 0.16)`
- Borders on light surfaces: `#DCDCD8`

### Accent

- Warm sand accent: `#D8D1C2`
- Muted silver accent: `#C9C9C4`
- Optional pale blue gray: `#CAD1D4`

## Typography

### Target fonts

- Headings: `Inter Tight`, fallback `Inter`, `Helvetica Neue`, `Arial`, `sans-serif`
- Body: `Inter`, fallback `Helvetica Neue`, `Arial`, `sans-serif`

### Type rules

- Wordmark: uppercase, bold, small, tight tracking
- Main headings: `40px-72px` desktop, `32px-44px` mobile
- Section labels: `10px-12px`, uppercase, bold
- Body text: `13px-16px`
- Metadata: `10px-12px`, uppercase, muted

## Layout

- Max content width: `1440px`
- Desktop padding: `24px`
- Tablet padding: `18px`
- Mobile padding: `12px`
- Section spacing desktop: `80px`
- Section spacing mobile: `48px`
- Grid gaps: `12px-24px`
- The left edge of major section headlines should align with the left edge of the `AXTOPANI` hero wordmark
- Use the same horizontal inset rhythm for hero and featured sections when they are stacked directly together
- Featured work layouts should prefer a clean `50 / 50` split when the section is built as a single image + text spread
- Treat the black site canvas as the default layer; white sections are exceptions, not the baseline

## Component Direction

- Header uses boxed navigation links with border-only styling.
- Hero leads with one dominant panoramic visual and two smaller preview cards.
- Project cards stay image-first with compact copy beneath.
- Featured project uses a large media block plus a thin metadata table.
- Footer should feel like a studio footer with columns and a final image strip.
- For single featured-work spreads, use one half image and one half text on desktop, not card grids or uneven sidebars

## Image Treatment

- Grayscale-heavy or slightly desaturated
- High contrast with soft highlight overlays
- Thin borders
- Cinematic crops
- Avoid bright startup gradients, cartoons, and generic stock imagery

## Copy Style

- Short, confident, and editorial
- Minimal paragraphs
- Small metadata rows
- Strong labels and concise project summaries
- On black sections, default all unboxed text to white unless a lighter secondary tone is intentionally needed

## Implementation Notes

- Keep the site frontend-only
- Use App Router
- Use reusable components
- Keep data static in `src/data/projects.ts`
- Avoid large radii, playful color, and UI clutter
- Preserve alignment corrections requested during review instead of reintroducing generic container padding
