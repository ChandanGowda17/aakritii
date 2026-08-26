import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/programs/soul-and-soil"));

export default function SoulAndSoilLayout({ children }) {
  return children;
}