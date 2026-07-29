# AGENTS.md — Technical Architecture & Codebase Guidelines

Document for AI agents and developers working on the KINETIX E-Commerce codebase.

---

## 🏗️ Architecture Overview

The application is built on **TanStack Start** with **React 19** and **Tailwind CSS v4**, deployed on **Netlify**.

### Directory Structure

```
src/
├── components/                  # Reusable UI Components
│   ├── CartDrawer.tsx           # Slide-over cart drawer with item controls & discount coupons
│   ├── Footer.tsx               # Store footer with highlights, links, & newsletter form
│   ├── Header.tsx               # Sticky header with search, logo, & mobile menu
│   ├── ProductCard.tsx          # Catalog grid product card component
│   ├── ProductGallery.tsx       # PDP interactive image stage, thumbnails, & lightbox
│   ├── ProductVariantSelector.tsx# Color swatches and spec option selector
│   └── Toast.tsx                # Floating notification toast overlay
├── data/
│   └── products.ts              # Data model & rich product catalog dataset (8 products)
├── routes/                      # File-based TanStack Router routes
│   ├── __root.tsx               # Root document layout with Header, Footer, CartDrawer, & Toasts
│   ├── index.tsx                # Home catalog with search, filter tabs, sorting, & grid
│   ├── checkout/
│   │   ├── cancel.tsx           # Checkout cancel handler
│   │   └── success.tsx          # Order confirmation summary page
│   └── products/
│       └── $productId.tsx       # Product Detail Page (PDP)
├── store/
│   └── cartStore.ts             # Zustand store for persistent cart state & toasts
├── router.tsx                   # TanStack Router instance creation
└── styles.css                   # Tailwind CSS v4 source import
```

---

## 🔑 Key Conventions & Data Models

### 1. Product Data Schema (`src/data/products.ts`)
Each product contains:
- `id`: unique number.
- `name`, `tagline`, `category`, `price`, `originalPrice`, `rating`, `reviewCount`, `badge`.
- `image` & `gallery` array (high resolution Unsplash images).
- `description`, `shortDescription`, `features`, `specs`.
- `colors`: array of `{ id, name, type: 'color', value: '#hex' }`.
- `options`: optional array of `{ id, name, type: 'option', value, priceModifier }`.
- `reviews`: array of `{ id, author, avatar, rating, date, comment }`.

### 2. State Management (`src/store/cartStore.ts`)
- Utilizes `zustand/middleware` `persist` to mirror cart contents in `localStorage` under `kinetix-cart-storage`.
- Handles unique `cartItemId` keying based on `${productId}-${colorId}-${optionId}` so different variant selections of the same product sit in distinct cart rows.
- Manages global toast notifications (`addToast`, `removeToast`) with automatic 4-second dismiss.

### 3. Styling Principles
- Uses Tailwind CSS v4 with dark palette (`slate-950` background, `slate-900` cards, `amber-400` / `amber-500` primary accents).
- High visual variance: glassmorphic header blur, glowing borders, custom badge tags, and tactile active/hover states.

---

## 🛠️ Development & Validation Guidelines

- Do not run local build commands manually (`vite build`, `tsc`, etc.); Netlify pipeline handles builds automatically.
- Keep components typed strictly with TypeScript interfaces.
