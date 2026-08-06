import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/programs/eye-camps"));

export default function EyeCampsLayout({ children }) {
  return children;
}
