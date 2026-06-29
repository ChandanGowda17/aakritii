import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Aakritii Foundation | Shaping Futures, Empowering Communities",
  description: "Aakruthi Foundation is a registered non-profit organization dedicated to holistic primary education, community-based environmental afforestation, and rural livelihood programs.",
  keywords: ["NGO", "Education NGO", "Environment non-profit", "Livelihood skills", "India NGO", "Aakruthi"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
  <Header />
  <main className="mt-[86px] lg:mt-[86px]">
    {children}
  </main>
</body>
    </html>
  );
}
