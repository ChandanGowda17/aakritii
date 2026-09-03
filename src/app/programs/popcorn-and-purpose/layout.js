import { createPageMetadata, seoPages } from "../../seo";

const seoPage = seoPages.find((page) => page.path === "/programs/popcorn-and-purpose");
export const metadata = seoPage ? createPageMetadata(seoPage) : {};

export default function PopcornAndPurposeLayout({ children }) {
  return children;
}