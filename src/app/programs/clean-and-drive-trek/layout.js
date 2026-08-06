import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/programs/clean-and-drive-trek"));

export default function CleanAndDriveTrekLayout({ children }) {
  return children;
}
