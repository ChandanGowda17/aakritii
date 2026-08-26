import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/programs/stitch-and-sustain"));

export default function StitchAndSustainLayout({ children }) {
  return children;
}