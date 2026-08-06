import { seoPages, siteUrl } from "./seo";

export const dynamic = "force-static";

export default function sitemap() {
  return seoPages.map(({ path }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}/`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
