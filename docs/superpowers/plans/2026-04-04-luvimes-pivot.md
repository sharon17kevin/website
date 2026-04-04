# Luvimes Website Pivot Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Pivot the Luagro e-commerce site into a Luvimes company website with Luagro served as a subdomain via Next.js middleware routing.

**Architecture:** Single Next.js codebase using route groups `(luvimes)` and `(luagro)` with middleware-based hostname detection to serve two distinct experiences. Existing Luagro pages move into the `(luagro)` route group unchanged. New Luvimes pages (landing, about, blog) are built in the `(luvimes)` route group with a clean/modern brand.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Lucide React, Netlify

**Spec:** `docs/superpowers/specs/2026-04-04-luvimes-pivot-design.md`

---

## Chunk 1: Infrastructure — Route Groups, Middleware, Layouts

### Task 1: Create route group directories and move Luagro pages

**Files:**
- Move: `app/page.tsx` → `app/(luagro)/page.tsx`
- Move: `app/about/page.tsx` → `app/(luagro)/about/page.tsx`
- Move: `app/blog/page.tsx` → `app/(luagro)/blog/page.tsx`
- Move: `app/shop/page.tsx` → `app/(luagro)/shop/page.tsx`
- Move: `app/services/page.tsx` → `app/(luagro)/services/page.tsx`

- [ ] **Step 1: Create route group directories**

```bash
mkdir -p app/\(luagro\)/about app/\(luagro\)/blog app/\(luagro\)/shop app/\(luagro\)/services
mkdir -p app/\(luvimes\)/about app/\(luvimes\)/blog
```

- [ ] **Step 2: Move all existing Luagro pages into the route group**

```bash
git mv app/page.tsx app/\(luagro\)/page.tsx
git mv app/about/page.tsx app/\(luagro\)/about/page.tsx
git mv app/blog/page.tsx app/\(luagro\)/blog/page.tsx
git mv app/shop/page.tsx app/\(luagro\)/shop/page.tsx
git mv app/services/page.tsx app/\(luagro\)/services/page.tsx
```

Then remove the now-empty directories:

```bash
rmdir app/about app/blog app/shop app/services
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "refactor: move Luagro pages into (luagro) route group"
```

---

### Task 2: Create the Luagro route group layout

**Files:**
- Create: `app/(luagro)/layout.tsx`
- Modify: `app/(luagro)/page.tsx` — remove Navbar/Footer imports and JSX
- Modify: `app/(luagro)/about/page.tsx` — remove Navbar/Footer imports and JSX
- Modify: `app/(luagro)/blog/page.tsx` — remove Navbar/Footer imports and JSX
- Modify: `app/(luagro)/shop/page.tsx` — remove Navbar/Footer imports and JSX
- Modify: `app/(luagro)/services/page.tsx` — remove Navbar/Footer imports and JSX

- [ ] **Step 1: Create the Luagro layout**

Create `app/(luagro)/layout.tsx`:

```tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Luagro — Fresh Made Easy",
  description: "Shopping made easy",
};

export default function LuagroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Remove Navbar/Footer from `app/(luagro)/page.tsx`**

Remove these imports:
```tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
```

Remove the `<Navbar />` on line 15 and `<Footer />` on line 82. Also remove the wrapping `<div className="min-h-screen">` and `<main>` tags since the layout provides `<main>`. The page should return just the inner content:

```tsx
// Keep all other imports (Hero, CategoryTabs, FeaturedProducts, etc.)

export default function Home() {
  return (
    <>
      <Hero />
      <AdsSlider />
      <CategoryTabs />

      {/* Banner Section from Image */}
      <section className="section-container my-12 md:my-20">
        {/* ... existing banner content unchanged ... */}
      </section>

      <FeaturedProducts />

      {/* Value Proposition Section */}
      <section className="bg-[var(--primary-green)] py-16 md:py-20 text-white overflow-hidden">
        {/* ... existing content unchanged ... */}
      </section>

      <TestimonialSlider />

      {/* Blog Post Section */}
      <section className="section-container pb-20 md:pb-32 text-center">
        {/* ... existing content unchanged ... */}
      </section>
      <FAQ />
    </>
  );
}
```

- [ ] **Step 3: Remove Navbar/Footer from `app/(luagro)/about/page.tsx`**

Remove imports for `Navbar` and `Footer`. Remove `<Navbar />` and `<Footer />` JSX. Keep the outer `<div className="min-h-screen bg-[#FDFBF1]">` wrapper. Change `<main className="pt-18">` to `<div className="pt-18">` since `<main>` is now in the layout. The page should return:

```tsx
export default function AboutPage() {
    return (
        <div className="bg-[#FDFBF1]">
            <div className="pt-18">
                {/* ... all existing sections unchanged ... */}
            </div>
        </div>
    );
}
```

- [ ] **Step 4: Remove Navbar/Footer from `app/(luagro)/blog/page.tsx`**

Same pattern: remove `Navbar`/`Footer` imports and JSX. Keep the page content. Replace `<main className="pt-18">` with `<div className="pt-18">`.

- [ ] **Step 5: Remove Navbar/Footer from `app/(luagro)/shop/page.tsx`**

Same pattern: remove `Navbar`/`Footer` imports and JSX. Keep the page content.

- [ ] **Step 6: Remove Navbar/Footer from `app/(luagro)/services/page.tsx`**

Same pattern: remove `Navbar`/`Footer` imports and JSX. Keep the page content.

- [ ] **Step 7: Verify the build compiles**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "refactor: add Luagro layout, remove Navbar/Footer from individual pages"
```

---

### Task 3: Update root layout and add middleware

**Files:**
- Modify: `app/layout.tsx` — remove metadata (title/description)
- Create: `middleware.ts`
- Create: `.env.local`

- [ ] **Step 1: Update root layout — remove metadata**

In `app/layout.tsx`, remove the `title` and `description` from the metadata export. The root layout should only handle fonts and the HTML shell:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Create the middleware**

Create `middleware.ts` in the project root:

```typescript
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // Local development: use ?site=luagro query param
  if (hostname.startsWith("localhost") || hostname.startsWith("127.0.0.1")) {
    const site = url.searchParams.get("site");
    if (site === "luagro") {
      url.pathname = `/(luagro)${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    url.pathname = `/(luvimes)${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Production: hostname-based routing
  if (hostname.startsWith("luagro.")) {
    url.pathname = `/(luagro)${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Default: luvimes.com
  url.pathname = `/(luvimes)${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon|.*\\..*).*)"],
};
```

- [ ] **Step 3: Create `.env.local` for the Luagro URL environment variable**

Note: `.env.local` is gitignored by default in Next.js — this file stays local only.

```
NEXT_PUBLIC_LUAGRO_URL=http://localhost:3000?site=luagro
```

Also create `.env.example` (committed to git) so other developers know the variable exists:

```
NEXT_PUBLIC_LUAGRO_URL=https://luagro.luvimes.com
```

Note: In production (Netlify), set `NEXT_PUBLIC_LUAGRO_URL=https://luagro.luvimes.com` as an environment variable in the Netlify dashboard.

- [ ] **Step 4: Commit**

```bash
git add middleware.ts app/layout.tsx .env.example
git commit -m "feat: add hostname-based middleware routing and strip root metadata"
```

---

## Chunk 2: Luvimes Components and Landing Page

### Task 4: Create Luvimes Navbar component

**Files:**
- Create: `components/luvimes/Navbar.tsx`

- [ ] **Step 1: Create the Luvimes Navbar**

Create `components/luvimes/Navbar.tsx`:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function LuvimesNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8faf6]/90 backdrop-blur-md text-[#1a1a1a] py-4 border-b border-[#eef4ea]">
      <div className="section-container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-[#3a5a34]">
          LUVIMES
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#1a1a1a]/70 hover:text-[#3a5a34] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToFooter}
            className="hidden sm:block px-6 py-2 rounded-full font-semibold text-sm bg-[#3a5a34] text-white hover:bg-[#5a8a52] transition-colors"
          >
            Contact Us
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-[#eef4ea] rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#f8faf6] border-t border-[#eef4ea] transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible h-auto py-8"
            : "opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <div className="section-container flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-[#1a1a1a]/70 hover:text-[#3a5a34] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={scrollToFooter}
            className="px-6 py-2 rounded-full font-semibold bg-[#3a5a34] text-white mx-auto"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/luvimes/Navbar.tsx
git commit -m "feat: add Luvimes Navbar component"
```

---

### Task 5: Create Luvimes Footer component

**Files:**
- Create: `components/luvimes/Footer.tsx`

- [ ] **Step 1: Create the Luvimes Footer**

Create `components/luvimes/Footer.tsx`:

```tsx
import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

export default function LuvimesFooter() {
  return (
    <footer
      id="footer"
      className="bg-[#3a5a34] text-white pt-16 md:pt-20 pb-10"
    >
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-white/10 pb-16">
        <div className="space-y-6 text-center sm:text-left">
          <div className="text-3xl font-bold">Luvimes</div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            We build digital products that solve real problems. Technology that
            connects, delivers, and empowers.
          </p>
          <div className="flex justify-center sm:justify-start gap-4">
            <FacebookIcon className="w-6 h-6 hover:text-[#97C93C] transition-colors cursor-pointer" />
            <TwitterIcon className="w-6 h-6 hover:text-[#97C93C] transition-colors cursor-pointer" />
            <InstagramIcon className="w-6 h-6 hover:text-[#97C93C] transition-colors cursor-pointer" />
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-xl font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-white/60">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-white transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-xl font-bold mb-6">Stay Updated</h4>
          <p className="text-white/60 text-sm mb-4">
            Get the latest from Luvimes.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-white/10 border border-white/10 rounded-full p-4 flex-1 outline-none text-sm focus:border-[#97C93C] transition-colors text-center sm:text-left"
            />
            <button className="bg-[#97C93C] text-white px-4 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="section-container pt-8 text-center text-white/40 text-sm px-4">
        Luvimes &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/luvimes/Footer.tsx
git commit -m "feat: add Luvimes Footer component"
```

---

### Task 6: Create Luvimes Hero component

**Files:**
- Create: `components/luvimes/Hero.tsx`

- [ ] **Step 1: Create the Luvimes Hero**

Create `components/luvimes/Hero.tsx`:

```tsx
import Link from "next/link";

export default function LuvimesHero() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#eef4ea] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#97C93C]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="section-container relative z-10 text-center max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-[#3a5a34] leading-tight tracking-tight">
          Building technology{" "}
          <span className="text-[#5a8a52]">that matters</span>
        </h1>
        <p className="text-xl text-[#1a1a1a]/60 leading-relaxed max-w-2xl mx-auto">
          We create digital products that solve real problems — connecting
          people, delivering value, and empowering communities.
        </p>
        <Link
          href="#projects"
          className="inline-block px-8 py-4 rounded-full font-semibold text-lg bg-[#3a5a34] text-white hover:bg-[#5a8a52] transition-colors"
        >
          See Our Work
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/luvimes/Hero.tsx
git commit -m "feat: add Luvimes Hero component"
```

---

### Task 7: Create Luvimes ProjectCard component

**Files:**
- Create: `components/luvimes/ProjectCard.tsx`

- [ ] **Step 1: Create the ProjectCard**

Create `components/luvimes/ProjectCard.tsx`:

```tsx
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  href: string;
  logoSrc?: string;
  status: "live" | "coming-soon";
}

export default function ProjectCard({
  name,
  description,
  href,
  logoSrc,
  status,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="block bg-white rounded-3xl p-8 border-2 border-[#97C93C] shadow-sm hover:shadow-lg transition-shadow group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          {logoSrc && (
            <Image
              src={logoSrc}
              alt={`${name} logo`}
              width={48}
              height={48}
              className="rounded-xl"
            />
          )}
          <h3 className="text-2xl font-bold text-[#3a5a34]">{name}</h3>
        </div>
        {status === "live" && (
          <span className="text-xs font-bold px-3 py-1 bg-[#97C93C] text-white rounded-full">
            LIVE
          </span>
        )}
        {status === "coming-soon" && (
          <span className="text-xs font-bold px-3 py-1 bg-gray-200 text-gray-500 rounded-full">
            COMING SOON
          </span>
        )}
      </div>
      <p className="text-[#1a1a1a]/60 text-lg mb-6">{description}</p>
      <span className="inline-flex items-center gap-2 text-[#3a5a34] font-semibold group-hover:text-[#97C93C] transition-colors">
        Visit {name} <span aria-hidden="true">&rarr;</span>
      </span>
    </a>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/luvimes/ProjectCard.tsx
git commit -m "feat: add Luvimes ProjectCard component"
```

---

### Task 8: Create the Luvimes layout and landing page

**Files:**
- Create: `app/(luvimes)/layout.tsx`
- Create: `app/(luvimes)/page.tsx`

- [ ] **Step 1: Create the Luvimes layout**

Create `app/(luvimes)/layout.tsx`:

```tsx
import LuvimesNavbar from "@/components/luvimes/Navbar";
import LuvimesFooter from "@/components/luvimes/Footer";

export const metadata = {
  title: "Luvimes — Technology Company",
  description: "We build digital products that solve real problems",
};

export default function LuvimesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LuvimesNavbar />
      <main className="pt-16">{children}</main>
      <LuvimesFooter />
    </>
  );
}
```

- [ ] **Step 2: Create the Luvimes landing page**

Create `app/(luvimes)/page.tsx`:

```tsx
import LuvimesHero from "@/components/luvimes/Hero";
import ProjectCard from "@/components/luvimes/ProjectCard";

export default function LuvimesHome() {
  const luagroUrl = process.env.NEXT_PUBLIC_LUAGRO_URL || "https://luagro.luvimes.com";

  return (
    <>
      <LuvimesHero />

      {/* Projects Section */}
      <section id="projects" className="bg-[#eef4ea] py-20">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-[#3a5a34] mb-12 text-center">
            Our Projects
          </h2>
          <div className="max-w-2xl mx-auto">
            <ProjectCard
              name="Luagro"
              description="Farm-to-table fresh produce delivery platform. Bridging the gap between local farmers and your table with 60-minute delivery."
              href={luagroUrl}
              logoSrc="/images/luaro 1.png"
              status="live"
            />
          </div>
        </div>
      </section>

      {/* About Blurb */}
      <section className="py-20">
        <div className="section-container max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#3a5a34]">About Luvimes</h2>
          <p className="text-lg text-[#1a1a1a]/60 leading-relaxed">
            Luvimes is a technology company building digital products that make
            a real difference. We believe in using technology to connect people,
            deliver value, and empower communities. Our first project, Luagro,
            is transforming how people access fresh, sustainably grown food.
          </p>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify the build compiles**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 4: Verify locally**

```bash
npm run dev
```

- Visit `http://localhost:3000` — should show the Luvimes landing page
- Visit `http://localhost:3000?site=luagro` — should show the existing Luagro home page

- [ ] **Step 5: Commit**

```bash
git add app/\(luvimes\)/layout.tsx app/\(luvimes\)/page.tsx
git commit -m "feat: add Luvimes layout and landing page"
```

---

## Chunk 3: Luvimes About and Blog Pages

### Task 9: Create the Luvimes About page

**Files:**
- Create: `app/(luvimes)/about/page.tsx`

- [ ] **Step 1: Create the About page**

Create `app/(luvimes)/about/page.tsx`:

```tsx
export default function LuvimesAboutPage() {
  return (
    <div className="bg-[#f8faf6] min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-[#3a5a34] leading-tight">
            About <span className="text-[#5a8a52]">Luvimes</span>
          </h1>
          <p className="text-xl text-[#1a1a1a]/60 leading-relaxed">
            We are a technology company on a mission to build digital products
            that solve real problems and create lasting impact.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="section-container max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-sm border border-[#eef4ea] space-y-8">
            <h2 className="text-3xl font-bold text-[#3a5a34]">Our Mission</h2>
            <p className="text-lg text-[#1a1a1a]/60 leading-relaxed">
              At Luvimes, we believe technology should serve people — not the
              other way around. We build products that connect communities,
              streamline everyday tasks, and unlock new possibilities for the
              people who use them.
            </p>
            <p className="text-lg text-[#1a1a1a]/60 leading-relaxed">
              Our first project, Luagro, is a farm-to-table delivery platform
              that bridges the gap between local farmers and households. It
              reflects our core belief: that the best technology solves problems
              people actually have.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3a5a34] mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eef4ea] space-y-4">
              <h3 className="text-xl font-bold text-[#3a5a34]">
                Impact First
              </h3>
              <p className="text-[#1a1a1a]/60">
                Every product we build starts with a real problem. We measure
                success by the difference we make, not just the code we ship.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eef4ea] space-y-4">
              <h3 className="text-xl font-bold text-[#3a5a34]">
                Quality Over Speed
              </h3>
              <p className="text-[#1a1a1a]/60">
                We take the time to build things right. Reliable, well-crafted
                software that people can depend on every day.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eef4ea] space-y-4">
              <h3 className="text-xl font-bold text-[#3a5a34]">
                Community Driven
              </h3>
              <p className="text-[#1a1a1a]/60">
                We build for and with the communities we serve. Their feedback
                shapes our roadmap and keeps us grounded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 pb-24">
        <div className="section-container max-w-3xl mx-auto">
          <div className="bg-[#3a5a34] rounded-3xl p-12 md:p-16 text-center text-white space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold relative z-10">
              Interested in what we do?
            </h2>
            <p className="text-white/60 text-lg relative z-10">
              We&apos;re always looking for partners, collaborators, and people
              who share our vision.
            </p>
            <button className="relative z-10 bg-[#97C93C] text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/\(luvimes\)/about/page.tsx
git commit -m "feat: add Luvimes About page"
```

---

### Task 10: Create the Luvimes Blog page

**Files:**
- Create: `app/(luvimes)/blog/page.tsx`

- [ ] **Step 1: Create the Blog page**

Create `app/(luvimes)/blog/page.tsx`:

```tsx
import { Clock, User } from "lucide-react";

const posts = [
  {
    title: "Introducing Luagro: Fresh Produce, Delivered",
    excerpt:
      "Our first product is live. Learn how Luagro is connecting local farmers directly to households with 60-minute delivery.",
    date: "March 15, 2026",
    author: "Luvimes Team",
    category: "Product Launch",
  },
  {
    title: "Why We Started Luvimes",
    excerpt:
      "The story behind our company — what drives us to build technology that makes a real difference in people's lives.",
    date: "March 1, 2026",
    author: "Luvimes Team",
    category: "Company",
  },
  {
    title: "Building for Communities, Not Just Users",
    excerpt:
      "How we approach product development with a community-first mindset and what that means in practice.",
    date: "February 20, 2026",
    author: "Luvimes Team",
    category: "Engineering",
  },
];

export default function LuvimesBlogPage() {
  return (
    <div className="bg-[#f8faf6] min-h-screen">
      {/* Blog Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center space-y-6">
          <div className="inline-block bg-[#eef4ea] text-[#3a5a34] px-4 py-1 rounded-full text-sm font-bold">
            News & Insights
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#3a5a34]">
            The Luvimes Blog
          </h1>
          <p className="text-xl text-[#1a1a1a]/60 max-w-2xl mx-auto">
            Updates, stories, and insights from our team as we build technology
            that matters.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eef4ea] hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#eef4ea] h-48 flex items-center justify-center">
                <span className="text-[#3a5a34]/30 text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <div className="p-8 space-y-4">
                <div className="text-sm text-[#1a1a1a]/40 flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} /> {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#3a5a34] group-hover:text-[#5a8a52] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#1a1a1a]/60 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-block text-sm font-bold text-[#3a5a34] underline underline-offset-4 decoration-2 decoration-[#97C93C]">
                  Read More
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/\(luvimes\)/blog/page.tsx
git commit -m "feat: add Luvimes Blog page"
```

---

## Chunk 4: Luagro Branding Updates and Final Verification

### Task 11: Add "A Luvimes Project" badge to Luagro Navbar

**Files:**
- Modify: `components/Navbar.tsx`

- [ ] **Step 1: Add the Luvimes badge near the logo**

In `components/Navbar.tsx`, find the logo Link element (around line 31-33):

```tsx
<Link href="/">
  <Image width={100} height={50} src="/images/luaro 1.png" alt="Logo" />
</Link>
```

Replace with:

```tsx
<div className="flex items-center gap-3">
  <Link href="/">
    <Image width={100} height={50} src="/images/luaro 1.png" alt="Logo" />
  </Link>
  <a
    href="https://luvimes.com"
    className="hidden sm:block text-[10px] font-medium text-white/50 hover:text-white/80 transition-colors border border-white/20 px-2 py-0.5 rounded-full"
  >
    A Luvimes Project
  </a>
</div>
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add 'A Luvimes Project' badge to Luagro navbar"
```

---

### Task 12: Add Luvimes link to Luagro Footer

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Add Luvimes attribution to the footer copyright line**

In `components/Footer.tsx`, find the copyright section (around line 53-55):

```tsx
<div className="section-container pt-8 text-center text-white/40 text-sm px-4">
    Luagro © {new Date().getFullYear()}. All rights reserved.
</div>
```

Replace the inner text content with:

```tsx
<div className="section-container pt-8 text-center text-white/40 text-sm px-4">
    Luagro © {new Date().getFullYear()}. All rights reserved.
    {" · "}
    A project by{" "}
    <a
        href="https://luvimes.com"
        className="text-white/60 hover:text-white transition-colors underline underline-offset-2"
    >
        Luvimes
    </a>
</div>
```

- [ ] **Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add Luvimes attribution link to Luagro footer"
```

---

### Task 13: Create not-found pages for each route group

**Files:**
- Create: `app/(luvimes)/not-found.tsx`
- Create: `app/(luagro)/not-found.tsx`

- [ ] **Step 1: Create Luvimes 404 page**

Create `app/(luvimes)/not-found.tsx`:

```tsx
import Link from "next/link";

export default function LuvimesNotFound() {
  return (
    <div className="bg-[#f8faf6] min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-[#3a5a34]">404</h1>
        <p className="text-xl text-[#1a1a1a]/60">Page not found</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full font-semibold bg-[#3a5a34] text-white hover:bg-[#5a8a52] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create Luagro 404 page**

Create `app/(luagro)/not-found.tsx`:

```tsx
import Link from "next/link";

export default function LuagroNotFound() {
  return (
    <div className="bg-[#FDFBF1] min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-[var(--primary-green)]">404</h1>
        <p className="text-xl text-gray-500">Page not found</p>
        <Link
          href="/"
          className="btn-primary inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/\(luvimes\)/not-found.tsx app/\(luagro\)/not-found.tsx
git commit -m "feat: add branded 404 pages for both route groups"
```

---

### Task 14: Final build verification and smoke test

- [ ] **Step 1: Run the build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 2: Start dev server and test all routes**

```bash
npm run dev
```

Test the following:

**Luvimes (default localhost):**
- `http://localhost:3000` — Luvimes landing page with hero, project card, about blurb
- `http://localhost:3000/about` — Luvimes about page
- `http://localhost:3000/blog` — Luvimes blog page
- Navbar shows "LUVIMES" wordmark, About, Blog, Contact Us
- Footer shows Luvimes branding
- "Contact Us" scrolls to footer

**Luagro (with query param):**
- `http://localhost:3000?site=luagro` — Luagro home page with hero, products, testimonials
- `http://localhost:3000/shop?site=luagro` — Luagro shop
- `http://localhost:3000/services?site=luagro` — Luagro services
- `http://localhost:3000/about?site=luagro` — Luagro about
- `http://localhost:3000/blog?site=luagro` — Luagro blog
- Navbar shows Luagro logo + "A Luvimes Project" badge
- Footer shows "A project by Luvimes" link

- [ ] **Step 3: Commit any fixes if needed, then final commit**

```bash
git add -A
git commit -m "chore: final verification — Luvimes pivot complete"
```

---

## Chunk 5: Netlify Deployment (Manual Steps)

### Task 15: Deploy to Netlify and configure domains

These are manual steps performed in the Netlify dashboard and domain registrar.

- [ ] **Step 1: Push to remote**

```bash
git push origin luvimes
```

- [ ] **Step 2: Connect repository to Netlify**

- Go to [app.netlify.com](https://app.netlify.com)
- Click "Add new site" → "Import an existing project"
- Select your Git provider and repository
- Build settings should auto-detect from `netlify.toml`:
  - Build command: `npm run build`
  - Publish directory: `.next`
- Click "Deploy site"

- [ ] **Step 3: Add custom domain `luvimes.com`**

- Netlify dashboard → Site settings → Domain management
- Click "Add a domain" → enter `luvimes.com`
- Netlify will prompt you to verify ownership

- [ ] **Step 4: Add subdomain `luagro.luvimes.com`**

- Same Domain management section
- Click "Add a domain" → enter `luagro.luvimes.com`

- [ ] **Step 5: Configure DNS at your registrar**

**Recommended: Use Netlify DNS**
- In Domain management, click "Set up Netlify DNS" for `luvimes.com`
- Netlify provides nameserver addresses (e.g., `dns1.p01.nsone.net`)
- Go to your domain registrar and update nameservers to the ones Netlify provides
- DNS propagation takes up to 48 hours

- [ ] **Step 6: Set production environment variable**

- Netlify dashboard → Site settings → Environment variables
- Add: `NEXT_PUBLIC_LUAGRO_URL` = `https://luagro.luvimes.com`

- [ ] **Step 7: Trigger a redeploy**

After env var is set, trigger a redeploy so the Luvimes landing page uses the production Luagro URL.

- [ ] **Step 8: Verify in production**

- Visit `https://luvimes.com` — should show the Luvimes landing page
- Visit `https://luagro.luvimes.com` — should show the Luagro site
- Click "Visit Luagro" on the Luvimes landing page — should navigate to the Luagro subdomain
- Click "A Luvimes Project" or footer link on Luagro — should navigate back to `luvimes.com`

- [ ] **Step 9: Verify SSL**

Both `luvimes.com` and `luagro.luvimes.com` should have valid SSL certificates (Netlify provisions these automatically, may take a few minutes).
