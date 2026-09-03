import { createPageMetadata, seoPages } from "../../seo";

const seoPage = seoPages.find((page) => page.path === "/programs/womens-day");
export const metadata = seoPage ? createPageMetadata(seoPage) : {};

export default function WomensDayLayout({ children }) {
  return children;
}