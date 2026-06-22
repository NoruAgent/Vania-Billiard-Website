# Vania Billiard — Website

> Spesialis meja billiard lokal, custom order, dan aksesoris billiard lengkap. Workshop Ambarawa, Jawa Tengah. Berdiri sejak 2014.

Premium company profile + catalog + lead-gen + education + trust platform for Vania Billiard. Built with Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Stack

- **Framework:** Next.js 16.2 (App Router, Turbopack, RSC)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first @theme)
- **Fonts:** Playfair Display + Inter + IBM Plex Mono
- **Deploy:** Vercel
- **Domain:** vaniabilliard.com

## Brand

- **Colors:** bg #080808 / surface #141414 / copper accent #C86A36 / text #F8F8F8
- **Typography:** Playfair Display (display serif) + Inter (body sans) + IBM Plex Mono (mono labels)
- **Layout:** 12-col grid, generous whitespace, dark premium aesthetic

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, meta
│   ├── page.tsx            # Homepage (current)
│   └── globals.css         # Tailwind v4 @theme
├── components/
│   ├── layout/             # Navbar, MobileMenu, FloatingWA, Footer
│   ├── sections/           # Hero, TrustBadges, FeaturedTables, etc.
│   └── ui/                 # Button, ProductCard, SectionHeading, SocialIcon
├── data/
│   ├── products.ts         # Abimanyu lineup (10 products + 1 custom)
│   ├── accessories.ts      # 10 categories
│   ├── articles.ts         # 8 seed articles
│   ├── faqs.ts             # 10 FAQ entries
│   └── nav.ts              # Main nav, footer nav, marketplace, social
└── lib/
    └── whatsapp.ts         # WA URL builders
public/
└── images/                 # AI-generated product/hero/gallery/article images
    ├── products/
    ├── hero/
    ├── workshop/
    ├── gallery/
    └── articles/
```

## Run Locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # Production build
npm start            # Run production build
```

## Image Strategy

All product, workshop, gallery, and article photos are AI-generated using [Pollinations](https://image.pollinations.ai) (Flux model). For production, replace with real product photography:
- Drop replacement JPEGs into `public/images/{products,hero,workshop,gallery,articles}/`
- Keep same filenames to avoid code changes
- Target: 1024×768 minimum for products, 1920×1080 for hero

## WhatsApp

- **Meja (tables):** +62 822-4154-5326 → `wa.me/6282241545326`
- **Aksesoris (accessories):** +62 851-8230-6565 → `wa.me/6285182306565`

Both numbers are pre-filled in the Floating WhatsApp component.

## Roadmap

- [ ] Phase 3-7: /meja-billiard, /meja-billiard/[slug], /aksesoris, /simulator, /galeri, /artikel, /artikel/[slug], /tentang, /kontak, /faq
- [ ] Real product photography
- [ ] Room simulator interactive page
- [ ] Article detail pages
- [ ] ERP sync for product catalog (Phase 8)
- [ ] EN/ID bilingual

---

Built with care. © 2026 Vania Billiard · Workshop Ambarawa, Jawa Tengah.
