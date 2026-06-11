# Fancy Water

Single-page Spanish-language storefront (index.html) for Fancy Water, official VOL:TENA distributor in the Americas. Stripe checkout + Vercel serverless functions in `api/`.

## Design Context

Before any UI/design work, read:

- **PRODUCT.md** — strategy: brand register, mixed B2B/consumer audience, "completed Stripe purchases" as the success metric, clinical-luxury personality, anti-references (gray-market pharma shops, generic beauty e-commerce, template landing pages).
- **DESIGN.md** — visual system: "The Clinical Atelier" north star, paper-and-ink palette with Navy (#2D3147) as the single accent, Playfair Display + Inter, flat-at-rest elevation, pill-shaped interactive elements. Tokens live inline in index.html's `:root`.

Mobile is the primary stage (ad/WhatsApp traffic); GPU-heavy effects are deliberately disabled under 640px — keep it that way.
