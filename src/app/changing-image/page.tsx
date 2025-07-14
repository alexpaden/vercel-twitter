import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Different Images per Platform - OpenGraph Testing',
  description: 'Testing different images for Twitter vs other platforms. Twitter shows a small square image with text overlay, while other platforms show a large banner.',
  openGraph: {
    title: 'earn: SolarPunk Art Contest',
    description: 'Click to view role details and submit your entry!',
    type: 'website',
    url: '/changing-image',
    // This will use opengraph-image.png (non-twitter-large.png) for Facebook, LinkedIn, etc.
    images: [
      {
        url: '/changing-image/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Large banner image for non-Twitter platforms',
      }
    ],
  },
  twitter: {
    card: 'summary', // Using 'summary' for small square image
    site: '@vercel', // Required: Replace with your actual Twitter/X handle
    title: 'earn: SolarPunk Art Contest',
    description: 'Click to view role details and submit your entry!',
    // This will use twitter-image.png (twitter-small.png) for Twitter
    images: ['/changing-image/twitter-image.png'],
  },
  other: {
    'twitter:image:alt': 'Click to view role details and submit your entry!',
  },
};

export default function ChangingImagePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🔄 Platform-Specific Images Test
        </h1>
        
        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-green-900 mb-4">
            How This Works
          </h2>
          <p className="text-green-800 mb-4">
            This page demonstrates using different images for Twitter vs other social platforms:
          </p>
          <ul className="text-green-700 space-y-2">
            <li>• <strong>Twitter/X:</strong> Shows a small square image (280×280) with text overlay</li>
            <li>• <strong>Facebook/LinkedIn:</strong> Shows a large banner image (1200×630)</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Twitter Configuration
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Card Type:</h3>
              <code className="text-sm text-blue-600">summary</code>
              
              <h3 className="font-medium text-gray-700 mb-2 mt-4">Image:</h3>
              <code className="text-sm text-blue-600">twitter-image.png</code>
              <p className="text-xs text-gray-600 mt-1">(twitter-small.png with text)</p>
              
              <h3 className="font-medium text-gray-700 mb-2 mt-4">Dimensions:</h3>
              <code className="text-sm text-blue-600">280 × 280 pixels</code>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Other Platforms Configuration
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">OpenGraph Image:</h3>
              <code className="text-sm text-blue-600">opengraph-image.png</code>
              <p className="text-xs text-gray-600 mt-1">(non-twitter-large.png)</p>
              
              <h3 className="font-medium text-gray-700 mb-2 mt-4">Dimensions:</h3>
              <code className="text-sm text-blue-600">1200 × 630 pixels</code>
              
              <h3 className="font-medium text-gray-700 mb-2 mt-4">Used By:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Facebook</li>
                <li>• LinkedIn</li>
                <li>• Slack</li>
                <li>• Other platforms</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Testing Instructions
          </h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <ol className="text-sm text-blue-800 space-y-2">
              <li>1. Copy this page URL: <code className="bg-blue-100 px-2 py-1 rounded">https://vercel-twitter-alexpadens-projects.vercel.app/changing-image</code></li>
              <li>2. Test on Twitter/X - You should see the small square image with text</li>
              <li>3. Test on Facebook Debugger - You should see the large banner image</li>
              <li>4. Test on LinkedIn Post Inspector - You should see the large banner image</li>
            </ol>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-medium text-yellow-800 mb-2">⚠️ Required Setup:</h3>
          <p className="text-sm text-yellow-700 mb-2">
            The following images need to be copied to <code>src/app/changing-image/</code>:
          </p>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Copy <code>public/twitter-small.png</code> → <code>src/app/changing-image/twitter-image.png</code></li>
            <li>• Copy <code>public/non-twitter-large.png</code> → <code>src/app/changing-image/opengraph-image.png</code></li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-purple-50 rounded-lg">
          <h3 className="font-medium text-purple-800 mb-2">💡 Key Implementation Details:</h3>
          <ul className="text-sm text-purple-700 space-y-1">
            <li>• Next.js automatically uses <code>twitter-image.png</code> for Twitter when present</li>
            <li>• <code>opengraph-image.png</code> is used for all other platforms</li>
            <li>• Twitter card type is set to <code>summary</code> for small square images</li>
            <li>• Text on images only renders on the actual social platforms, not in local preview</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 