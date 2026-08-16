import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/programs/school-beautification"));

export default function SchoolBeautificationLayout({ children }) {
  return children;
}