# Reclamation Center — Website Rebuild

A modern, premium rebuild of [reclamationcntr.com](https://www.reclamationcntr.com/) built with **React + Vite + Tailwind CSS + React Router + Lucide icons**.

> Tagline: **"We Will Help You Reclaim Your Life."**

## Quick Start

```bash
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser.

Production build:

```bash
npm run build     # outputs to /dist
npm run preview   # serves the production build locally
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home (hero, success stories, services, why choose us, about, how to get started, insurance, resources, final CTA) |
| `/about` | About Us |
| `/services` | All services |
| `/services/:slug` | Service detail (15 services) |
| `/why-choose-us` | Why Choose Us |
| `/blog` | Resources / blog index |
| `/blog/:slug` | Full article pages (3 original educational articles) |
| `/contact` | Contact + appointment request form |

## Where to Edit Content

Everything editable lives in `src/data/`:

- **`siteInfo.js`** — phone, email, address (verified from the current live site).
- **`services.js`** — the service catalog. Verified against the live site's Services page on 2026-10-18. Add/remove/edit services here; cards, dropdown menus, footer links, and detail pages all update automatically.
- **`testimonials.js`** — ⚠️ currently **sample placeholders**, clearly labeled in the UI. Replace with genuine, permission-approved client testimonials before launch.
- **`blog.js`** — three original educational articles (the current live site has no blog yet). Add more posts here.
- **`images.js`** — photo URLs (freely licensed Unsplash photos). Swap in your own photography by dropping files into `src/assets/` and updating the URLs. Every image has a branded fallback, so nothing ever looks broken.

## Before Launch Checklist

1. Replace sample testimonials with real, permission-approved ones (`src/data/testimonials.js`).
2. Connect the contact form (`src/pages/Contact.jsx`, `handleSubmit`) to your real backend — Wix form endpoint, email service, or CRM.
3. Add real social media URLs in `src/components/Footer.jsx` (currently `#` placeholders).
4. Swap the placeholder logo mark in `src/components/Logo.jsx` for the official Reclamation Center logo file.
5. Confirm office hours and any insurance details with the team before adding specifics (none are invented in this build).

## Tech Notes

- Tailwind brand tokens: `forest #174B3A`, `primary #28734D`, `mint #EAF5ED`, `offwhite #FAFBF8`, `ink #21342C`.
- Fonts: **Fraunces** (display) + **Figtree** (body) via Google Fonts.
- Fully responsive (mobile nav, 4→2→1 testimonial columns, responsive grids), semantic HTML, skip link, keyboard-accessible dropdown, no horizontal scroll.
