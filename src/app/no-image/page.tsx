import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'No Image Card Test - OpenGraph Testing',
  description: 'Testing OpenGraph text-only cards without images for Twitter and other social media platforms. This demonstrates how cards look with title and description only.',
  openGraph: {
    title: 'No Image Card Test',
    description: 'Testing OpenGraph text-only cards without images for Twitter and other social media platforms. This demonstrates how cards look with title and description only.',
    type: 'website',
    url: '/no-image',
    // Intentionally no images property
  },
  twitter: {
    card: 'summary',
    site: '@yourhandle', // Required: Website's Twitter handle
    title: 'No Image Card Test',
    description: 'Testing OpenGraph text-only cards without images for Twitter and other social media platforms. This demonstrates how cards look with title and description only.',
    // Intentionally no images property
  },
};

export default function NoImagePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          No Image Card Test
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              OpenGraph Configuration
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Twitter Card Type:</h3>
              <code className="text-sm text-purple-600">summary (no image)</code>
              
              <h3 className="font-medium text-gray-700 mb-2 mt-4">Image Property:</h3>
              <code className="text-sm text-purple-600">undefined</code>
              
              <h3 className="font-medium text-gray-700 mb-2 mt-4">Best For:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Text-focused content</li>
                <li>• News articles</li>
                <li>• Minimal designs</li>
                <li>• Fast loading</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              How to Test
            </h2>
            <div className="bg-purple-50 p-4 rounded-lg">
              <ol className="text-sm text-purple-800 space-y-2">
                <li>1. Copy this page&apos;s URL</li>
                <li>2. Open Twitter/X and create a new post</li>
                <li>3. Paste the URL into your post</li>
                <li>4. Observe the text-only card preview</li>
                <li>5. Notice no image is displayed</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Expected Appearance
          </h2>
          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="max-w-md">
              <h3 className="font-semibold text-gray-900 mb-2">No Image Card Test</h3>
              <p className="text-sm text-gray-600 mb-3">
                Testing OpenGraph text-only cards without images for Twitter and other social media platforms. This demonstrates how cards look with title and description only.
              </p>
              <p className="text-xs text-gray-500">yoursite.com</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">⚡ Advantages:</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Fastest loading time</li>
              <li>• Minimal bandwidth usage</li>
              <li>• Always accessible</li>
              <li>• Focus on text content</li>
            </ul>
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg">
            <h3 className="font-medium text-orange-800 mb-2">⚠️ Considerations:</h3>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• Lower engagement rates</li>
              <li>• Less visual appeal</li>
              <li>• Harder to stand out</li>
              <li>• Relies on text quality</li>
            </ul>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">💡 Best Practices:</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Write compelling titles</li>
              <li>• Use descriptive text</li>
              <li>• Keep descriptions concise</li>
              <li>• Include keywords</li>
            </ul>
          </div>
        </div>
        
                  <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">📝 Meta Tags Used (X/Twitter Compliant):</h3>
            <pre className="text-xs text-gray-600 overflow-x-auto">
{`<meta property="og:title" content="No Image Card Test" />
<meta property="og:description" content="Testing OpenGraph text-only cards..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="/no-image" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@yourhandle" />
<meta name="twitter:title" content="No Image Card Test" />
<meta name="twitter:description" content="Testing OpenGraph text-only cards..." />
<!-- No og:image or twitter:image tags -->`}
            </pre>
          </div>
      </div>
    </div>
  );
} 