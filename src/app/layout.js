import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  title: "Aakritii NGO | Empower, Transform, Inspire",
  description: "Aakritii NGO is a Bengaluru-based registered non-profit empowering communities through education, healthcare, environmental action, and volunteer-led social impact.",
  keywords: ["Aakritii NGO", "NGO Bengaluru", "Education NGO", "Healthcare NGO", "Environment NGO", "Volunteer NGO India"],
  openGraph: {
    title: "Aakritii NGO | Empower, Transform, Inspire",
    description: "A Bengaluru-based registered non-profit empowering communities through education, healthcare, environmental action, and volunteer-led social impact.",
    url: "https://aakritii.org",
    siteName: "Aakritii NGO",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} h-full antialiased`}>
      <head>
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
