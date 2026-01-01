import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://murodillayev.uz/",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
