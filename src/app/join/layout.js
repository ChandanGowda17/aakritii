import { createPageMetadata, seoPages } from "../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/join"));

export default function JoinLayout({ children }) {
  return children;
}
