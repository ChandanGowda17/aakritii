import { createPageMetadata, seoPages } from "../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/contact"));

export default function ContactLayout({ children }) {
  return children;
}
