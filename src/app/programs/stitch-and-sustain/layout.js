import { createPageMetadata, seoPages } from "../../seo";

const seoPage = seoPages.find((page) => page.path === "/programs/stitch-and-sustain");
export const metadata = seoPage ? createPageMetadata(seoPage) : {};

export default function StitchAndSustainLayout({ children }) {
  return children;
}