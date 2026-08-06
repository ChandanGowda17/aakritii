import { createPageMetadata, seoPages } from "../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/know-more"));

export default function KnowMoreLayout({ children }) {
  return children;
}
