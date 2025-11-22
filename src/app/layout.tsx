import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Handmade Haven - Beautiful Handcrafted Items",
  description: "Discover unique handmade handicrafts, calendars, crochet items, bookmarks, and special gifts. Each piece is crafted with love and attention to detail.",
  keywords: "handmade, handicrafts, crochet, calendars, bookmarks, gifts, artisan, craft",
  authors: [{ name: "Handmade Haven" }],
  creator: "Handmade Haven",
  publisher: "Handmade Haven",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-username.github.io/handicrafts-ecommerce",
    title: "Handmade Haven - Beautiful Handcrafted Items",
    description: "Discover unique handmade handicrafts, calendars, crochet items, bookmarks, and special gifts.",
    siteName: "Handmade Haven",
  },
  twitter: {
    card: "summary_large_image",
    title: "Handmade Haven - Beautiful Handcrafted Items",
    description: "Discover unique handmade handicrafts, calendars, crochet items, bookmarks, and special gifts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
