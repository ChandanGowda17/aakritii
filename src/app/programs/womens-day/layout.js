import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/programs/womens-day"));

export default function WomensDayLayout({ children }) {
  return children;
}