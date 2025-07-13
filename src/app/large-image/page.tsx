import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Large Image Card Test - OpenGraph Testing',
  description: 'Testing OpenGraph large image cards (summary_large_image) for Twitter and other social media platforms. This card displays a large banner image.',
  openGraph: {
    title: 'Large Image Card Test',
    description: 'Testing OpenGraph large image cards (summary_large_image) for Twitter and other social media platforms. This card displays a large banner image.',
    type: 'website',
    url: '/large-image',
    images: [
      {
        url: '/large-card.png',
        width: 1200,
        height: 630,
        alt: 'Large Image Card Test - 1200x630 pixels',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourhandle', // Required: Website's Twitter handle
    creator: '@yourhandle', // Recommended for large image cards
    title: 'Large Image Card Test',
    description: 'Testing OpenGraph large image cards (summary_large_image) for Twitter and other social media platforms. This card displays a large banner image.',
    images: ['/large-card.png'],
  },
  other: {
    'twitter:image:alt': 'Large Image Card Test - 1200x630 pixels showing blue gradient background with Twitter bird emoji',
  },
};

export default function LargeImagePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Large Image Card Test
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              OpenGraph Configuration
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Twitter Card Type:</h3>
              <code className="text-sm text-blue-600">summary_large_image</code>
              
              <h3 className="font-medium text-gray-700 mb-2 mt-4">Image Dimensions:</h3>
              <code className="text-sm text-blue-600">1200 × 630 pixels</code>
              
              <h3 className="font-medium text-gray-700 mb-2 mt-4">Best For:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Screenshots and graphics</li>
                <li>• Visual content</li>
                <li>• Maximum visual impact</li>
                <li>• Blog posts and articles</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              How to Test
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="text-sm text-blue-800 space-y-2">
                <li>1. Copy this page&apos;s URL</li>
                <li>2. Open Twitter/X and create a new post</li>
                <li>3. Paste the URL into your post</li>
                <li>4. Observe the large image card preview</li>
                <li>5. The image should display as a large banner</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Preview Image
          </h2>
          <div className="border rounded-lg overflow-hidden">
            <img
              src="/large-card.png"
              alt="Large Image Card Preview"
              className="w-full h-auto"
            />
          </div>
        </div>
        
                  <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-medium text-yellow-800 mb-2">💡 Pro Tips (Current X/Twitter Requirements):</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Use high-quality images for best results</li>
              <li>• Keep important text away from edges (may be cropped)</li>
              <li>• Always include <code>twitter:site</code> (required for all cards)</li>
              <li>• Include <code>twitter:creator</code> for large image cards</li>
              <li>• Add <code>twitter:image:alt</code> for accessibility</li>
              <li>• Ensure all URLs are HTTPS and accessible</li>
              <li>• Check robots.txt allows Twitterbot access</li>
              <li>• Cards are cached for 7 days after tweet publication</li>
            </ul>
          </div>
      </div>
    </div>
  );
} 