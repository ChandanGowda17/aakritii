import { createPageMetadata, seoPages } from "../../seo";

const seoPage = seoPages.find((page) => page.path === "/programs/clean-and-drive-trek");
export const metadata = seoPage ? createPageMetadata(seoPage) : {};

export default function CleanAndDriveTrekLayout({ children }) {
  return children;
}
