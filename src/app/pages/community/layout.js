import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/pages/community"));

export default function CommunityLayout({ children }) {
  return children;
}
