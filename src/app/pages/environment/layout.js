import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/pages/environment"));

export default function EnvironmentLayout({ children }) {
  return children;
}
