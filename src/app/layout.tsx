import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Seo",
  description: "AI SEO Generator For All Startup For Optomize You Website Seo",
  keywords: ["AI", "startup", "landing page", "Ai", "Seo"],
  openGraph: {
    title: "Ai Seo",
    description: "AI SEO Generator For All Startup For Optomize You Website Seo",
    url: "https://yourwebsite.com", // Replace with your website URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Seo Startup Landing Page",
    description: "AI SEO Generator For All Startup For Optomize You Website Seo",// Replace with your Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={inter.className} >{children}</body>
    </html>
  );
}
