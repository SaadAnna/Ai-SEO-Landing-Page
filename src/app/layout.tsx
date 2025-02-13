import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  title: "AI Seo",
  description: "AI SEO Generator For All Startup For Optomize You Website Seo",
  keywords: ["AI", "startup", "landing page", "Ai", "website", "SEO", "Ai Seo"],
  openGraph: {
    title: "AI SEO Startup ",
    description: "AI SEO Generator For All Startup For Optomize You Website Seo",
    images: [
      {
        url: "@/assets/logo.svg", // Replace with your OpenGraph image
        width: 1200,
        height: 630,
        alt: "AI Startup Landing Page",
      },
    ],
    url: "https://yourwebsite.com", // Replace with your website URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Startup Landing Page",
    description: "AI SEO Generator For All Startup For Optomize You Website Seo",
    images: ["@/assets/logo.svg"], // Replace with your Twitter image
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
