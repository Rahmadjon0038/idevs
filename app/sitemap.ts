import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = await getSiteUrl();
  return [
    {
      url: siteUrl.toString(),
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
