import { createPageMetadata, seoPages } from "../../seo";

const seoPage = seoPages.find((page) => page.path === "/programs/seed-ball-making");
export const metadata = seoPage ? createPageMetadata(seoPage) : {};

export default function SeedBallMakingLayout({ children }) {
  return children;
}