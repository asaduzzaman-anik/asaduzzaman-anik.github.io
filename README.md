# Anik Portfolio

Personal portfolio site for **Md Asaduzzaman Anik** — Full Stack Developer (Laravel · React · Next.js).

Built with Next.js, React, Tailwind CSS, and next-themes. Deployable as a static site to GitHub Pages.

## Features

- Professional hero, about, skills, experience, and projects sections
- Dark / light theme toggle with system preference support
- Scroll-reveal animations and responsive mobile navigation
- Working contact form (delivers to your email via Web3Forms)
- Static export for GitHub Pages deployment

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 16, React 19 |
| Styling | Tailwind CSS 4 |
| Theming | next-themes |
| Contact | [Web3Forms](https://web3forms.com/) |
| Hosting | GitHub Pages |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Contact form setup

1. Go to [https://web3forms.com](https://web3forms.com) and register with **asaduzzamananik12@gmail.com**
2. Copy your access key
3. Create a `.env.local` file:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

For GitHub Pages deployment, add the same key as a repository secret named `WEB3FORMS_ACCESS_KEY` (Settings → Secrets and variables → Actions).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
```

Static files are output to the `out/` directory.

## GitHub Pages Deployment

This repo is configured for **asaduzzaman-anik.github.io**:

1. Enable GitHub Pages: Repository **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Add `WEB3FORMS_ACCESS_KEY` as a repository secret
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically

Live site: [https://asaduzzaman-anik.github.io](https://asaduzzaman-anik.github.io)

## Project Structure

```
app/                  # Next.js App Router (layout, page, styles)
components/
  layout/             # Navbar, Footer, Background
  sections/           # Hero, About, Skills, Experience, Projects, Contact
  ui/                 # Reveal, ThemeToggle
data/
  portfolio.ts        # Site content and project data
.github/workflows/    # GitHub Pages deploy workflow
```

## Customizing Content

Edit [`data/portfolio.ts`](data/portfolio.ts) for projects, experience, skills, and site links.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Create static export in `out/` |
| `npm run lint` | Run ESLint |

## License

Private portfolio project. All rights reserved.
