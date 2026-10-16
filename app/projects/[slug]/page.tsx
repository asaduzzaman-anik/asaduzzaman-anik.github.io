import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackgroundDecor from "@/components/layout/BackgroundDecor";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CaseStudy from "@/components/projects/CaseStudy";
import { projects, siteConfig } from "@/data/portfolio";

type Params = Promise<{ slug: string }>;

// Only the projects defined in data/portfolio.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return {};

  const title = `${project.title} — Case Study | ${siteConfig.fullName}`;
  const url = `/projects/${project.slug}/`;

  return {
    title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: siteConfig.fullName,
      title,
      description: project.description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: ["/og.png"],
    },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.caseStudy.overview,
    url: `${siteConfig.url}/projects/${project.slug}/`,
    genre: project.category,
    keywords: project.tags.join(", "),
    author: { "@type": "Person", name: siteConfig.fullName, url: siteConfig.url },
    ...(project.github ? { codeRepository: project.github } : {}),
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BackgroundDecor />
      <Navbar onHome={false} />
      <main id="main-content">
        <CaseStudy project={project} previous={previous} next={next} />
      </main>
      <Footer />
    </>
  );
}
