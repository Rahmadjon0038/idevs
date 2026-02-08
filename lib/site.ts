import { headers } from "next/headers";

const PRIMARY_DOMAIN = "murodillayev.uz";
const SECONDARY_DOMAIN = "idevs.uz";

const ALLOWED_DOMAINS = new Set([
  PRIMARY_DOMAIN,
  `www.${PRIMARY_DOMAIN}`,
  SECONDARY_DOMAIN,
  `www.${SECONDARY_DOMAIN}`,
]);

function normalizeHost(hostHeader?: string | null) {
  if (!hostHeader) return null;
  const rawHost = hostHeader.split(",")[0]?.trim().toLowerCase();
  if (!rawHost) return null;
  return rawHost;
}

function buildLocalUrl(host: string) {
  return new URL(`http://${host}`);
}

export function resolveSiteUrl(hostHeader?: string | null) {
  const rawHost = normalizeHost(hostHeader);
  if (!rawHost) return new URL(`https://${PRIMARY_DOMAIN}`);

  const hostWithoutPort = rawHost.split(":")[0];

  if (hostWithoutPort === "localhost" || hostWithoutPort === "127.0.0.1") {
    return buildLocalUrl(rawHost);
  }

  if (ALLOWED_DOMAINS.has(hostWithoutPort)) {
    return new URL(`https://${hostWithoutPort}`);
  }

  return new URL(`https://${PRIMARY_DOMAIN}`);
}

export async function getSiteUrl() {
  const hostHeader = (await headers()).get("host");
  return resolveSiteUrl(hostHeader);
}

export const siteDomains = {
  primary: PRIMARY_DOMAIN,
  secondary: SECONDARY_DOMAIN,
};
