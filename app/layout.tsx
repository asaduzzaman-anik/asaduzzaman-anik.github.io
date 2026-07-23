import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteTitle = `${siteConfig.name} | ${siteConfig.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteTitle,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Software Developer",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "Web Developer",
    "Web Designer",
    "Laravel",
    "React",
    "Next.js",
    "Md Asaduzzaman Anik",
    "Asaduzzaman Anik",
    "ERP",
    "CRM",
    "POS",
    "Ecommerce",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.fullName,
    title: siteTitle,
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.fullName} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteConfig.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.fullName,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en",
    },
    {
      "@type": "Person",
      name: siteConfig.fullName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      jobTitle: siteConfig.title,
      description: siteConfig.description,
      sameAs: [siteConfig.github, siteConfig.linkedin],
      knowsAbout: ["Laravel", "React", "Next.js", "TypeScript", "ERP", "CRM"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} overflow-x-hidden bg-slate-50 font-sans text-slate-700 antialiased selection:bg-indigo-200 selection:text-indigo-950 dark:bg-slate-950 dark:text-slate-300 dark:selection:bg-indigo-500/40 dark:selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
