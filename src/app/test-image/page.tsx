import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image Test - X.com Card Validation',
  description: 'Testing OpenGraph image display with fresh URL to bypass X.com cache. This should show a large banner image in Twitter cards.',
  openGraph: {
    title: 'Image Test - X.com Card Validation',
    description: 'Testing OpenGraph image display with fresh URL to bypass X.com cache. This should show a large banner image in Twitter cards.',
    type: 'website',
    url: '/test-image',
    // Next.js will automatically use opengraph-image.png
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vercel', // Required: Replace with your actual Twitter/X handle
    creator: '@vercel', // Recommended for content pages
    title: 'Image Test - X.com Card Validation', 
    description: 'Testing OpenGraph image display with fresh URL to bypass X.com cache. This should show a large banner image in Twitter cards.',
    images: ['/test-image/twitter-image.png'], // Explicitly define the image
  },
  other: {
    'twitter:image:alt': 'Large banner image test for X.com card validation - should display a colorful graphic',
  },
};

export default function TestImagePage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img
        src="/large-card.png"
        alt="Test image"
        className="max-w-2xl w-full h-auto"
      />
    </div>
  );
} 