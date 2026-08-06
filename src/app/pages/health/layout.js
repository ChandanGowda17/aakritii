import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/pages/health"));

export default function HealthLayout({ children }) {
  return children;
}
