import { createPageMetadata, seoPages } from "../../seo";

const seoPage = seoPages.find((page) => page.path === "/programs/polio-drive");
export const metadata = seoPage ? createPageMetadata(seoPage) : {};

export default function PolioDriveLayout({ children }) {
  return children;
}
