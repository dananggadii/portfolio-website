import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://danang-dev.my.id", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
