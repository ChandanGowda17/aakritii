import { createPageMetadata, seoPages } from "../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/about-us"));

export default function AboutUsLayout({ children }) {
  return children;
}
