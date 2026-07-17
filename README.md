# Anik Portfolio

Personal portfolio site for **Md Asaduzzaman Anik** — Full Stack Developer (Laravel · React · PHP).

Built with Next.js, React, Tailwind CSS, and Framer Motion. Showcases experience, skills, and featured projects with dark/light theme support.

## Features

- Hero intro with social links and tech highlights
- About / stats, skills, and experience sections
- Featured projects with live demos and GitHub links
- Contact form UI
- Dark / light theme toggle
- Motion accents via Framer Motion

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 16, React 19 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons |
| Theming | next-themes |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm (or yarn / pnpm)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
app/                  # Next.js App Router (layout, page, styles)
components/
  layout/             # Navbar
  sections/           # Hero, About, Skills, Experience, Projects, Contact
  ui/                 # Shared UI pieces
data/
  portfolio.ts        # Project data (edit here to update featured work)
public/
  projects/           # Project screenshots / images
utils/
  animations.ts       # Shared motion helpers
```

## Customizing Content

Featured projects live in [`data/portfolio.ts`](data/portfolio.ts). Update titles, descriptions, tech tags, images, and links there.

Section copy and layout live under `components/sections/`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Create production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |

## License

Private portfolio project. All rights reserved.
