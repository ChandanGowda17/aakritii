import { createPageMetadata, seoPages } from "../../seo";

const seoPage = seoPages.find((page) => page.path === "/programs/soul-and-soil");
export const metadata = seoPage ? createPageMetadata(seoPage) : {};

export default function SoulAndSoilLayout({ children }) {
  return children;
}