import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { getSiteUrl, siteDomains } from "@/lib/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const SITE_TITLE = "Hojiakbar Murodillayev | MERN Stack & Mobile Developer";
const SITE_NAME = "Hojiakbar Murodillayev — MERN & Mobile Developer";
const SITE_DESCRIPTION =
  "Hojiakbar Murodillayev — 4+ yillik tajribaga ega MERN Stack va Mobile Developer. Web va mobil ilovalarni JavaScript ekotizimi asosida ishlab chiqaman.";
const SITE_TAGLINE =
  "Web va mobil ilovalarni MERN stack asosida ishlab chiqaman. Real loyihalar, freelance tajriba va production-ready yechimlar.";
const JOB_TITLE = "MERN Stack & Mobile Developer";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = await getSiteUrl();

  return {
    metadataBase: siteUrl,
    title: {
      default: SITE_TITLE,
      template: "%s | Hojiakbar Murodillayev",
    },
    description: SITE_DESCRIPTION,
    keywords: [
      "Hojiakbar",
      "Murodillayev",
      "Hojiakbar Murodillayev",
      "Hojiakbar Murodillayev portfolio",
      "Hojiakbar Murodillayev developer",
      "MERN Stack Developer",
      "MERN Developer Uzbekistan",
      "Full Stack Developer",
      "Fullstack Developer",
      "Software Engineer",
      "Web Developer",
      "Mobile Developer",
      "Freelance Developer",
      "Uzbekistan Developer",
      "Tashkent Developer",
      "Frontend Developer",
      "Backend Developer",
      "UI/UX",
      "Responsive Web Design",
      "Web Performance",
      "React Developer",
      "React.js Developer",
      "Next.js Developer",
      "React Native Developer",
      "Node.js Developer",
      "Express.js Developer",
      "NestJS Developer",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "PostgreSQL",
      "REST API",
      "API Integration",
      "DevOps",
      "Docker",
      "Nginx",
      "PM2",
      "Linux (Ubuntu)",
      "VPS Deploy",
      "Git",
      "GitHub",
      "MERN stack dasturchi",
      "full stack dasturchi",
      "veb dasturchi",
      "mobil dasturchi",
      "freelance dasturchi",
      "O'zbekiston dasturchi",
      "Toshkent dasturchi",
      "frontend dasturchi",
      "backend dasturchi",
      "React dasturchi",
      "Next.js dasturchi",
      "React Native dasturchi",
      "Node.js dasturchi",
      "TypeScript dasturchi",
      "API integratsiya",
      "web va mobil ilovalar",
      "UI/UX dizayn",
      "MERN разработчик",
      "Full Stack разработчик",
      "Веб разработчик",
      "Мобильный разработчик",
      "Фриланс разработчик",
      "Узбекистан разработчик",
      "Ташкент разработчик",
      "Frontend разработчик",
      "Backend разработчик",
      "React разработчик",
      "Next.js разработчик",
      "React Native разработчик",
      "Node.js разработчик",
      "TypeScript разработчик",
      "JavaScript разработчик",
      "REST API разработка",
      "Разработка сайтов",
      "Разработка мобильных приложений",
    ],
    authors: [{ name: "Hojiakbar Murodillayev" }],
    creator: "Hojiakbar Murodillayev",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "uz_UZ",
      url: "/",
      siteName: SITE_NAME,
      title: SITE_TITLE,
      description: SITE_TAGLINE,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_TITLE,
      description:
        "MERN Stack va React Native asosida web va mobil ilovalar ishlab chiqaman.",
      creator: "@hojiakbar",
      images: ["/og-image.jpg"],
    },
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    generator: "Next.js",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = await getSiteUrl();
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hojiakbar Murodillayev",
    url: siteUrl.toString(),
    jobTitle: JOB_TITLE,
    description: SITE_DESCRIPTION,
    image: new URL("/profile.jpg", siteUrl).toString(),
    sameAs: [
      `https://${siteDomains.primary}`,
      `https://${siteDomains.secondary}`,
      "https://github.com/uzhojiakbar",
      "https://www.linkedin.com/in/hojiakbar-murodillayev/",
      "https://t.me/texnologik_sayohatchi",
    ],
  };

  return (
    <html
      lang="uz"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(personJsonLd),
            }}
          />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
