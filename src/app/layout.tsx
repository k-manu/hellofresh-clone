import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NomNomBox | Authentic Indian Meal Kits Delivered to Your Door",
  description: "NomNomBox delivers premium Indian meal kits with pre-measured ingredients and easy recipes. Discover the flavors of India with vegetarian, non-veg, and regional cuisine options. Get 50% off your first box!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientBody>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
