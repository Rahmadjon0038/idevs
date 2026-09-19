import { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n";
import { getLanguageAlternates, getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  return locales.map((locale) => ({
    url: new URL(`/${locale}`, siteUrl).toString(),
    alternates: { languages: getLanguageAlternates() },
    priority: locale === defaultLocale ? 1 : 0.8,
  }));
}
