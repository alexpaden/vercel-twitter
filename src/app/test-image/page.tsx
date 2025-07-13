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
    site: '@yourhandle',
    title: 'Image Test - X.com Card Validation', 
    description: 'Testing OpenGraph image display with fresh URL to bypass X.com cache. This should show a large banner image in Twitter cards.',
    // Next.js will automatically use twitter-image.png
  },
  other: {
    'twitter:image:alt': 'Large banner image test for X.com card validation - should display a colorful graphic',
  },
};

export default function TestImagePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🧪 X.com Card Image Test
        </h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Test Instructions
          </h2>
          <ol className="text-blue-800 space-y-2">
            <li>1. Copy this page URL: <code className="bg-blue-100 px-2 py-1 rounded">https://vercel-twitter.vercel.app/test-image</code></li>
            <li>2. Test in X.com Card Validator: <a href="https://cards-dev.x.com/validator" className="underline">https://cards-dev.x.com/validator</a></li>
            <li>3. Should display: <strong>Large image banner + title + description</strong></li>
            <li>4. Card type: <code className="bg-blue-100 px-2 py-1 rounded">summary_large_image</code></li>
          </ol>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Expected Result</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">✅ Large banner image (1200x630)</p>
              <p className="text-sm text-gray-600 mb-2">✅ Title: "Image Test - X.com Card Validation"</p>
              <p className="text-sm text-gray-600 mb-2">✅ Description with proper truncation</p>
              <p className="text-sm text-gray-600">✅ Card type: summary_large_image</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Preview Image</h3>
            <div className="border rounded-lg overflow-hidden">
              <img
                src="/large-card.png"
                alt="Test image that should appear in X.com cards"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-green-50 rounded-lg">
          <h3 className="font-medium text-green-800 mb-2">🎯 Purpose</h3>
          <p className="text-sm text-green-700">
            This page uses a fresh URL that X.com hasn't cached yet. If images appear here but not on other pages, 
            the issue is X.com's 7-day cache. If images still don't appear, there's a technical implementation issue.
          </p>
        </div>
      </div>
    </div>
  );
} 