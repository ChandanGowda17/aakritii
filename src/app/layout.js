import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { defaultMetadata, siteUrl } from "./seo";

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
  metadataBase: new URL(siteUrl),
  ...defaultMetadata,
  keywords: ["Aakritii NGO", "NGO Bengaluru", "Education NGO", "Healthcare NGO", "Environment NGO", "Volunteer NGO India"],
  applicationName: "Aakritii NGO",
  authors: [{ name: "Aakritii NGO" }],
  creator: "Aakritii NGO",
  publisher: "Aakritii NGO",
  category: "Non-profit organization",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} h-full antialiased`}>
      <head> 
        <title> Aakritii NGO - Empower . Transform . Inspire </title>
      </head>
      <body className="min-h-full flex flex-col">
  <Header />
  <main className="flex-grow">
    {children}
  </main>
  <Footer />
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossOrigin="anonymous"
  ></script>
</body>
    </html>
  );
}
