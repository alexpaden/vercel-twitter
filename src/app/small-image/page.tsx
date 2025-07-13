import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Small Image Card Test - OpenGraph Testing',
  description: 'Testing OpenGraph small image cards (summary) for Twitter and other social media platforms. This card displays a compact square image.',
  openGraph: {
    title: 'Small Image Card Test',
    description: 'Testing OpenGraph small image cards (summary) for Twitter and other social media platforms. This card displays a compact square image.',
    type: 'website',
    url: '/small-image',
    images: [
      {
        url: '/small-card.png',
        width: 280,
        height: 280,
        alt: 'Small Image Card Test - 280x280 pixels',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@yourhandle', // Required: Website's Twitter handle
    title: 'Small Image Card Test',
    description: 'Testing OpenGraph small image cards (summary) for Twitter and other social media platforms. This card displays a compact square image.',
    images: ['/small-card.png'],
  },
  other: {
    'twitter:image:alt': 'Small Image Card Test - 280x280 pixels showing green gradient background',
  },
};

export default function SmallImagePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Small Image Card Test
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              OpenGraph Configuration
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Twitter Card Type:</h3>
              <code className="text-sm text-green-600">summary</code>
              
              <h3 className="font-medium text-gray-700 mb-2 mt-4">Image Dimensions:</h3>
              <code className="text-sm text-green-600">280 × 280 pixels (1:1 ratio)</code>
              
              <h3 className="font-medium text-gray-700 mb-2 mt-4">Best For:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Logos and branding</li>
                <li>• Profile pictures</li>
                <li>• Compact layouts</li>
                <li>• Simple graphics</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              How to Test
            </h2>
            <div className="bg-green-50 p-4 rounded-lg">
              <ol className="text-sm text-green-800 space-y-2">
                <li>1. Copy this page&apos;s URL</li>
                <li>2. Open Twitter/X and create a new post</li>
                <li>3. Paste the URL into your post</li>
                <li>4. Observe the small image card preview</li>
                <li>5. The image should display as a small square</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Preview Image
          </h2>
          <div className="border rounded-lg overflow-hidden inline-block">
            <img
              src="/small-card.png"
              alt="Small Image Card Preview"
              className="w-64 h-auto"
            />
          </div>
        </div>
        
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">🔍 Comparison:</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Smaller file size than large images</li>
              <li>• Faster loading times</li>
              <li>• More text-focused layout</li>
              <li>• Less visual impact</li>
            </ul>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">💡 Pro Tips:</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Use simple, clear imagery</li>
              <li>• Avoid complex graphics</li>
              <li>• Perfect for brand logos</li>
              <li>• Great for mobile viewing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 