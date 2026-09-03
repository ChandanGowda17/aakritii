import { createPageMetadata, seoPages } from "../../seo";

const seoPage = seoPages.find((page) => page.path === "/programs/school-beautification");
export const metadata = seoPage ? createPageMetadata(seoPage) : {};

export default function SchoolBeautificationLayout({ children }) {
  return children;
}