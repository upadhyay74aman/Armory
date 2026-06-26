# Armory: Next-Gen AI Platform

A high-performance, responsive landing page for an advanced AI-driven data automation platform, engineered for a strict 4-hour technical speed run.

## Engineering Philosophy

This project was built from the ground up with a focus on **Architectural Integrity** and **Zero-Dependency Performance**.

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (Utility-first)
- **Zero External UI Libraries:** No Shadcn, Radix UI, Framer Motion, or pre-built component kits were used. All transitions and layout reflows are built using native CSS/WAAPI.

## Key Features & Constraints

- **Matrix-Driven Pricing:** Implements dynamic multi-currency calculations (INR, USD, EUR) using a multi-dimensional configuration object, ensuring state isolation and zero layout thrashing.
- **Bento-to-Accordion Wrapper:** A custom-engineered responsive layout that maintains state persistence during window resize events, refactoring from a desktop Bento-Grid to a mobile-first Accordion without external animation engines.
- **SEO & Semantic Accessibility:** Built with semantic HTML5 (`<main>`, `<section>`, `<dl>`, `<blockquote>`) to ensure crawlability and accessibility compliance.
- **Performance Optimized:** Orchestrated for a sub-500ms Time to Interactive (TTI).

## Installation

\`\`\`bash
npm install
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
\`\`\`

## Live Demo

https://armory-theta.vercel.app/

## Repository Structure

- `src/config/pricingMatrix.js` — pricing/currency/tariff source of truth + computation logic
- `src/components/PricingSection.jsx` — pricing UI, currency/billing toggle
- `src/components/FeaturesBento.jsx` — bento grid feature cards
- `src/hooks/useBentoState.js` — Context Lock: active index tracking + resize sync to accordion
- `src/components/NeuralBackground.jsx` — generative background visual
- `src/components/HeroSection.jsx` — hero section
- `src/components/SocialProof.jsx` — testimonials/trust signals
