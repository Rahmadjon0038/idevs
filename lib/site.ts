import { defaultLocale, locales } from "@/lib/i18n";

export const SITE_DOMAIN = "idevs.uz";

// SEO URLs must stay canonical regardless of proxy, preview or localhost headers.
export function getSiteUrl() {
  return new URL(`https://${SITE_DOMAIN}`);
}

export function getLanguageAlternates() {
  const siteUrl = getSiteUrl();
  return Object.fromEntries([
    ...locales.map((locale) => [locale, new URL(`/${locale}`, siteUrl).toString()]),
    ["x-default", new URL(`/${defaultLocale}`, siteUrl).toString()],
  ]);
}
