import { createPageMetadata, seoPages } from "../../seo";

const seoPage = seoPages.find((page) => page.path === "/programs/eye-camps");
export const metadata = seoPage ? createPageMetadata(seoPage) : {};

export default function EyeCampsLayout({ children }) {
  return children;
}
