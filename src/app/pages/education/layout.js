import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/pages/education"));

export default function EducationLayout({ children }) {
  return children;
}
