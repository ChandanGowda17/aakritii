import { createPageMetadata, seoPages } from "../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/programs"));

export default function ProgramsLayout({ children }) {
  return children;
}
