import { createPageMetadata, seoPages } from "../../seo";

export const metadata = createPageMetadata(seoPages.find((page) => page.path === "/programs/seed-ball-making"));

export default function SeedBallMakingLayout({ children }) {
  return children;
}