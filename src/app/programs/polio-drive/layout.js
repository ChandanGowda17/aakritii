import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/programs/polio-drive"));

export default function PolioDriveLayout({ children }) {
  return children;
}
