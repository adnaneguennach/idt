import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gtAmerica = localFont({
  src: [
    {
      path: "../fonts/GT-America-Standard-Light-Trial.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/GT-America-Standard-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GT-America-Standard-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/GT-America-Standard-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gt-america",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://idealtax.com"),
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

import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full scroll-smooth antialiased ${gtAmerica.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`min-h-full flex flex-col font-sans font-light bg-bg text-text-main overflow-x-hidden`} suppressHydrationWarning>
        <SmoothScrolling>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
