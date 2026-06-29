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
      <head>
      </head>
      <body className="min-h-full flex flex-col">
  <Header />
  <main>
    {children}
  </main>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossOrigin="anonymous"
  ></script>
</body>
    </html>
  );
}
