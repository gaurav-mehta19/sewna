import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SEWNA - Connect with Independent Fashion Designers",
  description: "SEWNA bridges the gap between your unique style and talented independent fashion designers ready to bring your dream outfits to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
