import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSiteUrl, siteDomains } from "@/lib/site";
import {
  defaultLocale,
  getContent,
  isLocale,
  localeOgMap,
  locales,
} from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string } | Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  const locale = resolvedParams.locale ?? defaultLocale;
  const content = getContent(locale);
  const siteUrl = await getSiteUrl();
  const pagePath = `/${locale}`;

  return {
    metadataBase: siteUrl,
    title: {
      default: content.meta.title,
      template: "%s | iDevs",
    },
    description: content.meta.description,
    keywords: content.meta.keywords,
    authors: [{ name: content.hero.name }],
    creator: content.hero.name,
    alternates: {
      canonical: pagePath,
      languages: {
        uz: "/uz",
        ru: "/ru",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: localeOgMap[locale],
      url: pagePath,
      siteName: content.meta.siteName,
      title: content.meta.title,
      description: content.meta.ogDescription,
      images: [
        {
          url: `/og?lang=${locale}`,
          width: 1200,
          height: 630,
          alt: content.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.twitterDescription,
      creator: "@hojiakbar",
      images: [`/og?lang=${locale}`],
    },
    manifest: "/site.webmanifest",
    icons: {
      icon: [{ url: "/me.jpg", type: "image/jpeg" }],
      shortcut: "/me.jpg",
      apple: "/me.jpg",
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

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  const locale = resolvedParams.locale ?? defaultLocale;
  const content = getContent(locale);
  const siteUrl = await getSiteUrl();
  const siteOrigin = new URL("/", siteUrl).toString();
  const pagePath = `/${locale}`;
  const pageUrl = new URL(pagePath, siteUrl).toString();
  const organizationId = new URL("/#organization", siteUrl).toString();
  const websiteId = new URL("/#website", siteUrl).toString();
  const webpageId = new URL(`${pagePath}#webpage`, siteUrl).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: content.hero.name,
        url: siteOrigin,
        description: content.meta.description,
        logo: new URL("/android-chrome-512x512.png", siteUrl).toString(),
        sameAs: [
          `https://${siteDomains.primary}`,
          `https://${siteDomains.secondary}`,
          "https://github.com/Rahmadjon0038",
          "https://t.me/Rahmadjonn",
        ],
        knowsAbout: content.meta.knowsAbout,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteOrigin,
        name: content.meta.siteName,
        publisher: { "@id": organizationId },
        inLanguage: locale,
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: pageUrl,
        name: content.meta.title,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        inLanguage: locale,
        description: content.meta.description,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
