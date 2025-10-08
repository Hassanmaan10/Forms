import { localhostUrl } from "@/lib/config";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${localhostUrl}/sitemap.xml`,
    host: localhostUrl,
  };
}
