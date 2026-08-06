import { createPageMetadata, seoPages } from "../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/press-releases"));

export default function PressReleasesLayout({ children }) {
  return children;
}
