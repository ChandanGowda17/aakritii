import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Aakritii Foundation | Shaping Futures, Empowering Communities",
  description: "Aakruthi Foundation is a registered non-profit organization dedicated to holistic primary education, community-based environmental afforestation, and rural livelihood programs.",
  keywords: ["NGO", "Education NGO", "Environment non-profit", "Livelihood skills", "India NGO", "Aakruthi"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
