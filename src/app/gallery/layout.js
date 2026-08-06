import { createPageMetadata, seoPages } from "../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/gallery"));

export default function GalleryLayout({ children }) {
  return children;
}
