import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenGraph Testing App",
  description: "Testing different OpenGraph formats for Twitter and other social media platforms",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
    'http://localhost:3000'
  ),
  openGraph: {
    title: 'OpenGraph Testing App',
    description: 'Testing different OpenGraph formats for Twitter and other social media platforms',
    type: 'website',
    locale: 'en_US',
    siteName: 'OpenGraph Testing App',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'OpenGraph Testing App',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vercel', // IMPORTANT: Replace with a real Twitter/X handle
    creator: '@vercel', // Optional but recommended
    images: ['/twitter-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
