# Luvimes Website Pivot — Design Spec

## Overview

Pivot the existing Luagro e-commerce site into a **Luvimes company website** with **Luagro as a subdomain project**. One codebase, one Netlify deployment, two experiences served via Next.js middleware hostname detection.

- `luvimes.com` — minimal company gateway with landing page, about, and blog
- `luagro.luvimes.com` — the existing Luagro farm-to-table grocery platform, unchanged

## Architecture

### Routing Strategy

Next.js middleware inspects the `Host` header and rewrites requests to the appropriate route group:

- `luvimes.com` → `(luvimes)/` route group
- `luagro.luvimes.com` → `(luagro)/` route group
- `localhost` → Luvimes by default, `?site=luagro` query param for Luagro

### File Structure

```
app/
  (luvimes)/                  # Route group for luvimes.com
    page.tsx                  # Landing page
    about/page.tsx            # Company about page
    blog/page.tsx             # Company blog
    layout.tsx                # Luvimes layout (nav, footer, clean/modern theme)
  (luagro)/                   # Route group for luagro.luvimes.com
    page.tsx                  # Existing home page (from app/page.tsx)
    shop/page.tsx             # Existing shop (from app/shop/page.tsx)
    services/page.tsx         # Existing services (from app/services/page.tsx)
    blog/page.tsx             # Existing blog (from app/blog/page.tsx)
    about/page.tsx            # Existing about (from app/about/page.tsx)
    layout.tsx                # Luagro layout (existing nav/footer, organic theme)
  layout.tsx                  # Root layout (shared fonts, base metadata)
middleware.ts                 # Hostname detection → rewrites
```

### Middleware Implementation

```typescript
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Local development: use ?site=luagro query param
  if (hostname.startsWith('localhost')) {
    const site = url.searchParams.get('site');
    if (site === 'luagro') {
      url.pathname = `/(luagro)${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    url.pathname = `/(luvimes)${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Production: hostname-based routing
  if (hostname.startsWith('luagro.')) {
    url.pathname = `/(luagro)${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Default: luvimes.com
  url.pathname = `/(luvimes)${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next|api|images|favicon|.*\\..*).*)'],
};
```

Note: Route groups (parenthesized folders) are transparent to the URL — they don't appear in the browser URL bar. The middleware performs an internal rewrite to the correct route group based on hostname.

No changes to `next.config.ts` are required. Middleware handles all routing.

### Local Development Considerations

- **Luagro nav links in local dev:** When using `?site=luagro`, clicking internal nav links (e.g., `/about`) will lose the query param, causing a fallback to Luvimes. This is a known limitation of the local dev approach. In production, subdomain routing handles this seamlessly. For local development, you can optionally set up `/etc/hosts` entries (`127.0.0.1 luagro.localhost`) to test with real hostnames.
- **"Visit Luagro" link on Luvimes landing page:** In production this links to `luagro.luvimes.com`. In local dev, this URL won't resolve. Use an environment variable (`NEXT_PUBLIC_LUAGRO_URL`) that defaults to `luagro.luvimes.com` in production and `localhost:3000?site=luagro` in development.

### File Migration Checklist

| Current Location | New Location | Notes |
|---|---|---|
| `app/page.tsx` | `app/(luagro)/page.tsx` | Move as-is |
| `app/shop/page.tsx` | `app/(luagro)/shop/page.tsx` | Move as-is |
| `app/services/page.tsx` | `app/(luagro)/services/page.tsx` | Move as-is |
| `app/blog/page.tsx` | `app/(luagro)/blog/page.tsx` | Move as-is |
| `app/about/page.tsx` | `app/(luagro)/about/page.tsx` | Move as-is |
| `app/layout.tsx` | `app/layout.tsx` | Stays — remove `title`/`description` metadata (delegated to route group layouts). Currently has no Navbar/Footer imports — just fonts and `{children}`. |
| `app/globals.css` | `app/globals.css` | Stays — shared Tailwind directives and base styles |
| — | `app/(luagro)/layout.tsx` | New — wraps Luagro pages with existing Navbar/Footer |
| — | `app/(luvimes)/layout.tsx` | New — wraps Luvimes pages with Luvimes Navbar/Footer |
| — | `app/(luvimes)/page.tsx` | New — Luvimes landing page |
| — | `app/(luvimes)/about/page.tsx` | New — Luvimes about page |
| — | `app/(luvimes)/blog/page.tsx` | New — Luvimes blog page |
| — | `middleware.ts` | New — hostname detection and rewrites |

### Route Group Layouts

**Current state:** The root `app/layout.tsx` only loads fonts and renders `{children}`. Navbar and Footer are imported directly by each page file (e.g., `app/page.tsx`, `app/about/page.tsx`, etc.) — not at the layout level.

**Luagro layout** (`app/(luagro)/layout.tsx`):
```tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Luagro — Fresh Made Easy",
  description: "Shopping made easy",
};

export default function LuagroLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

After moving pages into this layout, remove the Navbar/Footer imports from each individual Luagro page file.

**Luvimes layout** (`app/(luvimes)/layout.tsx`):
```tsx
import LuvimesNavbar from "@/components/luvimes/Navbar";
import LuvimesFooter from "@/components/luvimes/Footer";

export const metadata = {
  title: "Luvimes — Technology Company",
  description: "We build digital products that solve real problems",
};

export default function LuvimesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LuvimesNavbar />
      <main className="pt-16">{children}</main>
      <LuvimesFooter />
    </>
  );
}
```

`pt-16` accounts for the fixed navbar height.

### Error Pages

Each route group should have a `not-found.tsx` that matches its brand. The middleware rewrites all paths into a route group, so a missing page under `(luvimes)` will show the Luvimes layout and a missing page under `(luagro)` will show the Luagro layout — the 404 page just needs brand-appropriate content.

## Luvimes Pages

### Landing Page (luvimes.com)

Structure (top to bottom):

1. **Navbar** — text wordmark "LUVIMES", navigation links: About, Blog. "Contact Us" link scrolls to footer. Fixed header with backdrop blur. Clean & Modern theme.
2. **Hero section** — bold headline positioning Luvimes as a tech company, subtitle about building products that solve real problems, CTA button scrolling to the project section.
3. **Project card section** — soft sage background (`#eef4ea`), single prominent card for Luagro featuring: Luagro logo, description ("Farm-to-table fresh produce delivery"), a "LIVE" badge, and a "Visit Luagro" link pointing to `luagro.luvimes.com`.
4. **About blurb** — brief company mission/vision paragraph.
5. **Footer** — contact info, social links, newsletter signup. Dark sage green background.

No separate Contact page — "Contact" in the nav scrolls to the footer (same pattern as the existing Luagro site).

### About Page (luvimes.com/about)

- Company story, mission, team vision
- What Luvimes builds and why
- Text-focused, simple layout

### Blog Page (luvimes.com/blog)

- Company-level blog for announcements, tech posts, company updates
- Blog data is hardcoded in the page file (same approach as the existing Luagro blog)
- Blog card layout is built fresh in the Luvimes blog page using the Luvimes color palette — no shared component extraction needed. The structure can mirror Luagro's blog cards but is independently styled.
- Uses the Clean & Modern theme

## Luvimes Brand Identity

### Color Palette

| Role             | Value     | Description          |
|------------------|-----------|----------------------|
| Primary          | `#3a5a34` | Muted forest green   |
| Secondary        | `#5a8a52` | Sage                 |
| Background       | `#f8faf6` | Soft off-white       |
| Accent surface   | `#eef4ea` | Light sage           |
| Accent pop       | `#97C93C` | Lime green (shared with Luagro) |
| Text             | `#1a1a1a` | Near black           |

### Typography

- Text wordmark "LUVIMES" for now (logo to be created later)
- Continue using Geist Sans / Geist Mono font family (shared with Luagro, loaded in root layout)

### Visual Direction

Clean & Modern — light backgrounds, muted sage greens, clean typography. Professional but approachable. Shared green color family with Luagro feels natural without being "farm-y."

## Styling Strategy

`app/globals.css` remains shared at the root — it contains Tailwind directives, base resets, and utility classes used by both sites.

Theme differentiation is handled via:
- Luvimes components use the Luvimes color palette directly (Tailwind classes with custom values or inline styles)
- Luagro components continue using their existing color values
- No CSS variable theming layer needed — the two sites have separate component trees with separate layouts

### Metadata

Each route group layout sets its own metadata:

- **Root layout** (`app/layout.tsx`): Sets `lang="en"`, loads fonts. No title/description (delegated to route groups).
- **Luvimes layout**: `title: "Luvimes — Technology Company"`, `description: "We build digital products that solve real problems"`
- **Luagro layout**: `title: "Luagro — Fresh Made Easy"`, `description: "Shopping made easy"` (existing)

### Favicon

Both sites share the existing favicon for now. Per-subdomain favicons are out of scope (can be added later via route group metadata).

## Luagro Subdomain Changes

Minimal changes to the existing Luagro experience:

1. **Navbar** — add a small "A Luvimes Project" text/badge near the existing Luagro logo (subtle, not distracting)
2. **Footer** — add a "A project by Luvimes" link pointing back to `luvimes.com`
3. **All existing pages, components, and functionality remain unchanged** — shop, services, blog, about, product cards, testimonials, FAQ, ads slider, promo slider, category tabs, etc.
4. **No visual/branding changes** — Luagro keeps its emerald green theme (`#4B6F44` primary, `#97C93C` accent, `#FDFBF1` background)

## Deployment & Subdomain Setup (Netlify)

### Already in Place

- `netlify.toml` with build command and `@netlify/plugin-nextjs` plugin — already exists in the repo
- `@netlify/plugin-nextjs` — already installed as a dependency

### Steps

1. **Deploy to Netlify:**
   - Connect the Git repository to Netlify
   - Netlify auto-detects Next.js and builds using the existing `netlify.toml`

2. **Link primary domain:**
   - Netlify dashboard → Site settings → Domain management
   - Add custom domain: `luvimes.com`
   - Netlify provides nameservers or DNS records

3. **Add subdomain:**
   - In the same Domain management section
   - Add domain alias: `luagro.luvimes.com`

4. **DNS configuration** at your domain registrar:
   - Option A (recommended): Point nameservers to Netlify's nameservers
   - Option B: Add records manually:
     - `A` or `ALIAS` record: `luvimes.com` → Netlify load balancer IP
     - `CNAME` record: `luagro.luvimes.com` → `your-site.netlify.app`

5. **SSL:** Netlify provisions free SSL certificates automatically for both domains.

### Local Development

- `localhost:3000` → Luvimes experience (default)
- `localhost:3000?site=luagro` → Luagro experience
- Middleware handles the query param fallback for localhost

## Components

### Existing Components (stay in `components/`, used by Luagro pages)

All existing components remain at their current location in `components/`. They are used exclusively by Luagro pages.

- `components/Navbar.tsx` — Luagro navbar (add small "A Luvimes Project" badge)
- `components/Hero.tsx` — Luagro hero
- `components/Footer.tsx` — Luagro footer (add "A project by Luvimes" link)
- `components/ProductCard.tsx`
- `components/FeaturedProducts.tsx`
- `components/TestimonialSlider.tsx`
- `components/AdsSlider.tsx`
- `components/PromoSlider.tsx`
- `components/FAQ.tsx`
- `components/CategoryTabs.tsx`
- `components/CategoryCard.tsx`

### New Components (for Luvimes pages)

- `components/luvimes/Navbar.tsx` — Luvimes navigation (text wordmark, About/Blog/Contact links)
- `components/luvimes/Footer.tsx` — Luvimes footer (contact, social, newsletter)
- `components/luvimes/Hero.tsx` — Luvimes hero section
- `components/luvimes/ProjectCard.tsx` — Featured project card (for Luagro)

## Out of Scope

- Luvimes logo design (text wordmark for now)
- Luagro visual redesign (stays as-is)
- E-commerce functionality changes
- Blog content creation
- Domain purchase (already owned)
- Per-subdomain favicons
