import { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = await getSiteUrl();
  return locales.map((locale) => ({
    url: new URL(`/${locale}`, siteUrl).toString(),
    lastModified: new Date(),
    priority: locale === defaultLocale ? 1 : 0.8,
  }));
}
