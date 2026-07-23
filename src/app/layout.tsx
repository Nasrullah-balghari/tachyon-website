import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tachyon Consultants — Software, AI Engineering & Developer Staffing",
  description:
    "Build exceptional digital products with our top 1% engineers. Microsoft-stack software engineering, AI engineering, and developer staffing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      {/* Browser extensions (e.g. ColorZilla's cz-shortcut-listen) inject
          attributes onto <body> before hydration; suppress the resulting
          mismatch warning for this element only. */}
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
