import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Ideal Tax | Tax Debt Resolution Services",
  description: "Resolve your tax problems, eliminate debt stress, and move toward financial freedom — backed by 15 years of proven results. Get a free consultation today.",
  keywords: ["tax debt", "tax relief", "IRS back taxes", "wage garnishments", "tax liens", "offer in compromise", "penalty abatement"],
  authors: [{ name: "Ideal Tax" }],
  creator: "Ideal Tax",
  publisher: "Ideal Tax",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ideal Tax | Tax Debt Resolution Services",
    description: "Resolve your tax problems, eliminate debt stress, and move toward financial freedom.",
    url: "https://idealtax.com",
    siteName: "Ideal Tax",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ideal Tax Resolution Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideal Tax | Tax Debt Resolution Services",
    description: "Resolve your tax problems and move toward financial freedom.",
    creator: "@idealtax",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://idealtax.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full scroll-smooth antialiased ${inter.variable}`} suppressHydrationWarning>
      <body className={`min-h-full flex flex-col font-sans bg-bg text-text-main overflow-x-hidden`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
