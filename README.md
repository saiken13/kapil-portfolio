# Kapil Hingu Portfolio

Modern personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Features

- Split responsive layout with sticky sidebar and scrollable content panel
- Single source of truth content in `src/data/data.ts`
- Animated section transitions and subtle interaction polish
- Active section highlighting in sidebar
- Expandable experience timeline
- Featured project plus project grid
- Contact section with copy-to-clipboard email
- SEO metadata and OpenGraph-ready setup

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    portfolio-shell.tsx
    section-container.tsx
    sidebar.tsx
  data/
    data.ts
  sections/
    about-section.tsx
    contact-section.tsx
    experience-section.tsx
    hero-section.tsx
    projects-section.tsx
    skills-section.tsx
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Customize Content

Edit `src/data/data.ts` to update:

- Profile and hero text
- Skills
- Experience timeline
- Projects
- Contact links

## Deploy on Vercel

1. Push repository to GitHub
2. Import project into Vercel
3. Deploy with default Next.js settings
