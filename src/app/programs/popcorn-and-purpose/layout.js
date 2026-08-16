import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/programs/popcorn-and-purpose"));

export default function PopcornAndPurposeLayout({ children }) {
  return children;
}